<script lang="ts" setup>
import { Post } from "~/types/posts";

const { data: LatestPost } = useFetch<Post>("/api/blogs/latestPost");
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
  <div>
    <div class="mb-5" v-for="(post, index) in LatestPost" :key="index">
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="flex items-center justify-start rounded-md pb-2 pr-2 border-b border-primary cursor-pointer"
      >
        <img
          :src="post.image"
          class="h-[45px] w-[80px] sm:h-[45px] sm:w-[70px] md:h-[45px] md:w-[80px] lg:h-[55px] lg:w-[95px] xl:h-[52px] xl:w-[110px] pr-3 sm:pr-3 md:pr-3 lg:pr-3 xl:pr-6"
          alt=""
        />

        <div class="flex flex-col">
          <h3
            class="line-clamp-1 text-xs sm:text-xs md:text-sm lg:text-base font-semibold text-light-white md:mb-[2px] lg:mb-[5px] 2xl:mb-[10px]"
          >
            {{ post.title }}
          </h3>
          <p
            class="text-primary text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm"
          >
            <ClientOnly>
              <fa :icon="['fas', 'calendar-days']" />
            </ClientOnly>
            {{ dateFormat(post.created_at) }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
