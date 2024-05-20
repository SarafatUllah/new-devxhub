<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, email } from "@vuelidate/validators";
import { vMaska } from "maska";

const title = "Contact Us";
const description =
  "Email: info@devxhub.com, support@devxhub.com, sales@devxhub.com. Phone: +880 1912-027073. Address: 158/27, Boalia, Kazla, Rajshahi-6204, Bangladesh.";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});

// types
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  question: string;
  color: string;
  opacity: number;
}
interface Subject {
  id: number;
  value: string;
  label: string;
  disabled: boolean;
}
// State
const contactForm = reactive<ContactForm>({
  name: "",
  email: "",
  phone: "",
  subject: "Select",
  question: "",
  color: "#767474",
  opacity: 50,
});
const route = useRoute();
const isProcessing = ref<boolean>(false);
const subjects = ref<Subject[]>([
  { id: 1, value: "Select", label: "Select subject", disabled: true },
  {
    id: 2,
    value: "Dedicated Developer",
    label: "Dedicated Developer",
    disabled: false,
  },
  {
    id: 3,
    value: "Dedicated Team",
    label: "Dedicated Team",
    disabled: false,
  },
  { id: 4, value: "General", label: "General", disabled: false },
  { id: 5, value: "Support", label: "Support", disabled: false },
  { id: 6, value: "Sales", label: "Sales", disabled: false },
  { id: 7, value: "Billing", label: "Billing", disabled: false },
  { id: 8, value: "Jobs", label: "Jobs", disabled: false },
]);
// Validations
const validatePhoneNumber = (phoneNumber: any) => {
  // Regular expression to match a phone number with an optional country code
  var phoneRegex = /^\+\d{1,3}\s?\d{6,14}$/;

  if (phoneRegex.test(phoneNumber)) {
    // The phone number is valid with a country code
    return true;
  } else {
    // The phone number is invalid or does not have a country code
    return false;
  }
};
const validations = computed(() => {
  return {
    name: { required, maxLength: maxLength(40) },
    email: { required, email },
    phone: { required, validatePhoneNumber },
    question: { required, maxLength: maxLength(500) },
  };
});

watch(
  () => contactForm.subject,
  (value) => {
    contactForm.color = "#F0F0F0";
    contactForm.opacity = 100;
  }
);

const $v = useVuelidate(validations, contactForm);
// Methods
const submitForm = async () => {
  if (contactForm.name && contactForm.email && contactForm.question) {
    const submitToAPI = await $fetch("/api/posts/contacts", {
      method: "POST",
      body: JSON.stringify({
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        subject: contactForm.subject,
        question: contactForm.question,
      }),
    });
    if (submitToAPI) {
      useNuxtApp().$toast("clear");
      useNuxtApp().$toast("success", {
        message: "We will contact with you as soon as possible.",
        className: "alert_success",
      });
    }
  } else {
    useNuxtApp().$toast("clear");
    useNuxtApp().$toast("error", {
      message: "Please fill the required fill.",
      className: "alert_error",
    });
  }
};
</script>

