<script setup>
import menuIcon from "~/assets/img/icons/menu.svg";
import closeIcon from "~/assets/img/icons/close.svg";
import { storeToRefs } from "pinia";
import { useHeaderStore } from "~/stores/header";
// pinia
const { isMobileMenu } = storeToRefs(useHeaderStore());
const { setMobileMenu } = useHeaderStore();
const company = [
  {
    id: 1,
    name: "About us",
    path: "/about-us",
    img: "/header/company/aboutUs.svg",
  },
  {
    id: 2,
    name: "Why Choose us",
    path: "/why-choose-us",
    img: "/header/company/whyChooseUs.svg",
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
    img: "/header/company/product.webp",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
    img: "/header/company/blog.svg",
  },
  {
    id: 5,
    name: "Service Provider FAQs",
    path: "/faq",
    img: "/header/company/faq.svg",
  },
];
const services = [
  {
    id: 1,
    name: "Team Enhancement Services",
    path: "/team-enhancement-services",
    img: "/header/services/teamEnhancement.png",
  },
  {
    id: 2,
    name: "Offshore Office Expansion",
    path: "/offshore-office-expansion",
    img: "/header/services/offshoreOffice.png",
  },
  {
    id: 3,
    name: "MVP Service",
    path: "/mvp-service",
    img: "/header/services/mvpService.png",
  },
  {
    id: 4,
    name: "End to End Development",
    path: "/coming-soon",
    img: "/header/services/endToEndDevelopment.png",
    nestedService: [
      {
        id: 1,
        name: "Custom Software Development",
        path: "/custom-software-development",
        img: "/header/services/customSoftwareDevelopment.png",
      },
      {
        id: 2,
        name: "Web Application Development",
        path: "/web-application-development",
        img: "/header/services/webApplicationDevelopment.png",
      },
      {
        id: 3,
        name: "Mobile App Development",
        path: "/mobile-app-development",
        img: "/header/services/mobileAppDevelopment.png",
      },
      {
        id: 4,
        name: "UI/UX Design",
        path: "/ui-ux-design",
        img: "/header/services/UiUxDesign.png",
      },
      {
        id: 5,
        name: "SQA and Testing Services",
        path: "/sqa-and-testing",
        img: "/header/services/SQATestingServices.png",
      },
      {
        id: 6,
        name: "DevOps",
        path: "/devops",
        img: "/header/services/DevOps.png",
      },
      {
        id: 7,
        name: "Digital Marketing",
        path: "/digital-marketing",
        img: "/header/services/DigitalMarketing.png",
      },
      {
        id: 8,
        name: "IT Consultancy",
        path: "/it-consultancy",
        img: "/header/services/consultancy.png",
      },
      {
        id: 9,
        name: "Software Maintenance and Support",
        path: "/software-maintenance-and-support",
        img: "/header/services/softwareMaintenanceSupport.png",
      },
    ],
  },
];

const currentSubMenu = ref(null);
const toggleSubMenu = (submenu) => {
  if (currentSubMenu.value === submenu) {
    currentSubMenu.value = null;
  } else {
    currentSubMenu.value = submenu;
  }
};

const currentNestedMenu = ref(null);
const setCurrentNestedMenu = (activeNested) => {
  if (currentNestedMenu.value !== activeNested) {
    currentNestedMenu.value = activeNested;
  } else {
    currentNestedMenu.value = null;
  }
};
</script>

