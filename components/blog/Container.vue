<script setup lang="ts">
import { Categories, Post, Tags } from "~/types/posts";

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid grid-cols-12 gap-6 md:gap-8">
    <div
      class="col-span-12 sm:col-span-7 md:col-span-8 2xl:col-span-9 order-2 sm:order-1"
    >
      <div id="blogContainer" class="grid grid-cols-12 gap-4 md:gap-4 lg:gap-6 xl:gap-6">
        <TransitionGroup name="inout">
          <div
            class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 2xl:col-span-4 h-full"
            v-for="(post, index) in posts"
            :key="index"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="h-full flex flex-col">
              <BlogCard :post="post" class="h-full" />
            </NuxtLink>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <div
      class="col-span-12 sm:col-span-5 md:col-span-4 2xl:col-span-3 order-1 sm:order-2"
    >
      <BlogSearch />
      <BlogCategories />
      <BlogTogglePosts />
      <BlogTags />
    </div>
  </div>
</template>

<style scoped>
.inout-enter-active,
.inout-leave-active {
  transition: all 0.5s ease-in-out;
}
.inout-enter-from,
.inout-leave-to {
  opacity: 0;
  scale: 0.5;
}
</style>
