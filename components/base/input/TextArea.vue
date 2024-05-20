<script setup lang="ts">
// types
export interface TextAreaInput {
  id?: string;
  label?: string;
  labelColor?: string;
  placeHolder?: string;
  name?: string;
  placeHolderClass?: string;
  textInput?: string;
  errorMessage?: Array<any>;
  error?: boolean;
  color?: string;
  classStyleName?: string;
  background?: string;
  modelValue?: string;
  rows?: string;
}
// props
withDefaults(defineProps<TextAreaInput>(), {
  id: "",
  label: "",
  labelColor: "#FFFFFF",
  placeHolder: "Type something",
  name: "",
  placeHolderClass: "placeholder-orange-600 placeholder-opacity-50",
  textInput: "",
  errorMessage: () => [],
  error: false,
  color: "#4D4D4D",
  classStyleName: "",
  background: "#fff",
  modelValue: "",
  rows: "",
});

// methods
const { errorMessages } = useInputValidations();
</script>

<template>
  <div
    class="text-area"
    :style="{
      '--color': color,
      '--background': background,
      '--labelColor': labelColor,
    }"
  >
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :name="name"
      :rows="rows"
      :class="[classStyleName]"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    ></textarea>
    <div v-if="error" class="error text-sm text-red-900">
      <span v-for="error in errorMessage" :key="error.$uid">
        {{ errorMessages(error, modelValue) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/base/input/textarea.scss";
</style>