<template>
  <!-- shadow-[0px_4px_4px_rgba(0,0,0,0.25)] -->
  <div class="bg-[#1A1139] header" @click.stop="setMobileMenu(false)">
    <div class="container-fluid">
      <div class="flex justify-between items-center md:py-7 py-3.5 relative">
        <NuxtLink to="/">
          <BaseIconDEVxHUBLogo
            class="md:w-[112px] md:h-[42px] w-[85px] h-[32px]"
          />
        </NuxtLink>
        <ul
          class="hidden lg:flex ml-4 space-x-4 lgx:space-x-6 2xl:space-x-10 text-lg font-semibold text-white"
        >
          <li class="dropdown">
            <p
              class="flex items-center space-x-4 cursor-pointer"
              @click="toggleSubMenu('company')"
            >
              <span>Company</span>
              <ClientOnly>
                <fa
                  :icon="['fas', 'angle-down']"
                  class="transition-all duration-300 ease-in-out"
                />
              </ClientOnly>
            </p>
            <ul
              v-if="currentSubMenu === 'company'"
              class="dropdown-content flex flex-col py-2"
            >
              <span class="box"></span>
              <span class="triangle"></span>
              <li class="mx-6" v-for="item in company" :key="item.id">
                <NuxtLink
                  class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                  :to="item.path"
                  :aria-label="item.name"
                  @click.native="toggleSubMenu(null)"
                  ><img :src="item.img" :alt="item.name" class="w-6 h-6" />
                  <span>{{ item.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <p
              class="flex items-center space-x-4 cursor-pointer"
              @click="toggleSubMenu('services')"
            >
              <span>Services</span>
              <ClientOnly>
                <fa
                  :icon="['fas', 'angle-down']"
                  class="transition-all duration-300 ease-in-out"
                />
              </ClientOnly>
            </p>
            <ul
              v-if="currentSubMenu === 'services'"
              class="dropdown-content service-dropdown flex flex-col py-2"
            >
              <span class="box"></span>
              <span class="triangle service-triangle"></span>
              <div class="flex space-x-3">
                <div class="services">
                  <template v-for="item in services">
                    <li v-if="!item.nestedService" :key="item.id" class="mx-6">
                      <NuxtLink
                        class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                        :to="item.path"
                        @click.native="toggleSubMenu(null)"
                        ><img
                          :src="item.img"
                          :alt="item.name"
                          class="w-6 h-6"
                        />
                        <span>{{ item.name }}</span>
                      </NuxtLink>
                    </li>
                  </template>
                </div>

                <template v-for="item in services" :key="item.id">
                  <div v-if="item.nestedService" class="mx-6 nestedServices">
                    <div
                      class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center mr-6"
                    >
                      <img :src="item.img" :alt="item.name" class="w-6 h-6" />
                      <span>{{ item.name }}</span>
                      <ClientOnly>
                        <fa :icon="['fas', 'hand-point-down']" class="ml-2" />
                      </ClientOnly>
                    </div>
                    <ul>
                      <template
                        v-for="nestedItem in item.nestedService"
                        :key="nestedItem.id"
                      >
                        <li class="mx-6">
                          <NuxtLink
                            class="py-3 pr-10 flex space-x-2 border-b-[0.5px] border-[#FDB21D] items-center"
                            :to="nestedItem.path"
                            @click.native="toggleSubMenu(null)"
                            ><img
                              :src="nestedItem.img"
                              :alt="nestedItem.name"
                              class="w-6 h-6"
                            />
                            <span>{{ nestedItem.name }}</span>
                          </NuxtLink>
                        </li>
                      </template>
                    </ul>
                  </div>
                </template>
              </div>
            </ul>
          </li>
          <li><NuxtLink to="/our-clients">Clients</NuxtLink></li>
          <!-- <li><NuxtLink to="/products">Products</NuxtLink></li> -->
          <li>
            <NuxtLink to="/how-we-work" class="whitespace-nowrap"
              >How We Work</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/appointment"
              aria-label="Schedule a meeting"
              class="whitespace-nowrap"
              >Schedule a meeting</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/career"
              aria-label="Careers"
              class="whitespace-nowrap flex items-center relative"
              ><img
                class="w-[16px] h-[16px] absolute -top-[1px] -right-[10px]"
                src="/header/newrocket.webp"
                alt="rocket_space_icon"
              /><span>Careers</span></NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact-us"
              aria-label="Contact Us"
              class="whitespace-nowrap"
              >Contact Us</NuxtLink
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <img
            @click.stop="
              isMobileMenu ? setMobileMenu(false) : setMobileMenu(true)
            "
            class="h-8 w-8 cursor-pointer"
            :src="isMobileMenu ? closeIcon : menuIcon"
            alt="DEVxHUB Menu Icon"
          />
          <div
            v-if="isMobileMenu"
            class="mobile w-full max-h-[550px] py-3 absolute top-20 md:top-28 right-0 overflow-y-auto"
            @click.stop=""
          >
            <ul
              class="flex flex-col mx-5 text-white whitespace-nowrap text-sm md:text-base font-medium text-center"
            >
              <li class="py-4 flex flex-col border-b-[0.5px] border-[#FDB21D]">
                <p
                  class="flex items-center justify-center space-x-2"
                  :class="
                    currentSubMenu === 'company'
                      ? 'text-[#FDB21D]'
                      : 'text-white'
                  "
                  @click="toggleSubMenu('company')"
                >
                  <span class="text-xl font-medium">Company</span>
                  <ClientOnly>
                    <fa
                      :icon="['fas', 'angle-down']"
                      class="transition-all duration-300 ease-in-out"
                      :class="
                        currentSubMenu === 'company' ? 'rotate-180' : 'rotate-0'
                      "
                    />
                  </ClientOnly>
                </p>
                <ul
                  v-if="currentSubMenu === 'company'"
                  class="flex flex-col pb-2 pt-4"
                >
                  <li class="py-3" v-for="item in company" :key="item.id">
                    <NuxtLink
                      :to="item.path"
                      @click.native="setMobileMenu(false)"
                      ><span>{{ item.name }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="py-4 flex flex-col border-b-[0.5px] border-[#FDB21D]">
                <p
                  class="flex items-center justify-center space-x-2"
                  :class="
                    currentSubMenu === 'services'
                      ? 'text-[#FDB21D]'
                      : 'text-white'
                  "
                  @click="toggleSubMenu('services')"
                >
                  <span class="text-xl font-medium">Services</span>
                  <ClientOnly>
                    <fa
                      :icon="['fas', 'angle-down']"
                      class="transition-all duration-300 ease-in-out"
                      :class="
                        currentSubMenu === 'services'
                          ? 'rotate-180'
                          : 'rotate-0'
                      "
                    />
                  </ClientOnly>
                </p>
                <ul
                  v-if="currentSubMenu === 'services'"
                  class="flex flex-col pb-2 pt-4"
                >
                  <template v-for="item in services">
                    <li v-if="!item.nestedService" class="py-3" :key="item.id">
                      <NuxtLink
                        :to="item.path"
                        @click.native="setMobileMenu(false)"
                        ><span>{{ item.name }}</span>
                      </NuxtLink>
                    </li>
                    <li v-if="item.nestedService" class="py-3" :key="item.id">
                      <div
                        :class="
                          currentNestedMenu === item.id
                            ? 'text-[#FDB21D]'
                            : 'text-white'
                        "
                        @click.native="setCurrentNestedMenu(item.id)"
                      >
                        <span>{{ item.name }}</span>
                        <ClientOnly>
                          <fa
                            :icon="['fas', 'angle-down']"
                            class="ml-2 transition-all duration-300 ease-in-out"
                            :class="
                              currentNestedMenu === item.id
                                ? 'rotate-180'
                                : 'rotate-0'
                            "
                          />
                        </ClientOnly>
                      </div>
                      <ul
                        v-if="currentNestedMenu === item.id"
                        class="flex flex-col pb-2 pt-4 transition-all duration-300 ease-in-out"
                      >
                        <template
                          v-for="nestedItem in item.nestedService"
                          :key="nestedItem.id"
                        >
                          <li class="py-3">
                            <NuxtLink
                              :to="nestedItem.path"
                              @click.native="setMobileMenu(false)"
                              ><span>{{ nestedItem.name }}</span>
                            </NuxtLink>
                          </li>
                        </template>
                      </ul>
                    </li>
                  </template>
                </ul>
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/our-clients"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Clients</NuxtLink
                >
              </li>
              <!-- <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/products"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >Products</NuxtLink
                >
              </li> -->
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/how-we-work"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  >How We Work</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/appointment"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  aria-label="Schedule a meeting"
                  >Schedule a meeting</NuxtLink
                >
              </li>
              <li class="py-4 border-b-[0.5px] border-[#FDB21D]">
                <NuxtLink
                  to="/career"
                  class="text-xl font-medium"
                  @click.native="setMobileMenu(false)"
                  aria-label="Careers"
                  >Careers</NuxtLink
                >
              </li>
              <li class="py-4">
                <NuxtLink
                  to="/contact-us"
                  class="text-xl font-medium"
                  aria-label="Contact Us"
                  @click.native="setMobileMenu(false)"
                  >Contact Us</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-family: "SF UI Display", sans-serif !important;
}
.dropdown {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 56px;
  z-index: 1;
  min-width: 300px;
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 18px;
  font-weight: normal;
}

.dropdown-content li {
  color: white;
  white-space: nowrap;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li:last-child a {
  border-bottom: none;
}
.service-dropdown {
  left: 70%;
  transform: translateX(-50%);
}
.triangle {
  clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
  background-color: #2a1e56;
  position: absolute;
  top: -20px;
  left: 40px;
  display: block;
  width: 20px;
  height: 20px;
}
.service-triangle {
  left: 44%;
}
.box {
  width: 100%;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
  opacity: 0;
}

.mobile {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
