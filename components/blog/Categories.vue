<script setup lang="ts">
import { Categories } from "~/types/posts";
import { useBlogStore } from "~/stores/pages/blog/blog";
const { setSearchPost } = useBlogStore();
const route = useRoute();

const { data: categories } = useFetch<Categories>("/api/blogs/categories");

const searchBySlug = (searchText: string) => {
  setSearchPost(searchText);
};

onMounted(() => {
  if (route.fullPath.includes("/blog/?category")) {
    searchBySlug(route.fullPath.replace("/blog/?category=", ""));
  }
});
</script>

<template>
  <div>
    <h1
      class="text-lg sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px] font-bold mt-[32px] sm:mt-[40px] md:mt-[32px]"
    >
      <span class="text-primary border-b-2 border-light-white">Categories</span>
    </h1>
    <div class="flex flex-wrap whitespace-nowrap mt-[24px] text-light-white">
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="searchBySlug(category.slug)"
        class="nav-link"
      >
        <NuxtLink
          :to="{
            path: '/blog/',
            query: { category: category?.slug },
          }"
        >
          {{ category?.name }}
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
