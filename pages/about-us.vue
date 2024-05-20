<script setup>
const title = "About Us | DEVxHUB";
const description =
  "DEVxHUB an industry-leading IT company, has established an exceptional reputation for delivering world-class IT services throughout the years. As a trusted and renowned partner, we excel in providing an extensive range of IT solutions, including Custom & Enterprise Software Development, Website & Web Application Desigvn and Development, Mobile Application Design & Development, UI/UX, DevOps, Digital Marketing, Quality Assurance & Testing, Maintenance";

useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => description.slice(0, 300),
  ogDescription: () => description.slice(0, 300),
});
const route = useRoute();
onMounted(() => {
  setTimeout(() => {
    const allAboutUs = document.querySelectorAll(".aboutSection");
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((singleDiv) => {
        if (singleDiv.isIntersecting) {
          singleDiv.target.classList.remove("notInViewPort");
          singleDiv.target.classList.add("nowInViewPort");
        }
        // else if (!singleDiv.isIntersecting) {
        //   singleDiv.target.classList.add("notInViewPort");
        //   singleDiv.target.classList.remove("nowInViewPort");
        // }
      });
    });
    allAboutUs.forEach((item) => {
      observer.observe(item);
    });
  }, 700);
});
</script>

<template>
  <section class="container-fluid pb-26 md:pb-[140px]">
    <a class="link hidden" href="#"></a>
    <div class="pt-[110px] md:pt-[180px]">
      <div>
        <h1
          class="text-center md:text-5xl text-4xl font-semibold leading-loose text-primary"
        >
          About Us
        </h1>
      </div>
      <div
        class="pt-[72px] md:pt-[140px] flex flex-col gap-y-12 lgdx:grid lgdx:grid-rows-1 lgdx:grid-cols-12 lgdx:gap-x-7 aboutSection notInViewPort"
      >
        <div class="text-center lgdx:text-right lgdx:col-span-5 self-center">
          <img
            class="inline lgdx:ml-3 lgdx:mt-[10px] 2xl:max-w-[603px] 2xl:max-h-[598px] w-[35.8vw] h-[35.2vw]"
            src="/home/about-us/about-us.svg"
            alt="facilities"
          />
        </div>
        <div class="lgdx:order-first lgdx:col-span-7 extra-lg">
          <h2
            class="text-center lgdx:text-left md:text-4xl text-3xl leading-[32px] small-laptop:text-5.5xl md:leading-[46px] small-laptop:leading-[64px] font-semibold text-primary mb-[12px] lgdx:mb-[14px]"
          >
            Welcome <span class="px-1">to</span> DEVxHUB
          </h2>
          <h3
            class="text-center lgdx:text-left md:text-2xl text-sm leading-[50px] small-laptop:text-2xl md:leading-[40px] small-laptop:leading-[40px] font-semibold text-white md:mb-[14px] lgdx:mb-[30px]"
          >
            The Pinnacle of Global IT Solutions Worldwide
          </h3>

          <p
            class="pb-5 text-center text-base md:text-left md:text-lg leading-7 lg:text-lg text-light-white"
          >
            Welcome to DEVxHUB The Pinnacle of Global IT Solutions Worldwide
            DEVxHUB, an industry-leading company, has established an exceptional
            reputation for delivering world-class IT services throughout the
            years. As a trusted and renowned partner, we excel in providing an
            extensive range of IT solutions, including Custom & Enterprise
            Software Development, Website & Web Application Design and
            Development, Mobile Application Design & Development, UI/UX, DevOps,
            Digital Marketing, Quality Assurance & Testing, Maintenance, and
            Unwavering Support.
          </p>
          <p
            class="text-base text-center md:text-left leading-7 lg:text-lg text-light-white"
          >
            We genuinely appreciate your interest in partnering with us for your
            professional needs. At DEVxHUB, our steadfast devotion to our
            clients defines who we are. We go to great lengths to understand and
            cater to your unique requirements, ensuring that our services not
            only meet but exceed your expectations. By prioritizing your needs
            and consistently striving for excellence, we aim to empower your
            business and support your success in an ever-evolving digital
            landscape.
          </p>
        </div>
      </div>
    </div>
    <AboutWhoWeAre class="aboutSection notInViewPort" />
    <AboutOurMission
      id="our-mission"
      class="aboutSection"
      :class="route.hash === '#our-mission' ? 'nowInViewPort' : 'notInViewPort'"
    />
    <AboutOurCulture class="aboutSection notInViewPort" />
  </section>
</template>
<style scoped>
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
@media (min-width: 1921px) {
  .extra-lg {
    padding-left: 200px;
  }
  .exl-right {
    padding-right: 200px;
  }
}
</style>
