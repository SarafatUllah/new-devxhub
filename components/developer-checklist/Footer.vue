<script setup>
import { storeToRefs } from "pinia";
import { useWebdevChecklistStore } from "~/stores/webdevchecklist";

defineProps({
  requiredCounter: {
    type: Number,
    default: 0,
  },
  optionalCounter: {
    type: Number,
    default: 0,
  },
});

const { selectedCheckList, checklists } = storeToRefs(
  useWebdevChecklistStore()
);
const totalChecklist = ref(0);
watch(
  () => selectedCheckList.value,
  (value) => {
    console.log(value);
    calculateTotalCheckList();
  },
  { deep: true }
);
const calculateTotalCheckList = () => {
  totalChecklist.value = 0;
  console.log(checklists.value, "hello");
  checklists.value.forEach((element) => {
    element.data.forEach((item) => {
      totalChecklist.value += item.options.length;
    });
  });
  console.log(totalChecklist.value);
};
calculateTotalCheckList();
</script>

<template>
  <div class="Footer_footer__Dhw_9">
    <div class="ProgressBar_progressBar___oucB">
      <div
        class="ProgressBar_progress__aRRn1"
        :class="
          requiredCounter <= totalChecklist / 3
            ? 'ProgressBar_red__piOvh'
            : requiredCounter === totalChecklist
            ? 'ProgressBar_green__3cpej'
            : 'ProgressBar_yellow__KuSkk'
        "
        :style="{ width: requiredCounter * (100 / totalChecklist) + '%' }"
      ></div>
      <div class="ProgressBar_progressStats__m8zaN">
        <span
          >Required:
          <!-- -->{{ requiredCounter }}/{{ totalChecklist }}
        </span>
        <!-- <span class="ProgressBar_optional__rn2JX"
          >Optional:
          {{ optionalCounter }}/10</span
        > -->
        <button
          type="button"
          class="ProgressBar_reset__Occ3w ml-4"
          :class="
            requiredCounter * (100 / totalChecklist) >= 90
              ? 'ProgressBar_intersect__Q_FTu'
              : ''
          "
          @click="$emit('all-reset')"
        >
          Reset
        </button>
      </div>
    </div>
    <!-- <div class="InternalLinking_container__X_L_0">
      <div class="InternalLinking_title__Z8LxW">
        <img
          src="https://frontier-assets.toptal.com/ec99a6ba6efa2bbb78f99a929026b33d.svg"
        /><span>Skills in High Demand<br />by Toptal Clients</span>
      </div>
      <div class="InternalLinking_ticker-list__htA7i">
        <a
          href="https://www.toptal.com/freelance-jobs/developers/react"
          data-ga-category="inbound-link"
          data-ga-event="React.js Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >React.js Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/nodejs"
          data-ga-category="inbound-link"
          data-ga-event="Node.js Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Node.js Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/ruby-on-rails"
          data-ga-category="inbound-link"
          data-ga-event="Ruby on Rails Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Ruby on Rails Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/azure"
          data-ga-category="inbound-link"
          data-ga-event="Azure Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Azure Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/react-native"
          data-ga-category="inbound-link"
          data-ga-event="React Native Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >React Native Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/qa"
          data-ga-category="inbound-link"
          data-ga-event="QA Engineer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >QA Engineer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/go"
          data-ga-category="inbound-link"
          data-ga-event="Go Engineer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Go Engineer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/javascript"
          data-ga-category="inbound-link"
          data-ga-event="JavaScript Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >JavaScript Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/python"
          data-ga-category="inbound-link"
          data-ga-event="Python Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Python Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/django"
          data-ga-category="inbound-link"
          data-ga-event="Django Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Django Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/php"
          data-ga-category="inbound-link"
          data-ga-event="PHP Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >PHP Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/c-sharp"
          data-ga-category="inbound-link"
          data-ga-event="C# Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >C# Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/ios"
          data-ga-category="inbound-link"
          data-ga-event="iOS Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >iOS Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/blockchain"
          data-ga-category="inbound-link"
          data-ga-event="Blockchain Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Blockchain Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/swift"
          data-ga-category="inbound-link"
          data-ga-event="Swift Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Swift Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/aws"
          data-ga-category="inbound-link"
          data-ga-event="AWS Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >AWS Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/vue-js"
          data-ga-category="inbound-link"
          data-ga-event="Vue.js Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Vue.js Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/java"
          data-ga-category="inbound-link"
          data-ga-event="Java Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Java Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/dot-net"
          data-ga-category="inbound-link"
          data-ga-event=".NET Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >.NET Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/angular"
          data-ga-category="inbound-link"
          data-ga-event="Angular Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Angular Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/android"
          data-ga-category="inbound-link"
          data-ga-event="Android Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Android Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/magento"
          data-ga-category="inbound-link"
          data-ga-event="Magento Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Magento Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/shopify"
          data-ga-category="inbound-link"
          data-ga-event="Shopify Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Shopify Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/wordpress"
          data-ga-category="inbound-link"
          data-ga-event="WordPress Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >WordPress Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/laravel"
          data-ga-category="inbound-link"
          data-ga-event="Laravel Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Laravel Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/elixir"
          data-ga-category="inbound-link"
          data-ga-event="Elixir Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Elixir Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/docker"
          data-ga-category="inbound-link"
          data-ga-event="Docker Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Docker Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/flutter"
          data-ga-category="inbound-link"
          data-ga-event="Flutter Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Flutter Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/software-architect"
          data-ga-category="inbound-link"
          data-ga-event="Software Architect Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Software Architect Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/unity-unity3d"
          data-ga-category="inbound-link"
          data-ga-event="Unity or Unity3D Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Unity or Unity3D Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/cloud"
          data-ga-category="inbound-link"
          data-ga-event="Cloud Engineer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Cloud Engineer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/asp-dot-net"
          data-ga-category="inbound-link"
          data-ga-event="ASP.NET Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >ASP.NET Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/kubernetes"
          data-ga-category="inbound-link"
          data-ga-event="Kubernetes Expert Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Kubernetes Expert Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/security"
          data-ga-category="inbound-link"
          data-ga-event="System Security Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >System Security Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/kotlin"
          data-ga-category="inbound-link"
          data-ga-event="Kotlin Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Kotlin Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/css"
          data-ga-category="inbound-link"
          data-ga-event="CSS Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >CSS Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/computer-vision"
          data-ga-category="inbound-link"
          data-ga-event="Computer Vision Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Computer Vision Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/artificial-intelligence"
          data-ga-category="inbound-link"
          data-ga-event="AI Engineer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >AI Engineer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/drupal"
          data-ga-category="inbound-link"
          data-ga-event="Drupal Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Drupal Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/sql"
          data-ga-category="inbound-link"
          data-ga-event="SQL Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >SQL Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/symfony"
          data-ga-category="inbound-link"
          data-ga-event="Symfony Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Symfony Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/ruby"
          data-ga-category="inbound-link"
          data-ga-event="Ruby Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Ruby Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/data-science"
          data-ga-category="inbound-link"
          data-ga-event="Data Scientist Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Data Scientist Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/business-intelligence"
          data-ga-category="inbound-link"
          data-ga-event="Business Intelligence Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Business Intelligence Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/c-plus-plus"
          data-ga-category="inbound-link"
          data-ga-event="C++ Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >C++ Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/ionic"
          data-ga-category="inbound-link"
          data-ga-event="Ionic Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Ionic Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/graphql"
          data-ga-category="inbound-link"
          data-ga-event="GraphQL Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >GraphQL Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/machine-learning"
          data-ga-category="inbound-link"
          data-ga-event="Machine Learning Engineer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Machine Learning Engineer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/xamarin"
          data-ga-category="inbound-link"
          data-ga-event="Xamarin Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Xamarin Developer Jobs</a
        ><a
          href="https://www.toptal.com/freelance-jobs/developers/firebase"
          data-ga-category="inbound-link"
          data-ga-event="Firebase Developer Jobs"
          data-ga-label="WebDevChecklist"
          target="_blank"
          rel="noopener"
          class="InternalLinking_link__ynnnk"
          >Firebase Developer Jobs</a
        >
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.Footer_footer__Dhw_9 {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  height: 30px;
  background: #474d5a;
}
.ProgressBar_progressBar___oucB {
  position: relative;
  height: 30px;
}
.ProgressBar_progress__aRRn1 {
  max-width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 1001;
  transition: all 0.4s ease-out;
}
.ProgressBar_progress__aRRn1.ProgressBar_red__piOvh {
  background: #d42551;
}
.ProgressBar_progress__aRRn1.ProgressBar_yellow__KuSkk {
  background: #e59c01;
}
.ProgressBar_progress__aRRn1.ProgressBar_green__3cpej {
  background: #00cc83;
}
.ProgressBar_progressStats__m8zaN {
  position: absolute;
  /* right: 10%; */
  left: 80%;
  line-height: 30px;
  z-index: 1002;
  color: #fff;
  font-size: 13px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
@media (max-width: 767px) {
  .ProgressBar_progressStats__m8zaN {
    right: 20%;
  }
}
.ProgressBar_progressStats__m8zaN .ProgressBar_optional__rn2JX {
  margin: 0 10px;
}
.ProgressBar_progressStats__m8zaN .ProgressBar_reset__Occ3w {
  color: #00cc83;
  background: none;
  border: 0;
  cursor: pointer;
}
.ProgressBar_progressStats__m8zaN
  .ProgressBar_reset__Occ3w.ProgressBar_intersect__Q_FTu {
  color: #262d3d;
}
.InternalLinking_container__X_L_0 {
  font-weight: 400;
  font-family: Proxima Nova, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  overflow: hidden;
  color: #fff;
  background-color: #0f256e;
}
.InternalLinking_container__X_L_0 .InternalLinking_title__Z8LxW {
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  height: 100%;
  color: #204ecf;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  background-color: #fff;
}
.InternalLinking_container__X_L_0 .InternalLinking_title__Z8LxW img {
  margin: 22px 8px 18px 24px;
}
.InternalLinking_container__X_L_0 .InternalLinking_title__Z8LxW span {
  margin: 16px 24px 16px 0;
  white-space: nowrap;
}
.InternalLinking_container__X_L_0 .InternalLinking_ticker-list__htA7i {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 16px;
  animation-name: InternalLinking_ticker__ecD1j;
  animation-duration: 180s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes InternalLinking_ticker__ecD1j {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.InternalLinking_container__X_L_0
  .InternalLinking_ticker-list__htA7i
  .InternalLinking_link__ynnnk {
  margin: 20px 28px;
  padding: 5px 12px 3px;
  color: #fff;
  white-space: nowrap;
  text-decoration: underline;
}
</style>
