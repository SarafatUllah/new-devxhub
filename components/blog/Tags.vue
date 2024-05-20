<script setup lang="ts">
import { Tags } from "~/types/posts";
import { useBlogStore } from "~/stores/pages/blog/blog";
const { setSearchPost } = useBlogStore();
const route = useRoute();

const { data: tags } = useFetch<Tags>("/api/blogs/tags");

const searchBySlug = (searchText: string) => {
  setSearchPost(searchText);
};
onMounted(() => {
  if (route.fullPath.includes("/blog/?tag")) {
    searchBySlug(route.fullPath.replace("/blog/?tag=", ""));
  }
});
</script>
<template>
  <div class="mb-10 sm:mb-0">
    <h1
      class="text-lg sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px] font-bold mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-20 relative"
    >
      <span class="text-light-white border-b-2 border-primary">Tags</span>
    </h1>
    <div class="flex flex-wrap whitespace-nowrap mt-[24px]">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        @click="searchBySlug(tag.slug)"
        class="nav-link"
      >
        <NuxtLink
          :to="{
            path: '/blog/',
            query: { tag: tag.slug },
          }"
        >
          {{ tag.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-link {
  @apply text-white bg-button text-sm sm:text-sm md:text-sm lg:text-base xl:text-lg px-2 py-0.5 mr-3 mb-4 rounded-md cursor-pointer;
}
.bg-button {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
}
</style>
