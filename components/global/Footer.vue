<script setup>
const route = useRoute();
const copyrightDate = computed(() => new Date().getFullYear());
const showModal = ref(false);
onMounted(() => {
  // setTimeout(() => {
  //   const allFooter = document.querySelectorAll(".footerSectionDiv");
  //   console.log(allFooter, "here all");
  //   const observer = new window.IntersectionObserver((entries) => {
  //     entries.forEach((singleDiv) => {
  //       if (singleDiv.isIntersecting) {
  //         singleDiv.target.classList.remove("notInViewPort");
  //         singleDiv.target.classList.add("nowInViewPort");
  //       } else if (!singleDiv.isIntersecting) {
  //         singleDiv.target.classList.add("notInViewPort");
  //         singleDiv.target.classList.remove("nowInViewPort");
  //       }
  //     });
  //   });
  //   allFooter.forEach((item) => {
  //     observer.observe(item);
  //   });
  // }, 700);
  setTimeout(() => {
    generateBalls();
  }, 700);

  window.addEventListener("resize", function (e) {
    var balls = document.querySelectorAll(".gooey-animations .ball");
    balls.forEach(function (ball) {
      ball.remove();
    });
    generateBalls();
  });
});
// methods
const generateBalls = () => {
  var gooeyAnimations = document.querySelector(".gooey-animations");
  var windowWidth = window.innerWidth;
  var ballCount = Math.floor(windowWidth / 20);
  var colors = ["#28323B", "#FFA036"];

  for (var i = 0; i < ballCount; i++) {
    var ball = document.createElement("div");
    ball.classList.add("ball");
    gooeyAnimations.appendChild(ball);
    ball.style.position = "absolute";
    ball.style.bottom = "0px";
    ball.style.left = Math.random() * (windowWidth - 100) + "px";
    ball.style.animationDelay = Math.random() * 5 + "s";
    ball.style.transform = "translateY(" + Math.random() * 10 + "px)";
    ball.style.backgroundColor = colors[i % 2];
  }
};
</script>

