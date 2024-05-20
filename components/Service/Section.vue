<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="pt-36 pl-10 xl:pl-0 space-y-[70px]">
    <div class="w-[90%] text-center mx-auto space-y-6">
      <h2
        class="text-primary text-3xl md:text-4xl xl:text-[46px] font-semibold"
      >
        {{ service.title }}
      </h2>
      <p class="text-white text-xl md:text-2xl">
        {{ service.description }}
      </p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-20 2dx:gap-x-28 gap-y-5 xl:gap-y-6 2dx:gap-y-7"
    >
      <template v-for="(item, index) in service.items" :key="item.id">
        <div
          class="flex items-center gap-5 card h-auto relative"
          :class="
            index === service.items.length - 1 && index % 2 === 0
              ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto'
              : ''
          "
          :style="{ '--background': item.background }"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-13 h-13 sm:w-[70px] sm:h-[70px] -left-[35px] absolute"
          />
          <div class="space-y-2.5 pt-5 pb-4 pl-17 pr-9">
            <h2 class="text-xl md:text-2xl text-primary">{{ item.title }}</h2>
            <p class="text-light-white text-base md:text-lg">
              {{ item.description }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--background);
  border: 1px solid #7c58b0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
</style>
