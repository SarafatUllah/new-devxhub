<template>
  <div class="2xl:pt-5">
    <div
      class="flex items-center justify-center shadow-xl rounded-[10px] relative bg-white mt-[80px] px-0 sm:px-6 md:px-10 lg:px-4 testimonialCard mx-2 min-h-[359px] max-h-[359px] lg:min-h-[400px] lg:max-h-[400px] 2xl:min-h-[440px] 2xl:max-h-[440px]"
    >
      <!-- h-[430px] sm:h-[430px] md:h-[430px] lg:h-[535px] -->
      <div
        class="userProfileBg bg-[url('/home/testimonial/user_profile_bg_80.webp')] md:bg-[url('/home/testimonial/user_profile_bg_100.webp')] lg:bg-[url('/home/testimonial/user_profile_bg_150.webp')] 2xl:bg-[url('/home/testimonial/user_profile_bg_180.webp')] w-[80px] md:w-[100px] lg:w-[150px] 2xl:w-[180px] h-[80px] md:h-[100px] lg:h-[150px] 2xl:h-[180px] absolute -top-[40px] md:-top-[50px] lg:-top-[75px] 2xl:-top-[90px] left-1/2 -translate-x-1/2 rounded-full flex justify-center"
      >
        <img
          class="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[140px] lg:w-[140px] 2xl:h-[170px] 2xl:w-[170px] relative top-1 lg:top-1 rounded-full"
          :src="images"
          :alt="ownerName"
        />
      </div>

      <div class="px-4 pt-8 lg:pb-12 pb-8 flex flex-col justify-between">
        <div class="text-white lg:mt-[60px] mt-[20px] md:px-2 px-[10px]">
          <!-- <h3 
            class="2xl:text-2xl text-xl font-semibold leading-6 md:leading-8 pb-6 md:pb-0 lg:pb-4 xl:pb-8"
          >
            {{ title }}
          </h3> -->
          <p
            class="text-[14px] lg:text-base xl:text-lg text-[#F0F0F0] max-h-[150px] scroll"
            v-html="description"
          ></p>
          <p class="text-[14px] lg:text-[18px] mt-2 text-[#FDB21D] font-medium">
            - {{ ownerName }}
          </p>
        </div>

        <div class="mt-10 mb-5">
          <h2
            class="text-[#FDB21D] leading-6 text-[20px] lg:text-[24px] font-semibold"
          >
            {{ companyName }}
          </h2>
          <p
            class="text-[#F0F0F0] leading-6 text-[12px] lg:text-[16px] font-bold"
          >
            {{ position }}
          </p>
        </div>
      </div>

      <div
        class="flex justify-end absolute md:right-5 right-4 2xl:bottom-14 md:bottom-8 bottom-10"
      >
        <!-- <a class="text-xs sm:text-base text-black hover:text-orange" href="#"> -->
        <!-- <button>
              <span>See More</span>
              <common-icon class="w-[20px]" icon="long-arrow-right" /></button
          > -->
        <BaseIconInvertedComma
          class="md:w-[70px] lg:w-[90px] w-[32px] md:h-[50px] lg:h-[70px] h-[26px]"
        />
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "companyName",
    "images",
    "ownerName",
    "position",
    "title",
    "description",
  ],
};
</script>

<style lang="scss" scoped>
.testimonialCard {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  /* Praimary Color */

  border: 1px solid #fdb21d;
  /* box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3); */
  border-radius: 30px;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: thin;
  scrollbar-width: thin;
  scrollbar-color: #fdb21d #ececec; /* Firefox 64 */
  &::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: #ececec;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #fdb21d;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #fdb21d;
  }
}
</style>
