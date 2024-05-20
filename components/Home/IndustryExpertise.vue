<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

// breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind);
const isLarge = breakpoints.greaterOrEqual("xl");
const isTab = breakpoints.greaterOrEqual("md");
const route = useRoute();
const settings = computed(() => {
  const setting = {
    itemsToShow: isLarge.value ? 5 : isTab.value ? 3 : 1,
    napAlign: "center",
    wrapAround: false,
    autoplay: 5000,
    wrapAround: true,
  };

  return setting;
});

const show = ref(false);
const companies = ref([
  {
    image: "/industryExperties/fintech.svg",
    text: "Fintech",
    backgroundColor: "#000000",
    margin: 1.8,
  },
  {
    image: "/industryExperties/healthCare.svg",
    text: "Health Care",
    backgroundColor: "#662D90",
    margin: 1.8,
  },
  {
    image: "/industryExperties/telco.svg",
    text: "Telco",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/e-com.svg",
    text: "E-com",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },
  {
    image: "/industryExperties/realEstate.svg",
    text: "Real Estate",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/autoMotive.svg",
    text: "Auto Motive",
    backgroundColor: "#079CC0",
    margin: 1.8,
  },
  {
    image: "/industryExperties/software.svg",
    text: "Software",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/startup.svg",
    text: "Startup",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/education.svg",
    text: "Edu Tech",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/retails.svg",
    text: "Retails",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/nonProfit.svg",
    text: "Non Profit",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/miscellaneous.svg",
    text: "Miscellaneous",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/agriculture.svg",
    text: "Agriculture",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/construction.svg",
    text: "Construction",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/energy.svg",
    text: "Energy",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/erpSolution.svg",
    text: "ERP-Solution",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/financeBanking.svg",
    text: "Finance Banking",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/govtPublicSector.svg",
    text: "Government Public Sector",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/hospitality.svg",
    text: "Hospitality",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/informationTechnology.svg",
    text: "Information Technology",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/manufacturing.svg",
    text: "Manufacturing",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
  {
    image: "/industryExperties/mediaEntertainment.svg",
    text: "Media Entertainment",
    backgroundColor: "#6D4410",
    margin: 1.8,
  },
]);
onMounted(() => {
  if (route.name === "index") {
    setTimeout(() => {
      show.value = true;
    }, 600);
  }
});
</script>

<template>
  <div class="md:container mx-auto" id="trusted-companies">
    <div class="pt-16 lg:pt-36">
      <h2 class="heading-one mb-5 lg:mb-10 dark:text-white text-center">
        <span class="text-primary">Industries We Serve</span>
      </h2>
      <div class="flex flex-wrap items-center justify-center">
        <div
          v-for="(company, index) in companies"
          :key="index"
          class="m-2 md:m-8 mb-8 md:mb-4"
        >
          <div
            class="w-[140px] md:w-[195px] h-full rounded-lg px-4 md:px-8 flex flex-col items-center justify-center space-y-3"
          >
            <img
              class="h-[54px] w-[54px]"
              :src="company.image"
              :alt="company.text"
            />
            <div
              class="text-white text-center text-xl 2xl:text-[22px] font-bold h-[60px]"
            >
              {{ company.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading-one {
  @apply text-[#FDB21D] text-3xl leading-[40px] md:text-[40px] md:leading-[55px] md:font-bold font-semibold;
}
</style>
