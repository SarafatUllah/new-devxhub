<script setup>
defineProps({
  includeService: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="pt-36 space-y-[70px]">
    <div class="w-[90%] text-center mx-auto space-y-6">
      <h2
        class="text-primary text-3xl md:text-4xl xl:text-[46px] font-semibold"
      >
        {{ includeService.title }}
      </h2>
      <p class="text-white text-xl md:text-2xl">
        {{ includeService.description }}
      </p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 xl:gap-y-10 2dx:gap-y-[60px]"
    >
      <template v-for="(item, index) in includeService.items" :key="item.id">
        <div
          class="w-full flex items-start gap-5 card h-auto"
          :class="
            (includeService.items.length / 3).toFixed(1).includes('.3')
              ? index === includeService.items.length - 1
                ? `xl:col-start-2`
                : ``
              : (includeService.items.length / 3).toFixed(1).includes('.7')
              ? index === includeService.items.length - 2
                ? `xl:col-start-2 -translate-x-1/2 `
                : index === includeService.items.length - 1
                ? `xl:col-start-3 -translate-x-1/2 `
                : ``
              : `third ${(includeService.items.length / 3).toFixed(1)}`
          "
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-13 h-13 sm:w-[60px] sm:h-[60px] -left-[35px]"
          />
          <div class="space-y-2.5">
            <h2 class="text-xl md:text-2xl text-white font-semibold">
              {{ item.title }}
            </h2>
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
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 20px;
}
</style>
