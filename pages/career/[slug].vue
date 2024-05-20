<script setup lang="ts">
const config = useRuntimeConfig();
const slug = useRoute().params.slug;
const { data: job, pending } = await useLazyFetch<any>(`/api/careers/${slug}`, {
  headers: useRequestHeaders(),
});

const description = computed(() =>
  job.value?.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 300)
);
definePageMeta({
  middleware: ["career"],
});
useHead({
  htmlAttrs: {
    prefix: "og: https://ogp.me/ns#",
  },
  link: [
    // {
    //   key: "canonical",
    //   rel: "canonical",
    //   href: `${config.public.siteUrl}/career/${slug}`,
    // },
  ],
});

useSeoMeta({
  title: () => `${job.value?.title} | Career | DEVxHUB`,
  ogTitle: () => `${job.value?.title} | Career | DEVxHUB`,
  description: () => description.value,
  ogDescription: () => description.value,
  ogImage: () => job.value?.image,
  twitterCard: "summary_large_image",
});

const dateFormat = (date: string) => {
  const backendDate: Date = new Date(date);
  backendDate.setHours(backendDate.getHours() - 6); // We need to do this because our backend server 6hours ahead
  const formattedDate = backendDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(formattedDate).toLocaleDateString(undefined, options);
};
onMounted(() => {
  console.log(pending);
});
</script>

