<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const route = useRoute();
const show = ref(false);
const companies = ref([
  {
    image: "/ourClients/liveCx.svg",
    text: "LiveCX",
    backgroundColor: "#662D90",
    margin: 1.8,
  },
  {
    image: "/ourClients/nowMetaLogo.svg",
    text: "Now Meta",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },

  {
    image: "/ourClients/maatUniversity.svg",
    text: "University of Maat",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/ourClients/hospitalNote.svg",
    text: "Hospital Note",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/ourClients/sharpArchive.png",
    text: "Sharp Archive",
    backgroundColor: "#000000",
    margin: 1.8,
  },
  {
    image: "/ourClients/brainStorm.svg",
    text: "CX Brainstorm",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },
  {
    image: "/ourClients/goVelo.png",
    text: "Go Velo",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/ourClients/leNouvelliste.svg",
    text: "Le Nouvelliste",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/ourClients/khemetic.webp",
    text: "Khemetic Nation",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/ourClients/farenow.svg",
    text: "Farenow",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
]);
// Carousel Breakpoints
const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  768: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
// hooks
onMounted(() => {
  if (route.name === "index") {
    setTimeout(() => {
      show.value = true;
    }, 600);
  }
});
</script>

<template>
  <div class="container mx-auto" id="trusted-companies">
    <div class="pt-16 lg:pt-40">
      <h2 class="heading-one mb-5 lg:mb-10 dark:text-white text-center">
        <span class="text-primary">Trusted</span> Over 50+ Companies
      </h2>
      <ClientOnly>
        <carousel
          v-if="show"
          v-bind="settings"
          :wrap-around="true"
          :autoplay="3000"
          :transition="500"
          :pauseAutoplayOnHover="true"
          :breakpoints="breakpoints"
        >
          <slide
            class="flex flex-col items-center justify-center overflow-hidden>"
            v-for="(company, index) in companies"
            :key="index"
          >
            <div
              class="w-full flex flex-col justify-between h-full rounded-lg px-8"
            >
              <div
                class="flex items-center justify-center flex-grow w-full h-full"
              >
                <div class="align-middle flex flex-col justify-center">
                  <img
                    class="w-full max-w-[192px] aspect-square object-contain"
                    :src="company.image"
                    :alt="company.text"
                  />
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.heading-one {
  @apply text-[#FDB21D] text-3xl leading-[40px] md:text-[40px] md:leading-[55px] md:font-bold font-semibold;
}
</style>
