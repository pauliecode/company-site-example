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
      <header
        class="flex flex-col items-start w-full mb-10 mt-[-50px] leading-[150%] ml-[300px] max-w-[1657px] max-md:flex-wrap max-md:max-w-full"
      >
        <nav
          class="flex gap-5 self-end text-2xl mr-[-220px] font-extrabold font-raleway leading-9 text-pink-600 max-md:mr-2.5"
        >
          <NuxtLink to="/">
            <p class="flex-auto font-sans">STARTSEITE</p>
          </NuxtLink>
          <div class="flex gap-0">
            <NuxtLink class="font-sans" to="/about">ÜBER UNS</NuxtLink>
            <img
              loading="lazy"
              src="https://cdn.icon-icons.com/icons2/1904/PNG/512/downarrow_121316.png"
              alt=""
              class="aspect-[1.45] max-w-[10%] max-h-[50%] mt-[5px] ml-[5px]"
            />
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
      <h2
        class="self-center mt-[-20px] text-[38px] font-extralight font-raleway text-black"
      >
        Kontakt
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
        WIR SIND FÜR SIE DA.
      </h2>
    </section>
  </div>

  <section class="flex flex-col items-center justify-center">
    <p
      class="font-raleway font-extralight text-center text-[38px] max-w-[763px] max-h-[90px]"
    >
      Vielen Dank für Ihre Nachricht. <br />
      Wir melden uns in kürze bei Ihnen zurück!
    </p>
  </section>
</template>

<script setup></script>
