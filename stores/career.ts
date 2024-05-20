import { defineStore, Store } from "pinia";

export const useCareerStore = defineStore("career", () => {
  // state
  const isErrorRef = useCookie("error");

  const isError = computed(() => isErrorRef.value);

  // actions
  const setError = (payload: boolean | null) => {
    isErrorRef.value = payload;
  };
  return {
    isError,
    setError,
  };
});
