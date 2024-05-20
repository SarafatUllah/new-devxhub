<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

// breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind);
const route = useRoute();
const overview = ref([
  {
    id: 1,
    image: "/home/happy-client/years-of-experience.svg",
    field: "Years of experience",
    fieldValue: 5,
  },
  {
    id: 2,
    image: "/home/happy-client/clients.svg",
    field: "Respected Clients",
    fieldValue: 50,
  },
  {
    id: 3,
    image: "/home/happy-client/dedicated-engineers.svg",
    field: "Dedicated Engineers",
    fieldValue: 35,
  },
  {
    id: 4,
    image: "/home/happy-client/ongoing-project.svg",
    field: "Ongoing Project",
    fieldValue: 10,
  },
  {
    id: 5,
    image: "/home/happy-client/successful-projects.svg",
    field: "Successful Projects",
    fieldValue: 150,
  },
]);
const animateNumber = () => {
  overview.value.forEach((item) => {
    let counts = setInterval(updated, 0);
    let start = 0;
    let end = item.fieldValue;
    function updated() {
      item.fieldValue = ++start;
      if (start === end) {
        clearInterval(counts);
      }
    }
  });
};
const show = ref(false);
const activeIndex = ref(0);
const companies = ref([
  {
    image: "/landing/hero-image.webp",
    name: "hero_image",
    description: `<div
        class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1]"
      >
        <h1 class="text-base sm:text-lg font-[500] lg:text-2xl text-white">
          Software Development Outsourcing
          <span class="whitespace-nowrap">Services </span>
        </h1>
        <h2
          class="font-semibold text-4xl lg:text-[40px] text-[#FDB21D] leading-[50px] lg:leading-[66px]"
        >
          Web Design & Development and Provider of Dedicated Team and Developer
        </h2>
        <p
          class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
        >
          Let your ideas come to life with elegance and professionalism.
        </p>
        <a href="/contact-us" rel="noopener noreferrer"
          tabindex="-1"
          aria-label="Contact Us"
          class="flex justify-center mx-auto sm:ml-0 w-40 xl:w-48 h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
        >
          <span>Contact Us</span>
        </a>
      </div>`,
  },
  {
    image: "/landing/hire-hero.webp",
    name: "hire_developers",
    description: `<div
        class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
      >
        <h2 class="lg:text-6xl font-[500] text-white">
          Hire
        </h2>
        <h2 class="font-[500] text-[#FDB21D]">Top Rated Developers</h2>
        <h2
          class="font-semibold text-white leading-[50px] lg:leading-[66px]"
        >
          On Contract
        </h2>
        <p
          class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
        >
          Expert level Software Developers, UI/UX Designers, QAs, Frontend & Backend Developers, DevOps engineers are ready to join your team remotely.
        </p>
        <a href="/contact-us" rel="noopener noreferrer"
          tabindex="-1"
          aria-label="Hire Developers"
          class="flex justify-center mx-auto sm:ml-0 w-40 xl:w-48 h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
        >
          <span>Hire Developers</span>
        </a>
      </div>`,
  },
  {
    image: "/landing/tech_solution.webp",
    name: "tech_solution",
    description: `<div
        class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
      >
        <h2 class="lg:text-6xl font-[500] text-white">
          We Provide
        </h2>
        <h2 class="font-[500] text-[#FDB21D]">Tech Solutions & Help You</h2>
        <h2
          class="font-semibold text-white leading-[50px] lg:leading-[66px]"
        >
          to Grow Your Business
        </h2>
        <p
          class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
        >
          Get custom software development and web service at the best price from
          a company making success stories for over 10 years.
        </p>
        <div class="flex justify-center md:justify-start">
          <a href="#ourServices" rel="noopener noreferrer"
            tabindex="-1"
            aria-label="Our Services"
            class="mx-auto sm:ml-0 flex justify-center items-center w-40 xl:w-48 h-12 bg-[#FAAF04] px-4 py-1 md:py-2 font-bold text-black text-base rounded-sm whitespace-nowrap"
          >
            <span>Our Services</span> <span class="pl-2 font-bold text-2xl leading-[1rem]">→</span>
          </a>
        </div>
      </div>`,
  },
  {
    image: "/landing/SQA.webp",
    name: "SQA",
    description: `<div
          class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
        >
          <h2 class="lg:text-6xl font-[500] text-white">Hire</h2>
          <h2 class="font-[500] text-[#FDB21D]">Top Rated SQA Engineers </h2>
          <h2
            class="font-semibold text-white leading-[50px] lg:leading-[66px]"
          >
            On Contract
          </h2>
          <p
            class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
          >
            Empower your software with the prowess of our experienced
            engineers, guaranteeing peak performance through meticulous
            quality assurance.
          </p>
          <a href="/contact-us" rel="noopener noreferrer"
            tabindex="-1"
            aria-label="Hire SQA"
            class="mx-auto sm:ml-0 flex justify-center w-40 xl:w-48 h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
          >
            <span>Hire SQA</span>
          </a>
        </div>`,
  },
]);

