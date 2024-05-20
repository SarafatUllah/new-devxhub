<script setup>
const selectedTab = ref("latest");

const activeButton = (tab) => {
  return selectedTab.value === tab ? "activeButton" : "";
};

const setSelectedTab = (tab) => {
  selectedTab.value = tab;
};
</script>

<template>
  <div>
    <div
      class="mt-8 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-20 mb-[34px] sm:mb-[30px] md:mb-[34px]"
    >
      <button
        class="button mr-2 md:mr-2 lg:mr-3 xl:mr-[45px]"
        :class="activeButton('latest')"
        @click="setSelectedTab('latest')"
      >
        Latest
      </button>
      <button
        class="button"
        :class="activeButton('popular')"
        @click="setSelectedTab('popular')"
      >
        Popular
      </button>
    </div>
    <div
      class="transition-all duration-300 ease-in-out"
      :class="
        selectedTab === 'latest'
          ? 'min-h-[290px]'
          : selectedTab === 'popular'
          ? 'min-h-[350px]'
          : ''
      "
    >
      <Transition name="fade">
        <BlogLatestPost v-if="selectedTab === 'latest'" />
        <BlogPopularPost v-else />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.button {
  @apply py-1 pr-2 text-lg sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px] font-bold outline-none text-primary;
}
.activeButton {
  color: #f0f0f0;
  border-bottom: 2px solid #fdb21d;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
