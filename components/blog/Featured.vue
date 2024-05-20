<script setup lang="ts">
import { Post } from "~/types/posts";
import defaultImage from "~/assets/img/blog/image-not-found.webp";

const { data: featured } = useFetch<Post[]>("/api/blogs/featured");
const dateFormat = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};
</script>
<template>
  <div class="feature-shadow">
    <h1
      class="font-bold text-primary text-3xl lg:text-[40px] lg:leading-10 mb-10 lg:mb-16"
    >
      <span class="border-b-2 border-[#F0F0F0]">Featured</span>
    </h1>
    <div v-for="(post, index) in featured" :key="index">
      <div
        class="bg-feature grid grid-cols-1 md:grid-cols-2 items-center justify-between md:space-x-4 rounded-md overflow-hidden"
      >
        <img
          class="h-full max-h-80 w-full"
          :src="post?.image ? post.image : defaultImage"
          :alt="post?.title"
        />
        <div class="p-4 text-[#F0F0F0] space-y-4 lg:space-y-6">
          <h3
            class="line-clamp-2 text-white text-lg lg:text-2xl leading-6 lg:leading-10 font-semibold"
          >
            {{ post?.title }}
          </h3>
          <div class="!mt-2 flex gap-2 flex-wrap text-xs xl:text-sm">
            <template v-for="(item, index) in post?.tags" :key="item.id">
              <span
                v-if="index < 3"
                class="bg-primary text-black py-[1px] px-1 whitespace-nowrap rounded-[3px]"
                >{{ item.name }}</span
              >
            </template>
          </div>
          <p class="font-normal text-base lg:text-lg leading-6">
            {{ post?.description }}
          </p>
          <div
            class="flex justify-between font-normal text-sm lg:text-lg leading-6 flex-wrap"
          >
            <div
              class="mb-2 lg:mb-3 flex whitespace-nowrap items-center justify-start"
            >
              <p class="flex items-center border-r border-white pr-2 mr-2">
                <ClientOnly>
                  <fa
                    class="text-primary pr-1 pb-0.5"
                    :icon="['fas', 'calendar-days']"
                  />
                </ClientOnly>
                <span>{{ dateFormat(post?.created_at) }}</span>
              </p>
              <p class="flex items-center">
                <span class="pr-1">By </span>
                <span>{{ post?.author.name }}</span>
              </p>
            </div>

            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="mb-2 lg:mb-3 pr-4 flex items-center space-x-2"
              ><span>Continue Reading</span>
              <ClientOnly>
                <fa class="text-primary" :icon="['fas', 'long-arrow-right']" />
              </ClientOnly>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-bottom {
  @apply absolute top-8 sm:top-8 md:top-8 lg:top-10 w-[6.5rem] sm:w-24 md:w-32 lg:w-32 xl:w-40 h-[2.5px] bg-orange mt-[2px];
}
.bg-feature {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
}
.feature-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.feature {
  background-image: url("~/assets/img/blog/desktop.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