<template>
  <section>
    <HomeOurSolution
      class="footerSectionDiv"
      v-if="
        $route.name !== 'contact-us' &&
        $route.name !== 'developers-webdevchecklist'
      "
    />
    <Modal :showModal="showModal" @closeModal="showModal = false" />

    <div class="relative footerSectionDiv flex flex-col justify-end h-auto">
      <!-- <img
        src="/home/backgrounds/footerBg.svg"
        class="h-full w-full hidden md:block"
        alt=""
      />
      <img
        src="/home/backgrounds/footerBgMobile.svg"
        class="h-full w-full block md:hidden"
        alt=""
      /> -->
      <footer>
        <div class="gooey-animations"></div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <svg viewbox="0 0 1440 328" width="100vw">
          <defs>
            <clipPath
              id="wave"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.00069444444, 0.00304878048)"
            >
              <path
                d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z"
              />
            </clipPath>
          </defs>
        </svg>
      </footer>
      <div class="footerSection relative bottom-0 w-full pt-[30px]">
        <div class="mx-auto">
          <div class="relative pt-72 md:pt-56">
            <div class="flex flex-col space-y-7 bg-[#120736]">
              <div
                class="container-fluid footer-top flex lg:flex-row lg:items-start items-center flex-col space-y-10 lg:space-y-0 space-x-0 2xl:space-x-26 xl:space-x-17 lg:space-x-10 justify-between bg-[#120736]"
              >
                <div
                  class="flex flex-col lg:items-start items-center lg:text-left text-center space-y-6 2xl:w-1/4 lg:w-1/3 w-full"
                >
                  <img
                    class="w-[107px] h-[40px] 2xl:-mt-[12px] xl:-mt-[14px] -mt-[16px]"
                    src="~/assets/img/icons/DEVxHUB_Logo.webp"
                    alt="devxhub logo"
                  />
                  <div class="xl:text-lg text-md text-white">
                    <p>
                      DEVxHUB is a Software Company having Talented software
                      engineers on board, we craft compelling web, and mobile
                      applications for our clients.
                    </p>
                    <p class="mt-[14px]">
                      Since our inception, we have partnered with numerous
                      companies and delivered operational gains to startup,
                      emerging, and established organizations in the World.
                    </p>
                    <p class="mt-[14px]">
                      As well as a team of consultants, analysts, software
                      architects, designers and engineers who meticulously
                      understand and value clients' vision to passionately
                      deliver transformation through technology.
                    </p>
                  </div>
                </div>
                <div
                  class="flex flex-col lg:items-start items-center lg:text-left text-center space-y-5 lg:w-1/4 w-full whitespace-nowrap"
                >
                  <h4
                    class="text-[#FDB21D] 2xl:text-2xl xl:text-xl text-lg font-bold"
                  >
                    Our Services
                  </h4>
                  <ul
                    class="flex flex-col space-y-[5px] xl:text-lg text-md text-white"
                  >
                    <li>
                      <NuxtLink to="/custom-software-development">
                        Custom Software Development
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/web-application-development"
                        >Web Application Development
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/mobile-app-development"
                        >Mobile App Development
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/ui-ux-design">UI/UX Design </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sqa-and-testing"
                        >SQA and Testing Services
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/devops">DevOps </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/digital-marketing"
                        >Digital Marketing
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/it-consultancy">IT Consultancy </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/software-maintenance-and-support"
                        >Software Maintenance and Support
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <div
                  class="flex flex-col lg:items-start items-center lg:text-left text-center space-y-5 lg:w-1/4 w-full whitespace-nowrap"
                >
                  <h4
                    class="text-[#FDB21D] 2xl:text-2xl xl:text-xl text-lg font-bold"
                  >
                    Company
                  </h4>
                  <ul
                    class="flex flex-col space-y-[5px] xl:text-lg text-md text-white"
                  >
                    <li>
                      <NuxtLink to="/about-us"> About US </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/why-choose-us">Why choose US </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/career">Career </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blog">Blog </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/contact-us">Contact US </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/appointment">Schedule a Meeting </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="cursor-pointer"
                        @click.native="showModal = true"
                        >24/7 Support
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/faq">Service Provider FQA's </NuxtLink>
                    </li>
                  </ul>
                </div>
                <div
                  class="flex flex-col lg:items-start items-center lg:text-left text-center space-y-5 lg:w-1/4 w-full whitespace-nowrap"
                >
                  <h4
                    class="text-[#FDB21D] 2xl:text-2xl xl:text-xl text-lg font-bold"
                  >
                    Contact Us
                  </h4>
                  <ul
                    class="flex flex-col space-y-[5px] xl:text-lg text-md text-white"
                  >
                    <li>
                      <p>+880 1326 506464 <span>(Call / WhatsApp)</span></p>
                    </li>
                    <li>
                      <p>+880 1912-027073 <span>(Call Only)</span></p>
                    </li>
                    <li>
                      <p>info@devxhub.com</p>
                    </li>
                    <li class="!mt-5">
                      <div
                        class="flex w-full md:my-0 mb-4 justify-center md:justify-start space-x-2 md:space-x-1 xl:space-x-2"
                      >
                        <a
                          href="https://www.facebook.com/devxhubcom/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB Facebook Page"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/facebook.png"
                            alt="DEVxHUB Facebook Icon"
                        /></a>
                        <a
                          href="https://www.linkedin.com/company/devxhubcom/"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB LinkedIn Account"
                          target="_blank"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/linkedin.png"
                            alt="DEVxHUB LinkedIn Icon"
                        /></a>
                        <a
                          href="https://www.instagram.com/devxhubcom/"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB Instagram Account"
                          target="_blank"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/instagram-logo.png"
                            alt="DEVxHUB Instagram Icon"
                        /></a>
                        <a
                          href="https://twitter.com/devxhub"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB Twitter/X Account"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/X_logo.svg"
                            alt="DEVxHUB Twitter/X Logo"
                        /></a>
                        <a
                          href="https://www.pinterest.com/devxhub_com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB Pinterest Account"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/pinterest.png"
                            alt="DEVxHUB Pinterest Icon"
                        /></a>
                        <a
                          href="http://youtube.com/@devxhub"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="DEVxHUB YouTube Channel"
                          ><img
                            class="social-icons"
                            src="/home/footer-social/youtube.svg"
                            alt="DEVxHUB YouTube Icon"
                        /></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="container-fluid bg-[#120736]">
                <hr class="h-0.5 pb-[28px] border-[#FDB21D]" />
                <div
                  class="footer-bottom flex flex-col md:flex-row md:justify-between pb-9 text-md text-white text-center font-normal"
                >
                  <p class="leading-6">
                    &copy; {{ copyrightDate }}.
                    <span class="text-primary"
                      ><a
                        href="https://devxhub.com/"
                        rel="noopener noreferrer"
                        aria-label="Developer eXperience Hub"
                        >Developer eXperience Hub</a
                      ></span
                    >
                    All Rights Reserved.
                  </p>
                  <p class="md:mt-0 mt-4 leading-6">
                    <NuxtLink to="/privacy-policy" class="text-primary">
                      Privacy & Policy
                    </NuxtLink>
                    |
                    <NuxtLink to="/terms-of-service" class="text-primary">
                      Terms of Service
                    </NuxtLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.twitter-icon {
  background-size: cover;
  animation: twitter 6s ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes twitter {
  0% {
    background-image: url("~/assets/img/icons/TwitterIcon/twitter.svg");
  }
  50% {
    background-image: url("~/assets/img/icons/TwitterIcon/X_logo.svg");
  }
  100% {
    background-image: url("~/assets/img/icons/TwitterIcon/twitter.svg");
  }
}
.nowInViewPort {
  @apply transition-all ease-in duration-1000 opacity-100;
}
.notInViewPort {
  @apply transition-all ease-in duration-300 opacity-0;
  transform: translate3d(0, 100px, 0) scale(0.6);
}
.link-style {
  @apply text-heading text-xs lg:text-lg lg:pb-[10px] font-normal leading-[22px] lg:leading-[27px] cursor-pointer hover:text-orange;
}

.address {
  @apply text-heading text-xs lg:text-lg lg:pb-[10px] font-normal leading-[22px] lg:leading-[27px];
}

.heading-style {
  @apply text-black-1 text-sm lg:text-[25px] font-bold pb-[16px] lg:pb-[30px];
}
.footerInner {
  @apply text-white text-base 2dx:text-lg lg:pb-[10px] leading-[22px] lg:leading-[27px] cursor-pointer hover:text-orange dark:text-gray-400;
}
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700;8..60,800;8..60,900&family=Tinos:wght@700&display=swap");
.footer-top h1,
h2,
h3,
h4,
p,
span,
a {
  font-family: "Source Serif 4", Georgia, "Times New Roman", Times, serif;
}
@import url("https://fonts.cdnfonts.com/css/helvetica-neue-5");
/* Define @font-face for Sohne */
@font-face {
  font-family: "Sohne";
  src: url("/test-soehne-leicht.woff2") format("woff2"),
    url("/test-soehne-leicht.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
.footer-bottom p,
.footer-bottom p a,
.footer-bottom p span a {
  font-family: "Sohne", "Helvetica Neue";
}

svg {
  width: 100%;
}

footer {
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 400px;
  top: 0;
  filter: url(#goo);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 225px;
    clip-path: url("#wave");
    background-color: #0d0736;

    @media only screen and (max-width: 700px) {
      height: 150px;
    }
  }
}

.social-icons {
  @apply w-8 xl:w-[30px] aspect-square object-contain;
}

@media (min-width: 1024px) and (max-width: 1200px) {
  .social-icons {
    @apply w-7;
  }
}
</style>
