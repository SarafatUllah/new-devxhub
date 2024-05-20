<script lang="ts" setup>
import { WhyChooseUs } from "~/types/post";
const title = "Why Choose Us | DEVxHUB";
const description =
  "We help small businesses around the world with amazing products that solve their business and web problems. DevXhub is special because we Understanding and Developing projects as per clients' Requirements & Needs, Pixel perfect all devices responsiveness design, Long-term Free support even after the project is completed";
useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
const { data: WhyChooses } = useFetch<WhyChooseUs[]>("/api/posts/whyChoose");

// const facilities = ref([]);
// const facilities1 = ref([]);

// if (WhyChooses.value?.length > 0) {
//   facilities.value = WhyChooses.value[0]?.facility;
//   facilities1.value = WhyChooses.value[1]?.facility;
// }

const facilities = ref([
  {
    image: "/home/why-choose-us/understanding.svg",
    text: "Understanding and Developing projects as per clients' Requirements & Needs",
  },
  {
    image: "/home/why-choose-us/long-term.svg",
    text: "Pixel perfect all devices responsiveness design",
  },
  {
    image: "/home/why-choose-us/long-term-relationship.svg",
    text: "Long-term Free support even after the project is completed",
  },
  {
    image: "/home/why-choose-us/free-prototype.svg",
    text: "Long-term Relationship",
  },
  {
    image: "/home/why-choose-us/security.svg",
    text: "Free Rapid Prototype",
  },
  {
    image: "/home/why-choose-us/customer-support.svg",
    text: "In-depth security evaluations & vulnerability assessments",
  },
  {
    image: "/home/why-choose-us/follow.svg",
    text: "24/7 continuous Support",
  },
]);
const facilities1 = ref([
  {
    image: "/home/why-choose-us/security.svg",
    text: "Implementation of agile or scrum development approachesv",
  },
  {
    image: "/home/why-choose-us/on-time.svg",
    text: "On-Time & on Budget Project execution",
  },
  {
    image: "/home/why-choose-us/we-provide.svg",
    text: "Rigorous quality assurance and testing protocols",
  },
  {
    image: "/home/why-choose-us/cost.svg",
    text: "Cost Effectiveness",
  },
  {
    image: "/home/why-choose-us/bug-tracking.svg",
    text: "Comprehensive documentation and reporting",
  },
  {
    image: "/home/why-choose-us/cost.svg",
    text: "Persistent performance enhancement and monitoring",
  },
  {
    image: "/home/why-choose-us/we-provide.svg",
    text: "Daily, weekly, and monthly progress reporting",
  },
]);

const cards = ref([
  {
    src: "/home/we-do-care/ensure.svg",
    text: "Ensure Quality",
  },
  {
    src: "/home/we-do-care/guarantee.svg",
    text: "100% Guarantee",
  },
  {
    src: "/home/we-do-care/necessity.svg",
    text: "Your Necessity",
  },
  {
    src: "/home/we-do-care/emergency.svg",
    text: "Your Emergency",
  },
  {
    src: "/home/we-do-care/feedback.svg",
    text: "Your Feedback",
  },
  {
    src: "/home/we-do-care/interest.svg",
    text: "Your Personal Interest",
  },
]);

onMounted(() => {
  setTimeout(() => {
    const allWhyChooseUs = document.querySelectorAll(".whyChooseUs");
    const allWhyChooseUsTwo = document.querySelectorAll(".whyChooseUsTwo");
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
    allWhyChooseUs.forEach((item) => {
      observer.observe(item);
    });
    allWhyChooseUsTwo.forEach((item) => {
      observerTwo.observe(item);
    });
  }, 700);
});
</script>

