<script setup></script>
<template>
  <div
    class="flex flex-col gap-y-12 lgdx:grid lgdx:grid-rows-1 lgdx:grid-cols-12 lgdx:gap-x-7 pt-16 md:pt-20 xl:pt-28"
  >
    <div class="text-center lgdx:text-right lgdx:col-span-5 self-center">
      <img
        class="inline lgdx:ml-3 lgdx:mt-[10px] w-[35.5vw] h-[35.5vw] max-w-[559px] max-h-[559px] aspect-square object-contain"
        src="/about-us/our-mission.svg"
        alt="facilities"
      />
    </div>
    <div class="lgdx:order-first lgdx:col-span-7 extra-lg">
      <h2
        class="text-center lgdx:text-left md:text-4xl text-3xl small-laptop:text-5.5xl leading-[46px] small-laptop:leading-[64px] font-semibold text-primary mb-[12px] lgdx:mb-[14px]"
      >
        Our Mission
      </h2>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#0993D0]"></span>
        <p class="paragraph-style">
          To work constantly in achieving the highest quality Support..
        </p>
      </div>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#09AB8A]"></span>
        <p class="paragraph-style">
          To encourage creativity, ethics and value in our organization and
          ensure accountability of each employee towards the goals of the
          company.
        </p>
      </div>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#F79421]"></span>
        <p class="paragraph-style">
          To constantly strive, innovate and introduce latest modern technology
          in harmony with requirements of future.
        </p>
      </div>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#E73829]"></span>
        <p class="paragraph-style">
          To establish ourselves as one of the key players in the IT Sector.
        </p>
      </div>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#DA0E80]"></span>
        <p class="paragraph-style">
          To become top quality IT organization by building standards in quality
          and reliability for products and services.
        </p>
      </div>

      <div class="flex mb-4 relative pt-1">
        <!-- <div>
          <BaseIconRightArrow
            class="rounded-md lg:mt-1 text-white w-5 h-5"
            icon="circle-check"
          />
        </div> -->
        <span class="icon-style bg-[#44849E]"></span>
        <p class="paragraph-style">
          To provide the finest IT solutions globally.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paragraph-style {
  @apply font-normal text-[#F0F0F0] text-base md:text-lg lg:text-[18px] leading-[28px] text-left ml-4 md:ml-3 z-[2];
}
.icon-style {
  @apply text-[#00BF8D] pr-3 z-[1] rounded-[20px] w-[34px] h-[34px] self-start absolute top-0 opacity-80;
  list-style: circle;
}
</style>
