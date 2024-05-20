<script setup>
const props = defineProps({
  facilities: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;
  const speedWheel = 0.02;
  const speedDrag = -0.1;
  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );
  const $items = document.querySelectorAll(".carousel-item");
  const $cursors = document.querySelectorAll(".cursor");
  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index];
    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / $items.length);
  };
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * ($items.length - 1));
    $items.forEach((item, index) => displayItems(item, index, active));
  };
  animate();
  $items.forEach((item, i) => {
    item.addEventListener("click", () => {
      progress = (i / $items.length) * 100 + 10;
      animate();
    });
  });
  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
  };
  const handleMouseMove = (e) => {
    if (e.type === "mousemove") {
      $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
  };
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };
  const handleMouseUp = () => {
    isDown = false;
  };
  document.addEventListener("mousewheel", handleWheel);
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("touchstart", handleMouseDown);
  document.addEventListener("touchmove", handleMouseMove);
  document.addEventListener("touchend", handleMouseUp);
});
</script>

<template>
  <div class="carousel">
    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[0].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[0].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[1].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[1].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[2].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[2].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[3].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[3].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[4].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[4].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[5].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[5].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[6].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[6].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[7].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[7].text }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="carousel-item text-center bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]"
    >
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[8].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[8].text }}
          </p>
        </div>
      </div>
    </div>

    <div class="carousel-item bg-gradient-to-bl from-[#2A1E56] to-[#3D2C79]">
      <div class="flex items-center text-center h-[300px] lg:h-[400px]">
        <div class="w-full">
          <img class="inline mb-7" :src="facilities[9].src" alt="icon" />
          <p
            class="px-6 lg:px-10 text-light-white text-base lg:text-lg font-semibold"
          >
            {{ facilities[9].text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.carousel {
  position: relative;
  z-index: 1;
  height: 70vh;
  overflow: hidden;
  pointer-events: none;
}
.carousel-item {
  --items: 10;
  --width: clamp(150px, 220px, 300px);
  --height: clamp(200px, 300px, 400px);
  --x: calc(var(--active) * 800%);
  --y: calc(var(--active) * 200%);
  --rot: calc(var(--active) * 120deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 35px;
  top: 50%;
  left: 50%;
  user-select: none;
  transform-origin: 0% 100%;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot));
  transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);
}
@media (min-width: 768px) {
  .carousel {
    height: 90vh;
  }
}
@media (min-width: 1024px) {
  .carousel {
    height: 100vh;
  }
  .carousel-item {
    width: clamp(150px, 30vw, 300px);
    height: clamp(200px, 40vw, 400px);
  }
}
</style>
