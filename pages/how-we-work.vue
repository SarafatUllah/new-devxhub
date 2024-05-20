<script setup>
const title = "How We Work | DEVxHUB";
const description =
  "We follow both Waterfall and Agile Methodology. We have a team of experts who are always ready to help you.";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
const waterFallSteps = ref([
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "right",
    img: "/how-we-work/analysis.svg",
    // width: '28.13vw',
    // height: '25vw',
    // // maxWidth: '360px',
    // // maxHeight: '320px',
    // mobileWidth: '78vw',
    // mobileHeight: '53.34vw',
    step: "Step 1",
    heading: "Analysis",
    headingColor: "#B6603D",
    text: "Is the process of Breaking a complex topic or substance into smaller parts in order to gain a better understanding of it. The main purpose of analysis is to find meaning so that the derived knowledge can be used to make informed decisions and make it real.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "left",
    img: "/how-we-work/planning.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 2",
    heading: "Planning",
    headingColor: "#498799",
    text: "Includes The Plan, The Thought Process, Action and Implementation, Planning gives more power over the future. Planning is deciding in advance What to do, How to do it, When to do it and Who should do it. This bridges the gap form where the organization is to where it wants to be.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "right",
    img: "/how-we-work/design.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 3",
    heading: "Design",
    headingColor: "#AE84E8",
    text: "Project is an early phase of the project Where a project’s key features, structure, criteria for success and major deliverable are all planned out. The point is to develop one or more designs Which can be used to achieve the desired project goals.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "left",
    img: "/how-we-work/development.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 4",
    heading: "Development",
    headingColor: "#DACD49",
    text: "Is the process and The Facility of Planning, Organizing, Coordinating and Controlling The Resources to accomplish specific goals. The Process Takes a transportation improvement from concept through constuction.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "right",
    img: "/how-we-work/testing.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 5",
    heading: "Testing",
    headingColor: "#37474F",
    text: "Phase means a group of activities designated for investigating and examining progress of a given project to provide stakeholders with information about actual levels of perfomance and quality of the project planning - The team makes a plan of key procedures and steps of testing.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "left",
    img: "/how-we-work/feedback.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 6",
    heading: "Feedback",
    headingColor: "#2D6371",
    text: "Is about listening actively, taking the time to analyze and then thinking of the best possible solution to perform better. It provides positive criticism and allows to see What everyone can change to improve their focus and results.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "right",
    img: "/how-we-work/fixing.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 7",
    heading: "Fixing Deadlock / Issues",
    headingColor: "#B688F5",
    text: "A deadlock is a situation in which two computer programs sharing the same resource are effectively preventing each other from accessing the resource, resulting in both programs ceasing to function. The Earliest computer operating systems ran only one program at a time. This led to the problem of the deadlock.A project issue is a problem that has been encountered in executing project activities.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "left",
    img: "/how-we-work/completed.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 8",
    heading: "Completed",
    headingColor: "#FF725E",
    text: "Every project needs to end and that’s what project completion is all about in the last phase of the project life cycle. The key activities in project completion are gathering project records; Disseminating information to formalize acceptance of the product, service or project; and performing project closure.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "right",
    img: "/how-we-work/deployment.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 9",
    heading: "Deployment",
    headingColor: "#1A0F91",
    text: "Deploying your application means putting it on a web server so that It can be used either through the internet or an intranet.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "left",
    img: "/how-we-work/maintenance.svg",
    // width:
    // height:
    // maxWidth:
    // maxHeight:
    // mobileWidth:
    // mobileHeight:
    step: "Step 10",
    heading: "Maintenance",
    headingColor: "#37474F",
    text: "Means a project that keeps a facility or asset in efficient operating condition, preserves the condition of the property, or restrores property to a sound state after prolonged use.",
  },
]);

