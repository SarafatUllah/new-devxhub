<script setup lang="ts">
import { Job, JobDetail } from "~/types/post";
import { required, maxLength, email } from "@vuelidate/validators";
import { vMaska } from "maska";
import useVuelidate from "@vuelidate/core";
import { storeToRefs } from "pinia";
import { useCareerStore } from "~/stores/career";
// import logo from "~/assets/img/dxh-logo-black@2x.png";
const { isError } = storeToRefs(useCareerStore());
const { setError } = useCareerStore();
const config = useRuntimeConfig();

const title = "Career | DEVxHUB";
const description =
  "Join our team and make an impact with DEVxHUB. Browse our job openings and find the right fit for you. Check out our career opportunities today!";
const websiteLogo = `${config.public.siteUrl}/logo.svg`;

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});

const careers = ref<Job[]>([]);

const isActiveJobPost = (date: string) => {
  // Create Date objects for the current date and the other date
  const currentDate: Date = new Date();
  const otherDate: Date = new Date(date); // Replace with the desired date
  otherDate.setHours(otherDate.getHours() - 6);
  const formattedDate = otherDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Calculate the time difference in milliseconds
  const timeDifference: boolean = new Date(formattedDate) > currentDate;

  return timeDifference;
};

const activeJobs = ref([]);
const isHasAnyActiveJobPost = (allCareersData: any) => {
  allCareersData.forEach((singleStackCareer: any) => {
    singleStackCareer?.jobs.forEach((singleCareer: any) => {
      if (isActiveJobPost(singleCareer?.deadline)) {
        activeJobs.value.push(singleCareer);
      }
    });
  });
};

const getAllJobs = async () => {
  try {
    careers.value = [];
    let response = await $fetch(`/api/careers`);
    if (response) {
      careers.value = response;
      isHasAnyActiveJobPost(careers.value);
    }
  } catch (error) {
    console.log(error);
  }
};

useHead({
  title: "Career | DEVxHUB",
});

// types
interface SubscriptionForm {
  email: string;
}

// State
const subscriptionForm = reactive<SubscriptionForm>({
  email: "",
});

const validations = computed(() => {
  return {
    email: { email },
  };
});

const isProcessing = ref<boolean>(false);
const $v = useVuelidate(validations, subscriptionForm);

// Methods
const submitForm = async () => {
  if (subscriptionForm.email) {
    try {
      const submitToAPI = await $fetch("/api/posts/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email: subscriptionForm.email,
        }),
      });

      if (submitToAPI) {
        useNuxtApp().$toast("clear");
        useNuxtApp().$toast("success", {
          message: "Subscribed for future job updates! Stay tuned 🎉",
          className: "alert_success",
        });
        subscriptionForm.email = "";
      }
    } catch (error: any) {
      if (error.status === 400) {
        useNuxtApp().$toast("clear");
        useNuxtApp().$toast("error", {
          message: error.response._data.data.email[0],
          className: "alert_error",
        });
      }
    }
  } else {
    useNuxtApp().$toast("clear");
    useNuxtApp().$toast("error", {
      message: "Please fill the required fill.",
      className: "alert_error",
    });
  }
};

const joinCards = ref([
  {
    src: "/career/why-join-us/JobSecurity.svg",
    text: "Job Security",
    details:
      "Our company ensures job security, growth, and a healthy work environment for employees.",
  },
  {
    src: "/career/why-join-us/onTimeSalary.png",
    text: "On Time Salary",
    details:
      "Our commitment to timely payments, ensuring financial stability and peace of mind for our team.",
  },
  {
    src: "/career/why-join-us/BettheWorld.svg",
    text: "Bet the World",
    details:
      "Join Bet the World to make a global impact through ambitious projects and creative thinking.",
  },
  {
    src: "/career/why-join-us/OpenCommunication.svg",
    text: "Open Communication",
    details:
      "We value open communication, respect diverse viewpoints, and encourage active engagement for your thoughts to be heard and valued.",
  },
  {
    src: "/career/why-join-us/LearningOpportunity.svg",
    text: "Learning Opportunity",
    details:
      "Join our team for growth, development, and leadership opportunities through cutting-edge technologies, training, and mentorship.",
  },
  {
    src: "/career/why-join-us/UpgradetheLevel.svg",
    text: "Upgrade the Level",
    details:
      "Join us for a culture of excellence, surrounded by brilliant and driven individuals who inspire continuous development and career advancement.",
  },
  {
    src: "/career/why-join-us/WeFamily.svg",
    text: "We’re Family",
    details:
      "Join our inclusive work family for a harmonious and supportive environment that values community, collaboration, and wellbeing.",
  },
]);

