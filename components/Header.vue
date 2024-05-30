<template>
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
          src="https://i.ibb.co/tp7LZjM/downarrow-121316p.png"
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
</template>
