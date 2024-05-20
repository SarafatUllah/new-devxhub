<script setup lang="ts">
import { Service } from "~/types/post";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isLarge = breakpoints.greaterOrEqual("lg");
// const { data: Services } = useFetch<Service[]>("/api/posts/service");
const Services = ref(null)

const initialStateStackCard = ref<any>([]);

const handleScroll = () => {
  if (
    window.scrollY > 100 &&
    initialStateStackCard.value.length !== Services.value?.length
  ) {
    if (Services.value) {
      Services.value?.forEach((service) => {
        let isIncluded = false;
        if (initialStateStackCard.value.length > 0) {
          initialStateStackCard.value.forEach((singleState: any) => {
            if (singleState?.id === service.id) {
              isIncluded = true;
            }
          });
        }
        if (!isIncluded && service && service.id) {
          const currentDivOffsetTop = document.getElementById(
            service.id.toString()
          )?.offsetTop;

          if (currentDivOffsetTop) {
            initialStateStackCard.value.push({
              id: service.id,
              initialOffsetTop: currentDivOffsetTop - 100,
            });
          }
        }
      });
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  setTimeout(() => {
    stackCardAnimation();
  }, 700);
});

const getOffsetTop = (id: any) => {
  initialStateStackCard.value.forEach((singleState: any) => {
    if (singleState.id === id) {
      window.scrollTo(0, singleState.initialOffsetTop);
    }
  });
};
</script>

<template>
  <div class="">
    <div class="px-0 md:px-4 lg:px-24">
      <h1 class="text-center text-[#FDB21D] md:text-5xl text-3xl font-semibold">
        Our Services
      </h1>
      <div class="text-white font-semibold text-center md:pt-8 pt-5">
        <h2 class="md:text-[32px] md:leading-8 text-xl">
          Comprehensive Software Development Services
        </h2>

        <!-- <br /> -->
        <h3 class="md:text-2xl text-base pt-2">
          Streamlining Processes & Enhancing User Experiences
        </h3>
      </div>
      <p class="text-[#F0F0F0] md:text-lg text-base text-center pt-5">
        Software development services include Custom Software Development, Web
        and Mobile Application Design & Development, UI/UX design, DevOps,
        Software Testing, Maintenance, and Continuous Support. These services
        streamline processes, improve productivity, and enhance user experiences
        by creating tailored software solutions.
      </p>
    </div>
    <ClientOnly>
      <div
        v-if="isLarge"
        class="hidden lg:grid grid-cols-1 gap-4 md:gap-6 justify-items-center justify-around flex-wrap stack-cards js-stack-cards pt-20"
      >
        <div
          v-for="(service, index) in Services"
          :key="service.id"
          :id="`${service.id}`"
          :class="`stack-cards__item js-stack-cards__item w-full ${[
            index % 2 === 0 ? 'text-black' : 'text-white',
          ]}`"
        >
          <div
            class="h-[450px] w-full bg-[#2A1E56] flex items-center justify-between rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            @click="getOffsetTop(service.id)"
          >
            <div
              class="bg-white h-full w-full rounded-l-[30px] text-left pl-8 pr-4 xl:px-8 py-3 space-y-5 xl:space-y-6"
              :style="{
                background: `${service?.background}`,
              }"
            >
              <h2 class="text-lg font-bold leading-8 cursor-pointer">
                {{ service?.name }}
              </h2>
              <h2
                class="text-[38px] xl:text-[40px] leading-10 xl:leading-[48px] font-bold"
              >
                {{ service.title }}
              </h2>
              <div
                class="text-lg leading-8 space-y-3"
                v-html="service.details"
              ></div>
            </div>
            <div
              class="h-full max-w-[400px] flex items-center justify-center rounded-r-[30px] p-8 image-border cursor-pointer"
            >
              <div class="flex flex-col justify-center">
                <img
                  class="w-[18vw] aspect-square object-contain"
                  :src="service.image"
                  :alt="service.name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="lg:hidden grid grid-cols-1 gap-4 md:gap-6 justify-items-center justify-around flex-wrap stack-cards js-stack-cards"
      >
        <div
          v-for="(service, index) in Services"
          :key="service.id"
          class="stack-cards__item js-stack-cards__item w-full"
          :class="[index % 2 === 0 ? 'text-black' : 'text-white']"
        >
          <div
            class="h-fit min-h-[480px] md:h-[650px] lg:h-[450px] w-full bg-[#2A1E56] flex flex-col lg:flex-row items-center lg:justify-between rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div
              class="h-[150px] md:h-[220px] w-full flex items-center justify-center rounded-t-[30px] lg:rounded-r-[30px] p-8 image-border"
            >
              <img
                class="w-[130px] md:w-[180px] lg:w-[18vw] aspect-square object-contain"
                :src="service.image"
                :alt="service.name"
              />
            </div>
            <div
              class="h-fit md:h-full w-full rounded-b-[30px] lg:rounded-l-[30px] text-center lg:text-left px-2 xl:px-8 py-3 space-y-2 md:space-y-5 xl:space-y-6 grow"
              :style="{
                background: `${service.background}`,
              }"
            >
              <h2
                class="text-sm md:text-lg font-bold leading-8 hidden lg:block"
              >
                {{ service.name.toUpperCase() }}
              </h2>
              <h2
                class="text-2xl md:text-[38px] xl:text-[40px] leading-8 md:leading-10 xl:leading-[48px] font-bold"
              >
                {{ service.title }}
              </h2>
              <div
                class="text-sm md:text-lg leading-6 space-y-3"
                v-html="service.details"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.stack-cards__item {
  position: sticky;
  top: 9rem;
  transform-origin: center top;
}
.stack-cards {
  --stack-cards-gap: 36px;
}
.image-border {
  @apply border-[#FDB21D] border-y-[1px] border-r-[1px];
}

@media (max-width: 1023px) {
  .stack-cards {
    --stack-cards-gap: 0px;
  }
  .image-border {
    @apply border-x-[1px] border-t-[1px];
  }
}
</style>
