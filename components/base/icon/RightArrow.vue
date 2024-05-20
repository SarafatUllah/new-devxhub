<script setup lang="ts">
defineProps({
  icon: String,
  type: {
    type: String,
    default: "fa-solid",
  },
  extraClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <ClientOnly>
    <fa :icon="`${type} fa-${icon}`" :class="extraClass"></fa>
  </ClientOnly>
</template>
