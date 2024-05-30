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
    <nav
      class="flex gap-5 self-end text-2xl mr-[-220px] font-extrabold font-raleway leading-9 text-pink-600 max-md:mr-2.5"
    >
      <NuxtLink to="/">
        <p class="flex-auto font-sans">STARTSEITE</p>
      </NuxtLink>
      <div class="flex gap-0">
        <NuxtLink class="ont-sans" to="/about">ÜBER UNS</NuxtLink>
        <img
          loading="lazy"
          src="https://cdn.icon-icons.com/icons2/1904/PNG/512/downarrow_121316.png"
          alt=""
          class="aspect-[1.45] max-w-[10%] max-h-[50%] mt-[5px] ml-[5px]"
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
        Schauen und Staunen.
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
        WILLKOMMEN AUF DIESER SEITE.
      </h2>
      <div class="relative">
        <img
          loading="lazy"
          :src="state"
          alt="Welcome banner"
          class="mt-5 w-full max-h-[494px] max-w-[1640px] max-md:mt-10 max-md:max-w-full"
        />
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
        <img
          loading="lazy"
          :src="state"
          alt="Gallery image 3"
          class="shrink-0 aspect-square w-[67px] object-cover"
        />
      </div>
      <article
        class="mt-16 text-lg text-center font-light font-sans leading-7 text-black max-w-[812px] max-h-[91px] max-md:mt-10 max-md:max-w-full"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.
      </article>
      <section>
        <h3
          class="mt-[310px] text-[38px] font-extralight font-raleway text-black leading-[57px] max-md:mt-10 max-md:ml-2.5"
        >
          Unser Team
        </h3>
        <div class="mt-4 max-w-full w-[1088px] text-center">
          <div class="flex max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <figure
                class="flex flex-col grow items-center text-2xl leading-9 max-md:mt-4 max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src="https://i.ibb.co/VJ4WCnr/Screenshot-2024-05-30-at-11-02-04.png"
                  alt="Monika Petersen"
                  class="self-stretch w-full mb-5 aspect-[1.69] max-md:max-w-full"
                />
                <figcaption>
                  <strong
                    class="mt-10 font-extrabold font-sans text-[24px] text-pink-600"
                    >MONIKA PETERSEN</strong
                  >
                  <p class="font-light font-sans text-black">
                    monikapetersen@loremipsum.de
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <figure
                class="flex flex-col grow items-center text-2xl leading-9 max-md:mt-4 max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src="https://i.ibb.co/LRDfD8h/Screenshot-2024-05-30-at-11-03-09.png"
                  alt="Leon Knirsch"
                  class="self-stretch w-full mb-5 aspect-[1.69] max-md:max-w-full"
                />
                <figcaption>
                  <strong class="mt-9 font-extrabold text-pink-600"
                    >LEON KNIRSCH</strong
                  >
                  <p class="font-light font-sans text-black">
                    leonknirsch@loremipsum.de
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
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
import { computed } from "vue";
import { useCycleList } from "@vueuse/core";

const { state, next, prev } = useCycleList([
  "https://i.ibb.co/PCmtjs5/Screenshot-2024-05-30-at-10-02-53.png",
  "https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-115-mission-attestation-header-1328x400.jpg",
  "https://lefrancilien.oec-paris.fr/wp-content/uploads/francilien-114-quickbooks-header-1328x400.jpg",
]);
</script>
