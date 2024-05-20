import { defineStore, Store } from 'pinia'

export const useHeaderStore = defineStore("header", () => {
  // state
  const isMobileMenuRef = ref<boolean>(false)

  const isMobileMenu = computed(() => isMobileMenuRef.value)

  // actions
  const setMobileMenu = (payload: boolean) => {
    isMobileMenuRef.value = payload
  }
  return {
    isMobileMenu,
    setMobileMenu,
  }
})