<script setup>
import { storeToRefs } from "pinia";
import { useWebdevChecklistStore } from "~/stores/webdevchecklist";

definePageMeta({
  layoutTransition: false,
  layout: "checklist",
});
const { setSelectedCheckLists } = useWebdevChecklistStore();
const { selectedCheckList, checklists } = storeToRefs(
  useWebdevChecklistStore()
);
const show = ref(true);
watch(
  () => selectedCheckList.value,
  (value) => {
    show.value = false;
    reset()
    setTimeout(() => {
      show.value = true;
    }, 500);
  },
  { deep: true }
);
setSelectedCheckLists("developer");
const selectedOption = ref("");
const requiredCounter = ref(0);
const optionalCounter = ref(0);
const mainContainerHeight = ref("702px");
const previousHeight = ref(0);
const optionSelected = ($event) => {
  selectedOption.value = $event;
  checklists.value.forEach((list) => {
    list.data.forEach((data) => {
      if (data.options && data.options.length > 0) {
        data.options.forEach((option) => {
          if (option.text === selectedOption.value) {
            option.check = !option.check;
            if (option.check && requiredCounter.value < totalChecklist.value) {
              requiredCounter.value += 1;
            } else if (!option.check && requiredCounter.value > 0) {
              requiredCounter.value -= 1;
            }
          }
        });
      }
      if (data.optionalOptions && data.optionalOptions.length > 0) {
        data.optionalOptions.forEach((optionalOption) => {
          if (optionalOption.text === selectedOption.value) {
            optionalOption.check = !optionalOption.check;
            if (optionalOption.check && optionalCounter.value < 10) {
              optionalCounter.value += 1;
            } else if (!optionalOption.check && optionalCounter.value > 0) {
              optionalCounter.value -= 1;
            }
          }
        });
      }
    });
  });
};
const selectedText = ref();
const textSelected = ($event) => {
  selectedText.value = $event;
  checklists.value.forEach((list) => {
    list.data.forEach((data) => {
      if (data.options && data.options.length > 0) {
        data.options.forEach((option) => {
          if (option.text == selectedText.value) {
            option.selected = !option.selected;
            // if (option.selected) {
            //   const temp = document.getElementById(selectedText.value);
            //   setTimeout(() => {
            //     console.log(temp.offsetHeight);
            //     const mainContainer = document.getElementById(
            //       "MainContentContainer"
            //     );
            //     console.log(mainContainer, mainContainer.offsetHeight);
            //     if (previousHeight.value === temp.offsetHeight) {
            //       mainContainerHeight.value =
            //         mainContainer.offsetHeight + temp.offsetHeight + "px";
            //       previousHeight.value = temp.offsetHeight;
            //       console.log(mainContainerHeight.value, 'hello');
            //     } else {
            //       mainContainerHeight.value =
            //         mainContainer.offsetHeight + temp.offsetHeight - previousHeight.value + "px";
            //       previousHeight.value = temp.offsetHeight;
            //       console.log(mainContainerHeight.value, 'hello1');
            //     }
            //   }, 100);
            // } else if (!option.selected) {
            //   const temp = document.getElementById(selectedText.value);
            //   console.log(temp.offsetHeight);
            //   const mainContainer = document.getElementById(
            //     "MainContentContainer"
            //   );
            //   console.log(mainContainer, mainContainer.offsetHeight);
            //   mainContainerHeight.value =
            //     mainContainer.offsetHeight - temp.offsetHeight + "px";
            //     previousHeight.value = 0;
            //   console.log(mainContainerHeight.value);
            // }
          } else {
            option.selected = false;
          }
        });
      }
      if (data.optionalOptions && data.optionalOptions.length > 0) {
        data.optionalOptions.forEach((optionalOption) => {
          if (optionalOption.text == selectedText.value) {
            optionalOption.selected = !optionalOption.selected;
          } else {
            optionalOption.selected = false;
          }
        });
      }
    });
  });
};
const totalChecklist = ref(0);
const finalCheckLists = computed(() => {
  totalChecklist.value = 0;
  checklists.value.forEach((element) => {
    element.data.forEach((item) => {
      totalChecklist.value += item.options.length;
    });
  });

  return checklists.value;
});
const reset = () => {
  selectedOption.value = "";
  selectedText.value = "";
  requiredCounter.value = 0;
  optionalCounter.value = 0;
  checklists.value.forEach((list) => {
    list.data.forEach((data) => {
      if (data.options && data.options.length > 0) {
        data.options.forEach((option) => {
          option.check = false;
          option.selected = false;
        });
      }
      if (data.optionalOptions && data.optionalOptions.length > 0) {
        data.optionalOptions.forEach((optionalOption) => {
          optionalOption.check = false;
          optionalOption.selected = false;
        });
      }
    });
  });
};
</script>

<template>
  <Transition name="page" mode="out-in">
    <div v-if="show">
      <!-- :style="{ height: mainContainerHeight }" -->

      <div
        id="MainContentContainer"
        class="MainContent_container transition-all duration-500 ease-in-out"
      >
        <div
          v-for="checklist in finalCheckLists"
          :key="checklist.column"
          class="MainContent_column"
        >
          <DeveloperChecklistBestPractices
            v-for="(list, index) in checklist.data"
            :key="index"
            :list="list"
            :selected-check-list="selectedCheckList"
            @selected-option="optionSelected"
            @selected-text="textSelected"
          />
        </div>
      </div>

      <DeveloperChecklistFooter
        @all-reset="reset"
        :required-counter="requiredCounter"
        :optional-counter="optionalCounter"
      />
    </div>
  </Transition>
</template>

<style scoped>
.MainContent_container {
  max-width: 1280px;
  margin: 48px auto 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.MainContent_column {
  width: 300px;
  margin: 0 10px;
}
</style>
