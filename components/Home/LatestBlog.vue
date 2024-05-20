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

const activeHoverCardId = ref(0);
const hoverOnCard = (fullCardId: number) => {
  activeHoverCardId.value = fullCardId;
};
const leaveFromCard = (fullCardId: number) => {
  if (activeHoverCardId.value === fullCardId) {
    activeHoverCardId.value = 0;
  }
};
</script>

<template>
  <div class="mx-auto">
    <div class="py-16 lg:pt-40">
      <div>
        <h2
          class="text-heading text-[30px] lg:text-[40px] leading-[55px] font-semibold mb-5 lg:mb-10 text-center"
        >
          <span class="text-primary lg:font-bold font-semibold"
            >Our Latest Blogs
          </span>
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-6 wrapping xl:justify-evenly"
      >
        <div
          v-for="(card, index) in LatestPost"
          :key="index"
          class="h-[280px] md:h-[415px] lg:h-[350px]"
          :class="Number(index) >= 3 ? 'lg:hidden xl:block' : ''"
        >
          <NuxtLink :to="`/blog/${card.slug}`">
            <div
              class="h-[280px] md:h-[350px] md:hover:h-[420px] lg:hover:h-[440px] transition-all duration-300 overflow-hidden rounded-xl relative cardWrap"
              @mouseover="hoverOnCard(card.id)"
              @mouseleave="leaveFromCard(card.id)"
            >
              <div
                class="h-full w-full object-cover imageDiv"
                :style="{
                  backgroundRepeat: 'no-repeat',
                  height: `100%`,
                  backgroundSize: `100% 100%`,
                  backgroundImage: `url(${card.image})`,
                }"
              ></div>
              <div
                class="absolute px-2 lg:px-4 w-full flex flex-col justify-between transition-all duration-500 ease-in-out"
                :class="
                  activeHoverCardId === card.id
                    ? 'bottom-[10px]'
                    : 'bottom-[0px]'
                "
              >
                <div>
                  <button v-if="card.categories[0].name" class="button">
                    {{ card.categories[0].name }}
                  </button>
                  <button v-if="card.categories[1]" class="button mt-2">
                    {{ card.categories[1].name }}
                  </button>
                </div>
                <div class="flex-grow flex flex-col justify-between">
                  <!-- :class="
                      card.categories.length < 2
                        ? 'min-h-[115px] md:min-h-[118px] lg:min-h-[115px]'
                        : 'min-h-[105px] md:min-h-[110px] lg:min-h-[65px]'
                    " -->
                  <h2
                    class="text-lg md:text-xl text-white leading-[24px] md:leading-[30px] py-3 font-bold"
                  >
                    {{ card.title.substring(0, 35) }}
                    <span v-if="card.title.trim().length > 35">...</span>
                  </h2>
                  <div
                    v-if="activeHoverCardId === card.id"
                    class="flex items-center justify-between mt-0 md:mt-8"
                  >
                    <p class="text-white text-xs xl:text-lg flex items-center">
                      <BaseIconCalendar class="h-8 w-8" icon="calendar-days" />
                      <span class="pl-3">{{
                        dateFormat(card.created_at)
                      }}</span>
                    </p>
                    <button
                      class="text-white border-0 rounded-md bg-button"
                      :aria-label="
                        card && card.title ? card.title : 'Right Arrow'
                      "
                    >
                      <BaseIconRightArrow
                        class="px-2 py-1 rounded-md lg:mt-1"
                        icon="chevron-right"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardWrap {
  box-shadow: 2px 1px 12px #8078789c;
}
.imageDiv:after {
  display: block;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    #000 100%
  );
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
}
.button {
  @apply text-[10px] lg:text-sm mr-1 px-2 lg:px-4 py-1 lg:py-2 bg-[#FAAF04] rounded-[5px] lg:rounded-[10px] text-[#000000] font-medium;
}

.bg-button {
  background: rgba(255, 255, 255, 0.16);
}
.bg-button:hover {
  background: #faaf04;
}
</style>
