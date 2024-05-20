<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const title = "Digital Marketing | DEVxHUB";
const intro = {
  title: "Unlock Your Brand's Potential with Digital Marketing Mastery",
  description:
    "Experience a transformative digital journey with DEVxHUB's Digital Marketing services. Our seasoned team of digital marketers is dedicated to crafting customized strategies that will not only enhance your brand's online presence but also boost engagement and conversions. In today's competitive digital landscape, effective marketing is paramount, and with our tailored solutions, you can fortify your online reach, interact meaningfully with your target audience, and gain a significant competitive edge. Whether you're seeking to conquer search engine rankings through SEO, connect with your audience on social media, craft compelling content, or leverage the power of pay-per-click (PPC) advertising, we've got you covered. Immerse yourself in innovation, dependability, and exponential growth, and let us steer your brand towards digital excellence.",
};
useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => intro.description.slice(0, 300),
  ogDescription: () => intro.description.slice(0, 300),
});
const router = useRouter();

const services = ref([
  [
    {
      id: 1,
      src: "/services/digital-mkt/trend-design.svg",
      title: "Trend Design",
      description:
        "Maximize online visibility with innovative Trend Design strategies for impactful digital marketing and brand growth.",
    },
    {
      id: 2,
      src: "/services/digital-mkt/branding.svg",
      title: "Branding",
      description:
        "Branding shapes customer perceptions, vital for digital success and long-term online relationships.",
    },
  ],
  [
    {
      id: 3,
      src: "/services/digital-mkt/product-design.svg",
      title: "Product Design",
      description:
        "Boost online sales with smart Product Design, enhancing user experience and brand appeal.",
    },

    {
      id: 4,
      src: "/services/digital-mkt/animation.svg",
      title: "Animation",
      description:
        "Animation brings digital stories to life, enhancing user engagement and making content more appealing and memorable.",
    },
  ],
]);

const numbers = ref([
  {
    id: 1,
    percentage: "94%",
    percentageColor: "#1AE6D5",
    title: "Retention Rate",
    description:
      "Your business is in safe hands at DEVxHUB. While the average retention rate for marketing agencies hovers around 40-50%, ours are over 90% who stay with us over the long run because of our results and relationships.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(0, 212, 99, 0.20) 100%)",
  },
  {
    id: 2,
    percentage: "58%",
    percentageColor: "#E51CCE",
    title: "Average Traffic Increase",
    description:
      "We pride ourselves on driving growth for established businesses using industry-leading and Google Recommended digital marketing strategies. Our client base experiences meaningful and sustainable levels of traffic growth that increase their online sales.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(246, 82, 151, 0.20) 100%)",
  },
  {
    id: 3,
    percentage: "52%",
    percentageColor: "#FD7E36",
    title: "E-commerce business growth",
    description:
      "E-commerce is a fast-moving industry in Bangladesh and our team takes pride in staying ahead of the curve by keeping up to date with the latest tactics and trends that increase your online business.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(253, 178, 29, 0.20) 100%)",
  },
]);

const developmentProcess = ref([
  {
    id: 1,
    src: "/services/digital-mkt/arrow-1.svg",
    title: "Research",
  },
  {
    id: 2,
    src: "/services/digital-mkt/arrow-2.svg",
    title: "Planning",
  },
  {
    id: 3,
    src: "/services/digital-mkt/arrow-3.svg",
    title: "Implement",
  },
  {
    id: 4,
    src: "/services/digital-mkt/arrow-4.svg",
    title: "Measure",
  },
  {
    id: 5,
    src: "/services/digital-mkt/arrow-5.svg",
    title: "Optimize",
  },
]);

const differences = ref([
  {
    id: 1,
    src: "/services/digital-mkt/difference-1.svg",
    title: "Easy Communication",
  },
  {
    id: 2,
    src: "/services/digital-mkt/difference-2.svg",
    title: "Assured Results",
  },
  {
    id: 3,
    src: "/services/digital-mkt/difference-3.svg",
    title: "Dedicated Manager",
  },
  {
    id: 4,
    src: "/services/digital-mkt/difference-4.svg",
    title: "Track the Progress",
  },
]);

const whySelect = ref([
  {
    id: 1,
    src: "/services/digital-mkt/select-1.svg",
    title: "Client-centric approach",
    description:
      "At DEVxHUB, the professional team carefully examines client's individual marketplace. They are dedicated to client's individual goals, profits and advantages.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(253, 178, 29, 0.20) 100%)",
  },
  {
    id: 2,
    src: "/services/digital-mkt/select-2.svg",
    title: "Creative approach",
    description:
      "We understand that creativity is the heart of any design and marketing strategy. As a result, we work hard to maintain design and content as innovative, intuitive, insightful, and transparent as possible.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(0, 212, 99, 0.20) 100%)",
  },
  {
    id: 3,
    src: "/services/digital-mkt/select-3.svg",
    title: "Reliability",
    description:
      "DEVxHUB has been offering digital marketing, video editing & animation, graphic design & website design services for a long time. 99% of clients are satisfied with us.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(253, 63, 1, 0.20) 100%)",
  },
  {
    id: 4,
    src: "/services/digital-mkt/select-4.svg",
    title: "Unique, Fresh and Optimized",
    description:
      "DEVxHUB has some special and unique features that can help you stand out from the crowd. As a result, you can rely on our innovative and optimized design to outperform your competition.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(135, 110, 254, 0.20) 100%)",
  },
  {
    id: 5,
    src: "/services/digital-mkt/select-5.svg",
    title: "Cost effective approach",
    description:
      "We offer our services to businesses of all sizes. We ensure that client's goals are achieved without overspending.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(246, 82, 151, 0.20) 100%)",
  },
  {
    id: 6,
    src: "/services/digital-mkt/select-6.svg",
    title: "24/7 expert support",
    description:
      "If you have any problems with our services, our professional support team is always available to assist you.",
    background:
      "linear-gradient(145deg, rgba(19, 23, 35, 0.20) 4%, rgba(3, 130, 243, 0.20) 100%)",
  },
]);

