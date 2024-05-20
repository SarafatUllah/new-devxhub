<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// const carousel = ref(null);
const companies = ref([
  {
    companyName: "ERPGAP",
    ownerName: "Diogo Duarte",
    image: "/home/testimonial/diago_Duarte.webp",
    position: "CTO",
    title: "",
    description:
      "We worked with DEVxHUB to do Nuxt.js and Astro.build development and they are very responsive and professional. I highly recommend working with DevxHub Team",
  },
  {
    companyName: "Maat K12 & NowMeta IO",
    ownerName: "Avery Brandon Evans",
    image: "/home/testimonial/user_profile.svg",
    position: "Founder & CE0",
    title: "",
    description:
      "As a business owner in the USA, finding the right software solutions is critical for our growth and development. It was in the midst of this search that we discovered DEVxHUB, a software company that completely redefined our understanding of innovation, efficiency, and service excellence.<br>We couldn’t be more delighted with our decision to partner with DEVxHUB. They’ve proven themselves to be an asset to our operations, a trusted advisor, and an indispensable partner in our continued growth and success. To any company searching for software solutions that drive results, we highly recommend DEVxHUB. They are the embodiment of technological innovation and customer-centric service.",
  },
  {
    companyName: "Iscaneo",
    ownerName: "Fabien Keller",
    image: "/home/testimonial/Fabien_keller.webp",
    position: "CE0",
    title: "",
    description:
      "Working with DEVxHUB was an amazing experience and a very smart move for our company. Great deliveries, fantastic experience with the team, they also have a technical expertise in many fields (web, mobile, APIs and more). An international collaboration is also possible : we’ve been working hand in hand with our teams based in Europe and Brazil. Massive thanks to the whole team.",
  },
  {
    companyName: "SharpArchive",
    ownerName: "Chad Gordon",
    image: "/home/testimonial/chad_gordon.webp",
    position: "CE0",
    title: "",
    description:
      "I have worked with DEVxHUB for three years and will continue to work with them long into the future. We have worked together from idea inception to product launch. I can’t imagine having a better partner in carrying out our vision. They have persisted through countless challenges and have a complete commitment to quality, creating my vision, and most importantly to user experience. I personally know next to nothing about tech development. Because of this, it was essential to work with a company with clear and responsive communication. They will work tirelessly for you and the technology you wish to create. As a result of this, we successfully brought our product to market only one year after we first started working with them. We are now growing our user base and expect to be profitable within one year. This would not have been possible without DEVxHUB. We highly recommend them to anyone looking to bring their ideas into reality.",
  },
]);
const myCarousel = ref(null);
</script>

<template>
  <div class="container mx-auto">
    <div
      class="pt-16 lg:pt-40 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-40 relative"
    >
      <h2 class="md:text-2xl text-xl font-semibold text-center text-primary">
        Testimonials
      </h2>
      <h2
        class="mt-[20px] mb-5 lg:mb-10 dark:text-white text-center text-3xl leading-[30px] md:text-[40px] md:leading-[55px] font-bold text-white"
      >
        What people think of us
      </h2>

      <div class="relative">
        <carousel
          ref="myCarousel"
          :paginationSize="8"
          paginationColor="#BABABA"
          paginationActiveColor="#FAAF04"
          :navigationEnabled="false"
          :loop="true"
          :centerMode="true"
          :autoplay="0"
          :wrapAround="true"
          :perPageCustom="[[320, 1]]"
        >
          <slide
            class="flex flex-col overflow-hidden max-h-[470px] min-h-[470px] lg:max-h-[510px] lg:min-h-[510px] 2xl:max-h-[550px] 2xl:min-h-[550px]"
            v-for="(company, index) in companies"
            :key="index"
          >
            <div class="">
              <HomeTestimonialsData
                :images="company.image"
                :companyName="company.companyName"
                :ownerName="company.ownerName"
                :position="company.position"
                :title="company.title"
                :description="company.description"
              />
            </div>
          </slide>
        </carousel>
        <div
          class="arrow-icon absolute md:-left-[22px] -left-[12px] top-[55%] transform -translate-y-1/2 cursor-pointer"
          @click="myCarousel.prev()"
        >
          <ClientOnly>
            <fa class="text-[#fdb21d] md:text-3xl text-2xl" :icon="['fas', 'arrow-left']" />
          </ClientOnly>
        </div>
        <div
          class="arrow-icon absolute md:-right-[22px] -right-[12px] top-[55%] transform -translate-y-1/2 cursor-pointer"
          @click="myCarousel.next()"
        >
          <ClientOnly>
            <fa
              class="text-[#fdb21d] md:text-3xl text-2xl"
              :icon="['fas', 'arrow-right']"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.VueCarousel-slide {
  @apply rounded-md bg-transparent h-full pt-5;
  position: relative;
  text-align: center;
  justify-content: end;
}
.arrow-icon {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  /* Praimary Color */

  border: 1px solid #fdb21d;
  /* box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3); */
  @apply rounded-full flex justify-center items-center;
  width: 60px;
  height: 60px;
  padding: 16px;
  box-shadow: 6px 10px 20px #22283133;
}
@media (max-width: 767px){
  .arrow-icon{
    width: 40px;
    height: 40px;
  }
}
</style>
