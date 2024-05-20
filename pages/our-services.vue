<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import BaseIconGraphQlApi from "~/components/base/icon/GraphQlApi.vue";

const title = "Our Services | DEVxHUB";
const description =
  "The first step in DEVxHUB’s web development process is planning and discovery. In this stage, the development team will work closely with the client to determine the project’s goals, requirements, and scope. The team will identify the project’s technical and functional requirements, select the right technologies to use, and develop a project plan that outlines the project’s timeline, milestones, and deliverables.";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
// breakpoints
const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greaterOrEqual("lg");
const techStack = ref([
  {
    id: 1,
    name: "Planning and Discovery",
    stack: "planningDiscover",
  },
  {
    id: 2,
    name: "User Experience (UX) Design",
    stack: "userExperience",
  },
  {
    id: 3,
    name: "Quality Assurance (QA) Testing",
    stack: "qualityAss",
  },
  {
    id: 4,
    name: "Development",
    stack: "development",
  },
  {
    id: 5,
    name: "Deployment",
    stack: "deployment",
  },
  {
    id: 6,
    name: "Maintenance and Support",
    stack: "maintenance",
  },
]);
const techCard = ref([
  {
    name: `<h2 class="text-[#FDB21D]">Planning and Discovery</h2>
    <p>The first step in DEVxHUB’s web development process is planning and discovery. In this stage, the development team will work closely with the client to determine the project’s goals, requirements, and scope. The team will identify the project’s technical and functional requirements, select the right technologies to use, and develop a project plan that outlines the project’s timeline, milestones, and deliverables.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote about Planning and Discovery" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "planningDiscover",
  },
  {
    name: `<h2 class="text-[#FDB21D]">User Experience (UX) Design</h2>
    <p>The second step is user experience (UX) design. In this stage, the development team will create wireframes, prototypes, and mockups that will help the client visualize the website’s layout, features, and functionality. The UX design process ensures that the website is easy to use, accessible, and visually appealing to the target audience.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote UX design" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "userExperience",
  },
  {
    name: `<h2 class="text-[#FDB21D]">Quality Assurance (QA) Testing</h2>
    <p>The third step is development. In this stage, the development team will use the plan and design created in the previous steps to build the website. The team will develop the front-end and back-end of the website, integrate third-party services, and test the website’s functionality.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote QA testing" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "qualityAss",
  },
  {
    name: `<h2 class="text-[#FDB21D]">Development</h2>
    <p>The fourth step in Oyolloo’s specialized web development process is quality assurance (QA) testing. In this stage, the development team will test the website’s performance, usability, and security to ensure that it meets the project’s requirements and standards. The team will also perform load testing, security testing, and cross-browser testing to ensure the website’s stability and security.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote for Development" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "development",
  },
  {
    name: `<h2 class="text-[#FDB21D]">Deployment</h2>
    <p>The fifth step is deployment. In this stage, the development team will deploy the website to the client’s hosting environment. The team will ensure that the website is optimized for performance and can handle traffic spikes.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote for Deployment" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "deployment",
  },
  {
    name: `<h2 class="text-[#FDB21D]">Maintenance and Support</h2>
    <p>The final step in our web development process is maintenance and support. In this stage, the development team will provide ongoing support and maintenance services to the client. The team will monitor the website’s performance, fix any bugs or issues, and provide support for new features or changes.</p>
    <a href="/contact-us" rel="noopener noreferrer" aria-label="Get a Quote For Maintenance and Support" class="w-32 md:w-40 xl:w-48 h-10 md:h-13 bg-[#FAAF04] px-2 md:px-5 py-1 md:py-3 text-black text-lg lg:text-xl rounded-sm whitespace-nowrap mt-13">
        Get a Quote
    </a>
    `,
    image: "",
    stack: "maintenance",
  },
  {
    name: "GraphQL API",
    image: BaseIconGraphQlApi,
    stack: "Others",
  },
]);

const activeStack = ref("planningDiscover");
const activeStackDemo = ref("planningDiscover");
const stackClickCount = ref(0);
const activeTrue = ref(false);
const handleActiveStack = (selectedStack: string) => {
  stackClickCount.value++;
  setTimeout(() => {
    stackClickCount.value = 0;
  }, 300);

  if (window.innerWidth < 1024 && activeStackDemo.value === selectedStack) {
    if (
      view.value &&
      activeStack.value === selectedStack &&
      stackClickCount.value === 2 &&
      !activeTrue.value
    ) {
      view.value = false;
      start.value = 0;
      end.value = 6;
      activeStack.value = "";
      setTimeout(() => {
        activeStackDemo.value = "";
      }, 480);
    } else if (!view.value) {
      activeTrue.value = true;
      setTimeout(() => {
        activeTrue.value = false;
      }, 500);

      view.value = true;
      start.value = 0;
      end.value = 6;
      activeStack.value = selectedStack;
      setTimeout(() => {
        activeStackDemo.value = selectedStack;
      }, 480);
    }
  } else if (activeStackDemo.value !== selectedStack) {
    view.value = false;
    setTimeout(() => {
      view.value = true;
    }, 450);
    start.value = 0;
    end.value = 6;
    activeStack.value = selectedStack;
    setTimeout(() => {
      activeStackDemo.value = selectedStack;
    }, 480);
  } else if (
    window.innerWidth >= 1024 &&
    activeStackDemo.value === selectedStack
  ) {
    view.value = false;
    setTimeout(() => {
      view.value = true;
    }, 450);
    start.value = 0;
    end.value = 6;
    activeStack.value = selectedStack;
    setTimeout(() => {
      activeStackDemo.value = selectedStack;
    }, 480);
  }
};
// data
const totalCardLength = ref(0);
const finalTechCard = computed(() => {
  const tempArray = techCard.value.filter((item) => {
    if (item.stack === activeStack.value) {
      return item;
    }
  });

  totalCardLength.value = tempArray.length;
  return tempArray.slice(start.value, end.value);
});
const start = ref(0);
const end = ref(6);
const view = ref(true);
const seeMoreStack = () => {
  view.value = false;
  setTimeout(() => {
    view.value = true;
  }, 450);
  start.value = end.value;
  end.value = end.value + start.value;
};
</script>

<template>
  <section class="container-fluid">
    <div class="pt-[100px] ourService text-white">
      <div class="px-0 md:px-4 lg:px-0 pb-20">
        <h1
          class="text-center text-[#FDB21D] md:text-5xl text-3xl font-semibold"
        >
          Our Specialized Web Development Process
        </h1>

        <div
          class="technologyStackDiv flex flex-col lg:flex-row lg:items-start items-center w-full md:mt-14 lgx:mt-16 mt-8"
          :class="
            activeStackDemo !== 'planningDiscover'
              ? 'lg:space-x-6 lgx:space-x-20 xl:space-x-36'
              : 'space-x-4'
          "
        >
          <div class="flex flex-col space-y-8 font-bold lg:w-auto w-full mt-4">
            <ClientOnly>
              <template v-for="(tech, index) in techStack" :key="index">
                <div
                  class="p-5 rounded-lg min-w-[260px] cursor-pointer md:text-left text-center whitespace-nowrap"
                  :class="
                    tech.stack === activeStack
                      ? 'bg-primary text-black'
                      : 'bg-[#2A1E56] text-white'
                  "
                  @click="handleActiveStack(tech.stack)"
                >
                  {{ tech.name }}
                </div>
                <Transition name="page">
                  <div
                    v-if="
                      !isDesktop &&
                      activeStack === tech.stack &&
                      finalTechCard.length > 0 &&
                      view
                    "
                    class="flex-grow self-center"
                  >
                    <div
                      class="flex flex-wrap justify-center lgx:justify-normal"
                    >
                      <TransitionGroup name="inout">
                        <template v-for="(techSingle, index) in finalTechCard">
                          <div
                            v-if="view"
                            :key="index"
                            class="techCard flex flex-col space-y-8 justify-center xl:p-8 p-4 md:mx-4 mx-2 mb-4"
                            :class="'w-full h-full'"
                          >
                            <div
                              v-if="techSingle.image"
                              class="cardInnerIconBg flex justify-center items-center"
                            >
                              <div>
                                <!-- <img
                                :src="techSingle.image"
                                alt=""
                                srcset=""
                                class="max-h-[90px]"
                              /> -->
                                <component :is="techSingle.image"></component>
                              </div>
                            </div>
                            <!-- <div
                              v-if="techSingle.stack !== 'planningDiscover'"
                              class="text-center font-semibold text-[#FDB21D] text-xl hidden"
                            >
                              {{ techSingle.name }}
                            </div> -->
                            <div
                              v-else
                              class="text-left text-white font-normal text-lg leading-8"
                              v-html="techSingle.name"
                            ></div>
                          </div>
                        </template>
                      </TransitionGroup>
                    </div>

                    <div
                      v-if="
                        view &&
                        totalCardLength > 6 &&
                        finalTechCard.length === 6
                      "
                      class="w-full h-[40px] flex justify-center mt-3"
                    >
                      <Transition name="page">
                        <BaseButton
                          class="w-[140px] h-[40px] px-4 text-[#FDB21D] border-2 border-solid border-[#FDB21D] font-bold outline-none text-base"
                          :text="'See More'"
                          @click="seeMoreStack"
                        />
                      </Transition>
                    </div>
                  </div>
                </Transition>
              </template>
            </ClientOnly>
          </div>
          <ClientOnly>
            <div v-if="isDesktop" class="flex-grow">
              <div
                class="flex flex-wrap justify-center lgx:justify-normal space-y-4 md:space-y-2 lg:space-y-0"
              >
                <TransitionGroup name="inout">
                  <template v-for="(techSingle, index) in finalTechCard">
                    <div
                      v-if="view"
                      :key="index"
                      class="techCard flex flex-col space-y-8 justify-center xl:p-8 p-4 mx-4 lg:!my-2 lgx:!my-4"
                      :class="'w-full h-full'"
                    >
                      <div
                        v-if="techSingle.image"
                        class="cardInnerIconBg flex justify-center items-center"
                      >
                        <div>
                          <!-- <img
                          :src="techSingle.image"
                          alt=""
                          srcset=""
                          class="max-h-[90px]"
                        /> -->
                          <component :is="techSingle.image"></component>
                        </div>
                      </div>
                      <!-- <div
                        v-if="techSingle.stack !== 'planningDiscover'"
                        class="text-center font-semibold text-[#FDB21D] text-xl hidden"
                      >
                        {{ techSingle.name }}
                      </div> -->
                      <div
                        v-else
                        class="text-left text-white font-normal text-xl px-4 leading-10"
                        v-html="techSingle.name"
                      ></div>
                    </div>
                  </template>
                </TransitionGroup>
              </div>

              <div class="w-full h-12 flex justify-end">
                <Transition name="page">
                  <BaseButton
                    v-if="
                      view && totalCardLength > 6 && finalTechCard.length === 6
                    "
                    class="w-[150px] h-12 px-4 mt-6 text-[#FDB21D] border-2 border-solid border-[#FDB21D] font-bold outline-none text-base"
                    :text="'See More'"
                    @click="seeMoreStack"
                  />
                </Transition>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.inout-enter-active,
.inout-leave-active {
  transition: all 0.5s ease-in-out;
}
.inout-enter-from,
.inout-leave-to {
  opacity: 0;
  scale: 0.5;
}
// .inout-enter-active {
//   transition-delay: 0.5s;
// }
.techCard {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 20px;
}
.cardInnerIconBg {
  @apply xl:w-[120px] xl:h-[120px] w-[110px] h-[110px] rounded-full mx-auto bg-transparent;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 0.6) 0%,
  //   #8cd5b7 100%
  // );
}
.takeCareSingleCard {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 30px;
}
</style>
