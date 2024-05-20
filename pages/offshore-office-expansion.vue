<script setup>
const title = "Offshore Office Expansion | DEVxHUB";
const intro = {
  title: "Unlock Global Success with Offshore Office Expansion",
  description:
    "Experience unprecedented growth and efficiency with DEVxHUB's Offshore Office Expansion services. Our expert team is dedicated to helping you establish a strong offshore presence, enabling your business to tap into global opportunities. We understand that expanding your operations offshore is a strategic move, and we're here to make it seamless, cost-effective, and tailored to your unique needs. Whether you're a startup or a well-established enterprise, our offshore expansion solutions will empower your business for global success.",
  image: "/services/offshore/hero-offshore.webp",
  width: '36vw',
  height: '25.5vw',
  mobileWidth: '71vw',
  mobileHeight: '51.5vw',
  maxWidth: '678.34px',
  maxHeight: '489.59px',
  link: "/contact-us",
  linkText: "Contact Us",
};
useSeoMeta({
  title: () => title,
  ogTitle: () => title,
  description: () => intro.description.slice(0, 300),
  ogDescription: () => intro.description.slice(0, 300),
});
const service = {
  title: "Our Offshore Office Expansion Services",
  description:
    "Comprehensive solutions designed to take your business global, from initial setup to ongoing support, ensuring a smooth and successful offshore expansion.",
  items: [
    {
      id: 1,
      title: "Market Analysis and Strategy",
      image: "/services/offshore/service-1.webp",
      description:
        "We conduct in-depth market analysis to identify the most promising offshore locations for your business. Our experts develop a customized market entry strategy, ensuring your expansion aligns perfectly with your growth goals.",
    },
    {
      id: 2,
      title: "Legal and Regulatory Compliance",
      image: "/services/offshore/service-2.webp",
      description:
        "Navigating the legal landscape in a new country can be complex. Our team assists with all legal aspects, from business registration to compliance with local regulations, ensuring a hassle-free and compliant offshore setup.",
    },
    {
      id: 3,
      title: "Infrastructure Setup",
      image: "/services/offshore/service-3.webp",
      description:
        "We take care of the logistical details, including office space, IT infrastructure, and staffing. Our goal is to create a seamless offshore office that mirrors your existing operations, allowing for smooth collaboration.",
    },
    {
      id: 4,
      title: "Talent Acquisition",
      image: "/services/offshore/service-4.webp",
      description:
        "Access top-tier talent worldwide with our talent acquisition services. We help you build a skilled offshore team, whether it's for software development, customer support, or any other function critical to your business.",
    },
    {
      id: 5,
      title: "Cultural Integration",
      image: "/services/offshore/service-5.webp",
      description:
        "Cultural differences can pose challenges during expansion. Our cultural integration strategies bridge the gap, fostering a harmonious work environment that promotes collaboration and productivity.",
    },
    {
      id: 6,
      title: "Project Management",
      image: "/services/offshore/service-6.webp",
      description:
        "Effective project management is crucial for offshore success. We provide experienced project managers to oversee your offshore projects, ensuring they meet quality, budget, and timeline expectations.",
    },
    {
      id: 7,
      title: "Ongoing Support and Growth",
      image: "/services/offshore/service-7.webp",
      description:
        "Our commitment doesn't end with setup. We offer continuous support, including HR management, legal compliance, and scalability solutions, to help your offshore office thrive and grow.",
    },
  ],
};
const process = {
  title: "Our Offshore Office Expansion Approach",
  description:
    "Offshore Office Expansion is a strategic move that demands a structured approach. Here are the key steps we follow:",
  items: [
    {
      id: 1,
      title: "Market Research and Strategy Development",
      image: "/services/offshore/process-1.webp",
      description:
        "We begin with extensive market research, identifying the most promising offshore locations for your business. Based on the research findings, we develop a customized market entry strategy that aligns with your growth objectives.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(253, 178, 29, 0.20) 97.99%)",
    },
    {
      id: 2,
      title: "Legal and Regulatory Compliance",
      image: "/services/offshore/process-2.webp",
      description:
        "Our legal experts handle all aspects of compliance, from business registration to labor laws. We ensure that your offshore office operates within the boundaries of local regulations, minimizing legal risks.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%)",
    },
    {
      id: 3,
      title: "Infrastructure Setup and Staffin",
      image: "/services/offshore/process-3.webp",
      description:
        "We take care of the practical details, such as securing office space, setting up IT infrastructure, and hiring skilled professionals. Our goal is to create a fully functional offshore office that integrates seamlessly with your existing operations.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(135, 110, 254, 0.20) 97.99%)",
    },
    {
      id: 4,
      title: "Talent Acquisition",
      image: "/services/offshore/process-4.webp",
      description:
        "Access to a global talent pool is vital. We help you identify, recruit, and onboard the right talent for your offshore team, ensuring they possess the skills and cultural fit necessary for success.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(246, 82, 151, 0.20) 97.99%)",
    },
    {
      id: 5,
      title: "Cultural Integration",
      image: "/services/offshore/process-5.webp",
      description:
        "Cultural differences can affect productivity and collaboration. Our cultural integration strategies bridge these gaps, fostering a cohesive work environment where your offshore team feels part of your organization's culture.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(253, 63, 1, 0.20) 97.99%)",
    },
    {
      id: 6,
      title: "Ongoing Support and Growth",
      image: "/services/offshore/process-6.webp",
      description:
        "Our support extends beyond setup. We provide ongoing support in areas like HR management, legal compliance, and scalability planning, ensuring your offshore office continues to thrive and contribute to your business's global success.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(3, 130, 243, 0.20) 97.99%)",
    },
  ],
};
</script>

<template>
  <div class="container-fluid pt-28 md:pt-36 pb-36 md:pb-48">
    <ServiceIntro :intro="intro" />

    <ServiceInclude :include-service="service" />

    <ServiceSection :service="process" />
  </div>
</template>

<style scoped></style>
