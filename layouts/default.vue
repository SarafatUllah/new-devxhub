<script setup>
const route = useRoute();
const config = useRuntimeConfig();
useHead(() => ({
  htmlAttrs: {
    prefix: "og: https://ogp.me/ns#",
  },
  link: [
    {
      key: "canonical",
      rel: "canonical",
      href: config.public.siteUrl + route.path,
    },
  ],
}));

import { useHeaderStore } from "~/stores/header";
// pinia
const { setMobileMenu } = useHeaderStore();
const showChatOptions = ref(false);
let windowWidth = ref("");

const toggleChatOption = () => {
  showChatOptions.value = !showChatOptions.value;
  if (showChatOptions.value) {
    facebookPlugin();
  }
};
onMounted(() => {
  facebookPlugin();
  windowWidth.value = window.innerWidth;

  window.addEventListener("resize", function (e) {
    windowWidth.value = window.innerWidth;
    facebookPlugin();
  });

  setTimeout(() => {
    facebookPlugin();
  }, 500);
});
</script>

<template>
  <div class="bg-[#1A1139]">
    <Header
      role="banner"
      ref="header"
      class="z-10 fixed top-0 left-0 right-0 w-full"
    />
    <div @click.stop="setMobileMenu(false)">
      <div role="main">
        <slot />
      </div>
      <Footer role="contentinfo" />

      <div v-if="windowWidth > 600" class="relative">
        <!-- Facebook Chat Plugin -->
        <div class="!fixed !bottom-[20px] !right-[24px] w-[60px] h-[60px]">
          <div id="fb-root w-full h-full"></div>
          <div id="fb-customer-chat" class="fb-customerchat"></div>
          <a href="http://m.me/106014354867607" target="_blank">
            <BaseIconFbMessenger class="w-[60px] h-[60px] cursor-pointer" />
          </a>
        </div>

        <!-- WhatsApp US -->
        <NuxtLink
          to="https://api.whatsapp.com/send?phone=8801326506464"
          target="_blank"
          aria-label="whatsapp"
        >
          <BaseIconWhatsApp
            class="fixed bottom-[100px] right-[24px] w-[60px] h-[60px] z-10"
          />
        </NuxtLink>
      </div>

      <div v-else class="fixed w-full !bottom-0 z-10">
        <!-- Facebook Chat Plugin -->
        <div
          v-show="showChatOptions"
          class="!fixed !bottom-[85px] !right-[24px] w-[60px] h-[60px] z-[100]"
        >
          <div id="fb-root"></div>
          <div id="fb-customer-chat" class="fb-customerchat"></div>
          <a href="http://m.me/106014354867607" target="_blank">
            <BaseIconFbMessenger class="w-[60px] h-[60px] cursor-pointer" />
          </a>
        </div>

        <!-- WhatsApp US -->
        <NuxtLink
          to="https://api.whatsapp.com/send?phone=8801326506464"
          target="_blank"
          aria-label="whatsapp"
        >
          <BaseIconWhatsApp
            v-if="showChatOptions"
            class="absolute bottom-[160px] right-[24px] w-[60px] h-[60px] z-10"
          />
        </NuxtLink>

        <div class="relative">
          <!-- Discussion Icon -->
          <div
            v-if="!showChatOptions"
            @click="toggleChatOption"
            class="absolute bottom-[0px] md:bottom-[10px] right-[24px] w-[60px] h-[60px] z-10"
          >
            <BaseIconDiscussion
              class="w-[40px] md:w-[60px] h-[40px] md:h-[60px] absolute right-0"
            />
          </div>

          <!-- Cross Icon -->
          <div
            v-if="showChatOptions"
            @click="toggleChatOption"
            class="absolute bottom-[10px] right-[24px] w-[60px] h-[60px] flex justify-center items-center z-10 bg-yellow-400 rounded-full"
          >
            <ClientOnly>
              <fa class="w-6 !h-6" :icon="['fa-solid', 'times']" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "~/assets/scss/default.scss";
.yellowBlackHighLight {
  @apply px-1;
  background: yellow;
  color: black;
  border: 2px solid yellow;
  border-radius: 5px;
}
.blueWhiteHighLight {
  @apply px-1;
  background: rgb(27, 20, 86);
  color: white;
  border: 2px solid rgb(27, 20, 86);
  border-radius: 5px;
}
.lightBlueWhiteHighLight {
  @apply px-1;
  background: #3ecb39;
  color: black;
  border: 2px solid #3ecb39;
  border-radius: 5px;
}
.redBlackHighLight {
  @apply px-1;
  background: rgb(228, 61, 61);
  color: black;
  border: 2px solid rgb(228, 61, 61);
  border-radius: 5px;
}
.technologyStackHighLight {
  @apply px-1;
  background: #fdb21d;
  color: black;
  border: 2px solid #fdb21d;
  border-radius: 5px;
}
iframe {
  bottom: 20px !important;
}
.fb_dialog_content iframe {
  bottom: 20px !important;
}

@media (max-width: 600px) {
  iframe {
    bottom: 84px !important;
  }
  .fb_dialog_content iframe {
    bottom: 84px !important;
  }
}
</style>
