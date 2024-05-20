<script setup>
defineProps({
  successTitle: {
    type: String,
    default: "",
  },
  successRate: {
    type: String,
    default: "",
  },
  successDescription: {
    type: String,
    default: "",
  },
  successBg: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="text-white flex flex-col pl-[50px] pr-[31px] py-[64px] rounded-lg border text-left border-[#9D3566] h-full storyCard"
    :style="{
      background: successBg,
    }"
  >
    <div
      class="text-[#1AE6D5] text-5xl flex justify-start space-x-2 font-medium !leading-[62px]"
    >
      <span>{{ successRate }}</span
      ><span class="text-2xl !leading-[62px] mt-1">%</span>
    </div>
    <div
      class="text-xl uppercase text-[#FDB21D] font-medium mt-[20px] mb-[30px]"
    >
      {{ successTitle }}
    </div>
    <div class="flex-grow text-xl font-light">
      {{ successDescription }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storyCard:hover {
  box-shadow: 0px 16px 42px 0px rgba(0, 30, 108, 0.3);
}
</style>
