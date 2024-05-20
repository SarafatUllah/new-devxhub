<script setup>
const dedicatedPart = ref([
  {
    id: "3",
    title: "Dedicated Team",
    content:
      "A dedicated team is a group of individuals who are assigned to work exclusively on a specific project or task for an extended period. This team is composed of members who possess the necessary skills and expertise to complete the project successfully.",
    isSelected: false,
    link: "/contact-us",
  },
  {
    id: "2",
    title: "Dedicated Developer",
    content:
      "A dedicated developer is a software developer who is exclusively assigned to work on a specific project or with a particular client for an extended period. Unlike developers who work on multiple projects simultaneously, a dedicated developer focuses solely on the assigned project or client's requirements.",
    isSelected: false,
    link: "/contact-us",
  },
]);

const ourTakeCare = ref([
  {
    title: "Why choose us?",
    content:
      "Delivering top-notch software solutions that fulfill your dreams, drive your business forward, backed by our collaborative expertise.",
    isSelected: false,
    btnText: "Discover Why Choose Us",
    link: "/why-choose-us",
  },
  {
    title: "We do care !!!",
    content:
      "DEVxHUB: Where your satisfaction matters & Your success is our priority.",
    isSelected: false,
    btnText: "Find Out Why We Care",
    link: "/why-choose-us",
  },
]);
</script>
<template>
  <div>
    <!-- Start Dedicated Part -->
    <div
      class="ourTakeCare flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:mt-36 mt-16 text-center lg:w-full justify-center items-center lg:items-stretch"
    >
      <div
        v-for="(singleItem, dedicatedIndex) in dedicatedPart"
        :key="dedicatedIndex"
        class="takeCareSingleCard flex flex-col pt-[50px] pb-[40px] px-8 md:px-[70px] w-full lg:w-1/2 max-w-[640px] min-h-[424px]"
      >
        <h2 class="text-[#FDB21D] md:text-[32px] text-3xl font-semibold">
          {{ singleItem.title }}
        </h2>

        <div
          class="text-[#F0F0F0] lg:grow md:text-lg text-sm mt-[23px] min-h-[194px]"
        >
          {{ singleItem.content }}
        </div>

        <nuxt-link
          class="w-[150px] h-12 flex justify-center items-center mx-auto px-4 mt-8 border-2 border-solid border-[#FDB21D] font-bold outline-none text-base rounded-full"
          :to="{
            path: singleItem.link,
            query: { id: singleItem.id },
          }"
          aria-label="Contact Us"
          @click.native="singleItem.isSelected = true"
          :class="
            singleItem.isSelected ? 'bg-[#FDB21D] text-white' : 'text-[#FDB21D]'
          "
        >
          Contact Us</nuxt-link
        >
      </div>
    </div>

    <!-- Start Our Take Care Part -->
    <div
      class="ourTakeCare flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:mt-36 mt-16 text-center lg:w-full justify-center items-center lg:items-stretch"
    >
      <div
        v-for="(singleItem, takeCareIndex) in ourTakeCare"
        :key="takeCareIndex"
        class="takeCareSingleCard flex flex-col pt-[50px] pb-[40px] px-8 md:px-[70px] w-full lg:w-1/2 max-w-[640px]"
      >
        <h2 class="text-[#FDB21D] md:text-[32px] text-3xl font-semibold">
          {{ singleItem.title }}
        </h2>
        <div
          class="text-[#F0F0F0] lg:grow md:text-lg text-sm mt-[23px] min-h-[84px]"
        >
          {{ singleItem.content }}
        </div>

        <nuxt-link
          class="w-[250px] h-12 flex justify-center items-center mx-auto px-4 mt-8 border-2 border-solid border-[#FDB21D] font-bold outline-none text-base rounded-full whitespace-nowrap"
          :to="singleItem.link"
          :aria-label="singleItem.btnText"
          @click.native="singleItem.isSelected = true"
          :class="
            singleItem.isSelected ? 'bg-[#FDB21D] text-white' : 'text-[#FDB21D]'
          "
        >
          {{ singleItem.btnText }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.takeCareSingleCard {
  border: 1px solid #fdb21d;
  border-radius: 30px;
}
</style>
