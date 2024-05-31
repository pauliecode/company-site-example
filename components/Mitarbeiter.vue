<template>
  <figure
    class="flex flex-col grow items-center text-2xl max-w-[40%] leading-9 max-md:mt-4 max-md:max-w-full"
    v-for="mitarbeiter in mitarbeiterProp"
  >
    <img
      loading="lazy"
      :src="mitarbeiter.bild"
      alt="Monika Petersen"
      class="self-stretch w-full mb-5 aspect-[1.69] max-md:max-w-full"
    />
    <figcaption>
      <strong
        class="mt-10 font-extrabold font-sans text-[24px] text-pink-600"
        >{{ mitarbeiter.vorname }}</strong
      >
      <p class="font-light font-sans text-black">
        {{ mitarbeiter.email }}
      </p>
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  mitarbeiterProp: {
    type: Array,
    required: true,
  },
});
</script>