const txt = ref("");
const toRotate = JSON.stringify([
  "Web Design & Development and Provider of Dedicated Team and Developer.",
]);
const period = 20;
const isDeleting = ref(false);
const loopNum = ref(0);

const tick = () => {
  const i = loopNum.value % JSON.parse(toRotate).length;
  const fullTxt = JSON.parse(toRotate)[i];

  if (isDeleting.value) {
    txt.value = fullTxt.substring(0, txt.value.length - 1);
  } else {
    txt.value = fullTxt.substring(0, txt.value.length + 1);
  }

  let delta = 200 - Math.random() * 100;

  if (isDeleting.value) {
    delta /= 2;
  }

  if (!isDeleting.value && txt.value === fullTxt) {
    // isDeleting.value = true;
    delta = period;
  } else if (isDeleting.value && txt.value === "") {
    isDeleting.value = false;
    loopNum.value++;
    delta = 500;
  }

  setTimeout(tick, delta);
};

const txtSQA = ref("");
const toRotateSQA = JSON.stringify(["Top Rated SQA 🙌    "]);
const periodSQA = 20;
const isDeletingSQA = ref(false);
const loopNumSQA = ref(0);

const tickSQA = () => {
  const i = loopNumSQA.value % JSON.parse(toRotateSQA).length;
  const fullTxt = JSON.parse(toRotateSQA)[i];

  if (isDeletingSQA.value) {
    txtSQA.value = fullTxt.substring(0, txtSQA.value.length - 1);
  } else {
    txtSQA.value = fullTxt.substring(0, txtSQA.value.length + 1);
  }

  let deltaSQA = 200 - Math.random() * 100;

  if (isDeletingSQA.value) {
    deltaSQA /= 2;
  }

  if (!isDeletingSQA.value && txtSQA.value === fullTxt) {
    // isDeletingSQA.value = true;
    deltaSQA = periodSQA;
  } else if (isDeletingSQA.value && txtSQA.value === "") {
    isDeletingSQA.value = false;
    loopNumSQA.value++;
    deltaSQA = 500;
  }

  setTimeout(tickSQA, deltaSQA);
};

const txtDeveloper = ref("");
const toRotateDeveloper = JSON.stringify(["Top Rated Developers 🙌    "]);
const periodDeveloper = 20;
const isDeletingDeveloper = ref(false);
const loopNumDeveloper = ref(0);

const tickDeveloper = () => {
  const i = loopNumDeveloper.value % JSON.parse(toRotateDeveloper).length;
  const fullTxt = JSON.parse(toRotateDeveloper)[i];

  if (isDeletingDeveloper.value) {
    txtDeveloper.value = fullTxt.substring(0, txtDeveloper.value.length - 1);
  } else {
    txtDeveloper.value = fullTxt.substring(0, txtDeveloper.value.length + 1);
  }

  let deltaDeveloper = 200 - Math.random() * 100;

  if (isDeletingDeveloper.value) {
    deltaDeveloper /= 2;
  }

  if (!isDeletingDeveloper.value && txtDeveloper.value === fullTxt) {
    // isDeletingDeveloper.value = true;
    deltaDeveloper = periodDeveloper;
  } else if (isDeletingDeveloper.value && txtDeveloper.value === "") {
    isDeletingDeveloper.value = false;
    loopNumDeveloper.value++;
    deltaDeveloper = 500;
  }

  setTimeout(tickDeveloper, deltaDeveloper);
};

const txtSolution = ref("");
const toRotateSolution = JSON.stringify(["Tech Solutions & Help You    "]);
const periodSolution = 20;
const isDeletingSolution = ref(false);
const loopNumSolution = ref(0);

