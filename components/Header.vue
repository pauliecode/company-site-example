<template>
  <header
    class="flex flex-col items-start w-full mb-10 mt-[-50px] leading-[150%] ml-[300px] max-w-[1657px] max-md:flex-wrap max-md:max-w-full"
  >
    <nav
      class="flex self-end text-2xl gap-24 mr-[200px] font-extrabold font-raleway leading-9 text-pink-600 max-md:mr-2.5"
    >
      <NuxtLink class="min-w-[50px]" to="/">
        <!-- Bedingte Anzeige einer Unterstreichung auf den Navigationsbuttons, um anzuzeigen, auf welcher Seite sich der Benutzer gerade befindet.  -->
        <p
          :class="{ 'text-underline': useRoute().name === 'index' }"
          class="flex-auto font-sans mr-[-105px]"
        >
          STARTSEITE
        </p>
      </NuxtLink>
      <div class="flex gap-0 group">
        <Menu as="div" v-slot="{ open, close }" class="">
          <MenuButton class="max-w-[150px] h-[50px] mt-[-38px]">
            <!-- Bedingte Anzeige einer Unterstreichung auf den Navigationsbuttons, um anzuzeigen, auf welcher Seite sich der Benutzer gerade befindet.  -->
            <NuxtLink
              :class="{ 'text-underline': useRoute().name === 'about' }"
              class="inline-block font-sans"
              to="/about"
              @mouseover="(e) => hoverPopover(e, open)"
              @mouseleave="closePopover(close)"
              >ÜBER UNS</NuxtLink
            >
            <img
              loading="lazy"
              src="https://i.ibb.co/tp7LZjM/downarrow-121316p.png"
              alt=""
              class="aspect-[1.45] max-w-[25%] max-h-[50%] mt-[-32px] ml-[145px] transform group-hover:rotate-180 transition duration-200"
              @mouseover="(e) => hoverPopover(e, open)"
              @mouseleave="closePopover(close)"
            />
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute mt-2 w-[162px] ml-[10px]">
              <div class="">
                <!-- Um ein Menü zu erstellen, das sich öffnet, wenn der Benutzer den Mauszeiger über die Button "Über uns" bewegt, habe ich 
                  eine Bibliothek namens Headless UI verwendet. Unten in diesem Element rufe ich die Funktionen auf, die ich unten erstellt habe. 
                  Erklärungen dazu finden sich unter im Script. -->
                <MenuItem>
                  <NuxtLink
                    to="/kontakt"
                    :class="[
                      'bg-[#ECECED] mt-[-15px] font-sans font-extrabold text-[24px] text-[#DB2777]',
                      'group flex w-full items-center rounded-md px-2 py-2',
                      {
                        'text-underline': useRoute().name === 'kontakt',
                      },
                    ]"
                    @mouseover.prevent="popoverHover = true"
                    @mouseleave.prevent="closePopover(close)"
                  >
                    KONTAKT
                  </NuxtLink>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>
    <NuxtLink to="/">
      <img
        src="https://i.ibb.co/bzn79D2/Screenshot-2024-05-30-at-11-06-17.png"
        alt=""
        class="ml-[50px] max-w-[73.77px] max-h-[82.04px]"
      />
    </NuxtLink>
    <h1
      class="flex-auto mt-[10px] text-[25px] font-extrabold font-raleway text-pink-600"
    >
      LOREM IPSUM
    </h1>
  </header>
</template>

<script setup lang="ts">
// Headless UI importiert
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

// Headless UI hat keine eingebaute Funktion zur Erkennung von Maushovern, was bedeutet, dass Menüs nur durch Klicken geöffnet werden können.
// Ich habe jedoch einen Code geschrieben, der den Maushover erkennt und ihn im Wesentlichen in einen Klick umwandelt, um Headless UI so zu täuschen, dass es
// annimmt, der Benutzer habe auf die Button geklickt, und daher das Menü öffnet, wenn der Benutzer über die Button hovert.

interface Props {
  hasHref?: boolean;
  href?: string;
}
const props = defineProps<Props>();

// Dafür habe ich 2 State-Variablen verwendet...
const popoverHover = ref(false);
const popoverTimeout = ref();

//...eine Funktion zum Öffnen des Menüs
const hoverPopover = (e: any, open: boolean): void => {
  popoverHover.value = true;
  if (!open) {
    e.target.parentNode.click();
  }
};

//...und eine Funktion zum Schließen des Menüs
const closePopover = (close: any): void => {
  popoverHover.value = false;
  if (popoverTimeout.value) clearTimeout(popoverTimeout.value);
  popoverTimeout.value = setTimeout(() => {
    if (!popoverHover.value) {
      close();
    }
  }, 100);
};
</script>