<template>
  <div>
    <div
      v-if="pending"
      class="w-full md:container mx-auto bg-white p-6 lg:p-14"
    >
      <div class="animate-pulse border-b mb-8">
        <div class="w-full">
          <h1 class="h-10 bg-gray-200 w-full mt-2"></h1>
          <h2
            class="h-2.5 bg-gray-200 w-full rounded-full mt-2"
            v-for="i in 5"
            :key="i"
          ></h2>
        </div>
        <br />
        <div class="flex flex-col h-full">
          <div class="h-80 w-full bg-gray-200"></div>
          <div class="w-full flex items-start space-x-4">
            <div class="h-6 w-20 bg-gray-200 rounded-full mt-3"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-full mt-3"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-full mt-3"></div>
          </div>
          <h2
            class="h-2.5 bg-gray-200 w-full rounded-full mt-2"
            v-for="i in 10"
            :key="i"
          ></h2>
        </div>
      </div>
    </div>
    <div v-else class="pt-[140px] container-fluid">
      <h2
        class="lg:text-[54px] md:text-[44px] text-[34px] font-[600] text-[#FDB21D]"
      >
        {{ job.title }}
      </h2>
      <NuxtLink
        :to="`${job.link}`"
        target="_blank"
        class="lg:hidden block mt-4 w-[177px] h-[60px] relative font-extrabold text-[27px] text-black"
      >
        <div
          class="rounded-full w-[177px] h-[50px] bg-[#FDA905] absolute top-[3.56px] left-[3.37px] apply-now-shadow"
        ></div>
        <div
          class="flex justify-center items-center rounded-full w-[177px] h-[50px] bg-[#FEC206] absolute"
        >
          <span>Apply Now</span>
        </div>
        <!-- <img
          class="w-[18.31px] h-[32.44px] absolute top-[28.74px] left-[163.12px]"
          src="/career/Vector.svg"
        /> -->
        <!-- <img
          class="w-[24.35px] h-[38.9px] absolute top-[25.1px] left-[160.65px]"
          src="/career/black_vactor.svg"
        /> -->
      </NuxtLink>
      <div class="flex lg:flex-row flex-col mt-8">
        <div
          v-html="job.description"
          class="w-fit mx-auto text-white lg:text-xl career-details prose prose-a:text-blue-600 hover:prose-a:text-blue-500"
        ></div>
        <div class="flex flex-col items-center lg:ml-[50px] ml-0 mt-[30px]">
          <NuxtLink
            :to="`${job.link}`"
            target="_blank"
            class="lg:block hidden apply-now w-[177px] h-[60px] relative font-extrabold text-[27px] text-black mb-[26px]"
          >
            <div
              class="transition-all ease-in-out duration-300 lower rounded-full w-[177px] h-[50px] bg-[#FDA905] absolute top-[3.56px] left-[3.37px] apply-now-shadow"
            ></div>
            <div
              class="transition-all ease-in-out duration-300 upper flex justify-center items-center rounded-full w-[177px] h-[50px] bg-[#FEC206] absolute"
            >
              <span>Apply Now</span>
            </div>
            <!-- <img
              class="w-[18.31px] h-[32.44px] absolute top-[28.74px] left-[163.12px]"
              src="/career/Vector.svg"
            /> -->
            <!-- <img
              class="w-[24.35px] h-[38.9px] absolute top-[25.1px] left-[160.65px]"
              src="/career/black_vactor.svg"
            /> -->
          </NuxtLink>
          <div
            class="job-summary lg:w-[436px] w-full h-min bg-[#2A1E56] p-[30px] rounded-[10px]"
          >
            <h3 class="text-[#FDB21D] font-[600] text-[28px] text-center">
              Job Summary
            </h3>
            <div class="flex mt-[50px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1.svg"
                alt=""
              />
              <p class="text-[#ffffff] leading-[3] text-[18px]">Location</p>
            </div>
            <p class="text-[#FDB21D] pl-[34px] font-[600] text-[20px]">
              {{ job.location }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(1).svg"
                alt=""
              />
              <p class="text-[#ffffff] leading-[3] text-[18px]">Job Type</p>
            </div>
            <p class="text-[#FDB21D] pl-[34px] font-[600] text-[20px]">
              {{ job.type }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(2).svg"
                alt=""
              />
              <p class="text-[#ffffff] leading-[3] text-[18px]">Experience</p>
            </div>
            <p class="text-[#FDB21D] pl-[34px] font-[600] text-[20px]">
              {{ job.experience }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(3).svg"
                alt=""
              />
              <p class="text-[#ffffff] leading-[3] text-[18px]">Salary Range</p>
            </div>
            <p class="text-[#FDB21D] pl-[34px] font-[600] text-[20px]">
              {{ job.salary }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(4).svg"
                alt=""
              />
              <p class="text-[#ffffff] leading-[3] text-[18px]">
                Working hours
              </p>
            </div>
            <p class="text-[#FDB21D] pl-[34px] font-[600] text-[20px]">
              {{ job.working_hour }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(5).svg"
                alt=""
              />
              <p class="text-[#ffffff] text-[18px]">Working Days</p>
            </div>
            <p
              class="text-[#FDB21D] font-[600] pl-[34px] leading-[3] text-[20px]"
            >
              Weekly: 5 days.
            </p>
            <p class="text-[#FDB21D] font-[600] pl-[34px] text-[20px]">
              Weekend: Saturday, Alternative
            </p>
            <p
              class="text-[#FDB21D] font-[600] pl-[34px] leading-[3] text-[20px]"
            >
              Sunday.
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(6).svg"
                alt=""
              />
              <p class="text-[#ffffff] text-[18px]">Vacancy</p>
            </div>
            <p
              class="text-[#FDB21D] pl-[34px] font-[600] leading-[3] text-[20px]"
            >
              No. of Vacancies: {{ job.vacancy }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(7).svg"
                alt=""
              />
              <p class="text-[#ffffff] text-[18px]">Date Posted</p>
            </div>
            <p
              class="text-[#FDB21D] pl-[34px] leading-[3] font-[600] text-[20px]"
            >
              {{ dateFormat(job.updated_at) }}
            </p>
            <div class="flex mt-[25px] mb-[3px]">
              <img
                class="mr-[12px]"
                src="~/assets/img/icons/Layer_1_(8).svg"
                alt=""
              />
              <p class="text-[#ffffff] text-[18px]">Application Deadline:</p>
            </div>
            <p
              class="text-[#FDB21D] pl-[34px] font-[600] leading-[3] text-[20px]"
            >
              {{ dateFormat(job.deadline) }}
            </p>

            <NuxtLink
              :to="`${job.link}`"
              target="_blank"
              class="mt-[60px] mb-[20px] whitespace-nowrap w-[120px] h-9 lg:w-40 lg:h-10 xl:w-44 xl:h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-xs lg:text-base rounded-sm flex items-center justify-center mx-auto"
            >
              <span>Apply Now</span>
              <BaseIconRightArrow
                class="pl-3.5 rounded-md text-black"
                icon="chevron-right"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.apply-now-shadow {
  box-shadow: 2px 2px 4px 0px #00000040;
}
.apply-now:hover .lower {
  background-color: #ffffff;
}
.apply-now:hover .upper {
  background-color: #FEC206;
}
</style>
