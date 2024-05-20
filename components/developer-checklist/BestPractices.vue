<script setup>
defineProps({
  list: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="Category_category__ifIbI">
    <h2>{{ list.title }}</h2>
    <template v-if="list.options && list.options.length > 0">
      <div
        v-for="(option, optionindex) in list.options"
        :key="optionindex"
        :id="option.text"
        class="CategoryItem_item__rAFkq"
        :class="
          option.selected
            ? 'CategoryItem_open__9j2Cv'
            : 'CategoryItem_closed__GJfZ8'
        "
      >
        <div
          class="CategoryItem_name__av3IG"
          :class="option.check ? 'CategoryItem_checked__vvxrQ' : ''"
        >
          <label
            ><span
              class="Checkbox_checkbox__exCc_"
              :class="option.check ? 'Checkbox_checked__lkDil' : ''"
              ><span
                class="Checkbox_icon__xrddt"
                @click.stop="$emit('selected-option', option.text)"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  ></path></svg></span
              ><input type="checkbox" /></span
            ><span @click.stop="$emit('selected-option', option.text)">{{
              option.text
            }}</span></label
          ><span
            v-if="option.subOptions && option.subOptions.length > 0"
            class="CategoryItem_arrow__cLT36"
            @click.stop="$emit('selected-text', option.text)"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              style="width: 20px; height: 20px"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </span>
        </div>
        <template v-if="option.subOptions && option.subOptions.length > 0">
          <div
            v-for="(subOption, subOptionindex) in option.subOptions"
            :key="subOptionindex"
            class="CategoryItem_resources__QOS3g"
          >
            <div class="CategoryItem_resourcesItem__svSax">
              <a
                :href="subOption.href"
                target="_blank"
                rel="noreferrer noopener"
                tabindex="-1"
                >{{ subOption.link }}</a
              >
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.Category_category__ifIbI {
  margin: 20px 0;
}
.Category_category__ifIbI:first-child {
  margin-top: 0;
}
.Category_category__ifIbI h2 {
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 16px;
  white-space: wrap∂;
}
.Category_category__ifIbI h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin: 16px 0;
}
.CategoryItem_item__rAFkq {
  padding-bottom: 12px;
}
.CategoryItem_item__rAFkq.CategoryItem_closed__GJfZ8 {
  padding-bottom: 4px;
}
.CategoryItem_name__av3IG {
  /* white-space: nowrap; */
  padding-bottom: 8px;
  display: flex;
  align-items: flex-start;
}
.CategoryItem_name__av3IG label {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  line-height: 20px;
  display: flex;
  align-items: flex-start;
}
.CategoryItem_name__av3IG.CategoryItem_checked__vvxrQ label {
  color: #00cc83;
  text-decoration: line-through;
}
.Checkbox_checkbox__exCc_ {
  margin-right: 8px;
  position: relative;
  border: 1px solid #c4c6ca;
  min-width: 20px;
  height: 20px;
  width: 20px;
}
.Checkbox_checkbox__exCc_.Checkbox_checked__lkDil {
  color: #fff;
  background: #00cc83;
  border-color: #00cc83;
}
.Checkbox_checkbox__exCc_ input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  border-color: transparent;
  background: transparent;
}
.Checkbox_checkbox__exCc_ .Checkbox_icon__xrddt {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #262d3d;
  color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Checkbox_checkbox__exCc_.Checkbox_checked__lkDil .Checkbox_icon__xrddt {
  color: #fff;
  background: #00cc83;
}
.CategoryItem_item__rAFkq .CategoryItem_arrow__cLT36 {
  color: #25a9ef;
  cursor: pointer;
  min-width: 20px;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
}
.CategoryItem_name__av3IG.CategoryItem_checked__vvxrQ
  > .CategoryItem_arrow__cLT36 {
  color: #00cc83;
}
.CategoryItem_item__rAFkq.CategoryItem_open__9j2Cv .CategoryItem_arrow__cLT36 {
  transform: rotate(90deg);
}
.CategoryItem_arrow__cLT36 svg {
  width: 20px;
  height: 20px;
}

.CategoryItem_resources__QOS3g {
  max-height: 0;
  overflow: hidden;
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.CategoryItem_item__rAFkq.CategoryItem_open__9j2Cv
  .CategoryItem_resources__QOS3g {
  max-height: 100vh;
  overflow: hidden;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
}
.CategoryItem_resourcesItem__svSax a {
  font-size: 16px;
  line-height: 24px;
  color: #c4c6ca;
  text-decoration: underline;
  margin-left: 28px;
}

.Checkbox_checkbox__exCc_ .Checkbox_icon__xrddt:focus,
.Checkbox_checkbox__exCc_:focus-within .Checkbox_icon__xrddt {
  box-shadow: 0 0 1px 1px #25a9ef;
}
.CategoryItem_name__av3IG label:hover .Checkbox_icon__xrddt {
  background: rgba(255, 255, 255, 0.32);
}
</style>