<template>
  <section
    class="container-fluid h-full pt-32 md:pt-40 lg:pt-44 pb-0 contact_body"
  >
    <h1 class="text-center font-semibold text-primary text-3xl lg:text-5xl">
      Contact Us
    </h1>
    <h2
      class="pt-28 text-center lg:text-left text-white text-[32px] font-semibold"
    >
      Get in touch with <span class="text-primary">US</span>
    </h2>

    <div
      class="w-full h-full text-light-white flex flex-col md:flex-row space-y-8 md:space-y-0 2xl:space-x-20 md:space-x-8 pt-8"
    >
      <iframe
        class="form"
        src="https://share.hsforms.com/1U9RBw6UPRSiATpr8lV6EgAqpg9i"
        frameborder="0"
        title="Hubspot Contact Form"
      ></iframe>

      <div
        class="bg-transparent min-[1210px]:w-full w-1/2 text-light-white flex flex-col self-center lg:self-start py-0 appointment-address p-0 xl:p-0 shadow-lg rounded-2xl space-y-9 mb-10 lg:mb-0 justify-between lg:items-center"
      >
        <div
          class="text-black min-[1210px]:w-auto w-full flex min-[1210px]:flex-nowrap min-[1210px]:flex-row flex-col min-[1210px]:space-x-4 min-[1210px]:space-y-0 justify-center"
        >
          <div
            class="flex flex-col address-box rounded-lg py-4 2xl:px-[30px] lg:px-[16px] px-[30px] min-[1210px]:w-auto w-full"
          >
            <div
              class="pb-4 border-b border-[#FDB21D] flex justify-center items-center"
            >
              <h2 class="text-lg 2dx:text-xl font-semibold">
                Bangladesh Office
              </h2>
            </div>
            <div class="mt-4 flex flex-col space-y-5">
              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/phone.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-semibold">
                    Call / WhatsApp:
                  </p>
                  <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                    +880 1326 506464
                  </p>
                  <p class="text-base 2dx:text-lg font-semibold">Call:</p>
                  <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                    +880 1912 027073
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/email.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div>
                  <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                    info@devxhub.com
                  </p>
                  <p
                    class="text-base 2dx:text-lg lg:pb-[10px] font-normal block"
                  >
                    career@devxhub.com
                  </p>
                  <p
                    class="text-base 2dx:text-lg lg:pb-[10px] font-normal block"
                  >
                    career-intern@devxhub.com
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/location.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-normal">
                    158/27, Boalia, Kazla,
                  </p>
                  <p class="text-base 2dx:text-lg font-normal">
                    Rajshahi-6204,
                  </p>
                  <p class="text-base 2dx:text-lg font-normal">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col address-box rounded-lg py-4 2xl:px-[30px] lg:px-[16px] px-[30px] min-[1210px]:mt-0 mt-4 min-[1210px]:w-auto w-full"
          >
            <div
              class="pb-4 border-b border-[#FDB21D] flex justify-center items-center"
            >
              <h2 class="text-lg 2dx:text-xl font-semibold">USA Office</h2>
            </div>
            <div class="mt-4 flex flex-col space-y-5">
              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/phone.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-semibold">
                    Call / WhatsApp:
                  </p>
                  <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                    +1 612 300-7711
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/email.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                  info-usa@devxhub.com
                </p>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/location.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-normal">
                    903 1st Street North #1061 Hopkins
                  </p>
                  <p class="text-base 2dx:text-lg font-normal">MN 55343</p>
                  <p class="text-base 2dx:text-lg font-normal">United States</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col address-box rounded-lg py-4 2xl:px-[30px] lg:px-[16px] px-[30px] min-[1210px]:mt-0 mt-4 min-[1210px]:w-auto w-full"
          >
            <div
              class="pb-4 border-b border-[#FDB21D] flex justify-center items-center"
            >
              <h2 class="text-lg 2dx:text-xl font-semibold">Finland Office</h2>
            </div>
            <div class="mt-4 flex flex-col space-y-5">
              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/phone.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-semibold">
                    Call / WhatsApp:
                  </p>
                  <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                    +358 402545717
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/email.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <p class="text-base 2dx:text-lg lg:pb-[10px] font-normal">
                  info-finland@devxhub.com
                </p>
              </div>

              <div class="flex gap-4">
                <img
                  src="/home/footer-social/address-icon/location.svg"
                  alt=""
                  srcset=""
                  class="w-6 h-6 mt-1"
                />
                <div class="flex flex-col gap-1 lg:gap-[5px]">
                  <p class="text-base 2dx:text-lg font-normal">
                    Viulutie 1 A 1,
                  </p>
                  <p class="text-base 2dx:text-lg font-normal">
                    00420 Helsinki, Uusimaa,
                  </p>
                  <p class="text-base 2dx:text-lg font-normal">Finland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/pages/contact.scss";
</style>
