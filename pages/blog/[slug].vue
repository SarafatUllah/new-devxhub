<script setup lang="ts">
import { singlePost } from "~/types/posts";
import { storeToRefs } from "pinia";
import { useBlogStore } from "~/stores/pages/blog/blog";
import defaultImage from "~/assets/img/blog/image-not-found.webp";

// api call
const { data: post } = await useFetch<singlePost>(
  `/api/blogs/posts/${useRoute().params.slug}`
);
const { posts } = storeToRefs(useBlogStore());

useSeoMeta({
  title: () => `${post?.value?.title} | Blog | DEVxHUB`,
  ogTitle: () => `${post?.value?.title} | Blog | DEVxHUB`,
  description: () => post?.value?.description,
  ogDescription: () => post?.value?.description,
  ogImage: () => post?.value?.image,
  twitterCard: "summary_large_image",
});
const route = useRoute();
const postUrl = ref("");
const relatedPosts = ref([]);
const getRelatedPosts = posts.value?.results?.slice(0, 3);
relatedPosts.value = getRelatedPosts;

const dateFormat = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

onMounted(() => {
  postUrl.value = `https://devxhub.com${route.fullPath}`;
});
</script>

<template>
  <div class="container-fluid space-y-12 pt-24 md:pt-36 min-h-screen">
    <div class="grid grid-cols-12 gap-6 md:gap-8">
      <div
        class="col-span-12 sm:col-span-7 md:col-span-8 2xl:col-span-9 order-2 sm:order-1"
      >
        <div class="grid grid-cols-12 gap-4 md:gap-4 lg:gap-6 xl:gap-6">
          <div class="col-span-12 w-full h-full space-y-6 flex flex-col">
            <div
              v-if="post"
              class="w-full h-full rounded-lg text-light-white bg-card px-4 py-8 shadow-lg break-all overflow-hidden"
            >
              <h1
                class="flex items-start space-x-3 text-xl md:text-2xl lg:text-3xl font-medium"
              >
                <NuxtLink to="/blog" class="whitespace-nowrap">Blog</NuxtLink
                ><span> - </span
                ><span class="text-primary">{{ post.title }}</span>
              </h1>
              <img
                :src="post?.image ? post.image : defaultImage"
                :alt="post.title"
                class="w-full min-h-[200px] rounded-lg object-cover mt-6"
              />
              <div
                class="flex flex-col lg:flex-row lg:space-x-4 justify-between items-center pt-4 pb-8"
              >
                <div
                  class="flex flex-wrap flex-row space-x-2.5 font-medium text-lg md:text-xl justify-center items-center"
                >
                  <p class="border-r border-white pr-2">
                    <span class="whitespace-nowrap">
                      {{ post.categories[0].name }}
                    </span>
                  </p>
                  <p
                    v-if="post?.created_at"
                    class="flex whitespace-nowrap items-center border-r border-white pr-2 mr-2"
                  >
                    <ClientOnly>
                      <fa
                        class="text-primary pr-2"
                        :icon="['fas', 'calendar-days']"
                      />
                    </ClientOnly>
                    {{ dateFormat(post.created_at) }}
                  </p>
                  <p class="flex items-center">
                    <span class="pr-1">By </span>
                    <span class="line-clamp-1 whitespace-normal break-all">{{
                      post?.author.name
                    }}</span>
                  </p>
                </div>
                <div class="flex items-center space-x-1.5 pt-4 lg:pt-0">
                  <NuxtLink
                    :to="`https://www.facebook.com/share.php?u=${postUrl}`"
                    target="_blank"
                  >
                    <BaseIconFacebook class="w-8 h-8" />
                  </NuxtLink>
                  <NuxtLink
                    :to="`http://www.reddit.com/submit?url=${postUrl}&title=DEVxHUB blog about - ${post.title}`"
                    target="_blank"
                  >
                    <BaseIconReddit class="w-8 h-8" />
                  </NuxtLink>

                  <NuxtLink
                    :to="`https://telegram.me/share/url?url=${postUrl}&text=DEVxHUB blog about - ${post.title}`"
                    target="_blank"
                  >
                    <BaseIconTelegram class="w-8 h-8" />
                  </NuxtLink>

                  <NuxtLink
                    :to="`http://twitter.com/share?&url=${postUrl}&text=DEVxHUB blog about - ${post.title}.`"
                    target="_blank"
                  >
                    <BaseIconTwitter class="w-8 h-8" />
                  </NuxtLink>
                </div>
              </div>
              <div
                class="space-y-3 text-base md:text-lg break-all overflow-hidden font-family-times"
                v-html="post?.content"
              ></div>
              <div class="flex items-center space-x-3 py-6">
                <NuxtLink
                  :to="`https://www.facebook.com/share.php?u=${postUrl}`"
                  target="_blank"
                >
                  <BaseIconFacebook class="w-10 h-10" />
                </NuxtLink>
                <NuxtLink
                  :to="`http://www.reddit.com/submit?url=${postUrl}&title=DEVxHUB blog about - ${post.title}`"
                  target="_blank"
                >
                  <BaseIconReddit class="w-10 h-10" />
                </NuxtLink>

                <NuxtLink
                  :to="`https://telegram.me/share/url?url=${postUrl}&text=DEVxHUB blog about - ${post.title}`"
                  target="_blank"
                >
                  <BaseIconTelegram class="w-10 h-10" />
                </NuxtLink>

                <NuxtLink
                  :to="`http://twitter.com/share?&url=${postUrl}&text=DEVxHUB blog about - ${post.title}.`"
                  target="_blank"
                >
                  <BaseIconTwitter class="w-10 h-10" />
                </NuxtLink>
              </div>
            </div>

            <div class="w-full space-y-4">
              <h3 class="text-base md:text-lg text-light-white">
                Related Posts
              </h3>
              <div
                class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3"
              >
                <div v-for="(item, index) in relatedPosts" :key="index">
                  <NuxtLink :to="`/blog/${item.slug}`">
                    <BlogCard :post="item" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-12 sm:col-span-5 md:col-span-4 2xl:col-span-3 order-2 sm:order-1"
      >
        <BlogSearch />
        <BlogCategories />
        <BlogTogglePosts />
        <BlogTags />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-card {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
}
</style>