<template>
  <section class="container-fluid">
    <div class="pt-[100px]">
      <!-- banner portion -->
      <div
        class="flex flex-col items-center gap-y-12 lg:grid lg:grid-rows-1 lg:grid-cols-12 lg:gap-x-7 pt-20 pb-24 lg:pb-36"
      >
        <div class="text-center lg:text-right lg:col-span-5">
          <img
            class="inline w-[89.34vw] h-[89.34vw] md:h-[79.17vw] lg:w-[31.1vw] lg:h-[31.1vw]"
            src="/whyChooseUs/Why-Choose-Us.webp"
            alt="facilities"
          />
        </div>
        <div class="lg:order-first lg:col-span-7">
          <h2
            class="text-center lg:text-left text-4xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
          >
            We Offer Best Solutions for Better Life.
          </h2>
          <p
            class="text-center lg:text-left text-base lg:text-lg text-light-white"
          >
            “We see a lot of feature-driven product design in which the cost of
            features is not properly accounted. Features can have a negative
            value to customers because they make the products more difficult to
            understand and use. We are finding that people like products that
            just work. It turns out that designs that just work are much harder
            to produce that designs that assemble long lists of features.”
          </p>
        </div>
      </div>

      <!-- why choose us -->
      <div id="choose-us" class="grid grid-cols-1 lg:grid-cols-12">
        <div class="lg:col-span-2"></div>
        <div class="lg:col-span-8 text-center">
          <h2
            class="md:text-4xl text-3xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
          >
            Why Choose Us?
          </h2>
          <p class="text-lg text-light-white lg:px-10 mb-12 lg:mb-[70px]">
            We help small businesses around the world with amazing products that
            solve their business and web problems. DevXhub is special because
          </p>
        </div>
      </div>

      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-wrap justify-center mx-auto gap-3 md:gap-8">
          <div
            v-for="(facility, index) in facilities"
            :key="index"
            class="flex justify-center items-center whyChooseUs notInViewPort"
          >
            <div
              class="w-[160px] md:w-[295px] h-[220px] md:h-[356px] rounded-[30px] bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79] flex justify-center items-center"
            >
              <div class="flex flex-col px-3 md:px-5">
                <img
                  class="aspect-square h-10 md:h-20 w-10 md:w-20 mx-auto mb-6 md:mb-10"
                  :src="facility?.image"
                  :alt="facility?.text"
                />
                <p
                  class="text-center text-light-white font-semibold text-xs md:text-lg leading-5"
                >
                  {{ facility?.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-3 md:gap-8 mt-8">
          <div
            v-for="(facility, index) in facilities1"
            :key="index"
            class="flex justify-center items-center whyChooseUs notInViewPort"
          >
            <div
              class="w-[160px] md:w-[295px] h-[220px] md:h-[356px] rounded-[30px] bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79] flex justify-center items-center"
            >
              <div class="flex flex-col px-3 md:px-5">
                <img
                  class="aspect-square h-10 md:h-20 w-10 md:w-20 mx-auto mb-6 md:mb-10"
                  :src="facility?.image"
                  :alt="facility?.text"
                />
                <p
                  class="text-center text-light-white font-semibold text-xs md:text-lg leading-5"
                >
                  {{ facility?.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- we do care -->
      <div id="care" class="grid grid-cols-1 lg:grid-cols-12 pt-[100px]">
        <div class="lg:col-span-3"></div>
        <div class="lg:col-span-6 text-center">
          <h1
            class="heading-one text-4xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
          >
            We Do Care !!!
          </h1>
          <p class="text-lg text-light-white lg:px-10 mb-12 lg:mb-[70px]">
            Demonstrating genuine concern for client success.
          </p>
        </div>
      </div>

      <div class="max-w-[1400px] mx-auto">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9 pb-[150px] max-w-[295px] md:!max-w-full mx-auto"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex justify-center items-center weDoCare from-[#2A1E56] to-[#3D2C79] whyChooseUsTwo notInViewPortTwo"
          >
            <div
              class="max-w-[295px] md:max-w-full w-full py-[110px] rounded-[30px] bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79] cardNew flex justify-center items-center z-[1]"
            >
              <div class="flex flex-col">
                <img
                  class="aspect-square h-10 md:h-20 w-10 md:w-20 mx-auto mb-6 md:mb-10"
                  :src="card.src"
                  :alt="card.text"
                />
                <p
                  class="text-center text-light-white font-semibold text-xl lg:text-2xl"
                >
                  {{ card.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.cardNew {
  box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 8%);
}
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(-100px, 0, 0) scale(0.6);
}
.nowInViewPortTwo {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPortTwo {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.weDoCare {
  position: relative;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 30px;
}
.weDoCare::before {
  content: "";
  position: absolute;
  width: 100px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#e93cff),
    to(#fdb21d)
  );
  background-image: linear-gradient(180deg, #e93cff, #fdb21d);
  height: 150%;
  -webkit-animation: rotBGimg 8s linear infinite;
  animation: rotBGimg 8s linear infinite;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

@-webkit-keyframes rotBGimg {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotBGimg {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.weDoCare::after {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 15px;
}
/* @media (min-width: 2221px) {
  .elg {
    margin-left: 235px;
  }
}
@media (min-width: 1365px) {
  .card-fix {
    width: 1300px;
    margin-left: -105px;
  }
}
@media (min-width: 1439px) {
  .card-fix {
    margin-left: -70px;
  }
}
@media (min-width: 1920px) {
  .card-fix {
    width: 1595px;
  }
}
@media (min-width: 2560px) {
  .card-fix {
    margin-left: 168px;
  }
} */
</style>
