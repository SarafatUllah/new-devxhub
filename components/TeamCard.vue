<script setup>
defineProps({
  team: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <ClientOnly>
    <div
      class="w-[274px] max-h-[369px] flex flex-col md:items-center md:justify-between rounded-[10px] overflow-hidden bg-white shadow-[0_4.226px_8.453px_0_rgba(49,49,49,0.10)] !mx-[16px] !my-[16px]"
    >
      <img
        :src="team.image"
        :alt="team.name"
        class="w-full h-[219px] aspect-[4/3]"
      />
      <div class="p-[20px] flex flex-col items-center justify-between">
        <div class="pb-5">
          <h2 class="h_tag_third !text-[#1A2134] !font-semibold text-center">
            {{ team.name }}
          </h2>
          <p class="mt-1 p_tag_third !font-medium text-center">
            {{ team.position }}
          </p>
        </div>
        <div class="flex items-center justify-center gap-x-4">
          <a
            v-if="team.facebook"
            :href="team.facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/homepage/teams-section/fb.svg"
              alt="Facebook Link"
            />
          </a>
          <a
            v-if="team.linkedin"
            :href="team.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/homepage/teams-section/linkedin.svg"
              alt="Linkedin Link"
            />
          </a>
          <a
            v-if="team.twitter"
            :href="team.twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/homepage/teams-section/twitter-x.svg"
              alt="Twitter Link"
            />
          </a>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
