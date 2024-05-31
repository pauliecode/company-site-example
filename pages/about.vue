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
    <section
      class="flex flex-col items-center self-center w-full max-w-[1705px] max-md:max-w-full"
    >
      <Header />
      <h2
        class="self-center mt-[-20px] text-[38px] font-extralight font-raleway text-black"
      >
        Über Uns
      </h2>

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

      <div
        class="flex flex-row flex-grow flex-wrap mt-24 text-center justify-center text-centerflex basis-full gap-4 max-md:gap-0 w-[1088px]"
      >
        <Mitarbeiter :mitarbeiterProp="mitarbeiter" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Mitarbeiter from "~/components/Mitarbeiter.vue";
import Header from "../components/Header.vue";

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
  {
    vorname: "Paula",
    nachname: "Alemany",
    email: "paula@loremipsum.de",
    bild: "https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png",
  },
  {
    vorname: "Paula",
    nachname: "Alemany",
    email: "paula@loremipsum.de",
    bild: "https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png",
  },
  {
    vorname: "Paula",
    nachname: "Alemany",
    email: "paula@loremipsum.de",
    bild: "https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png",
  },
  {
    vorname: "Paula",
    nachname: "Alemany",
    email: "paula@loremipsum.de",
    bild: "https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png",
  },
];
</script>
