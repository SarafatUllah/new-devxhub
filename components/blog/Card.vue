<script setup lang="ts">
import { Post } from "~/types/posts";
import defaultImage from "~/assets/img/blog/image-not-found.webp";

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
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
  <div class="rounded-lg shadow-lg bg-card flex flex-col">
    <div class="relative">
      <img
        class="rounded-md w-full h-[220px]"
        :src="post?.image ? post.image : defaultImage"
        :alt="post?.title"
      />
      <p
        class="absolute bottom-0 left-0 bg-primary text-[#1A1139] px-2 py-1 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm font-semibold rounded-bl rounded-tr cursor-pointer"
      >
        {{ post?.categories[0].name }}
      </p>
    </div>
    <div
      class="overflow-hidden p-4 md:p-2 lg:p-4 text-[#F0F0F0] border-x-[0.5px] border-b-[0.5px] border-primary rounded-b-lg flex-grow"
    >
      <div
        class="flex gap-x-2 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base items-center"
      >
        <div class="w-full flex whitespace-nowrap items-center justify-start">
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
            <span class="line-clamp-1 whitespace-normal break-all">{{ post?.author.name }}</span>
          </p>
        </div>
        <p v-if="post?.commentCount" class="">|</p>
        <p
          v-if="post?.commentCount"
          class="flex whitespace-nowrap items-center"
        >
          <BaseIconComments class="w-5 h-5 pr-1 text-primary" />
          <span>{{ post?.commentCount }} Comments</span>
        </p>
      </div>
      <div class="pt-2 flex gap-2 flex-wrap text-xs xl:text-sm">
        <template v-for="(item, index) in post?.tags" :key="item.id">
          <span
            v-if="index < 3"
            class="bg-primary text-black py-[1px] px-1 whitespace-nowrap rounded-[3px]"
            >{{ item.name }}</span
          >
        </template>
      </div>
      <h1
        class="line-clamp-2 text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl font-semibold mt-[9px] mb-[6px]"
      >
        {{ post?.title }}
      </h1>
      <p
        v-if="post?.description"
        class="line-clamp-2 text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
      >
        {{ post?.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-card {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
}
</style>
