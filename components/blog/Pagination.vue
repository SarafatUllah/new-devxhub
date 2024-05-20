<script setup>
import { useBlogStore } from "~/stores/pages/blog/blog";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const { setPost } = useBlogStore();
const breakpoints = useBreakpoints(breakpointsTailwind);

const isMobile = breakpoints.smaller("sm");
const isBigMobile = breakpoints.between("sm", "md");
const isTab = breakpoints.between("md", "lg");
const isLaptop = breakpoints.between("lg", "xl");
const isDesktop = breakpoints.between("xl", "2xl");

const startPage = 1;
const totalPage = ref(1);
const currentPage = ref(1);
const isLeftDisabled = ref(true);
const isRightDisabled = ref(false);
const nuxtApp = useNuxtApp();
const blogContainer = ref(null);
const numOfPaginationButton = computed(() => {
  if (isMobile.value) {
    return 4;
  } else if (isBigMobile.value) {
    return 6;
  } else if (isTab.value) {
    return 8;
  } else if (isLaptop.value) {
    return 10;
  } else if (isDesktop.value) {
    return 12;
  } else {
    return 16;
  }
});

const totalPost = defineProps({
  totalPost: {
    type: Object,
  },
});

setTimeout(() => {
  totalPage.value = Math.ceil(
    totalPost?.totalPost?.meta?.pagination?.count /
      totalPost?.totalPost?.meta?.pagination?.limit
  );
}, 500);

const changePage = (page) => {
  if (page > 1) {
    if (isLeftDisabled.value) {
      isLeftDisabled.value = false;
    }
    if (isRightDisabled.value) {
      isRightDisabled.value = false;
    }
  }
  currentPage.value = page;
  setPost(currentPage.value, blogContainer.value);
};
const nextPage = () => {
  if (isLeftDisabled.value) {
    isLeftDisabled.value = false;
  }
  if (currentPage.value >= totalPage.value) {
    isRightDisabled.value = true;
    nuxtApp.$toast("clear");
    nuxtApp.$toast("error", {
      message: "There have no more blog post.",
      className: "alert_error",
    });
    window.scrollTo(0, blogContainer.value.offsetTop - 140);
    return;
  } else {
    currentPage.value = currentPage.value + 1;
    isRightDisabled.value = false;
    setPost(currentPage.value, blogContainer.value);
  }
};
const prevPage = () => {
  if (isRightDisabled.value) {
    isRightDisabled.value = false;
  }
  if (currentPage.value <= startPage) {
    isLeftDisabled.value = true;
    nuxtApp.$toast("clear");
    nuxtApp.$toast("error", {
      message: "There have no more blog post.",
      className: "alert_error",
    });
    window.scrollTo(0, blogContainer.value.offsetTop - 140);
    return;
  } else {
    currentPage.value = currentPage.value - 1;
    isLeftDisabled.value = false;
    setPost(currentPage.value, blogContainer.value);
  }
};
onMounted(() => {
  setTimeout(() => {
    blogContainer.value = window.document.getElementById("blogContainer");
  }, 700);
});

const visiblePageNumbers = computed(() => {
  const startPage = Math.max(
    1,
    currentPage.value - Math.floor(numOfPaginationButton.value / 2)
  );
  const endPage = Math.min(
    totalPage.value,
    startPage + numOfPaginationButton.value - 1
  );

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );
});
</script>
<template>
  <div class="flex justify-center items-center gap-5 pt-20 pb-4">
    <button
      class="button bg-white text-[#374151]"
      :class="
        currentPage === 1
          ? 'opacity-50'
          : 'opacity-100 md:hover:bg-primary md:hover:text-white'
      "
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      <ClientOnly>
        <fa class="" :icon="['fa-solid', 'angles-left']"
      /></ClientOnly>
    </button>

    <div v-for="(page, index) in visiblePageNumbers" :key="index">
      <button
        @click="changePage(page)"
        class="button"
        :class="
          currentPage === page
            ? 'activeButton pointer-events-none'
            : 'inactiveButton'
        "
      >
        {{ page }}
      </button>
    </div>

    <button
      class="button bg-white text-[#374151]"
      :class="
        currentPage === totalPage
          ? 'opacity-50'
          : 'opacity-100 md:hover:bg-primary md:hover:text-white'
      "
      :disabled="currentPage === totalPage"
      @click="nextPage"
    >
      <ClientOnly>
        <fa class="" :icon="['fa-solid', 'angles-right']"
      /></ClientOnly>
    </button>
  </div>
</template>

<style scoped>
.button {
  @apply h-10 w-10 text-base rounded-md;
}
.activeButton {
  @apply bg-primary text-white;
}
.inactiveButton {
  @apply bg-white text-[#374151] md:hover:bg-primary md:hover:text-white;
}
</style>
