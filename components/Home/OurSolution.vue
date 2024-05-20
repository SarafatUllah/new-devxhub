<script setup>
const route = useRoute();
</script>
<template>
  <div class="container-fluid mx-auto mt-10">
    <div
      class="contact-card w-full max-h-[400px] rounded-3xl flex-col px-3.5 mx-auto flex lg:flex-row lg:space-x-4 justify-around items-center text-center py-3"
      :class="[
        $route.name === 'career' ? 'md:px-10 md:py-10' : 'md:px-20 md:py-7',
      ]"
    >
      <div v-if="$route.name === 'career'">
        <img
          class="shadow-lg w-[18vw] h-[18vw] max-w-[150px] max-h-[150px] lg:w-[21.01vw] lg:h-[21.01vw] lg:max-w-[225px] lg:max-h-[225px] mx-auto mb-2 md:mb-0"
          src="/home/customer-worldwide/resume_apply.svg"
          alt="devxhub-resume-apply"
        />
      </div>

      <div class="md:py-5 text-center md:text-left">
        <div v-if="$route.name !== 'career'">
          <h2
            class="pt-3 md:pt-0 pb-1 break-words text-xl md:text-3xl lg:text-4xl text-primary font-semibold"
          >
            Have Any Project For Us 🤔
          </h2>

          <p class="py-8 text-sm md:text-2xl text-primary">
            Lets discuss about your dreamed project. Our experienced global team
            is eager to assist you. Schedule a complimentary consultation to
            discuss your needs.
          </p>
          <div class="mb-5 lg:mb-0 py-5">
            <ClientOnly>
              <NuxtLink
                to="/contact-us"
                class="w-32 h-40 lg:w-40 lg:h-10 xl:w-48 xl:h-12 bg-[#FAAF04] px-6 py-5 font-semibold text-black text-base md:text-2xl rounded-lg whitespace-nowrap"
                aria-label="Contact Us"
              >
                Contact Us

                <fa class="text-black ml-1" :icon="['fas', 'arrow-right']" />
              </NuxtLink>
            </ClientOnly>
          </div>
        </div>

        <div v-else>
          <h2
            class="pb-1 pl-5 text-base md:text-3xl text-primary text-center lg:text-left"
          >
            Even if above opened positions do not match with your profile, we
            still encourage you to apply.
          </h2>
          <p
            class="pb-1 pl-5 text-base md:text-3xl text-primary text-center lg:text-left"
          >
            Feel free to
            <NuxtLink
              to="https://forms.gle/DymNKcw3Nb6Jamox7"
              target="_blank"
              class="font-bold"
            >
              Apply
            </NuxtLink>
          </p>
        </div>
      </div>

      <div v-if="$route.name === 'career'" class="mb-5 lg:mb-0 py-5">
        <NuxtLink
          to="https://forms.gle/NHHMEhkgqqntNwoL8"
          target="_blank"
          class="w-32 h-40 lg:w-40 lg:h-10 xl:w-48 xl:h-12 bg-[#FAAF04] px-5 py-3 font-bold text-black text-base rounded-sm whitespace-nowrap"
        >
          Apply Now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-card {
  background: linear-gradient(145.09deg, #2a1e56 11.97%, #3d2c79 89.93%);
  box-shadow: 0px 16px 42px rgba(0, 30, 108, 0.3);
  border-radius: 20px;
}
</style>
