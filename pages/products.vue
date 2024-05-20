<script setup>
const title = "Our Products | DEVxHUB";
const description =
  "Some of our products are White Board for Students, Ramadan Time App, DEVxHUB Developer's Checklist";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
const cards = ref([
  {
    src: "/products/white-board-student.svg",
    text: "White Board for Students",
    siteLink: "/",
    playStoreLink: "",
    appStoreLink: "",
  },
  {
    src: "/products/ramadan-icon-w.svg",
    text: "Ramadan Time App",
    siteLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.devxhub.ramadantimes",
    appStoreLink:
      "https://apps.apple.com/ua/app/ramadan-times-devxhub/id6446602176",
  },
  {
    src: "/products/DEVxHUB_developers_checklist.svg",
    text: "DEVxHUB Developer's Checklist",
    siteLink: "",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.devxhub.todo",
    appStoreLink: "",
  },
]);
onMounted(() => {
  setTimeout(() => {
    const allAboutUs = document.querySelectorAll(".ourClientSection");
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((singleDiv) => {
        if (singleDiv.isIntersecting) {
          singleDiv.target.classList.remove("notInViewPort");
          singleDiv.target.classList.add("nowInViewPort");
        } else if (!singleDiv.isIntersecting) {
          singleDiv.target.classList.add("notInViewPort");
          singleDiv.target.classList.remove("nowInViewPort");
        }
      });
    });
    allAboutUs.forEach((item) => {
      observer.observe(item);
    });
  }, 700);
});
</script>

<template>
  <section class="container-fluid">
    <div class="pt-[100px] ourClientSection">
      <div>
        <h1
          class="text-center text-5xl mt-5 mb-8 font-semibold leading-loose text-primary"
        >
          Our Products
        </h1>
        <p class="text-[#F0F0F0] text-lg text-center"></p>
      </div>

      <div class="flex flex-wrap justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9 pb-[150px] mx-auto mt-20 lg:hidden"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            :class="index === 0 || index === 2 || index === 4 ? 'lg:mt-20' : ''"
          >
            <div
              class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
            >
              <div class="flex flex-col h-full p-10 justify-between">
                <div class="flex flex-col space-y-10">
                  <div class="h-[200px] flex flex-col justify-center">
                    <img
                      :src="card.src"
                      :alt="card.text"
                      class="h-full aspect-square object-contain"
                    />
                  </div>
                  <p
                    class="text-center text-primary font-semibold text-xl lg:text-3xl"
                  >
                    {{ card.text }}
                  </p>
                </div>

                <NuxtLink
                  v-if="card.siteLink !== '' && card.siteLink !== '/'"
                  :to="card.siteLink"
                  target="_blank"
                  class="text-white bottom-0 text-center cursor-pointer"
                  aria-label="Visit Now >"
                >
                  Visit Now >
                </NuxtLink>

                <div v-else class="flex justify-center">
                  <a
                    v-if="card.appStoreLink !== ''"
                    :href="card.appStoreLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="app store badge, DEVxHUB"
                  >
                    <img
                      class="xl:w-[124px] lg:w-[110px] w-[106px] xl:h-12 h-10 p-[7px]"
                      src="/badge/app-store-badge.svg"
                      alt="app store badge, DEVxHUB"
                    />
                  </a>
                  <a
                    v-if="card.playStoreLink !== ''"
                    :href="card.playStoreLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="google play badge, DEVxHUB"
                  >
                    <img
                      class="xl:w-[124px] lg:w-[110px] w-[106px] xl:h-12 h-10"
                      src="/badge/google-play-badge.png"
                      alt="google play badge, DEVxHUB"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex space-x-10 mt-20 md:my-20">
          <div class="flex flex-col space-y-10 lg:mt-24">
            <div
              class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <img
                      class="h-[200px] aspect-square object-contain"
                      src="/products/white-board-student.svg"
                      alt="CX Brainstorm"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      White Board for Students
                    </p>
                  </div>

                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer hidden"
                    aria-label="Visit Now >"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-10">
            <div
              class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <img
                      class="h-[200px] aspect-square object-contain"
                      src="/products/ramadan-icon-w.svg"
                      alt="SharpArchive"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Ramadan Time App
                    </p>
                  </div>

                  <div class="flex justify-center">
                    <a
                      href="https://apps.apple.com/ua/app/ramadan-times-devxhub/id6446602176"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="xl:w-[124px] lg:w-[110px] w-[106px] xl:h-12 h-10 p-[7px]"
                        src="/badge/app-store-badge.svg"
                        alt="app store badge, DEVxHUB"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.devxhub.ramadantimes"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="google play badge, DEVxHUB"
                    >
                      <img
                        class="xl:w-[124px] lg:w-[110px] w-[106px] xl:h-12 h-10"
                        src="/badge/google-play-badge.png"
                        alt="google play badge, DEVxHUB"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-10 lg:mt-24">
            <div
              class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <div class="flex flex-col justify-center h-[200px]">
                      <img
                        class="h-full aspect-square object-contain"
                        src="/products/DEVxHUB_developers_checklist.svg"
                        alt="DEVxHUB Developer's Checklist"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      DEVxHUB Developer's Checklist
                    </p>
                  </div>

                  <div class="flex justify-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.devxhub.todo"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="google play badge, DEVxHUB"
                    >
                      <img
                        class="xl:w-[124px] lg:w-[110px] w-[106px] xl:h-12 h-10"
                        src="/badge/google-play-badge.png"
                        alt="google play badge, DEVxHUB"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.cardBg {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 30px;
}
</style>
