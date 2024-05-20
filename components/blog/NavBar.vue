<template>
  <div class="container-fluid pb-4 lg:pb-0">
    <div
      class="flex flex-col-reverse items-center md:flex-row md:justify-between"
    >
      <!-- Menu -->
      <div class="py-2">
        <!-- Mobile Dropdown Menu -->
        <div>
          <button
            @click.prevent="toggleDropdown"
            class="dropbtn lg:hidden flex justify-between items-center shadow-md w-60"
          >
            <span>All Posts</span>
            <ClientOnly>
              <fa v-if="!isMenuVisible" :icon="['fas', 'angle-down']" />
              <fa v-else :icon="['fas', 'angle-up']" />
            </ClientOnly>
          </button>

          <div
            v-if="isMenuVisible"
            @click="toggleDropdown"
            class="dropdown-content shadow-lg w-60"
          >
            <a href="#">News</a>
            <a href="#">People</a>
            <a href="#">eCommerce</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Plugin Reviews</a>
          </div>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex lg:space-x-6">
          <a href="#" class="nav-link"> News </a>
          <a href="#" class="nav-link"> People </a>
          <a href="#" class="nav-link"> eCommerce </a>
          <a href="#" class="nav-link"> Digital Marketing </a>
          <a href="#" class="nav-link"> Plugin Reviews </a>
        </nav>
      </div>

      <!-- Search Field -->
      <div class="relative">
        <div class="relative">
          <input
            class="pl-8 pr-16 py-1.5 outline-none shadow-md rounded-full w-full lg:w-56 xl:w-72"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <ClientOnly>
            <fa
              class="h-4 w-5 text-[#808080] absolute top-2.5 left-2"
              :icon="['fas', 'magnifying-glass']"
            />
          </ClientOnly>
        </div>
        <ClientOnly>
          <button
            class="bg-primary w-12 py-0.5 rounded-full text-white text-base absolute top-1 right-1"
          >
            <fa :icon="['fas', 'long-arrow-right']" />
          </button>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },

  methods: {
    toggleDropdown() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isMenuVisible = false;
      }
    },
  },

  created() {
    window.addEventListener("click", this.close);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-base text-center font-medium rounded-md bg-[#FEFEFF] hover:bg-[#F1F3FF] focus:bg-[#F1F3FF] px-2 xl:px-4 py-2;
}

.dropbtn {
  @apply text-base text-center font-medium rounded-md bg-[#FEFEFF] hover:bg-[#F1F3FF] focus:bg-[#F1F3FF] px-2 xl:px-4 py-2;
}
.dropdown {
  @apply relative inline-block;
}

.dropdown-content {
  @apply absolute bg-[#F1F3FF] min-w-[160px] shadow-lg z-50;
  /* display: none; */
}

.dropdown-content a {
  @apply text-black px-4 py-3 block no-underline hover:bg-[#F1F3FF];
}
</style>
