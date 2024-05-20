<script setup>
import { useWebdevChecklistStore } from "~/stores/webdevchecklist";
const { setSelectedCheckList, setSelectedCheckLists } =
  useWebdevChecklistStore();
</script>

<template>
  <header class="bg-[#204ecf] md:h-[72px] h-[120px] py-0 px-2">
    <div
      class="flex md:flex-row md:justify-between justify-center items-center min-h-full max-w-[1280px] mx-auto"
    >
      <div
        class="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-x-4 items-center text-white"
      >
        <NuxtLink to="/">
          <BaseIconDEVxHUBLogo class="w-[112px] h-[42px]" />
        </NuxtLink>
        <div class="flex md:space-x-2 space-x-4 flex-wrap md:justify-start justify-center md:mt-0 mt-4">
          <h2
            @click.stop="
              [
                setSelectedCheckList('developer'),
                setSelectedCheckLists('developer'),
                $emit('set-title', 'Web Developer Checklist'),
              ]
            "
            class="text-[17px] font-light md:pl-4 md:border-l md:border-white md:!mt-2.5 cursor-pointer"
          >
            Web Developer Checklist
          </h2>
          <h2
            @click.stop="
              [
                setSelectedCheckList('sqa'),
                setSelectedCheckLists('sqa'),
                $emit('set-title', 'SQA Checklist'),
              ]
            "
            class="text-[17px] font-light md:pl-4 md:border-l md:border-white md:!mt-2.5 cursor-pointer"
          >
            SQA Checklist
          </h2>
          <h2
            @click.stop="
              [
                setSelectedCheckList('ba'),
                setSelectedCheckLists('ba'),
                $emit('set-title', 'BA Checklist'),
              ]
            "
            class="text-[17px] font-light md:pl-4 md:border-l md:border-white md:!mt-2.5 cursor-pointer"
          >
            BA Checklist
          </h2>
          <h2
            class="text-[17px] font-light md:pl-4 md:border-l md:border-white md:!mt-2.5 cursor-pointer"
            @click.stop="
              [
                setSelectedCheckList('uiux'),
                setSelectedCheckLists('uiux'),
                $emit('set-title', 'UI/UX Checklist'),
              ]
            "
          >
            UI/UX Checklist
          </h2>
        </div>
      </div>
      <div
        class="hidden items-center space-x-[5px] text-base font-normal text-white mt-0"
      >
        <p>Get the extension</p>
        <a
          class="underline"
          href="https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US"
          target="_blank"
          >Chrome</a
        >
        <p>|</p>
        <a
          class="underline"
          href="https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/"
          target="_blank"
          >Firefox</a
        >
      </div>
    </div>
  </header>
</template>
