<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useBlogStore } from "~/stores/pages/blog/blog";

const { setSearchPost } = useBlogStore();
const nuxtApp = useNuxtApp();
const router = useRouter();
const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);

const isMobile = breakpoints.smaller("sm");
const searchText = ref("");
const blogContainer = ref<HTMLElement | null>(null);

const handleSearch = () => {
  if (searchText.value === "") {
    nuxtApp.$toast("clear");
    nuxtApp.$toast("error", {
      message: "Please enter search text.",
      className: "alert_error",
    });
  } else {
    setSearchPost(
      searchText.value,
      isMobile.value ? blogContainer.value : null
    );
  }
};

const handleRouterPath = (value: string) => {
  if (value === "") {
    setSearchPost(searchText.value, null);
    router.push("/blog");
  } else {
    router.push(`/blog/?search=${searchText.value}`);
  }
};
watch(
  () => searchText.value,
  (value) => {
    handleRouterPath(value);
  }
);
onMounted(() => {
  if (route.fullPath.includes("/blog/?search")) {
    searchText.value = route.fullPath.replace("/blog/?search=", "");
    setSearchPost(searchText.value, null);
  } else if (searchText.value !== "") {
    handleRouterPath(searchText.value);
  }
  setTimeout(() => {
    blogContainer.value = window.document.getElementById("blogContainer");
  }, 700);
});
</script>
<template>
  <div class="relative">
    <div class="relative">
      <input
        class="pl-9 pr-16 py-1.5 md:py-1 lg:py-1.5 outline-none shadow-md rounded-full w-full text-xs sm:text-xs md:text-sm lg:text-base xl:text-base bg-[#1A1139] text-white border border-white"
        type="text"
        name="search"
        id="search"
        v-model="searchText"
        placeholder="Search Here"
        @keypress.enter="handleSearch()"
      />
      <ClientOnly>
        <fa
          class="text-sm md:text-sm lg:text-base xl:text-base absolute top-0 bottom-0 my-auto left-3 text-light-white"
          :icon="['fas', 'magnifying-glass']"
        />
      </ClientOnly>
    </div>
    <button
      class="bg-primary w-10 md:w-10 lg:w-12 h-[22px] lg:h-[30px] rounded-full text-white text-sm md:text-sm lg:text-base xl:text-base absolute top-0 bottom-0 my-auto right-1"
      @click="handleSearch()"
    >
      <ClientOnly> <fa :icon="['fas', 'long-arrow-right']" /></ClientOnly>
    </button>
  </div>
</template>

<style></style>
