<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
  <div class="flex flex-col px-20pt-7 pb-20 mt-[100px] bg-white max-md:px-5">
    <nav
      class="flex gap-5 self-end text-2xl mr-[200px] font-extrabold font-raleway leading-9 text-pink-600 max-md:mr-2.5"
    >
      <NuxtLink to="/" class="flex-auto font-sans">STARTSEITE</NuxtLink>
      <div class="flex gap-0">
        <NuxtLink class="grow font-sans" to="/about">ÜBER UNS</NuxtLink>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c81d08b38e327584e81708597261ebe44177d6e18e0f901590ad064ef17bed00?apiKey=de96e3c014f24fc59b81afe797583090&"
          alt=""
          class="shrink-0 aspect-[1.45] w-[84px]"
        />
      </div>
    </nav>
    <section
      class="flex flex-col items-center self-center w-full max-w-[1705px] max-md:max-w-full"
    >
      <header
        class="flex flex-col items-start w-full mb-10 mt-[-50px] leading-[150%] ml-[300px] max-w-[1657px] max-md:flex-wrap max-md:max-w-full"
      >
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
      <h2
        class="self-center mt-[-20px] text-[38px] font-extralight font-raleway text-black"
      >
        Über Uns
      </h2>
      <!-- 
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f18393f95c41eea547e1a4aac65fdc5c23282414b98e86ac1692917eac341c92?apiKey=de96e3c014f24fc59b81afe797583090&"
            alt=""
            class="shrink-0 self-start aspect-[1.45] w-[84px]"
          />
          -->

      <h2
        class="text-[54px] mt-[1px] font-extrabold font-raleway text-pink-600 leading-[81px] max-md:max-w-full max-md:text-4xl"
      >
        ZUSAMMEN ALS TEAM.
      </h2>
      <article
        class="mt-16 text-lg text-center font-light font-sans leading-7 text-black max-w-[812px] max-h-[91px] max-md:mt-10 max-md:max-w-full"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.
      </article>

      <section>
        <div class="mt-24 max-w-full w-[1088px] text-center">
          <div class="flex gap-4 max-md:flex-col max-md:gap-0">
            <Mitarbeiter :mitarbeiterProp="mitarbeiter" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Mitarbeiter from "~/components/Mitarbeiter.vue";

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