const agileSteps = ref([
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/initiationVisioning.webp",
    step: "Step 1",
    heading: "Initiation and Visioning",
    headingColor: "#B6603D",
    text: "The project team, stakeholders, and customers define the project's vision, scope, and objectives. They also identify the initial requirements and create a high-level plan for the project.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/backlogCreation.webp",
    step: "Step 2",
    heading: "Backlog Creation",
    headingColor: "#498799",
    text: "The product owner, who represents the customer or stakeholders, creates a prioritized list of features, enhancements, and bug fixes called the product backlog. These items represent the work that needs to be done throughout the project.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/sprintPlanning.webp",
    step: "Step 3",
    heading: "Sprint Planning",
    headingColor: "#AE84E8",
    text: "In Scrum, the project is divided into time-boxed iterations called 'sprints'. Before each sprint, the team conducts a sprint planning meeting where they select items from the product backlog to work on during the upcoming sprint. They also estimate the effort required for each selected item.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/sprintExecution.webp",
    step: "Step 4",
    heading: "Sprint Execution",
    headingColor: "#DACD49",
    text: "The development team works on the selected items from the product backlog during the sprint. They use short, daily meetings called 'daily stand-ups' to synchronize and discuss progress, challenges, and plans.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/incrementalDevelopment.webp",
    step: "Step 5",
    heading: "Incremental Development",
    headingColor: "#37474F",
    text: "Agile promotes the delivery of small, incremental improvements throughout the project. At the end of each sprint, a potentially shippable product increment is created.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/feedbackReview.webp",
    step: "Step 6",
    heading: "Feedback and Review",
    headingColor: "#2D6371",
    text: "At the end of each sprint, the team demonstrates the completed work to the customer or stakeholders. They gather feedback, which is then used to adjust priorities and refine requirements for future sprints.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/sprintRetrospective.webp",
    step: "Step 7",
    heading: "Sprint Retrospective",
    headingColor: "#B688F5",
    text: "After each sprint, the team holds a retrospective meeting to reflect on the sprint process, identify what went well and what could be improved, and come up with action items to enhance their performance in the next sprint.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/integrationTesting.webp",
    step: "Step 8",
    heading: "Integration and Testing",
    headingColor: "#FF725E",
    text: "Agile emphasizes frequent integration of code changes and rigorous testing to maintain a working and stable product throughout the development process.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/adaptivePlanning.webp",
    step: "Step 9",
    heading: "Adaptive Planning",
    headingColor: "#1A0F91",
    text: "Agile projects embrace change and are open to adjusting plans based on feedback, customer needs, and evolving market conditions. Regularly updating the product backlog and sprint plans is essential.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/deliveryDeployment.webp",
    step: "Step 10",
    heading: "Delivery and Deployment",
    headingColor: "#37474F",
    text: "Agile encourages delivering valuable software frequently and ensuring that the product is potentially shippable at the end of each sprint.",
  },
  {
    direction: "lgdx:flex-row-reverse",
    imgFloat: "right",
    textFloat: "right",
    img: "/how-we-work/agile/collaborativeEnvironment.webp",
    step: "Step 11",
    heading: "Collaborative Environment",
    headingColor: "#1A0F91",
    text: "Agile promotes a culture of collaboration and open communication between team members, stakeholders, and customers.",
  },
  {
    direction: "lgdx:flex-row",
    imgFloat: "left",
    textFloat: "left",
    img: "/how-we-work/agile/iterativeImprovement.webp",
    step: "Step 12",
    heading: "Iterative Improvement",
    headingColor: "#37474F",
    text: "Agile teams continuously improve their processes and product through regular feedback and reflection.",
  },
]);

const stepsNowActive = ref([]);

const viewPortController = () => {
  setTimeout(() => {
    const allCareerSection = document.querySelectorAll(".howWeWorkSection");
    const allCareerSectionTwo = document.querySelectorAll(
      ".howWeWorkSectionTwo"
    );
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((singleDiv) => {
        if (singleDiv.isIntersecting) {
          singleDiv.target.classList.remove("notInViewPort");
          singleDiv.target.classList.add("nowInViewPort");
        }
        // else if (!singleDiv.isIntersecting) {
        //   singleDiv.target.classList.add("notInViewPort");
        //   singleDiv.target.classList.remove("nowInViewPort");
        // }
      });
    });
    const observerTwo = new window.IntersectionObserver((entries) => {
      entries.forEach((singleDiv) => {
        if (singleDiv.isIntersecting) {
          singleDiv.target.classList.remove("notInViewPortTwo");
          singleDiv.target.classList.add("nowInViewPortTwo");
        }
        // else if (!singleDiv.isIntersecting) {
        //   singleDiv.target.classList.add("notInViewPortTwo");
        //   singleDiv.target.classList.remove("nowInViewPortTwo");
        // }
      });
    });
    // setTimeout(() => {
    allCareerSection.forEach((item) => {
      observer.observe(item);
    });
    allCareerSectionTwo.forEach((item) => {
      observerTwo.observe(item);
    });
    // }, 2000);
  }, 600);
};

