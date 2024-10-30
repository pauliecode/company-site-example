<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
  <div class="flex flex-col px-20pt-7 pb-20 mt-[100px] bg-white max-md:px-5">
    <section
      class="!flex flex-col items-center self-center w-full ml-[15px] max-w-[1705px] max-md:max-w-full"
    >
      <Header />
      <h2
        class="self-center mt-[-20px] text-[38px] font-extralight font-raleway text-black"
      >
        Schauen und Staunen.
      </h2>

      <h2
        class="text-[54px] mt-[1px] font-extrabold font-raleway text-pink-600 leading-[81px] max-md:max-w-full max-md:text-4xl"
      >
        WILLKOMMEN AUF DIESER SEITE.
      </h2>

      <!-- Dies ist ein Slider für die Bilder, den ich selbst gemacht habe, da ich einige Probleme mit Bibliotheken hatte.  -->
      <div class="relative">
        <transition
          enter-active-class="duration-200 ease-in-out transform translate-x-full"
          leave-active-class="duration-200 ease-in-out transform -translate-x-full"
        >
          <img
            loading="lazy"
            :src="state"
            alt="Welcome banner"
            class="mt-5 w-full max-h-[494px] max-w-[1640px] max-md:mt-10 max-md:max-w-full"
          />
        </transition>
        <button
          class="absolute top-[200px] left-[10px] text-[#7f7f7f]"
          @click="prev()"
        >
          &#10094;
        </button>
        <button
          class="absolute top-[200px] right-[10px] text-[#7f7f7f]"
          @click="next()"
        >
          &#10095;
        </button>
      </div>
      <div class="flex gap-4 mt-9">
        <img
          loading="lazy"
          src="https://i.ibb.co/PCmtjs5/Screenshot-2024-05-30-at-10-02-53.png"
          alt="Gallery image 1"
          class="w-[67px] object-cover"
        />
        <img
          loading="lazy"
          src="https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-115-mission-attestation-header-1328x400.jpg"
          alt="Gallery image 2"
          class="shrink-0 aspect-square w-[67px] object-cover"
        />
        <img
          loading="lazy"
          src="https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-114-quickbooks-header-1328x400.jpg"
          alt="Gallery image 3"
          class="shrink-0 aspect-square w-[67px] object-cover"
        />
      </div>
      <article
        class="mt-16 text-lg text-center font-light font-sans leading-7 text-black max-w-[812px] max-h-[91px] max-md:mt-10 max-md:max-w-full"
      >
        <!-- String dynamisch hinzugefügt -->
        {{ introductionText }}
      </article>
      <section>
        <h3
          class="mt-[310px] text-[38px] font-extralight font-raleway text-black leading-[57px] max-md:mt-10 max-md:ml-2.5"
        >
          Unser Team
        </h3>
        <div
          class="flex flex-row flex-grow flex-wrap mt-6 text-center justify-center text-centerflex basis-full gap-4 max-md:gap-0 w-[1088px]"
        >
          <!--Für die Mitarbeiter habe ich auch ein Reusable Component erstellt. Damit kann man sehr einfach neue Mitarbeiter erstellen.
          Ich gebe "mitarbeiter" als prop, das ist ein Array von Objekten und ist weiter unten zu finden. Dieses Array könnte die Daten einer
          Datenbank enthalten. Der Component ist dynamisch und wird automatisch aktualisiert wenn er ein Array als Prop bekommt. Das Array sollte
          ein Objekt für jeden Mitarbeiter enthalten. Normalerweise würde dies natürlich aus einer Datenbank kommen. -->
          <Mitarbeiter :mitarbeiterProp="mitarbeiter" />
        </div>
      </section>
      <NuxtLink
        class="flex justify-center items-start px-16 py-3.5 mt-24 max-w-[260px] text-2xl font-extrabold leading-9 text-pink-600 bg-gray-200 max-md:px-5 max-md:mt-10"
        to="/about"
        >ÜBER UNS</NuxtLink
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCycleList } from "@vueuse/core";
import Header from "../components/Header.vue";
import Mitarbeiter from "~/components/Mitarbeiter.vue";

// Strings wie diese werden derzeit als Variable gespeichert und dynamisch in die Website eingefügt, aber
// der Inhalt dieser Variable könnte stattdessen aus einer Datenbank stammen.
const introductionText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.";

// Hier sind die obengenannte States für den Bilder-Slider
const { state, next, prev } = useCycleList([
  "https://i.ibb.co/PCmtjs5/Screenshot-2024-05-30-at-10-02-53.png",
  "https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-115-mission-attestation-header-1328x400.jpg",
  "https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-114-quickbooks-header-1328x400.jpg",
]);

// Hier ist das obengenannte Array für die Mitarbeiter
const mitarbeiter = [
  {
    vorname: "Monika",
    nachname: "Petersen",
    email: "monikapetersen@loremipsum.de",
    bild: "https://i.ibb.co/VJ4WCnr/Screenshot-2024-05-30-at-11-02-04.png",
  },
  {
    vorname: "Leon",
    nachname: "Knirsch",
    email: "leonknirsch@loremipsum.de",
    bild: "https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png",
  },
];
</script>
