<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "~/stores/pages/blog/blog";

const title = "Blog | DEVxHUB";
const description =
  " DEVxHUB is a community of developers, designers, and product managers who are passionate about building products and services. We are a community of learners who are passionate about learning and sharing knowledge.";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});

const nuxtApp = useNuxtApp();

// pinia store
const { setPost } = useBlogStore();
const { posts } = storeToRefs(useBlogStore());

setTimeout(() => {
  if (posts.value?.results?.length === 0) {
    nuxtApp.$toast("clear");
    nuxtApp.$toast("error", {
      message: "There have no blog post.",
      className: "alert_error",
    });
  }
}, 500);

// data
const currentPage = ref(1);
setPost(currentPage.value);
</script>

<template>
  <div class="container-fluid space-y-12 pt-26 md:pt-36 lg:pt-48 min-h-screen">
    <h1
      class="text-center md:text-5xl text-4xl font-semibold leading-[50px] text-primary mb-[62px]"
    >
      Blogs
    </h1>
    <BlogFeatured />
    <BlogContainer :posts="posts?.results" />
    <BlogPagination :totalPost="posts" />
  </div>
</template>

<style lang="scss" scoped></style>
