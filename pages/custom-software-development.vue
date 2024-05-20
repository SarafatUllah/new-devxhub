<script setup>
const title = "Custom Software Development | DEVxHUB";
const intro = {
  title: "Empowering Your Business with Custom Software Development Solutions",
  description:
    "Elevate your business with DEVxHUB's Custom Software Development services. Our team of skilled developers creates unique software solutions tailored to your specific needs. We understand that every business is distinct, and off-the-shelf software often falls short. With our personalized solutions, you can streamline operations, improve efficiency, and gain a competitive edge. Whether it's a web application, mobile app, or specialized software, we've got you covered. Experience innovation, reliability, and scalability like never before. Let's turn your ideas into reality and enhance your business with our advanced custom software solutions.",
  image: "/services/custom/hero-custom.webp",
  width: '36vw',
  height: '35vw',
  mobileWidth: '78.5vw',
  mobileHeight: '99.5vw',
  maxWidth: '671px',
  maxHeight: '672px',
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
  title: "Our Custom Software Development Services",
  description:
    "Comprehensive solutions tailored to your needs, from design to maintenance, ensuring efficient, user-friendly software for your business",
  items: [
    {
      id: 1,
      title: "Custom Software Design",
      image: "/services/custom/service-1.webp",
      description:
        "We specialize in creating tailored software solutions to enhance efficiency and provide a user-friendly experience, meeting your unique business needs effectively.",
    },
    {
      id: 2,
      title: "Database Development",
      image: "/services/custom/service-2.webp",
      description:
        "Our expertise lies in developing secure and scalable data solutions that enable business growth and efficient data management.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      image: "/services/custom/service-3.webp",
      description:
        "Engage and captivate your audience with user-friendly mobile apps, available on both iOS and Android platforms.",
    },
    {
      id: 4,
      title: "Web Application Development",
      image: "/services/custom/service-4.webp",
      description:
        "Elevate your online presence through the development of modern web applications, designed to provide a superior user experience.",
    },
    {
      id: 5,
      title: "Integration Services",
      image: "/services/custom/service-5.webp",
      description:
        "We simplify your operations by seamlessly connecting software systems, automating processes to enhance overall productivity.",
    },
    {
      id: 6,
      title: "Legacy Software Modernization",
      image: "/services/custom/service-6.webp",
      description:
        "Enhance the performance and security of your existing software with our modernization services, adapting it to evolving business requirements",
    },
    {
      id: 2,
      title: "Maintenance and Support",
      image: "/services/custom/service-7.webp",
      description:
        "Our commitment to you extends beyond development, offering ongoing support, updates, and issue resolution to ensure the continued smooth operation of your software",
    },
  ],
};
const process = {
  title: "Our Custom Software Development Approach",
  description:
    "Custom Software Development typically involves several major processes, and while the specific steps may vary, the following six are commonly part of the process:",
  items: [
    {
      id: 1,
      title: "Requirement Analysis",
      image: "/services/custom/process-1.webp",
      description:
        "In the initial phase, we meticulously delve into your software needs and objectives. We collaborate with you to gather detailed information about the desired features and how the software will be used. This comprehensive understanding forms the foundation of our project, ensuring that every aspect aligns with your specific goals.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(253, 178, 29, 0.20) 97.99%)",
    },
    {
      id: 2,
      title: "Planning",
      image: "/services/custom/process-2.webp",
      description: `Our team crafts a comprehensive project plan that serves as a roadmap for success. We define the project's scope, pinpoint precise timelines, allocate budget resources, and establish the necessary technical architecture. This meticulous planning ensures that your project stays on track and within budget, while also laying the groundwork for its technical infrastructure.`,
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(0, 212, 99, 0.20) 97.99%)",
    },
    {
      id: 3,
      title: "Design",
      image: "/services/custom/process-3.webp",
      description: `In the design phase, we breathe life into your software's architecture. This process encompasses creating the software's structure, crafting an efficient database design, designing user interfaces that prioritize user-friendliness, and outlining technical specifications. Our design is not just about aesthetics; it's about ensuring that your software will function seamlessly, providing an exceptional user experience.`,
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(135, 110, 254, 0.20) 97.99%)",
    },
    {
      id: 4,
      title: "Development",
      image: "/services/custom/process-4.webp",
      description:
        "With the design blueprint in hand, our developers bring your software to life. They write code, test it extensively, and debug meticulously to ensure the software performs flawlessly. Our development process is characterized by precision and attention to detail, resulting in a final product that meets and exceeds your expectations.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(246, 82, 151, 0.20) 97.99%)",
    },
    {
      id: 5,
      title: "Testing and Quality Assurance",
      image: "/services/custom/process-5.webp",
      description:
        "Thorough testing and quality assurance are at the heart of our process. We leave no stone unturned in identifying and resolving any potential bugs or issues. Our multifaceted testing approach includes unit testing to assess individual components, integration testing to ensure all parts work harmoniously, and user acceptance testing to guarantee the software aligns perfectly with your requirements.",
      background:
        "linear-gradient(146deg, rgba(19, 23, 35, 0.20) 5.86%, rgba(253, 63, 1, 0.20) 97.99%)",
    },
    {
      id: 6,
      title: "Deployment and Maintenance",
      image: "/services/custom/process-6.webp",
      description: `Following rigorous testing, we take the next step by deploying the software into your environment. Our deployment process is meticulous, ensuring that the software integrates seamlessly and functions smoothly. However, our commitment doesn't end there. We provide ongoing maintenance and support, addressing any issues that may arise, implementing timely updates, and even adding new features as your needs evolve. Your software remains in peak condition, backed by our unwavering support. Your satisfaction is paramount.`,
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