const activeMethod = ref("waterFall");
onMounted(() => {
  stepsNowActive.value = waterFallSteps.value;
  viewPortController();
});

// methods
const activeMethodology = (activeMethodValue) => {
  stepsNowActive.value = ref([]);
  activeMethod.value = activeMethodValue;
  stepsNowActive.value =
    activeMethodValue === "waterFall" ? waterFallSteps.value : agileSteps.value;

  const allCareerSection = document.querySelectorAll(".howWeWorkSection");
  const allCareerSectionTwo = document.querySelectorAll(".howWeWorkSectionTwo");
  allCareerSection.forEach((item) => {
    item.classList.remove("nowInViewPort");
    item.classList.add("notInViewPort");
  });
  allCareerSectionTwo.forEach((item) => {
    item.classList.remove("nowInViewPortTwo");
    item.classList.add("notInViewPortTwo");
  });
  viewPortController();
};
</script>

<template>
  <section class="overflow-x-hidden">
    <!-- md:px-[11%] px-4 -->
    <div class="h-full py-15">
      <div class="container-fluid h-full">
        <div
          class="flex flex-col-reverse sm:flex-row sm:space-x-16 md:space-x-0 items-center justify-between pt-36"
        >
          <div
            class="text-center sm:text-left flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full sm:w-1/2 z-[1]"
          >
            <h1
              class="font-semibold text-4xl lg:text-[56px] text-[#FDB21D] leading-[50px] lg:leading-[66px]"
            >
              How DEVxHUB Work?
            </h1>
            <p
              class="text-base sm:text-xl lg:text-[30px] leading-[42px] lg:leading-[42px] text-white"
            >
              Let your ideas come to life with elegance and professionalism.
            </p>
          </div>
          <div class="w-full sm:w-1/2 pb-12 sm:pb-0 z-[1] md:!ml-16">
            <img
              class="w-full h-full"
              src="~/assets/img/howWeWork/heroImage.svg"
              alt=""
            />
          </div>
        </div>

        <div
          class="flex text-center md:text-xl lg:text-2xl font-bold border border-yellow-400 w-full mt-20"
        >
          <div
            class="w-1/2 py-3 md:py-6 cursor-pointer"
            :class="
              activeMethod === 'waterFall' ? 'bg-[#FDB21D]' : 'text-white'
            "
            @click="activeMethodology('waterFall')"
          >
            Project Delivering in Waterfall Method
          </div>
          <div
            class="w-1/2 py-3 md:py-6 cursor-pointer"
            :class="activeMethod === 'agile' ? 'bg-[#FDB21D]' : 'text-white'"
            @click="activeMethodology('agile')"
          >
            Project Onboarding in Agile Method
          </div>
        </div>

        <Transition name="fade">
          <div
            v-if="activeMethod === 'agile'"
            class="w-full md:w-[70%] h-full md:h-[70%] mx-auto mt-20"
          >
            <img
              class="w-full h-full"
              src="~/assets/img/howWeWork/agileCircle.svg"
              alt=""
            />
          </div>
        </Transition>
      </div>

      <div class="mx-auto" v-if="stepsNowActive.length > 0">
        <div
          v-for="(step, index) in stepsNowActive"
          :key="index"
          :class="
            index === 0
              ? 'lg:pt-24 pt-24 lg:pb-48 pb-40'
              : index === 1
              ? 'pb-20 lg:pb-24'
              : 'py-20 lg:py-24'
          "
        >
          <div
            class="flex flex-col lgdx:flex-row justify-between items-center container-fluid"
            :class="[
              step.direction,
              index === 1 || index === 4 || index === 7 || index === 8
                ? 'relative'
                : '',
              activeMethod === 'waterFall' && index % 2 === 1
                ? ''
                : 'lgdx:space-x-10',
              activeMethod === 'agile' && index % 2 === 0
                ? ''
                : 'lgdx:space-x-10',
            ]"
          >
            <div
              class="flex mx-auto lgdx:justify-center lgdx:w-1/2 pb-6 z-[1]"
              :class="[
                index === 1
                  ? 'px-5 lgdx:pr-20'
                  : index === 8
                  ? 'px-5'
                  : 'px-5 lgdx:px-5 lg:px-0',
                index % 2 === 0
                  ? 'howWeWorkSection notInViewPort'
                  : 'howWeWorkSectionTwo notInViewPortTwo',
              ]"
            >
              <img
                class="xl:w-[28.13vw] w-[78vw] h-[53.34vw] xl:h-[25vw] xl:max-w-[360px] xl:max-h-[320px] max-w-[300px] max-h-[200px]"
                :style="{ float: step.imgFloat }"
                :src="step.img"
                alt=""
              />
            </div>
            <div
              class="flex items-center lgdx:w-1/2 z-[1]"
              :class="
                index % 2 === 0
                  ? 'howWeWorkSectionTwo notInViewPortTwo'
                  : 'howWeWorkSection notInViewPort'
              "
              :style="{ float: step.textFloat }"
            >
              <div>
                <div
                  class="px-5 lgdx:px-0 lgdx:pl-10 lgdx:pr-10 lg:pl-20 lg:pr-20"
                >
                  <p
                    class="text-[#FFFFFF] font-semibold text-lg md:text-2xl leading-7"
                    :class="
                      index % 2 === 0 ? 'text-left' : 'xl:text-left text-right'
                    "
                  >
                    <span
                      class="h-[2px] w-10 inline-block bg-[#611F69] mb-[5px] mr-4"
                    ></span
                    >{{ step.step }}
                  </p>
                  <h2
                    class="font-bold text-2xl md:text-5xl lg:leading-[65px] text-primary py-4"
                    :class="
                      index % 2 === 0 ? 'text-left' : 'xl:text-left text-right'
                    "
                  >
                    <!-- :style="{ color: step.headingColor }" -->
                    {{ step.heading }}
                  </h2>
                  <p
                    class="text-lg md:text-xl font-normal leading-7 text-[#F0F0F0]"
                    :class="
                      index % 2 === 0 ? 'text-left' : 'xl:text-left text-right'
                    "
                  >
                    {{ step.text }}
                  </p>
                </div>
              </div>
            </div>
            <img
              v-if="index === 8"
              class="absolute left-0 top-0 curveLeft"
              src="/how-we-work/curveLeft.svg"
              alt=""
            />
            <img
              v-if="index === 7"
              class="absolute right-0 top-0 ovalRight"
              src="/how-we-work/ovalRight.svg"
              alt=""
            />
            <img
              v-if="index === 4"
              class="absolute right-0 top-0 curveRight"
              src="/how-we-work/curveRight.svg"
              alt=""
            />
            <img
              v-if="index === 1"
              class="absolute left-0 ovalLeft"
              src="/how-we-work/ovalLeft.svg"
              alt=""
            />
            <img
              v-if="index === 4"
              class="absolute right-8 lgdx:left-20 bottom-0 circleLeft"
              src="/how-we-work/circleLeft.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.nowInViewPortTwo {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPortTwo {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.cardBg {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  /* Praimary Color */

  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 10px;
}
@media (max-width: 768px) {
  .container-direction {
    flex-direction: column;
  }
}
.curveLeft {
  margin-left: 0px !important;
}
.ovalRight {
  margin-right: 0px !important;
}
.curveRight {
  margin-right: 0px !important;
}
.ovalLeft {
  margin-left: 0px !important;
}
.circleLeft {
  margin-left: 0px !important;
}
</style>
