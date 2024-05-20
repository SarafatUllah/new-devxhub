<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, email } from "@vuelidate/validators";

const title = "FAQ | DEVxHUB";
const description =
  "Frequently Asked Questions (FAQ) about DEVxHUB Services. If you have any questions, please contact us. We will try to answer your questions as soon as possible.";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});

// types
interface Question {
  email: string;
  name: string;
  subject: string;
  question: string;
}

interface FaqInfo {
  id: string;
  title: string;
  description: string;
}
// State
const faqInfo = ref(<FaqInfo[]>[
  {
    id: "1",
    title: "Who can be a customer at DEVxHUB ?",
    description: "Anyone here can be a customer for our all IT Services.",
  },
  {
    id: "2",
    title: "How can we do the order ?",
    description:
      "Please visit our service pages and follow the order system. If you have any problems, just contact us.",
  },
  {
    id: "3",
    title: "How do we finish a job ?",
    description:
      "Define requirements, plan project, develop software, test thoroughly, document, deploy, train users, review, support, close project.",
  },
  {
    id: "4",
    title: "How do we make payments ?",
    description:
      "We're open for any sorts of payment system to be paid. For example: Payoneer, Wise.com, Moneygram.com, remitly.com, Direct Bank Transfer, Wire, Debit/Credit card etc.",
  },
  {
    id: "5",
    title: "How do we get support ?",
    description:
      "Please open our <a href='/contact-us' class='cursor-pointer text-[#fdb21d]'>support ticket</a> page and complete the form - then submit it.",
  },
  {
    id: "6",
    title: "How we get instant support ?",
    description:
      "At first, submit your ticket in our <a href='/contact-us' class='cursor-pointer text-[#fdb21d]'>support ticket</a> page. Then let us know by phone.",
  },
  {
    id: "7",
    title: "Can we get monthly or yearly support ?",
    description: "Yes, of course. But for that, you have to contact with us.",
  },
]);

const feedback = ref<Question>({
  email: "",
  name: "",
  subject: "",
  question: "",
});
const isProcessing = ref<boolean>(false);
// Validations
const validations = computed(() => {
  return {
    email: { required, email },
    name: { required },
    subject: { required },
    question: { required, maxLength: maxLength(500) },
  };
});
const $v = useVuelidate(validations, feedback);
// Methods
const submitQuestions = () => {
  if ($v.value.$invalid) {
    $v.value.$touch();
    return;
  }
};
// Toggle FAQ
const expandedItem = ref<string>("");
const toggle = (id: string) => {
  if (expandedItem.value === id) {
    expandedItem.value = "";
  } else {
    expandedItem.value = id;
  }
};
const isExpanded = (id: string) => {
  return expandedItem.value === id;
};
let windowWidth = 0;
// setTimeout(() => {
//   windowWidth = window.innerWidth;
// }, 100);

const getHeight = (id: string) => {
  windowWidth = window.innerWidth;

  const element = document.getElementById("answer" + id);
  if (element) {
    const faqHeight = element.clientHeight + (windowWidth < 600 ? 80 : 100);
    return faqHeight;
  }
};
</script>