const coreValues = ref([
  {
    src: "/career/core-values/KnowledgeSharing.svg",
    text: "Knowledge Sharing",
    details:
      "Fostering a culture of ongoing learning and information sharing is known as knowledge sharing.",
  },
  {
    src: "/career/core-values/Teamwork.svg",
    text: "Teamwork",
    details:
      "Effectively working together to achieve common objectives and results.",
  },
  {
    src: "/career/core-values/Achievement.svg",
    text: "Achievement",
    details:
      "Recognition and celebration of both individual and group achievements.",
  },
  {
    src: "/career/core-values/Appreciation.svg",
    text: "Appreciation",
    details: "Showing gratitude and recognizing other people's contributions.",
  },
  {
    src: "/career/core-values/Respect.svg",
    text: "Respect",
    details: "Treating all individuals with dignity, fairness, and courtesy.",
  },
  {
    src: "/career/core-values/Happiness.svg",
    text: "Happiness",
    details:
      "fostering a happy and fulfilling work environment for one's own wellbeing.",
  },
  {
    src: "/career/core-values/Ownership.svg",
    text: "Ownership",
    details:
      "Taking responsibility and accountability for our actions and results.",
  },
  {
    src: "/career/core-values/Criticalthinking.svg",
    text: "Critical thinking",
    details: "Encouraging thoughtful analysis and problem-solving.",
  },
  // {
  //   src: "/career/core-values/Teamwork.svg",
  //   text: "Culture of learning",
  //   details: "Embracing a culture of learning and the exchange of information.",
  // },
]);

const dateFormat = (date: string) => {
  const backendDate: Date = new Date(date);
  backendDate.setHours(backendDate.getHours() - 6); // We need to do this because our backend server 6hours ahead
  const formattedDate = backendDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(formattedDate).toLocaleDateString(undefined, options);
};

const isShowJobTitle = (jobSegment: Array<any>) => {
  const isActiveJobTitle = ref(false);
  jobSegment.forEach((singleJob) => {
    if (isActiveJobPost(singleJob.deadline) === true) {
      isActiveJobTitle.value = true;
    }
  });
  return isActiveJobTitle.value;
};
const nuxtApp = useNuxtApp();
const showAlert = ref<boolean>(false);
const showAlertText = ref<boolean>(false);
onMounted(() => {
  showAlert.value = true;
  if (showAlert.value) {
    setTimeout(() => {
      showAlertText.value = true;
    }, 1000);
  } else {
    showAlertText.value = false;
  }
  if (isError.value) {
    nuxtApp.$toast("error", {
      message: "The job post is expired",
      className: "alert_error",
    });
    setError(null);
  }
  getAllJobs();
  setTimeout(() => {
    const allCareerSection = document.querySelectorAll(".careerSection");
    const allCareerSectionTwo = document.querySelectorAll(".careerSectionTwo");
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
    allCareerSection.forEach((item) => {
      observer.observe(item);
    });
    allCareerSectionTwo.forEach((item) => {
      observerTwo.observe(item);
    });
  }, 700);
});
const hideAlertBox = () => {
  showAlertText.value = false;
  if (!showAlertText.value) {
    setTimeout(() => {
      showAlert.value = false;
    }, 500);
  }
};
// methods
const getCardStyle = (index: number) => {
  if (index % 6 === 0) {
    return 0;
  } else if (index % 6 === 1) {
    return 1;
  } else if (index % 6 === 2) {
    return 2;
  } else if (index % 6 === 3) {
    return 3;
  } else if (index % 6 === 4) {
    return 4;
  } else if (index % 6 === 5) {
    return 5;
  } else {
    return index % 6;
  }
};
</script>

