<script setup>
const title = "Our Clients | DEVxHUB";
const description =
  "Some of our clients are CX Brainstorm, University of Maat, Sharp Archive, LiveCX, Now Meta, Go Velo, Le Nouvelliste, Khemetic Nation, Hospital Note, Farenow";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
const cards = ref([
  {
    src: "/ourClients/brainStorm.svg",
    text: "CX Brainstorm",
    siteLink: "https://cxbrainstorm.com/",
  },
  {
    src: "/ourClients/maatUniversity.svg",
    text: "University of Maat",
    siteLink: "https://maatk12.com/",
  },
  {
    src: "/ourClients/sharpArchive.svg",
    text: "Sharp Archive",
    siteLink: "https://sharparchive.com/",
  },
  {
    src: "/ourClients/liveCx.svg",
    text: "LiveCX",
    siteLink: "https://livecx.com/",
  },
  {
    src: "/ourClients/nowMetaLogo.png",
    text: "Now Meta",
    siteLink: "https://nowmeta.io/",
  },
  {
    src: "/ourClients/goVelo.png",
    text: "Go Velo",
    siteLink: "https://go-velo.cc/",
  },
  {
    src: "/ourClients/leNouvelliste.svg",
    text: "Le Nouvelliste",
    siteLink: "https://lenouvelliste.com/",
  },
  {
    src: "/ourClients/khemetic.webp",
    text: "Khemetic Nation",
    siteLink: "https://www.khemetic.com/",
  },
  {
    src: "/ourClients/hospitalNote.png",
    text: "Hospital Note",
    siteLink: "https://hospitalnote.com/",
  },
  {
    src: "/ourClients/farenow.svg",
    text: "Farenow",
    siteLink: "https://www.farenow.com/",
  },
  {
    src: "/ourClients/healing.svg",
    text: "One World Family",
    siteLink: "https://healing-dev.netlify.app/",
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
          Our Clients
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
                  :to="card.siteLink"
                  target="_blank"
                  class="text-white bottom-0 text-center cursor-pointer"
                >
                  Visit Now >
                </NuxtLink>
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
                      src="/ourClients/brainStorm.svg"
                      alt="CX Brainstorm"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      CX Brainstorm
                    </p>
                  </div>

                  <NuxtLink
                    to="https://cxbrainstorm.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
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
                      src="/ourClients/maatUniversity.svg"
                      alt="University of Maat"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      University of Maat
                    </p>
                  </div>

                  <NuxtLink
                    to="https://maatk12.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <div class="h-[200px] flex flex-col justify-center">
                      <img
                        class="h-[200px] aspect-square object-contain"
                        src="/ourClients/leNouvelliste.svg"
                        alt="Le Nouvelliste"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Le Nouvelliste
                    </p>
                  </div>

                  <NuxtLink
                    to="https://lenouvelliste.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              class="flex justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <div class="h-[200px] flex flex-col justify-center">
                      <img
                        class="h-[200px] aspect-square object-contain"
                        src="/ourClients/healing.svg"
                        alt="One World Family"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      One World Family
                    </p>
                  </div>

                  <NuxtLink
                    to="https://healing-dev.netlify.app/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
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
                      src="/ourClients/sharpArchive.svg"
                      alt="SharpArchive"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Sharp Archive
                    </p>
                  </div>

                  <NuxtLink
                    to="https://sharparchive.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
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
                      src="/ourClients/liveCx.svg"
                      alt="LiveCX"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      LiveCX
                    </p>
                  </div>

                  <NuxtLink
                    to="https://livecx.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              class="justify-center items-center from-[#2A1E56] to-[#3D2C79] w-[300px] lgx:w-[350px] 2xl:w-[405px] h-[460px]"
            >
              <div
                class="w-full h-full rounded-[30px] cardBg from-[#2A1E56] to-[#3D2C79] flex justify-center items-center z-[1]"
              >
                <div class="flex flex-col h-full p-10 justify-between">
                  <div class="flex flex-col space-y-10">
                    <div class="flex flex-col justify-center h-[200px]">
                      <img
                        class="h-[200px] aspect-square object-contain"
                        src="/ourClients/khemetic.webp"
                        alt="Khemetic Nation"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Khemetic Nation
                    </p>
                  </div>

                  <NuxtLink
                    to="https://www.khemetic.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
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
                        src="/ourClients/farenow.svg"
                        alt="Farenow"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Farenow
                    </p>
                  </div>

                  <NuxtLink
                    to="https://www.farenow.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
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
                        src="/ourClients/nowMetaLogo.png"
                        alt="Now Meta"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Now Meta
                    </p>
                  </div>

                  <NuxtLink
                    to="https://nowmeta.io/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
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
                      src="/ourClients/goVelo.png"
                      alt="Go Velo"
                    />
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Go Velo
                    </p>
                  </div>

                  <NuxtLink
                    to="https://go-velo.cc/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
                </div>
              </div>
            </div>
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
                        src="/ourClients/hospitalNote.png"
                        alt="Hospital Note"
                      />
                    </div>
                    <p
                      class="text-center text-primary font-semibold text-xl lg:text-3xl"
                    >
                      Hospital Note
                    </p>
                  </div>

                  <NuxtLink
                    to="https://hospitalnote.com/"
                    target="_blank"
                    class="text-white bottom-0 text-center cursor-pointer"
                  >
                    Visit Now >
                  </NuxtLink>
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
