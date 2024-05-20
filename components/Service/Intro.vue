<script setup>
defineProps({
  intro: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-end md:justify-center overflow-hidden"
  >
    <div class="w-full md:w-1/2 mt-20">
      <div
        class="text-center sm:text-left flex flex-col items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 w-full"
      >
        <h1
          class="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FDB21D]"
        >
          {{ intro.title }}
        </h1>
        <p
          class="text-base sm:text-xl lg:text-2xl leading-8 lg:leading-[42px] text-white"
        >
          {{ intro.description }}
        </p>
        <NuxtLink
          :to="intro.link"
          :aria-label="intro.linkText"
          class="flex justify-center w-40 xl:w-48 h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
        >
          <span>{{ intro.linkText }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="sm:w-1/2 h-full pt-12 sm:pb-0 md:!pl-8 lg:!pl-32 mr-2">
      <img
        class="intro_img"
        :style="{
          '--width': intro.width,
          '--height': intro.height,
          '--mobileWidth': intro.mobileWidth,
          '--mobileHeight': intro.mobileHeight,
          '--maxWidth': intro.maxWidth,
          '--maxHeight': intro.maxHeight,
        }"
        :src="intro.image"
        :alt="intro.title"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro_img {
  width: var(--width);
  height: var(--height);
  max-width: var(maxWidth);
  max-height: var(maxHeight);
}
@media (max-width: 767px) {
  .intro_img {
    width: var(--mobileWidth);
    height: var(--mobileHeight);
  }
}
</style>
