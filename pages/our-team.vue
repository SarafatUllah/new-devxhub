<script setup>
import { useRuntimeConfig } from "nuxt/app";
import { useRoute, useRouter } from "vue-router";

const developers = [
  {
    name: "Abdul Halim",
    position: "Software Engineer (L3)",
    image: "/images/assets/img/developers/Abdul_Halim.jpg", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/in/abdul-halim123/",
    twitter: null,
  },
  {
    name: "Ehsanur Rahman",
    position: "Flutter Developer (L3)",
    image: "/images/assets/img/developers/ehsanur.jpg", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/shekhehsanurrahman.sujit/",
    linkedin: "https://www.linkedin.com/in/sujit70777/",
    twitter: null,
  },
  {
    name: "Md. Sarafat Ullah",
    position: "Frontend Developer (L2)",
    image: "/images/assets/img/developers/sarafat.png", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/md.sarafat.ayon?mibextid=kFxxJD",
    linkedin: "https://www.linkedin.com/in/md-sarafat-ullah-7261ba1a4/",
    twitter: null,
  },
  {
    name: "Md Mahade Hasan Rafi",
    position: "Frontend Engineer (L1)",
    image: "/images/assets/img/developers/rafi.jpg", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/x.d01787/",
    linkedin: "https://www.linkedin.com/in/md-mahade-hasan-554506233/",
    twitter: null,
  },
  {
    name: "Mohammad Foysal",
    position: "Software Engineer (L1)",
    image: "/images/assets/img/developers/faysal.jpeg", // Placeholder since the actual image link is not provided ("LINk" is not a URL)
    facebook: "https://www.facebook.com/maynulll",
    linkedin: "https://www.linkedin.com/in/kawsaralam101/",
    twitter: "https://twitter.com/iamfoysal_",
  },
  {
    name: "Md. Mehedi Hasan",
    position: "Software Engineer (L1)",
    image: "/images/assets/img/developers/mehedi_hasan_shakil.png", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/mehedi11081",
    linkedin: "https://www.linkedin.com/in/mehedih-shakil/",
    twitter: null,
  },
  {
    name: "Tanvir Kabir",
    position: "Flutter Developer (L1)",
    image: "/images/assets/img/developers/tanvir_kabir.png", // Assuming the placeholder "Image" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/tanvir.kobir.3/",
    linkedin: "https://www.linkedin.com/in/tanvirtonmoy42/",
    twitter: "https://twitter.com/Tanvirkobir42",
  },
  {
    name: "Md.Borhan Uddin",
    position: "Software Engineer (L1)",
    image: "/images/assets/img/developers/borhan.JPG", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "hhttps://www.facebook.com/Wisdom.borhan/",
    linkedin: "https://www.linkedin.com/in/md-borhan-uddin-01606a238/",
    twitter: null,
  },
  {
    name: "Md. Rahul Reza",
    position: "Software Engineer (L1)",
    image: "/images/assets/img/developers/rahul.png", // Assuming the placeholder "Image" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/RAHULREZARAZ",
    linkedin: "https://www.linkedin.com/in/rahul-reza/",
    twitter: null,
  },
];
const sqaDevelopers = [
  {
    name: "Mejbaur Bahar Fagun",
    position: "Product Acceptance Engineer (L2)",
    image: "/images/assets/img/sqa/fagun.jpeg", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/mbfagun",
    linkedin: "https://www.linkedin.com/in/mejbaur/",
    twitter: "https://twitter.com/fagun018",
  },
  {
    name: "Soma Dey",
    position: "Product Acceptance Engineer (L1)",
    image: "/images/assets/img/sqa/soma.jpg", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/soma.dey.585?mibextid=LQQJ4d",
    linkedin:
      "https://www.linkedin.com/in/soma-dey-593819140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    twitter: null,
  },
  {
    name: "Md.Maynuddin",
    position: "Product Acceptance Engineer (L1)",
    image: "/images/assets/img/sqa/maynuddin.png", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/maynulll",
    linkedin: "https://www.linkedin.com/in/md-maynuddin-2980a1193/",
    twitter: "https://twitter.com/PortraitArtis13",
  },
  {
    name: "MD. Rakibul Islam",
    position: "Product Acceptance Engineer (L1)",
    image: "/images/assets/img/sqa/RAKIBUL.png", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/md.rakibsanto/",
    linkedin: "https://bd.linkedin.com/in/md-rakibsanto-10a725193",
    twitter: "https://twitter.com/md_rakibsanto",
  },
];
const uiDevelopers = [
  {
    name: "Sabbir Ahmed",
    position: "UI/UX Engineer (L1)",
    image: "/images/assets/img/ui-ux/sabbir-ahmed.jpg", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/khsabbir29",
    linkedin: "https://www.linkedin.com/in/khsabbir29/",
    twitter: "https://twitter.com/khsabbir29",
  },
  {
    name: "Masud Rana",
    position: "UI/UX Engineer (L1)",
    image: "/images/assets/img/ui-ux/masud.png", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/massudrana1995/",
    linkedin: "https://www.linkedin.com/in/masud-devxhub-58b312202/",
    twitter: "https://twitter.com/Masud_devxhub",
  },
];
const businessAnalysts = [
  {
    name: "Dewan Saiful Islam",
    position: "Business Analyst (L1)",
    image: "/images/assets/img/ba/saiful.png", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/nahid.islam.50309277/",
    linkedin: "https://www.linkedin.com/in/saifuldewan21/",
    twitter: null,
  },
  {
    name: "Ifrat Jahan Chowdhury Ima",
    position: "Business Analyst (Intern)",
    image: "/images/assets/img/ba/Ima.png", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/afrin.chowdhury.58323",
    linkedin: "https://www.linkedin.com/in/ifrat-jahan-chowdhury/",
    twitter: null,
  },
  {
    name: "Md. Rakibul Islam",
    position: "Business Analyst (Intern)",
    image: "/images/assets/img/ba/Rakib.jpg", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://www.facebook.com/smrakib.live",
    linkedin: "https://www.linkedin.com/in/smrakib99/",
    twitter: "https://twitter.com/smrakib50",
  },
];
const HRExecutives = [
  {
    name: "Tabia Tasnia",
    position: "HR Executive ",
    image: "/images/assets/img/hr/Tabia_Tasnia.JPG", // Placeholder since the actual image link is not provided ("Link" is not a URL)
    facebook: "https://www.facebook.com/ta.bia.395?mibextid=ZbWKwL",
    linkedin:
      "https://www.linkedin.com/in/tabia-tasnia-88892420b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: null,
  },
  {
    name: "Kh. Ashrafur Rahman",
    position: "HR Manager ",
    image: "/images/assets/img/hr/ashraf.jpg", // Assuming the placeholder "image link" is not a valid URL and should be replaced
    facebook: "https://web.facebook.com/ashraf.rahman.165033/",
    linkedin: null,
    twitter: null,
  },
];
const router = useRouter();
const config = useRuntimeConfig();
if (config.public.workflow === "live") {
  router.replace("/");
}
</script>