<template>
  <section>
    <div
      class="placeholder:h-full md:pt-40 lg:pt-44 pt-32 md:pb-36 pb-24 container-fluid relative"
    >
      <Transition name="fadeIn">
        <div
          v-if="showAlert"
          class="fixed top-0 left-0 h-screen w-full blur-box z-10"
          @click.stop="hideAlertBox"
        ></div>
      </Transition>
      <Transition name="widthheight">
        <div
          v-if="showAlert"
          class="fixed xl:max-w-[510px] xl:max-h-[510px] md:max-h-[420px] max-h-[440px] xl:w-[440px] xl:h-[440px] modal-box z-20 md:w-[60%] w-[90%] md:h-[50%] h-[90%]"
        >
          <div class="flex flex-col w-full h-full p-4">
            <ClientOnly>
              <Transition name="textFadeIn">
                <fa
                  v-if="showAlertText"
                  class="text-[#FDB21D] w-[24px] h-[24px] text-2xl ml-auto cursor-pointer"
                  :icon="['fa', 'times']"
                  @click.stop="hideAlertBox"
                />
              </Transition>
            </ClientOnly>
            <Transition name="textFadeIn">
              <div v-if="showAlertText" class="flex flex-col p-6">
                <p
                  class="2xl:text-xl lg:text-lg text-base text-white font-medium"
                >
                  If you need any help with job postings, internships,
                  <span class="text-[#FDB21D] font-semibold">OR</span> updates
                  regarding your job application, please reach out to us.
                </p>
                <div class="mt-4 flex flex-col space-y-5">
                  <div class="flex space-x-[14px] items-start">
                    <img
                      src="/home/footer-social/address-icon/email.svg"
                      alt=""
                      srcset=""
                      class="lg:w-6 lg:h-6 w-5 h-5 2xl:mt-0.5 xl:mt-1 lg:mt-1 mt-[3px]"
                    />
                    <div>
                      <p
                        class="2xl:text-xl lg:text-lg text-base font-semibold pb-2 text-[#FDB21D]"
                      >
                        Email Us
                      </p>
                      <p
                        class="2xl:text-lg text-base pb-[6px] font-normal text-[#EDEDED] block"
                      >
                        career@devxhub.com
                      </p>
                      <p
                        class="2xl:text-lg text-base pb-[19px] font-normal text-[#EDEDED] block"
                      >
                        career-intern@devxhub.com
                      </p>
                    </div>
                  </div>
                  <div class="flex space-x-[14px] items-start">
                    <img
                      src="/home/footer-social/address-icon/phone.svg"
                      alt=""
                      srcset=""
                      class="lg:w-6 lg:h-6 w-5 h-5 2xl:mt-0.5 xl:mt-1 lg:mt-1 mt-[3px]"
                    />
                    <div class="flex flex-col gap-1 lg:gap-[5px]">
                      <p
                        class="2xl:text-xl lg:text-lg text-base font-semibold pb-2 text-[#FDB21D]"
                      >
                        Call HR
                      </p>
                      <p
                        class="2xl:text-lg text-base pb-[6px] font-normal text-[#EDEDED] block"
                      >
                        +880 1790-286838
                      </p>
                      <p
                        class="2xl:text-lg text-base font-normal text-[#EDEDED] block"
                      >
                        +880 1938-480302
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>

      <ClientOnly>
        <Transition name="iconwidthheight">
          <fa
            v-if="showAlert"
            class="w-[20px] h-[20px] xl:!block !hidden fixed bottom-[26px] left-[24px] polygon-icon z-20"
            :icon="['fa', 'play']"
          />
        </Transition>
      </ClientOnly>
      <div class="relative">
        <div class="absolute -top-4 lg:-top-10 sm:right-0 right-[-9px]">
          <img
            src="/career/anouncement.svg"
            alt=""
            srcset=""
            class="w-[24vw] h-[14.86vw] lg:w-[18.5vw] lg:[h-11.47vw]"
          />
        </div>

        <h1
          class="text-primary text-5xl font-semibold text-center py-2 sm:py-4 md:pt-8 md:pb-14"
        >
          Careers
        </h1>
        <div class="py-10 flex justify-center items-center">
          <div
            class="cursor-pointer applyNowCard max-w-full sm:max-w-[70vw] md:max-w-[65vw] lg:max-w-[56vw] lgdx:max-w-[49vw] 2xl:max-w-[40vw] 3xl:max-w-[720px] px-2 py-6 md:px-6 xl:px-12 flex flex-col space-y-1 sm:space-y-2 lg:space-y-3 xl:space-y-4"
          >
            <NuxtLink
              to="https://forms.gle/NHHMEhkgqqntNwoL8"
              target="_blank"
              class="flex flex-col space-y-4"
            >
              <p
                class="text-center text-lg md:text-xl lg:text-2xl xl:leading-[62px] text font-semibold text-white"
              >
                No Opening for you, Fill up the
              </p>
              <h2
                class="text-center text-2xl md:text-3xl lg:text-4xl xl:leading-[62px] text font-semibold text-primary"
              >
                Potential candidate list form
              </h2>

              <div
                class="text-white text-center text-xs sm:text-sm md:text-base font-medium sm:px-9"
              >
                This is a Potential Candidate form List. These informations will
                be used (will help us ) to find out the
                <b>best possible potential candidate</b> for
                <b>future hiring.</b>
                You’re most welcome to be a part of this <b>Program.</b> We wish
                you best of luck for your <b>future endeavours.</b>
              </div>

              <div
                class="text-xs sm:text-base md:text-lg lg:text-xl text-center text-white font-bold relative flex space-x-2 items-center justify-center"
              >
                <div>Feel free to</div>
                <div
                  class="text-[#FDB21D] text-lg sm:text-xl md:text-2xl lg:text-3xl"
                >
                  Apply
                </div>
                <div>
                  <BaseIconRightArrow
                    class="rounded-md text-white"
                    icon="chevron-right"
                  />
                </div>
              </div>
            </NuxtLink>
            <div
              class="flex md:flex-row flex-col md:space-x-[30px] md:space-y-0 space-y-3 w-full md:justify-center items-center !mt-6"
            >
              <div class="flex space-x-3 items-center">
                <img
                  src="/home/footer-social/address-icon/email.svg"
                  alt=""
                  srcset=""
                  class="w-5 h-4 mt-0.5"
                />
                <p class="text-base font-normal block text-white">
                  career@devxhub.com
                </p>
              </div>
              <div class="flex space-x-3 items-center">
                <img
                  src="/home/footer-social/address-icon/email.svg"
                  alt=""
                  srcset=""
                  class="w-5 h-4 mt-0.5"
                />
                <p class="text-base font-normal block text-white">
                  career-intern@devxhub.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-[#F0F0F0] text-center md:pt-[60px]">
        <p class="text-2xl font-semibold">Are You Ready to Join Our Team</p>
        <h2 class="text-2xl md:text-5xl font-semibold pt-4">
          Open Positions,<span class="text-primary">
            You Want To Be Part Of Us?</span
          >
        </h2>
        <p class="text-lg pt-4">
          We have the following positions for you right now
        </p>
      </div>
      <h2
        v-if="activeJobs.length === 0"
        class="text-center applyNowCard text-2xl md:text-3xl lg:text-4xl xl:leading-[62px] text font-semibold text-primary mt-10 px-4 md:px-10 lg:px-16 xl:px-20 py-6"
      >
        No vacancy yet!🤕 Please stay connected with DEVxHUB for upcoming
        vacancy. Meanwhile feel free to fill up the potential candidate from
        above.
      </h2>

      <template v-for="(career, index) in careers" :key="index">
        <div :class="activeJobs.length > 0 ? 'mt-[100px]' : ''">
          <h2
            v-if="isShowJobTitle(career?.jobs)"
            class="text-primary text-xl md:text-[32px] font-semibold text-center"
          >
            {{ career.title }}
          </h2>

          <template v-for="(job, index) in career.jobs" :key="`career${index}`">
            <div
              v-if="isActiveJobPost(job.deadline)"
              class="cardBg px-3.5 md:px-5 lg:px-10 xl:px-14 py-4 my-8 flex flex-row items-center justify-between"
            >
              <div class="flex flex-col space-y-1 md:space-y-6 pr-4">
                <div
                  class="text-white text-base md:text-xl lg:text-[32px] font-semibold"
                >
                  {{ job.title }}
                </div>
                <div
                  class="text-[#F0F0F0] flex flex-col space-y-1 text-sm md:text-base"
                >
                  <div>
                    <span class="text-primary">Experience:</span>
                    {{ job.experience }}
                  </div>
                  <div>
                    <span class="text-primary">Deadline:</span>
                    {{ dateFormat(job.deadline) }}
                  </div>
                </div>
              </div>
              <NuxtLink
                :to="`/career/${job.slug}`"
                class="whitespace-nowrap w-[120px] h-9 lg:w-40 lg:h-10 xl:w-44 xl:h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-xs lg:text-base rounded-sm flex items-center justify-center"
              >
                <span>Apply Now</span>
                <BaseIconRightArrow
                  class="pl-3.5 rounded-md text-black"
                  icon="chevron-right"
                />
              </NuxtLink>
            </div>
          </template>
        </div>
      </template>

      <!-- Subscribe us for job update -->
      <div class="text-center mt-20 md:mt-[150px]">
        <h2
          class="heading-one text-4xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
        >
          Subscribe to us for all future job post notifications.
        </h2>

        <form
          class="w-full flex justify-center items-center"
          novalidate
          @submit.prevent="submitForm"
        >
          <div
            class="w-full lg:w-3/4 xl:w-3/5 space-y-1.5 flex flex-col justify-start"
          >
            <label class="text-lg text-light-white text-left"
              >Email Address<span class="text-[#ff0000]">*</span></label
            >
            <div
              class="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-6"
            >
              <BaseInputText
                id="email"
                type="email"
                text-input="p-4 rounded-lg shadow-3xl border border-[#FDB21D]"
                input-wrapper="inputWrapper"
                place-holder="Write your email address"
                color="#fff"
                background=""
                placeHolderColor="#767474"
                v-model.trim="$v.email.$model"
                :error="$v.email.$error"
                :error-message="$v.email.$errors"
              />
              <div class="flex md:justify-start justify-center items-start">
                <BaseButton
                  class="h-14 px-6 md:px-15 bg-[#FDB21D] text-[#1A1139] rounded-md font-bold text-xl"
                  text="Subscribe"
                  type="submit"
                  :disabled="isProcessing"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- why join with us -->
      <div class="text-center mt-20 md:mt-[150px]">
        <h2
          class="heading-one text-4xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
        >
          Why you should join with us?
        </h2>
        <p class="text-lg text-light-white lg:px-10 mb-12 lg:mb-[70px]">
          Talented software engineers on board, we craft compelling web, and
          mobile applications for our clients. Since our inception, we have
          partnered with numerous companies and delivered operational gains to
          startup, emerging, and established organizations in the World
        </p>
      </div>

      <div class="">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9 pb-[150px]"
        >
          <div
            v-for="(card, index) in joinCards"
            :key="index"
            class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] relative careerSection notInViewPort"
            :class="
              getCardStyle(index) === 0
                ? 'card1'
                : getCardStyle(index) === 2
                ? 'card2'
                : getCardStyle(index) === 3
                ? 'card3'
                : getCardStyle(index) === 5
                ? 'card4'
                : getCardStyle(index) === 1
                ? 'card5'
                : 'card6'
            "
          >
            <div
              class="join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79] cardNew flex justify-center items-center z-[1]"
            >
              <div class="flex flex-col">
                <img
                  class="aspect-square h-10 w-10 mb-4 md:mb-6"
                  :src="card.src"
                  :alt="card.text"
                />
                <p
                  class="text-left text-light-white font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4"
                >
                  {{ card.text }}
                </p>
                <p
                  class="text-left text-light-white font-normal text-base lg:text-lg"
                >
                  {{ card.details }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Core Values -->
      <div class="text-center">
        <h2
          class="heading-one text-4xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[72px] font-semibold text-primary mb-5 lg:mb-6"
        >
          Our Core Values
        </h2>
        <p class="text-lg text-light-white lg:px-10 mb-12 lg:mb-[70px]">
          As well as a team of consultants, analysts, software architects,
          designers and engineers who meticulously understand and value clients'
          vision to passionately deliver transformation through technology
          globally. Our goal is to help clients make full use of technology that
          can heighten brand awareness and lead to better business.
        </p>
      </div>

      <div class="">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9 pb-[150px]"
        >
          <div
            v-for="(card, index) in coreValues"
            :key="index"
            class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] relative careerSectionTwo notInViewPortTwo"
            :class="
              getCardStyle(index) === 0
                ? 'card1'
                : getCardStyle(index) === 2
                ? 'card2'
                : getCardStyle(index) === 3
                ? 'card3'
                : getCardStyle(index) === 5
                ? 'card4'
                : getCardStyle(index) === 1
                ? 'card5'
                : 'card6'
            "
          >
            <div
              class="core-value w-full p-10 rounded-[30px] bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79] cardNew flex justify-center items-center z-[1]"
            >
              <div class="flex flex-col">
                <img
                  class="aspect-square h-10 w-10 mb-4 md:mb-6"
                  :src="card.src"
                  :alt="card.text"
                />
                <p
                  class="text-left text-light-white font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4"
                >
                  {{ card.text }}
                </p>
                <p
                  class="text-left text-light-white font-normal text-base lg:text-lg"
                >
                  {{ card.details }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.applyNowCard {
  flex-shrink: 0;
  border-radius: 20px;
  background: linear-gradient(133deg, #2a1e56 0%, #3d2c79 100%);
  box-shadow: 0px 16px 42px 0px rgba(0, 30, 108, 0.3);
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

.cardBg {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  /* Praimary Color */

  border: 0.5px solid #fdb21d;
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 10px;
}

.card1::before {
  content: "";
  position: absolute;
  top: -4px;
  right: -4px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
  border-top-right-radius: 30px;
}

.card1::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
  border-bottom-left-radius: 30px;
}

.card2::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
  border-top-left-radius: 30px;
}

.card2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
  border-bottom-right-radius: 30px;
}