const marketing = ref([
  {
    id: 1,
    src: "/services/digital-mkt/marketing-1.webp",
    title: "Search Engine Optimization (SEO)",
    description: "Customized SEO Service in Bangladesh",
  },
  {
    id: 2,
    src: "/services/digital-mkt/marketing-2.webp",
    title: "Social Media marketing (SMM)",
    description: "Result Driven SMM Service in Bangladesh",
  },
  {
    id: 3,
    src: "/services/digital-mkt/marketing-3.webp",
    title: "Search Engine Marketing (SEM)",
    description: "Boost ROI with our SEM service",
  },
  {
    id: 4,
    src: "/services/digital-mkt/marketing-4.webp",
    title: "Google Ads",
    description: "Boost Business With Google Ads Service",
  },
  {
    id: 5,
    src: "/services/digital-mkt/marketing-5.webp",
    title: "SMS Marketing",
    description: "Send your Promotion SMS to the right people",
  },
  {
    id: 6,
    src: "/services/digital-mkt/marketing-6.png",
    title: "Email Marketing",
    description: "Reach Your Audience with email marketing",
  },
  {
    id: 7,
    src: "/services/digital-mkt/marketing-7.png",
    title: "Mobile Apps Marketing",
    description: "Get More APP users with our Apps marketing Service",
  },
  {
    id: 8,
    src: "/services/digital-mkt/marketing-8.webp",
    title: "Video Marketing",
    description: "Reach Your Audience with email marketing",
  },
  {
    id: 9,
    src: "/services/digital-mkt/marketing-9.webp",
    title: "Content Marketing",
    description: "Reach Your Audience with email marketing",
  },
  {
    id: 10,
    src: "/services/digital-mkt/marketing-10.webp",
    title: "PPC (Pay-Per-Click) Advertising",
    description: "Get More APP users with our Apps marketing Service",
  },
  {
    id: 11,
    src: "/services/digital-mkt/marketing-11.webp",
    title: "Goal conversion marketing",
    description: "Reach Your Audience with email marketing",
  },
  {
    id: 12,
    src: "/services/digital-mkt/marketing-12.webp",
    title: "Web Analytics & Reporting Services",
    description: "Reach Your Audience with email marketing",
  },
  {
    id: 13,
    src: "/services/digital-mkt/marketing-13.webp",
    title: "Influencer marketing",
    description: "Get More APP users with our Apps marketing Service",
  },
  {
    id: 14,
    src: "/services/digital-mkt/marketing-14.webp",
    title: "Conversion rate optimization",
    description: "Reach Your Audience with email marketing",
  },
]);

const business = ref([
  {
    id: 1,
    src: "/services/digital-mkt/business-1.webp",
    title: "Google Ads",
    description:
      "Utilize Google Ads to potentially increase website traffic by up to 50%, enhancing online visibility and sales conversions.",
  },
  {
    id: 2,
    src: "/services/digital-mkt/business-2.webp",
    title: "Google Shopping",
    description:
      "Google Shopping can increase product sales by 30%, showcasing items directly to interested buyers in digital markets.",
  },
  {
    id: 3,
    src: "/services/digital-mkt/business-3.webp",
    title: "Facebook Ads",
    description:
      "Facebook Ads can amplify reach by 60%, targeting specific audiences effectively for enhanced digital marketing impact.",
  },
  {
    id: 4,
    src: "/services/digital-mkt/business-4.webp",
    title: "Microsoft Ads",
    description:
      "Microsoft Ads potentially increase web traffic by 25%, reaching diverse audiences across multiple digital platforms effectively.",
  },
  {
    id: 5,
    src: "/services/digital-mkt/business-5.webp",
    title: "Landing Pages",
    description:
      "A well-designed Landing Page can boost conversion rates by up to 80%, essential for effective digital marketing.",
  },
  {
    id: 6,
    src: "/services/digital-mkt/business-6.webp",
    title: "Remarketing",
    description:
      "Remarketing can increase ad engagement by 70%, reconnecting with past visitors for enhanced digital marketing results.",
  },
  {
    id: 7,
    src: "/services/digital-mkt/business-7.webp",
    title: "AB Testing",
    description:
      "A/B Testing can improve conversion rates by 30%, optimizing digital strategies through comparative performance analysis.",
  },
]);

// Build, Transforms and Grow
const currentHoverValue = ref("");

const redirect = () => {
  router.push("/about-us");
};

