<script setup>
const $config = useRuntimeConfig();
const title = "Schedule Appoinment | DEVxHUB";
const description =
  "Lets discuss about your dreamed project. Our experienced global team is eager to assist you. Schedule a complimentary consultation to discuss your needs.";

useHead(() => ({
  script: [
    {
      hid: "calendly",
      src: "https://assets.calendly.com/assets/external/widget.js",
      async: true,
      body: true,
      type: "text/javascript",
    },
  ],
}));
useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
</script>

<template>
  <transition name="page">
    <section>
      <div class="intro h-auto md:pt-24 pt-40 md:pb-8 pb-16 px-8 calender">
        <h1
          class="text-center text-4xl mt-5 mb-8 font-semibold md:leading-loose text-primary"
        >
          Schedule a meeting
        </h1>
        <!-- Calendly inline widget begin -->
        <iframe
          class="calendly-inline-widget h-full"
          :src="`https://calendly.com/devxhub/15min?embed_domain=${$config.public.siteUrl}&embed_type=Inline&primary_color=1A1139`"
          width="100%"
          height="100%"
          frameborder="0"
          title="Select a Date &amp; Time - Calendly"
        ></iframe>
        <!-- Calendly inline widget end -->
      </div>
    </section>
  </transition>
</template>

<style lang="scss" scoped>
.intro {
  @apply bg-[#1A1139];
}
.calender {
  padding-top: 104px;
}
.calendly-inline-widget {
  height: 810px;
}

@media (max-height: 784px) {
  .calender {
    padding-top: 104px;
  }
  .calendly-inline-widget {
    height: 810px;
  }
}
@media (max-height: 784px) and (min-width: 768px) and (max-width: 1024px) {
  .calender {
    padding-top: 104px;
  }
  .calendly-inline-widget {
    height: 1256px;
  }
}
@media (max-width: 767px) {
  .calender {
    padding-top: 178px;
  }
  .calendly-inline-widget {
    height: 1150px;
  }
}
</style>
