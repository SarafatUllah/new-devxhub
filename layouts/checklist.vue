<script setup>
const title = ref("Web Developer Checklist");
const setTitle = (item) => {
  title.value = item;
};
</script>

<template>
  <div>
    <DeveloperChecklistHeader @set-title="setTitle" />
    <h1 class="text-2xl text-white font-bold text-center mt-10">{{ title }}</h1>
    <div role="main">
      <slot />
    </div>
    <Footer role="contentinfo" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700;8..60,800;8..60,900&family=Tinos:wght@700&display=swap");
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Hairline.otf")
    format("opentype");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Thin.otf")
    format("opentype");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-ExtraLight.otf")
    format("opentype");
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Light.otf")
    format("opentype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Book.otf")
    format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Medium.otf")
    format("opentype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-SemiBold.otf")
    format("opentype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-ExtraBold.otf")
    format("opentype");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Bold.otf")
    format("opentype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Heavy.otf")
    format("opentype");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("/Proxima-Nova-Font/Rene-Bieder-Milliard-Black.otf")
    format("opentype");
  font-weight: 1000;
  font-style: normal;
}

body {
  /* font-family: "Montserrat", sans-serif; */
  font-family: "Proxima Nova", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background: #262d3d;
  color: #fff;
  padding-bottom: 30px;
  -webkit-font-smoothing: antialiased;
}
</style>