// Success Stories
const successStories = ref([
  {
    id: 1,
    title: "INCREASE IN GOOGLE ADS REVENUE",
    description:
      "Compared to other platforms / Companies, Google Ads can yield a 337% revenue increase, significantly outperforming competitors in digital marketing effectiveness and ROI by DEVxHUB",
    image: "",
    successRate: "337",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 2,
    title: "INCREASE IN SALES",
    description:
      "Compared to other platforms or companies, a comprehensive marketing strategy can yield a 102% increase in sales, significantly outperforming competitors in effectiveness and ROI, as reported by DEVxHUB.",
    image: "",
    successRate: "102",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 3,
    title: "INCREASE IN CONVERSION RATE",
    description:
      "Implementing a robust marketing strategy can lead to a 14% boost in conversion rates, outshining competitor platforms in efficiency and return on investment, according to DEVxHUB.",
    image: "",
    successRate: "14",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 4,
    title: "Retail Sales Revival",
    description:
      "A retail client faced declining online sales until our targeted marketing strategy resulted in a 52% increase in sales. This dramatic turnaround, in line with DEVxHUB's findings, underscores our proficiency in boosting sales through effective digital marketing.",
    image: "",
    successRate: "52",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 5,
    title: "Tech Startup's Revenue Surge",
    description:
      "For a burgeoning tech company, our comprehensive marketing campaign led to a 153% revenue increase. This remarkable achievement, mirroring DEVxHUB's data, demonstrates our expertise in driving revenue growth using cutting-edge digital strategies.",
    image: "",
    successRate: "153",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 6,
    title: "Service Sector Conversion Success",
    description:
      "A small service-oriented business experienced a 20% jump in conversion rates following our marketing intervention. This significant improvement, reflecting DEVxHUB's research, highlights our ability to optimize conversion rates through targeted marketing tactics.",
    image: "",
    successRate: "20",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
  {
    id: 7,
    title: "E-commerce Advertising Triumph",
    description:
      "An e-commerce client leveraged our strategic Google Ads approach, resulting in significant growth in traffic and sales. This success story aligns with DEVxHUB's insights on Google Ads' effectiveness, showcasing our skill in using targeted ads to enhance online visibility and profitability.",
    image: "",
    successRate: "30",
    backgroundColor:
      "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%);",
    border: "linear-gradient(105.97deg, #9D3566 11.28%, #7C58B0 86.75%)",
  },
]);

const successCarousel = ref(null);

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 3.47,
    snapAlign: "start",
  },
};

const expectations = ref([
  {
    id: 1,
    src: "/services/digital-mkt/expectations-1.webp",
    title: "Online visibility",
    description:
      "Elevate your brand's online profile, achieving a 30% increase in web visibility with expert guidance.",
  },
  {
    id: 2,
    src: "/services/digital-mkt/expectations-2.webp",
    title: "Business Growth",
    description:
      "Boost your business growth by 40% through targeted digital marketing strategies from industry specialists.",
  },
  {
    id: 3,
    src: "/services/digital-mkt/expectations-3.webp",
    title: "Specialist execution",
    description:
      "Experience specialized, efficient marketing execution, enhancing campaign effectiveness by 25%.",
  },
  {
    id: 4,
    src: "/services/digital-mkt/expectations-4.webp",
    title: "Dedication",
    description:
      "Benefit from unwavering dedication in digital marketing, driving a 35% improvement in customer engagement.",
  },
  {
    id: 5,
    src: "/services/digital-mkt/expectations-5.webp",
    title: "Results that matter",
    description:
      "Achieve impactful results, witnessing a 50% uplift in key performance metrics with focused strategies.",
  },
  {
    id: 6,
    src: "/services/digital-mkt/expectations-6.webp",
    title: "Return on investment (ROI)",
    description:
      "Maximize your ROI with expert digital marketing approaches, yielding a 45% return on marketing investments.",
  },
]);

const works = ref([
  {
    id: 1,
    src: "/services/digital-mkt/work-1.webp",
    title: "40 point one time audit",
    description:
      "Optimize your online strategy with our 40-point audit, boosting efficiency and web performance significantly.",
  },
  {
    id: 2,
    src: "/services/digital-mkt/work-2.webp",
    title: "We build it, you run it.",
    description:
      "We craft your digital strategy; you take the reins, ensuring a seamless blend of expertise and control.",
  },
  {
    id: 3,
    src: "/services/digital-mkt/work-3.webp",
    title: "Revenue share model",
    description:
      "Partner with us on a revenue share model, aligning our success with a 30% increase in your profits.",
  },
  {
    id: 4,
    src: "/services/digital-mkt/work-4.webp",
    title: "Ongoing expert management",
    description:
      "Benefit from continuous expert management, enhancing your digital presence and increasing leads by 25%.",
  },
]);
</script>

