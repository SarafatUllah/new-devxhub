<script setup>
defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
// const showFbChat = inject("showFbChat");
function showDialog() {
  if (FB && FB.CustomerChat) {
    console.log("FBCustomerChat");
    FB.CustomerChat.showDialog();
  } else {
    FB.Event.subscribe("customerchat.load", function () {
      FB.CustomerChat.showDialog();
    });
  }
}
</script>

<template>
  <Transition name="modal">
    <div
      v-if="showModal"
      class="modal-mask fixed p-4 inset-0 flex items-center justify-center z-[999999]"
    >
      <div
        class="fixed inset-0 bg-gray-600 opacity-50"
        @click="$emit('closeModal')"
      >
        <div class="modal-mask absolute inset-0 opacity-75"></div>
      </div>

      <div class="modal-container w-[460px] h-[260px]">
        <div class="absolute top-0 right-0 m-2 cursor-pointer hidden">
          <ClientOnly>
            <fa
              class="text-white text-2xl"
              :icon="['fa-solid', 'times']"
              @click="$emit('closeModal')"
            />
          </ClientOnly>
        </div>
        <div class="pt-6 mx-6 border-b-2 border-gray-400">
          <h4 class="text-lg text-[#FDB21D] pb-2 font-semibold">
            24/7 Support
          </h4>
        </div>
        <div class="flex items-center justify-center flex-row p-6 py-10 gap-10">
          <BaseIconFbMessenger
            class="w-[60px] h-[60px] cursor-pointer"
            @click="showDialog(), $emit('closeModal')"
          />
          <NuxtLink
            to="https://api.whatsapp.com/send?phone=8801326506464"
            target="_blank"
            aria-label="whatsapp"
            @click="$emit('closeModal')"
          >
            <BaseIconWhatsApp class="w-[60px] h-[60px]" />
          </NuxtLink>
        </div>
        <div class="w-full flex justify-center">
          <button
            class="px-5 py-2 font-semibold text-[#FDB21D] rounded-full border-2 border-[#FDB21D]"
            @click="$emit('closeModal')"
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.modal-container {
  @apply bg-[#3d2c79] rounded-lg overflow-hidden shadow-xl sm:max-w-lg relative;
  transition: all 0.3s ease;
}
.modal-mask {
  transition: opacity 0.3s ease;
}
.modal-enter-from .modal-mask,
.modal-leave-to .modal-mask {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 0;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
</style>