<template>
  <div class="min-h-screen container-fluid">
    <div class="pt-48 pb-48">
      <h1
        class="text-center md:text-5xl text-4xl font-semibold leading-[50px] text-primary mb-[62px]"
      >
        Our Team
      </h1>
      <div class="flex flex-col space-y-2.5 mt-[80px]">
        <h2 class="text-xl font-semibold text-[#F0F0F0]">Human Resource</h2>
        <div class="w-full h-[1px] bg-[#E3E3E3]"></div>
        <div
          class="flex flex-wrap sm:justify-start justify-center items-start mb-[60px] transform -translate-x-[16px]"
        >
          <LazyTeamCard
            v-for="(HRExecutive, index) in HRExecutives"
            :key="index"
            :team="HRExecutive"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-2.5 mt-[80px]">
        <h2 class="text-xl font-semibold text-[#F0F0F0]">Business Analyst</h2>
        <div class="w-full h-[1px] bg-[#E3E3E3]"></div>
        <div
          class="flex flex-wrap sm:justify-start justify-center items-start mb-[60px] transform -translate-x-[16px]"
        >
          <LazyTeamCard
            v-for="(businessAnalyst, index) in businessAnalysts"
            :key="index"
            :team="businessAnalyst"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-2.5 mt-[80px]">
        <h2 class="text-xl font-semibold text-[#F0F0F0]">UI/UX</h2>
        <div class="w-full h-[1px] bg-[#E3E3E3]"></div>
        <div
          class="flex flex-wrap sm:justify-start justify-center items-start mb-[60px] transform -translate-x-[16px]"
        >
          <LazyTeamCard
            v-for="(ui, index) in uiDevelopers"
            :key="index"
            :team="ui"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-2.5 mt-[80px]">
        <h2 class="text-xl font-semibold text-[#F0F0F0]">Developers</h2>
        <div class="w-full h-[1px] bg-[#E3E3E3]"></div>
        <div
          class="flex flex-wrap sm:justify-start justify-center items-start mb-[60px] transform -translate-x-[16px]"
        >
          <LazyTeamCard
            v-for="(developer, index) in developers"
            :key="index"
            :team="developer"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-2.5 mt-[80px]">
        <h2 class="text-xl font-semibold text-[#F0F0F0]">
          Product Acceptance Engineer
        </h2>
        <div class="w-full h-[1px] bg-[#E3E3E3]"></div>
        <div
          class="flex flex-wrap sm:justify-start justify-center items-start mb-[60px] transform -translate-x-[16px]"
        >
          <LazyTeamCard
            v-for="(sqa, index) in sqaDevelopers"
            :key="index"
            :team="sqa"
          />
        </div>
      </div>
    </div>
  </div>
</template>