<template>
  <div class="pt-28 md:pt-40">
    <!-- Start hero section -->
    <section
      class="container-fluid grid grid-cols-1 md:grid-cols-2 md:gap-1 items-center"
    >
      <div
        class="justify-self-center md:justify-self-start text-center md:text-left"
      >
        <img
          src="/services/digital-mkt/bemarketing.svg"
          class="w-full mx-auto md:w-[220px] md:mx-0 h-10"
          alt="bemarketing"
        />
        <h1
          class="!leading-[50px] lg:!leading-[70px] xl:!leading-[72px] text-3xl lg:text-5xl xl:text-[56px] font-semibold text-primary xl:hidden"
        >
          We will increase your sales
          <span
            class="text-black bg-white rounded-[5px] px-2 h-[66px] w-[303px] flex-shrink-0"
            >threefold*</span
          >
        </h1>

        <h2
          class="!leading-[50px] xl:!leading-[72px] text-3xl lg:text-4xl xl:text-[56px] mt-[8px] font-semibold text-primary hidden xl:block"
        >
          We will <br />
          increase your<br />
          sales
          <span
            class="text-black bg-white rounded-[5px] xl:text-[52px] px-2 h-[64px] w-[303px] flex-shrink-0"
            >threefold*</span
          >
        </h2>
        <NuxtLink
          to="#success-stories"
          aria-label="Show me how"
          class="my-10 md:mt-26 md:mb-0 flex justify-center md:justify-start w-full mx-auto font-bold text-[#1A1139] text-base rounded-[5px] whitespace-nowrap"
        >
          <div
            class="bg-[#FDB21D] md:w-[273px] flex justify-center items-center px-6 md:px-5 lg:px-[30px] h-14 xl:h-[60px] rounded-[5px] md:text-2xl font-bold"
          >
            <img
              src="/services/digital-mkt/chevron-right.svg"
              class="w-[30px] h-[18px] mr-5"
              alt="chevron"
            />
            <span>Show me how</span>
          </div>
        </NuxtLink>
      </div>

      <div class="justify-self-center md:justify-self-end">
        <img
          src="/services/digital-mkt/digital-marketing-banner.svg"
          class="w-[94vw] h-[90vw] md:w-[46vw] md:h-[44vw] max-w-[350px] max-h-[337px] lg:w-[40vw] lg:h-[39vw] lg:max-w-[410px] lg:max-h-[390px] xl:max-w-[610px] xl:w-[33vw] xl:h-[31vw] xl:max-h-[587px]"
          alt="bemarketing"
        />
      </div>
    </section>
    <!-- End hero section -->

    <!-- Start Company health in percentage -->
    <section
      class="container-fluid flex flex-wrap gap-3 md:gap-5 lg:gap-0 pt-16 md:pt-[180px] lg:pt-[200px] justify-center lg:justify-between"
    >
      <div
        class="flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4"
      >
        <h2
          class="text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[500]"
        >
          10X
        </h2>
        <span
          class="text-white text-xl lg:text-2xl xl:text-3xl font-[300] whitespace-nowrap"
        >
          Organic Growth
        </span>
      </div>

      <div
        class="flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4"
      >
        <h2
          class="text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[500]"
        >
          65%
        </h2>
        <span
          class="text-white text-xl lg:text-2xl xl:text-3xl font-[300] whitespace-nowrap"
        >
          Improved ROI
        </span>
      </div>

      <div
        class="flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4"
      >
        <span
          class="text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[500]"
          >15%</span
        >
        <span
          class="text-white text-xl lg:text-2xl xl:text-3xl font-[300] whitespace-nowrap"
        >
          Boost in Online Leads
        </span>
      </div>
    </section>
    <!-- End Company health in percentage -->

    <!-- Start Build, Transform and grow -->
    <section class="container-fluid mt-16 md:mt-[172px] lg:mt-[230px]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:flex lg:flex-wrap xl:grid justify-between lg:justify-center xl:justify-between gap-12 lg:gap-0 lg:gap-y-6 xl:gap-12 xl:h-[700px] w-full"
      >
        <div
          class="self-start font-semibold space-y-2 md:space-y-4 lg:space-y-6 text-white lg:w-1/2 lg:pr-5 xl:w-full xl:pr-0"
          @mouseover="currentHoverValue = 'Build'"
          @mouseleave="currentHoverValue = ''"
        >
          <div class="flex justify-between">
            <h2
              class="text-3xl md:text-4xl xl:text-5xl 2xl:text-[56px] !leading-[72px] font-[500] text-[#FDB21D] self-end"
            >
              Build
            </h2>
            <img
              v-if="currentHoverValue === 'Build'"
              src="/services/digital-mkt/build-trans-grow/filled-1.svg"
              class="w-20 h-24 md:w-[157px] md:h-[217px] p-2"
              alt="filled-1"
            />
            <img
              v-else
              src="/services/digital-mkt/build-trans-grow/1.svg"
              class="w-20 h-24 md:w-[157px] md:h-[217px] p-2 md:py-4"
              alt="unfilled-1"
            />
          </div>
          <div class="space-y-2 md:space-y-4 lg:space-y-6">
            <h2
              class="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-[500] text-[#F0F0F0] !leading-[48px]"
            >
              your brand <br />
              with right <br />
              branding strategy
            </h2>
            <div class="!mt-[70px]">
              <img
                v-if="currentHoverValue === 'Build'"
                src="/services/digital-mkt/build-trans-grow/filled-cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
              <img
                v-else
                src="/services/digital-mkt/build-trans-grow/cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
            </div>
          </div>
        </div>

        <div
          class="self-center font-semibold space-y-2 md:space-y-4 lg:space-y-6 text-white lg:w-1/2 lg:pl-5 xl:w-full xl:pl-0"
          @mouseover="currentHoverValue = 'Transform'"
          @mouseleave="currentHoverValue = ''"
        >
          <div class="flex justify-between">
            <h2
              class="text-3xl md:text-4xl xl:text-5xl 2xl:text-[56px] !leading-[72px] font-[500] text-[#FDB21D] self-end"
            >
              Transform
            </h2>
            <img
              v-if="currentHoverValue === 'Transform'"
              src="/services/digital-mkt/build-trans-grow/filled-2.svg"
              class="w-20 h-24 md:w-[207px] md:h-[267px]"
              alt="chevron"
            />
            <img
              v-else
              src="/services/digital-mkt/build-trans-grow/2.svg"
              class="w-20 h-24 md:w-[207px] md:h-[267px]"
              alt="chevron"
            />
          </div>
          <div class="space-y-2 md:space-y-4 lg:space-y-6">
            <h2
              class="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-[500] text-[#F0F0F0] !leading-[48px]"
            >
              your business <br />
              into digital <br />
              platforms
            </h2>
            <div class="!mt-[70px]">
              <img
                v-if="currentHoverValue === 'Transform'"
                src="/services/digital-mkt/build-trans-grow/filled-cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
              <img
                v-else
                src="/services/digital-mkt/build-trans-grow/cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
            </div>
          </div>
        </div>

        <div
          class="self-end font-semibold space-y-2 md:space-y-4 lg:space-y-6 text-white lg:w-1/2 xl:w-full"
          @mouseover="currentHoverValue = 'Grow'"
          @mouseleave="currentHoverValue = ''"
        >
          <div class="flex justify-between">
            <h2
              class="text-3xl md:text-4xl xl:text-5xl 2xl:text-[56px] !leading-[72px] font-[500] text-[#FDB21D] self-end"
            >
              Grow
            </h2>
            <img
              v-if="currentHoverValue === 'Grow'"
              src="/services/digital-mkt/build-trans-grow/filled-3.svg"
              class="w-20 h-24 md:w-[202px] md:h-[262px]"
              alt="chevron"
            />
            <img
              v-else
              src="/services/digital-mkt/build-trans-grow/3.svg"
              class="w-20 h-24 md:w-[202px] md:h-[262px]"
              alt="chevron"
            />
          </div>
          <div class="space-y-2 md:space-y-4 lg:space-y-6">
            <h2
              class="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-[500] text-[#F0F0F0] !leading-[48px]"
            >
              with integrated <br />
              marketing <br />
              services
            </h2>
            <div class="!mt-[70px]">
              <img
                v-if="currentHoverValue === 'Grow'"
                src="/services/digital-mkt/build-trans-grow/filled-cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
              <img
                v-else
                src="/services/digital-mkt/build-trans-grow/cross-arrow.svg"
                class="w-[60px] h-[60px] cursor-pointer"
                @click="redirect"
                alt="chevron"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Build, Transform and grow -->

    <!-- Start our services -->
    <section
      class="container-fluid grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-2 items-center space-x-0 lg:space-x-5 xl:space-x-20 space-y-20 lg:space-y-0 pt-16 md:pt-[180px] lg:pt-[200px]"
    >
      <div
        class="flex flex-col items-center lg:items-start lg:col-span-2 xl:col-span-1"
      >
        <div class="flex items-center space-x-1 !leading-[28px]">
          <p class="text-[#F0F0F0] text-lg uppercase font-[300]">
            OUR SERVICES
          </p>
          <img
            src="/services/digital-mkt/services.svg"
            class="w-[50px] h-[9px]"
            alt="chevron"
          />
        </div>
        <h2
          class="!leading-[50px] xl:!leading-[62px] text-3xl lg:text-4xl xl:text-5xl font-[500] text-primary pt-3.5"
        >
          People don't buy <br />what you do, they <br />
          buy why you do it.
        </h2>
        <p class="text-[#F0F0F0] md:text-lg pt-[30px] w-[60%] font-[300]">
          Customers are attracted to the purpose behind your brand, not just the
          product – Discover the 'Why' in marketing.
        </p>
        <NuxtLink
          to="#our-services"
          aria-label="Our Services"
          class="flex items-center justify-center mt-20 our_services w-40 xl:w-[200px] h-[60px] bg-primary text-[#1A1139] text-xl whitespace-nowrap font-bold"
        >
          <span>Our Services</span>
        </NuxtLink>
      </div>

      <div
        class="flex space-x-6 lg:space-x-3 xl:space-x-6 sm:space-x-24 lg:col-span-3 xl:col-span-1"
      >
        <div class="grid grid-flow-row space-y-[60px] h-full">
          <div v-for="service in services[0]" :key="service.id">
            <div class="text-center">
              <img
                :src="service.src"
                alt="trend-design"
                class="h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] inline-block"
              />
              <h2
                class="text-white font-[500] text-xl md:text-2xl xl:text-[32px] py-4"
              >
                {{ service.title }}
              </h2>
              <p
                class="text-[#F0F0F0] font-[300] md:text-xl lg:text-lg xl:text-xl text-center"
              >
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-flow-row space-y-[60px] mt-24">
          <div class="" v-for="service in services[1]" :key="service.id">
            <div class="text-center">
              <img
                :src="service.src"
                alt="trend-design"
                class="h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] inline-block"
              />
              <h2
                class="text-white font-[500] text-xl md:text-2xl xl:text-[32px] py-4"
              >
                {{ service.title }}
              </h2>
              <p
                class="text-[#F0F0F0] font-[300] md:text-xl lg:text-lg xl:text-xl text-center"
              >
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End our services -->

    <!-- Start us by the number -->
    <section class="container-fluid pt-16 lg:pt-[172px]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center space-x-0 xl:pace-x-20 space-y-20 xl:space-y-0"
      >
        <div>
          <h2
            class="!leading-[62px] text-3xl lg:text-4xl xl:text-5xl font-[500] text-primary pb-4"
          >
            By the numbers
          </h2>
          <p
            class="text-[#F0F0F0] text-lg md:text-xl lg:text-2xl mt-4 w-[65%] font-[300]"
          >
            Our best-in-class digital marketing agency impresses customers with
            impactful results and wows them with high-numbered statistics
          </p>
          <NuxtLink
            to="/contact-us"
            aria-label="Contact Us"
            class="my-10 md:mt-26 md:mb-0 flex justify-center items-center w-[175px] px-[20px] py-[14px] h-14 xl:h-[56px] bg-primary font-bold text-[#1A1139] text-lg rounded-sm whitespace-nowrap"
          >
            <span>Contact Us</span>
            <img
              src="/services/digital-mkt/chevron-right.svg"
              class="w-[20px] h-4 ml-4"
              alt="chevron"
            />
          </NuxtLink>
        </div>

        <div
          class="justify-self-center xl:justify-self-end flex flex-wrap lg:flex-col space-y-4 lg:space-y-8 md:justify-center"
        >
          <div
            v-for="(number, index) in numbers"
            :key="number.id"
            :class="`w-full md:w-[calc(50%-8px)] lg:w-[510px] min-h-[476px] rounded-[10px] border-[1px] border-[#9D3566] px-8 xl:px-10 2xl:px-[50px] py-10 lg:py-14 xl:py-16 2xl:py-20 ${
              index % 2 !== 0
                ? 'md:!mt-0 lg:!mt-8'
                : index === 0
                ? 'md:mr-4'
                : ''
            }`"
            :style="{
              background: number.background,
              boxShadow: `0px 16px 42px 0px rgba(0, 30, 108, 0.30)`,
            }"
          >
            <div class="h-full">
              <div class="h-full">
                <div class="flex flex-col justify-between h-full">
                  <div>
                    <h2
                      :class="`text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-[500]`"
                      :style="{
                        color: number.percentageColor,
                      }"
                    >
                      {{ number.percentage }}
                    </h2>
                    <h2
                      class="text-xl lg:text-2xl xl:text-3xl text-primary py-4 lg:py-6 xl:pt-[30px] xl:pb-[20px] font-[500]"
                    >
                      {{ number.title }}
                    </h2>
                  </div>
                  <div
                    class="text-[#F0F0F0] md:text-lg lg:text-xl flex-grow flex flex-col justify-center font-[300]"
                  >
                    {{ number.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End us by the number -->

    <!-- Start Our development process -->
    <section class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]">
      <h2
        class="text-3xl lg:text-4xl xl:text-5xl font-[500] text-primary pb-10 md:pb-16 lg:pb-20 xl:pb-[105px] text-center"
      >
        Our Development Process
      </h2>
      <div class="flex flex-wrap xl:flex-nowrap md:space-x-16 justify-center">
        <div
          v-for="process in developmentProcess"
          :key="process.id"
          class="relative mt-10"
        >
          <img
            class="w-48 h-[104px] md:w-52 md:h-[134px] lg:w-56 lg:h-[154px] xl:w-[270px] xl:h-[174px]"
            :src="process.src"
            :alt="process.title"
          />
          <p
            class="absolute transform top-1/2 left-[calc(50%-10px)] -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] leading-[48px] font-[500] -pl-[4px]"
          >
            {{ process.title }}
          </p>
        </div>
      </div>
    </section>
    <!-- End Our development process -->

    <!-- Start Why we are different -->
    <section class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]">
      <div class="flex flex-col items-center justify-center">
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-medium !leading-[62px] text-primary pb-[18px] text-center w-full md:w-7/12 xl:w-1/2"
        >
          What Makes Us Different From Other Agencies?
        </h2>
        <p
          class="text-[#F0F0F0] text-lg md:text-xl lg:text-lg font-light w-7/12 text-center"
        >
          Why choose us? Our track record of significantly increasing online
          visibility, driving substantial revenue growth, and delivering
          impressive ROI sets us apart in digital marketing.
        </p>
      </div>

      <div
        class="flex flex-col md:flex-row flex-wrap justify-center 2xl:justify-between mt-10 md:mt-16 lg:mt-20"
      >
        <div
          v-for="difference in differences"
          :key="difference.id"
          class="flex flex-col space-y-[50px] justify-center lg:justify-start items-center 2xl:items-start px-3 lg:px-5 2dx:px-7 py-4 lg:py-5"
        >
          <img
            class="w-32 2dx:w-[140px] 3dx:w-[150px] h-32 2dx:h-[145px] 3dx:h-[155px]"
            :src="difference.src"
            :alt="difference.title"
          />
          <h2
            class="text-white text-lg sm:text-xl lg:text-2xl 3dx:text-[28px] 3dx:!leading-[38px] font-medium"
          >
            {{ difference.title }}
          </h2>
        </div>
      </div>
    </section>
    <!-- End Why we are different -->

    <!-- Start Our confident -->
    <section class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]">
      <div class="flex flex-col items-center justify-center">
        <p class="text-white text-lg xl:text-xl 2xl:text-2xl uppercase mb-5">
          REASON BEHIND OUR CONFIDENCE
        </p>

        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-medium !leading-[62px] text-white text-center"
        >
          Why Select <span class="text-primary">DEVxHUB?</span>
        </h2>
      </div>

      <div
        class="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 justify-center sm:justify-between justify-items-center gap-10 mt-10 md:mt-16 lg:mt-20"
      >
        <div
          v-for="select in whySelect"
          :key="select.id"
          class="border border-[#9D3566] rounded-[10px] flex items-start space-x-5 px-5 md:px-6 lg:px-9 py-4 md:py-5 lg:py-[30px] h-[318px] w-full md:w-[513px]"
          :style="{
            background: select.background,
          }"
        >
          <img
            class="w-14 lg:w-17 xl:w-[70px] h-14 lg:h-17 xl:h-[70px]"
            :src="select.src"
            alt=""
          />
          <div class="flex flex-col space-y-[18px]">
            <div
              class="text-lg sm:text-xl lg:text-2xl xl:text-[28px] xl:leading-[2.25rem] font-medium text-white flex-grow"
            >
              {{ select.title }}
            </div>
            <p class="text-xl text-[#F0F0F0] font-light">
              {{ select.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Our confident -->

    <!-- Start Digital marketing -->
    <section
      id="our-services"
      class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]"
    >
      <div class="flex flex-col items-center justify-center">
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary text-center"
        >
          Our Digital Marketing Services
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:justify-between justify-items-center gap-8 lg:gap-10 3xl:gap-0 3xl:space-x-8 3xl:space-y-8 3xl:flex 3xl:flex-wrap 3xl:justify-center mt-10 md:mt-16 lg:mt-20"
      >
        <div
          v-for="(item, index) in marketing"
          :key="item.id"
          :class="`bg-[#2A1F51] rounded-[5px] flex flex-col items-center justify-center text-center px-4 py-12 md:p-9 xl:p-8 xl:h-[402px] w-full xl:w-[375px] ${
            index === 0 || index === 1 || index === 2 || index === 3
              ? '3xl:!mt-0'
              : index === 4 || index === 8 || index === 12
              ? '3xl:!ml-0'
              : ''
          }`"
        >
          <img
            class="w-16 md:w-20 h-16 md:h-20"
            :src="item.src"
            :alt="item.title"
          />
          <p
            class="text-lg md:text-xl lg:text-2xl text-white font-semibold pt-10 pb-5"
          >
            {{ item.title }}
          </p>
          <p class="lg:text-lg text-white">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- End Digital marketing -->

    <!-- Start what we're good at -->
    <section class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]">
      <div class="flex flex-col items-start justify-start">
        <p class="text-white text-lg xl:text-2xl font-light uppercase mb-5">
          WHAT WE'RE GOOD AT
        </p>
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-medium !leading-[62px] text-primary text-left w-full md:w-[72%] xl:w-[67%]"
        >
          Growing businesses since #5 years using the best PPC tools and expert
          knowledge.
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center sm:justify-between gap-x-5 xl:gap-x-[95px] gap-y-12 xl:gap-y-[100px] mt-10 md:mt-16 lg:mt-20"
      >
        <div
          class="flex flex-col items-start justify-start"
          v-for="item in business"
          :key="item.id"
        >
          <img
            class="w-16 md:w-20 xl:w-24 2dx:w-28 2xl:w-[130px] h-16 md:h-20 xl:h-24 2dx:h-28 2xl:h-[130px]"
            :src="item.src"
            :alt="item.title"
          />
          <p
            class="text-xl lg:text-2xl xl:text-[32px] !leading-[42px] text-white font-medium mt-[33px] mb-5"
          >
            {{ item.title }}
          </p>
          <p class="lg:text-xl text-[#F0F0F0] font-light">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- End what we're good at -->

    <!-- Start Data driven -->
    <section
      class="pl-5 w-full md:pl-20 lg:pl-[60px] dx:pl-[7%] 2dx:pl-[80px] 3dl:pl-[10%] 3xl:pl-[150px] 4xl:pl-[12%] py-14 xl:py-[172px] bg-[#0D0835] mt-14 md:mt-[200px] grid grid-cols-1 lg:grid-cols-6 2dx:grid-cols-12 items-center lg:gap-x-[50px] 2dx:gap-x-[0px] justify-items-end gap-y-13"
    >
      <div class="flex flex-col col-span-2 2dx:col-span-4 pr-4">
        <div class="text-white flex flex-col mb-20 font-light">
          <p class="text-lg xl:text-xl text-[#F0F0F0] uppercase">
            PPC SOFTWARE
          </p>
          <p class="text-3xl xl:text-[40px] text-primary mt-4 mb-5 font-medium">
            Data driven decisions
          </p>
          <p class="text-lg xl:text-xl text-[#F0F0F0]">
            PPC software empowers data-driven decisions, optimizing ad spend
            based on real-time performance metrics, such as click-through rates
            and conversions as well as leading to a 30% increase in conversion
            rates and a 20% reduction in ad costs.
          </p>
        </div>
        <div class="text-white flex flex-col space-y-4">
          <p class="text-lg text-white uppercase">REPORTING</p>
          <p class="text-3xl text-primary font-semibold">Valuable insights</p>
          <p class="text-lg text-white">
            Comprehensive reporting provides clear insights, allowing for
            informed decisions and optimizing digital marketing strategies for
            better results.
          </p>
        </div>
      </div>

      <img
        class="col-span-4 2dx:col-span-8 w-[94.6vw] h-[56.7vw] lg:w-[63.05vw] lg:h-[37.53vw] max-w-[962px] max-h-[576px]"
        src="/services/digital-mkt/insigts.svg"
        alt="Insights"
      />
    </section>
    <!-- End Data driven -->

    <!-- Start Slider of digital marketing page -->
    <section id="success-stories">
      <div
        id="success-stories"
        class="px-5 md:pr-0 w-full md:pl-20 lg:pl-[60px] dx:pl-[7%] 2dx:pl-[80px] 3dl:pl-[10%] 3xl:pl-[150px] 4xl:pl-[12%] pt-16 md:pt-[180px] lg:pt-[200px]"
      >
        <div class="relative">
          <div class="text-white flex flex-col space-y-4 mb-20">
            <h2 class="text-2xl font-light">SUCCESS STORIES</h2>
            <h2
              class="text-[#FDB21D] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium"
            >
              How we've helped others grow
            </h2>
          </div>
          <carousel
            ref="successCarousel"
            v-bind="settings"
            :wrap-around="true"
            :loop="true"
            :autoplay="0"
            :pauseAutoplayOnHover="true"
            :breakpoints="breakpoints"
            class=""
          >
            <slide
              class=""
              v-for="(successBox, index) in successStories"
              :key="index"
            >
              <div class="mx-2 md:mr-[50px] h-full">
                <ServiceSuccessStoryCard
                  :successTitle="successBox.title"
                  :successRate="successBox.successRate"
                  :successDescription="successBox.description"
                  :successBg="successBox.backgroundColor"
                />
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="container-fluid flex space-x-8 mt-26 justify-center">
        <div
          class="arrow-icon transform -translate-y-1/2 cursor-pointer w-[44px] h-[32px]"
          @click="successCarousel.prev()"
        >
          <ClientOnly>
            <fa
              class="text-[#fdb21d] w-full !h-full"
              :icon="['fas', 'arrow-left']"
            />
          </ClientOnly>
        </div>
        <div
          class="arrow-icon transform -translate-y-1/2 cursor-pointer w-[44px] h-[32px]"
          @click="successCarousel.next()"
        >
          <ClientOnly>
            <fa
              class="text-[#fdb21d] w-full !h-full"
              :icon="['fas', 'arrow-right']"
            />
          </ClientOnly>
        </div>
      </div>
    </section>
    <!-- End Slider of digital marketing page -->

    <!-- Start what you can expect -->
    <section class="container-fluid pt-16 md:pt-[180px] lg:pt-[200px]">
      <div class="flex flex-col items-center justify-center">
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl !leading-[62px] font-medium text-primary text-center w-full md:w-3/5"
        >
          What you can expect when working together with us.
        </h2>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center sm:justify-between gap-[45px] mt-10 md:mt-16 lg:mt-20"
      >
        <div
          v-for="item in expectations"
          :key="item.id"
          class="bg-[#2A1F51] rounded-[5px] flex flex-col items-start justify-start p-6 xl:p-10 xl:pb-[95px]"
        >
          <img
            class="w-16 md:w-20 xl:w-26 h-16 md:h-20 xl:h-26"
            :src="item.src"
            :alt="item.title"
          />
          <p
            class="text-lg md:text-xl lg:text-2xl 3dx:text-[28px] 3dx:leading-[38px] text-white font-medium mt-[30px] mb-[21px]"
          >
            {{ item.title }}
          </p>
          <p class="md:text-lg lg:text-xl text-[#F0F0F0] font-light">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- End what you can expect -->

    <!-- Start Choose how you want -->
    <section
      class="container-fluid py-14 md:pt-[180px] lg:pt-[200px] md:pb-[160px]"
    >
      <div class="flex flex-col items-start pb-20 md:pb-0">
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-medium !leading-[62px] text-primary text-left w-full md:w-1/2"
        >
          Choose how you want to work together with us.
        </h2>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2dx:grid-cols-4 justify-center sm:justify-between gap-4 md:gap-6 xl:gap-[33px] mt-20"
      >
        <div
          v-for="(item, index) in works"
          :key="item.id"
          class="flex flex-col relative"
        >
          <div
            class="h-[40px] sm:h-[70px] md:h-[90px] lg:h-[80px] xl:h-[70px] 3xl:h-[90px]"
          >
            <img
              :class="`absolute top-1.5 sm:top-4 right-0 z-[1] max-w-[40%] sm:max-w-[70%] ${
                index === 3 ? 'opacity-100' : 'opacity-0'
              }`"
              src="/services/digital-mkt/work-5.webp"
              alt="popular"
            />
          </div>
          <div
            :class="`bg-[#2A1F51] flex-grow relative rounded-[5px] flex flex-col items-start justify-start gap-y-7 pt-[180px] px-10 md:px-6 xl:px-10 pb-10 md:pb-6 xl:pb-[77px] ${
              index === 0
                ? 'card1'
                : index === 1
                ? 'card2'
                : index === 2
                ? 'card3'
                : 'card4'
            }`"
          >
            <img
              class="absolute top-0 left-10 w-[60px] h-[130px]"
              :src="item.src"
              :alt="item.title"
            />
            <div class="flex flex-col space-y-[30px] flex-grow">
              <p
                class="text-lg md:text-xl lg:text-2xl 3dx:text-[28px] max-w-[225px] break-words 2dx:leading-[2.25rem] text-white font-medium 3dx:leading-[38px]"
              >
                {{ item.title }}
              </p>
              <p class="lg:text-lg xl:text-xl font-light text-[#F0F0F0]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-medium text-primary mt-24 mb-12"
        >
          Ready to boost clicks?
        </h2>
        <NuxtLink
          to="/contact-us"
          aria-label="Get a free proposal"
          class="my-10 flex justify-center items-center w-fit px-[30px] h-14 xl:h-[60px] bg-[#FAAF04] font-bold text-base lg:text-xl rounded-sm whitespace-nowrap"
        >
          <span class="text-[#1A1139]">Get a free proposal</span>
        </NuxtLink>
      </div>
    </section>
    <!-- End Choose how you want -->
  </div>
</template>

<style scoped>
/* @media (max-width: 639px) {
  .card1 {
    @apply order-2;
  }
  .card2 {
    @apply order-3;
  }
  .card3 {
    @apply order-4;
  }
  .card4 {
    @apply order-1;
  }
}
@media (min-width: 640px) and (max-width: 767px) {
  .card2 {
    @apply order-3;
  }
  .card3 {
    @apply order-4;
  }
  .card4 {
    @apply order-2;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .card2 {
    @apply order-3;
  }
  .card3 {
    @apply order-4;
  }
  .card4 {
    @apply order-2;
  }
} */
.our_services {
  border-radius: 50px 0px 50px 50px;
}
</style>