const tickSolution = () => {
  const i = loopNumSolution.value % JSON.parse(toRotateSolution).length;
  const fullTxt = JSON.parse(toRotateSolution)[i];

  if (isDeletingSolution.value) {
    txtSolution.value = fullTxt.substring(0, txtSolution.value.length - 1);
  } else {
    txtSolution.value = fullTxt.substring(0, txtSolution.value.length + 1);
  }

  let deltaSolution = 200 - Math.random() * 100;

  if (isDeletingSolution.value) {
    deltaSolution /= 2;
  }

  if (!isDeletingSolution.value && txtSolution.value === fullTxt) {
    // isDeletingSolution.value = true;
    deltaSolution = periodSolution;
  } else if (isDeletingSolution.value && txtSolution.value === "") {
    isDeletingSolution.value = false;
    loopNumSolution.value++;
    deltaSolution = 500;
  }

  setTimeout(tickSolution, deltaSolution);
};

onMounted(() => {
  tick();
  tickDeveloper();
  tickSolution();
  tickSQA();
  if (route.name === "index") {
    setTimeout(() => {
      show.value = true;
    }, 600);
  }
});
</script>
<template>
  <div class="h-full">
    <div class="pt-36 w-full overflow-hidden">
      <div
        class="w-[112px] h-[112px] absolute md:top-24 top-16 right-0 sun-image"
      >
        <img
          class="w-full aspect-square object-contain"
          src="~/assets/img/landing/sun.png"
          alt="sun-image"
        />
      </div>

      <div class="relative carousel-div w-full min-h-[555px]">
        <ClientOnly>
          <carousel
            v-if="show"
            :wrap-around="true"
            :autoplay="10000"
            :items-to-show="1"
            :transition="500"
            :pauseAutoplayOnHover="true"
            napAlign="center"
          >
            <slide
              class="flex flex-col-reverse md:flex-row items-center justify-end md:justify-center overflow-hidden container-fluid"
              v-for="(company, index) in companies"
              :key="index"
            >
              <div
                :class="`w-full md:w-1/2 ${index}`"
                v-html="company.description"
              ></div>
              <!-- <div v-if="index === 0" :class="`w-full md:w-1/2 ${index}`">
                <div
                  class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1]"
                >
                  <h2
                    class="text-sm sm:text-lg font-[600] lg:text-2xl text-white"
                  >
                    Software Development Outsourcing
                    <span class="whitespace-nowrap">Services 🙌</span>
                  </h2>
                  <h2
                    class="font-semibold text-4xl lg:text-[40px] text-[#FDB21D] leading-[50px] lg:leading-[66px]"
                  >
                    <a
                      href=""
                      class="typewrite"
                      :data-period="period"
                      :data-type="toRotate"
                    >
                      <span class="wrap">{{ txt }}</span>
                    </a>
                  </h2>
                  <p
                    class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
                  >
                    Let your ideas come to life with elegance and
                    professionalism.
                  </p>
                </div>
              </div>
              <div v-if="index === 1" :class="`w-full md:w-1/2 ${index}`">
                <div
                  class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
                >
                  <h2 class="lg:text-6xl font-[600] text-white">Hire</h1>
                  <h2 class="font-[600] text-[#FDB21D]">
                    <a
                      href=""
                      class="typewrite"
                      :data-period="periodDeveloper"
                      :data-type="toRotateDeveloper"
                    >
                      <span class="wrap">{{ txtDeveloper }}</span>
                    </a>
                  </h2>
                  <h2
                    class="font-semibold text-white leading-[50px] lg:leading-[66px]"
                  >
                    On Contract
                  </h2>
                  <p
                    class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
                  >
                    Expert level Software Developers, UI/UX Designers, QAs,
                    Frontend & Backend Developers, DevOps engineers are ready to
                    join your team remotely.
                  </p>
                  <a href="/contact-us">
                    <button
                      class="min-w-[120px] lg:min-w-[150px] h-10 lg:h-16 px-3 py-1 text-lg lg:text-2xl text-[#FDB21D] rounded-md border-[1px] border-[#FDB21D] ml-[2px]"
                    >
                      Hire Developers
                    </button>
                  </a>
                </div>
              </div>
              <div v-if="index === 2" :class="`w-full md:w-1/2 ${index}`">
                <div
                  class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
                >
                  <h2 class="lg:text-6xl font-[600] text-white">We Provide</h2>
                  <h2 class="font-[600] text-[#FDB21D]">
                    <a
                      href=""
                      class="typewrite"
                      :data-period="periodSolution"
                      :data-type="toRotateSolution"
                    >
                      <span class="wrap">{{ txtSolution }}</span>
                    </a>
                  </h2>
                  <h2
                    class="font-semibold text-white leading-[50px] lg:leading-[66px]"
                  >
                    to Grow Your Business
                  </h2>
                  <p
                    class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
                  >
                    Get custom software development and web service at the best
                    price from a company making success stories for over 10
                    years.
                  </p>
                  <div class="flex justify-center md:justify-start">
                    <a href="#ourServices">
                      <button
                        class="min-w-[120px] lg:min-w-[150px] h-10 lg:h-16 py-1 text-lg lg:text-2xl text-[#FDB21D] rounded-md"
                      >
                        Our Services <span class="font-bold text-2xl">→</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div v-if="index === 3" :class="`w-full md:w-1/2 ${index}`">
                <div
                  class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full z-[1] text-3xl md:text-4xl lg:text-5xl"
                >
                  <h2 class="lg:text-6xl font-[600] text-white">Hire</h2>
                  <h2 class="font-[600] text-[#FDB21D]">
                    <a
                      href=""
                      class="typewrite"
                      :data-period="periodSQA"
                      :data-type="toRotateSQA"
                    >
                      <span class="wrap">{{ txtSQA }}</span>
                    </a>
                  </h2>
                  <h2
                    class="font-semibold text-white leading-[50px] lg:leading-[66px]"
                  >
                    On Contract
                  </h2>
                  <p
                    class="text-base sm:text-xl lg:text-[24px] leading-[42px] lg:leading-[42px] text-white"
                  >
                    Empower your software with the prowess of our experienced
                    engineers, guaranteeing peak performance through meticulous
                    quality assurance.
                  </p>
                  <a href="/contact-us">
                    <button
                      class="min-w-[120px] lg:min-w-[150px] h-10 lg:h-16 px-3 py-1 text-lg lg:text-2xl text-[#FDB21D] rounded-md border-[1px] border-[#FDB21D] ml-[2px]"
                    >
                      Hire SQA
                    </button>
                  </a>
                </div>
              </div> -->
              <div
                class="w-full md:w-1/2 h-full pb-12 sm:pb-0 z-[1] md:!ml-16 mr-2 hidden md:block"
              >
                <img
                  fetchpriority="low"
                  class="w-[70vw] md:w-full aspect-square object-contain"
                  :src="company.image"
                  :alt="company.name"
                />
              </div>
            </slide>
            <template #addons>
              <Pagination class="!mt-14" />
            </template>
          </carousel>
        </ClientOnly>
      </div>
    </div>

    <div class="container-fluid">
      <div
        class="pt-[100px] sm:pt-36 md:pt-[150px] flex items-center md:space-x-10"
      >
        <div class="space-y-6 text-center sm:text-left">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FDB21D]"
          >
            We have Trailblazing Software Teams
          </h2>
          <p class="text-base sm:text-xl lg:text-2xl text-white">
            Emphasizing cutting-edge innovation, world-class expertise, and
            exceptional delivery, our team provides ingenious software services,
            distinctive solutions, and unmatched performance. Turning dreams
            into reality, we reshape industries globally.
          </p>
        </div>
        <NuxtLink
          to="/contact-us"
          aria-label="Hire Developers"
          class="hidden sm:block w-40 xl:w-48 h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
        >
          Hire Developers
        </NuxtLink>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 py-[50px] md:pt-[136px] pt-[96px] justify-center gap-10"
      >
        <div
          class="text-center lg:text-left flex sm:justify-normal justify-self-center sm:justify-self-start w-[260px] sm:w-full space-x-4 space-y-1 lg:space-y-2"
          v-for="item in overview"
          :key="item.id"
        >
          <div class="mt-3">
            <img
              class="w-12 lg:min-w-[48px] h-12 lg:min-h-[48px]"
              :src="item.image"
              :alt="item.field"
              srcset=""
            />
          </div>
          <div class="flex flex-col">
            <h2
              class="text-3xl lg:text-[40px] font-semibold text-[#FDB21D] text-left"
            >
              {{ item.fieldValue }} +
            </h2>
            <p class="text-xl lg:text-2xl text-white text-left">
              {{ item.field }}
            </p>
          </div>
        </div>
      </div>

      <NuxtLink
        to="/contact-us"
        aria-label="Hire Developers"
        class="sm:hidden w-full h-16 bg-[#FAAF04] px-4 flex justify-center items-center font-bold text-black text-base rounded-sm whitespace-nowrap"
      >
        <span>Hire Developers</span>
      </NuxtLink>

      <div
        class="pt-24 grid grid-cols-3 lg:grid-cols-7 items-start gap-4 sm:gap-7 text-base text-white sm:text-2xl font-semibold text-center"
      >
        <div class="flex flex-col items-center space-y-7">
          <div
            class="flex justify-center items-center w-24 h-24 sm:h-36 sm:w-36 xl:w-40 xl:h-40"
          >
            <img
              class="w-full h-full rounded-full"
              src="~/assets/img/landing/1.svg"
              alt="qualified Engineer"
            />
          </div>
          <p class="w-24 sm:w-36 xl:w-40">Qualified Engineers</p>
        </div>
        <div class="flex items-center justify-center">
          <img
            class="pt-12 sm:pt-12 w-24 sm:w-32 h-14 sm:h-24 md:h-26 lg:h-[90px]"
            src="~/assets/img/landing/h-line.svg"
            alt="h-line"
          />
        </div>
        <div class="flex flex-col items-center space-y-7">
          <div
            class="flex justify-center items-center w-24 h-24 sm:h-36 sm:w-36 xl:w-40 xl:h-40"
          >
            <img
              class="w-full h-full rounded-full"
              src="~/assets/img/landing/2.svg"
              alt="dedicated_team"
            />
          </div>
          <p class="w-24 sm:w-36 xl:w-40">Dedicated Team</p>
        </div>
        <div class="hidden lg:flex items-center justify-center">
          <img
            class="pt-12 sm:pt-20 w-24 sm:w-32 h-14 md:h-26 lg:h-[90px]"
            src="~/assets/img/landing/h-line.svg"
            alt="h-line"
          />
        </div>
        <div class="lg:hidden flex items-center justify-center">
          <img
            class="h-24 sm:h-32 w-2"
            src="~/assets/img/landing/v-line.svg"
            alt="v-line"
          />
        </div>
        <div class="lg:hidden"></div>
        <div class="lg:hidden flex items-center justify-center">
          <img
            class="h-24 sm:h-32 w-2"
            src="~/assets/img/landing/v-line.svg"
            alt="v-line"
          />
        </div>
        <div class="flex flex-col items-center space-y-7">
          <div
            class="flex justify-center items-center w-24 h-24 sm:h-36 sm:w-36 xl:w-40 xl:h-40"
          >
            <img
              class="w-full h-full rounded-full hidden lg:block"
              src="~/assets/img/landing/3.svg"
              alt="DEVxHUB Continuos Supervision"
            />
            <img
              class="w-full h-full rounded-full block lg:hidden"
              src="~/assets/img/landing/4.svg"
              alt="DEVxHUB Collaborative Process"
            />
          </div>
          <p class="w-24 sm:w-36 xl:w-40">
            <span class="hidden lg:block">Collaborative Process</span>
            <span class="block lg:hidden">Continuos Supervision</span>
          </p>
        </div>
        <div class="flex items-center justify-center">
          <img
            class="pt-12 sm:pt-20 w-24 sm:w-32 h-14 sm:h-24 md:h-26 lg:h-[90px]"
            src="~/assets/img/landing/h-line.svg"
            alt="h-line"
          />
        </div>
        <div class="flex flex-col items-center space-y-7">
          <div
            class="flex justify-center items-center w-24 h-24 sm:h-36 sm:w-36 xl:w-40 xl:h-40"
          >
            <img
              class="w-full h-full rounded-full hidden lg:block"
              src="~/assets/img/landing/4.svg"
              alt="DEVxHUB Continuos Supervision"
            />
            <img
              class="w-full h-full rounded-full block lg:hidden"
              src="~/assets/img/landing/3.svg"
              alt="DEVxHUB Collaborative Process"
            />
          </div>
          <p class="w-24 sm:w-36 xl:w-40">
            <span class="hidden lg:block">Continuos Supervision</span>
            <span class="block lg:hidden">Collaborative Process</span>
          </p>
        </div>
      </div>

      <HomeService id="ourServices" class="pt-[150px]" />
      <HomeTechnologyStack class="pt-[150px]" />
      <HomeIndustryExpertise />
      <HomeOurHospitality />
      <HomeTrustedCompanies class="pt-[150px]" />
      <HomeTestimonialCarousel class="pt-[150px]" />
      <HomeLatestBlog class="" />
    </div>
  </div>
</template>

<style scoped>
/* .intro {
  background-image: url("~/assets/img/landing/intro.webp");
  background-origin: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

@media (max-width: 1280px) and (min-width: 768px) {
  /* .intro-image {
    height: 75vw;
  } */
}
@media (max-width: 767px) {
  .sun-image {
    width: 29px;
    height: 30px;
  }
}
</style>