<template>
  <div class="min-h-screen container-fluid">
    <div v-if="faqInfo" class="pt-48">
      <h1
        class="text-center md:text-5xl text-4xl font-semibold leading-[50px] text-primary mb-[62px]"
      >
        Frequently Asked Questions
      </h1>
      <div
        v-for="(faq, index) in faqInfo"
        :key="index"
        class="text-[#F0F0F0] bg-[linear-gradient(145.09deg,#2A1E56_11.97%,#3D2C79_89.93%)] rounded-[10px] mb-5 overflow-hidden transition-all duration-500 ease-in-out min-h-[80px] md:min-h-[100px]"
        :style="{
          height:
            !isExpanded(faq.id) && windowWidth < 600
              ? '80px'
              : !isExpanded(faq.id) && windowWidth > 600
              ? '100px'
              : `${getHeight(faq.id)}px`,
        }"
      >
        <div
          class="px-3.5 py-4 md:px-10 min-h-[80px] md:min-h-[100px] w-full flex flex-row space-x-4 justify-between items-center cursor-pointer"
          @click="toggle(faq.id)"
        >
          <h2
            class="min-h-full flex items-center font-medium text-sm md:text-2xl"
          >
            {{ faq.title }}
          </h2>
          <p
            class="p-2 rounded md:rounded-[10px] flex justify-center items-center transition-all duration-500 ease-in-out"
            :class="!isExpanded(faq.id) ? 'bg-[#FDB21D]' : 'bg-[#161641]'"
          >
            <ClientOnly>
              <fa
                class="text-2xl"
                :class="
                  !isExpanded(faq.id) ? 'text-[#1A1139]' : 'text-[#FDB21D]'
                "
                :icon="['fas', `${!isExpanded(faq.id) ? 'plus' : 'minus'}`]"
              />
            </ClientOnly>
          </p>
        </div>
        <div
          :id="'answer' + faq.id"
          class="h-auto pb-6 scroll font-normal text-xs md:text-xl opacity-75 px-4 md:px-10"
          v-html="faq.description"
        ></div>
      </div>
    </div>
    <div class="py-20 md:py-26">
      <h2
        class="md:text-5xl text-2xl md:mt-0 mt-8 text-center text-[#FDB21D] pb-20 font-semibold"
      >
        Do you have any Questions?
      </h2>
      <form
        novalidate
        @submit.prevent="submitQuestions"
        class="flex flex-col w-full mx-auto space-y-3"
      >
        <div
          class="w-full flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0"
        >
          <div class="w-full md:w-1/2">
            <label class="text-[#FDB21D]"
              >Email Address<span class="text-[#ff0000]">*</span></label
            >
            <BaseInputText
              id="email"
              type="email"
              text-input=" p-4 rounded-lg shadow-3xl border border-[#F0F0F0]"
              input-wrapper="inputWrapper"
              place-holder="What's your email?"
              color="#fff"
              background=""
              placeHolderColor="#767474"
              required
              v-model.trim="$v.email.$model"
              :error="$v.email.$error"
              :error-message="$v.email.$errors"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label class="text-[#FDB21D]"
              >Full Name<span class="text-[#ff0000]">*</span></label
            >

            <BaseInputText
              id="name"
              type="text"
              text-input=" p-4 rounded-lg shadow-3xl border border-[#F0F0F0]"
              input-wrapper="inputWrapper"
              place-holder="White your name"
              color="#fff"
              background=""
              placeHolderColor="#767474"
              required
              v-model.trim="$v.name.$model"
              :error="$v.name.$error"
              :error-message="$v.name.$errors"
            />
          </div>
        </div>
        <BaseInputText
          id="subject"
          type="text"
          text-input=" p-4 rounded-lg shadow-3xl border border-[#F0F0F0]"
          input-wrapper="inputWrapper "
          place-holder="White your subject"
          label="Subject"
          labelColor="#FDB21D"
          color="#fff"
          background=""
          placeHolderColor="#767474"
          v-model.trim="$v.subject.$model"
          :error="$v.subject.$error"
          :error-message="$v.subject.$errors"
        />
        <div>
          <label class="text-[#FDB21D]"
            >Question<span class="text-[#ff0000]">*</span></label
          >
          <BaseInputTextArea
            id="question"
            place-holder="Tell us more about your project, needs and timeline."
            name="question"
            color="#fff"
            background=""
            class-style-name="rounded-lg outline-none md:text-lg text-md shadow-3xl border border-[#F0F0F0] resize-none placeholder-[#767474] placeholder-opacity-50"
            rows="8"
            required
            v-model.trim="$v.question.$model"
            :error="$v.question.$error"
            :error-message="$v.question.$errors"
          />
        </div>

        <div class="flex justify-start">
          <BaseButton
            class="my-7 h-13 px-6 md:px-15 bg-[#FDB21D] text-[#1A1139] rounded-md font-bold text-xl"
            text="Send"
            type="submit"
            :disabled="isProcessing"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/pages/faq.scss";
</style>
