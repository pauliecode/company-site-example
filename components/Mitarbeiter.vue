<template>
  <!-- Das Array wird hier dann verwendet mit einem Loop (v-for) um die Daten zu füllen, dynamisch natürlich -->
  <figure
    class="flex flex-col grow items-center text-2xl max-w-[50%] leading-9 max-md:mt-4 max-md:max-w-[25%]"
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
        class="mt-10 font-extrabold font-sans text-[24px] text-pink-600 uppercase"
        >{{ mitarbeiter.vorname }}
        <a></a>
      </strong>
      <strong
        class="mt-10 font-extrabold font-sans text-[24px] text-pink-600 uppercase"
        >{{ mitarbeiter.nachname }}</strong
      >
      <p class="font-light font-sans text-black">
        {{ mitarbeiter.email }}
      </p>
    </figcaption>
  </figure>
</template>

<script setup>
// Der Component bekommt das Prop
const props = defineProps({
  mitarbeiterProp: {
    type: Array,
    required: true,
  },
});
</script>