.card3::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
  border-top-left-radius: 30px;
}

.card3::after {
  content: "";
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
  border-bottom-right-radius: 30px;
}

.card4::before {
  content: "";
  position: absolute;
  top: -4px;
  right: -4px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
  border-top-right-radius: 30px;
}

.card4::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
  border-bottom-left-radius: 30px;
}

.card5::before {
  content: "";
  position: absolute;
  right: -4px;
  bottom: 60px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
}

.card5::after {
  content: "";
  position: absolute;
  left: -4px;
  top: 60px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
}

.card6::before {
  content: "";
  position: absolute;
  right: -4px;
  bottom: 60px;
  width: 120px;
  height: 120px;
  background-color: #fdb21d;
}

.card6::after {
  content: "";
  position: absolute;
  left: -4px;
  top: 60px;
  width: 120px;
  height: 120px;
  background-color: #e93cff;
}

@media (max-width: 767px) {
  // .apply-button {
  //   margin-bottom: 16px !important;
  // }
}

.join-us,
.core-value {
  // height: 360px;
  @apply 2xl:h-[315px] xl:h-[325px] lg:h-[385px] md:h-[285px] h-[260px];
}
.blur-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
}
.modal-box {
  border-radius: 20px 20px 20px 0px;
  background: linear-gradient(145deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 10px 2px 30px 0px rgba(255, 255, 255, 0.3);
}
.polygon-icon {
  color: #322173;
  transform: rotate(242deg);
  // box-shadow: 10px 2px 30px 0px rgba(255, 255, 255, 0.3);
  // background: linear-gradient(145deg, #2a1e56 11.97%, #3d2c79 89.93%);
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 1s ease-in-out;
}
.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}
.textFadeIn-enter-active {
  transition: opacity 1s ease-in-out;
}
.textFadeIn-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.textFadeIn-enter-from,
.textFadeIn-leave-to {
  opacity: 0;
}
.widthheight-enter-active {
  transition: all 1s ease-in-out;
}
.widthheight-leave-active {
  transition: all 1s ease-in-out;
}
.widthheight-enter-from,
.widthheight-leave-to {
  width: 0%;
  height: 0%;
}
.iconwidthheight-enter-active {
  transition: opacity 1s ease-in-out;
}
.iconwidthheight-leave-active {
  transition: opacity 1s ease-in-out;
}
.iconwidthheight-enter-from,
.iconwidthheight-leave-to {
  opacity: 0;
}
@media (min-width: 1280px) {
  .modal-box {
    bottom: 30px;
    left: 30px;
  }
}
@media (max-width: 1279px) {
  .modal-box {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
}
</style>
