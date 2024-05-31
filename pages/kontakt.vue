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
        Kontakt
      </h2>

      <h2
        class="text-[54px] mt-[1px] font-extrabold font-raleway text-pink-600 leading-[81px] max-md:max-w-full max-md:text-4xl"
      >
        WIR SIND FÜR SIE DA.
      </h2>
    </section>
  </div>

  <section class="flex flex-col ml-[400px]">
    <header
      class="w-full text-4xl mb-[-30px] font-extralight text-black leading-[57px] max-md:max-w-full"
    >
      Kontaktformular
    </header>

    <form @submit.prevent="submitForm" class="flex flex-col mt-10" novalidate>
      <div class="flex gap-4 max-md:flex-wrap">
        <input
          type="text"
          name="vorname"
          v-model="form.vorname"
          class="shrink-0 max-w-full bg-gray-200 h-[55px] w-[536px] pl-[12px]"
          aria-label="Vorname"
        />
        <input
          type="text"
          id="nachname"
          name="nachname"
          v-model="form.nachname"
          class="shrink-0 max-w-full bg-gray-200 h-[55px] w-[536px] pl-[12px]"
          aria-label="Nachname"
        />
      </div>
      <div
        class="flex gap-5 mt-2 max-w-full text-2xl font-light leading-9 text-black whitespace-nowrap w-[678px] max-md:flex-wrap"
      >
        <label class="flex-auto mt-[-10px]" for="vorname" aria-hidden="true"
          >Vorname*</label
        >
        <label
          class="flex-auto ml-[425px] mt-[-10px]"
          for="nachname"
          aria-hidden="true"
          >Nachname*</label
        >
      </div>
      <div class="flex gap-4 mt-5 max-md:flex-wrap">
        <input
          type="email"
          name="email"
          v-model="form.email"
          class="shrink-0 max-w-full bg-gray-200 h-[55px] w-[536px] pl-[12px]"
          aria-label="E-Mail"
          required
        />
        <input
          type="tel"
          name="telefon"
          v-model="form.telefon"
          class="shrink-0 max-w-full bg-gray-200 h-[55px] w-[536px] pl-[12px]"
          aria-label="Telefon"
        />
      </div>
      <div
        class="flex gap-5 justify-between mt-2 max-w-full text-2xl font-light leading-9 text-black whitespace-nowrap w-[630px] max-md:flex-wrap"
      >
        <label class="mt-[-10px]" for="email" aria-hidden="true">E-Mail*</label>
        <label class="mt-[-10px]" for="telefon" aria-hidden="true"
          >Telefon</label
        >
      </div>

      <!-- Fehlermeldungen werden nur gezeigt, wenn es eigentlich fehlerMeldungen gibt im errorMessages Array. -->
      <div
        v-if="errorMessages.length > 0"
        class="text-[#FF2727] font-sans font-extralight mt-8"
      >
        <p>Fehler: <br /></p>
        <ul>
          <li v-for="error in errorMessages" :key="error">- {{ error }}</li>
        </ul>
      </div>

      <section
        class="w-full mt-[30px] text-2xl font-light leading-9 text-black max-md:mt-20 max-md:max-w-full"
      >
        * Pflichtfelder
      </section>
      <div class="flex mt-[25px] max-md:flex-wrap max-md:mt-10">
        <input
          type="checkbox"
          id="consent"
          ref="consentCheckbox"
          class="shrink-0 self-start border border-black border-solid bg-zinc-300 bg-opacity-0 h-[18px] w-[18px]"
        />
        <label
          for="consent"
          class="flex-auto max-w-[1088px] ml-[5px] mt-[-4px] mb-[20px] text-base font-light leading-6 text-black"
        >
          Hiermit erkläre ich, dass: meine Daten zur weiteren Verarbeitung
          speichern darf. Diese Einwilligung kann jederzeit widerrufen werden.
          Weitere Informationen unter Datenschutz.
        </label>
      </div>

      <button
        type="submit"
        class="justify-center items-center px-16 mt-12 max-w-full text-2xl font-extrabold leading-9 text-pink-600 whitespace-nowrap bg-gray-200 w-[260px] h-[49px] max-md:px-5 max-md:mt-10"
      >
        ABSENDEN
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { $fetch } from "ofetch";
import Header from "../components/Header.vue";

const form = ref({
  access_key: "ed5ead25-4182-42dd-9f13-c4264bf64bde",
  subject: "Nachricht erhalten",
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
});

// State für das Checkbox
const consentCheckbox = ref(null);

// States für die verschiede Phasen des Submit-Verfahrens
const result = ref("");
const status = ref("");
const errorMessages = ref([]);

// Funktion um das Format der Email-Adresse zu überprüfen
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const submitForm = async () => {
  errorMessages.value = [];

  if (!form.value.vorname) {
    errorMessages.value.push("Bitte geben Sie Ihren Vornamen ein.");
  }
  if (!form.value.nachname) {
    errorMessages.value.push("Bitte geben Sie Ihren Nachnamen ein.");
  }
  if (!validateEmail(form.value.email)) {
    errorMessages.value.push(
      "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    );
  }

  if (consentCheckbox.value?.checked !== true) {
    errorMessages.value.push(
      "Bitte stimmen Sie den Datenschutzbedingungen zu."
    );
  }

  if (errorMessages.value.length > 0) {
    // Fehlermeldungen in einer einzigen String zusammenfassen
    const combinedErrorMessage = errorMessages.value.join("\n"); // Mit Zeilenumbruch verbinden für bessere Lesbarkeit
    result.value = combinedErrorMessage;
    return; // Formularübermittlung bei fehlgeschlagener Validierung verhindern
  }

  result.value = "Bitte warten Sie...";
  try {
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form.value,
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log für die Debugging, kann gelöscht werden
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log für die Debugging, kann gelöscht werden
    status.value = "error";
    result.value = "Etwas ist schiefgelaufen!";
  } finally {
    // Formular nach dem Absenden zurücksetzen
    form.value.vorname = "";
    form.value.nachname = "";
    form.value.email = "";
    form.value.telefon = "";
    await navigateTo({ path: "/kontakterfolg" });

    // Result und Status nach 5 Sekunden löschen
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>
