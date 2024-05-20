import { defineStore, Store } from "pinia";
import { Posts } from "~/types/posts";

export const useBlogStore = defineStore("blog", () => {
  const postRef = ref<Posts | null>(null);
  const showItemsRef = ref<boolean>(true);
  const noMoreProgramRef = ref<boolean>(false);
  const nuxtApp = useNuxtApp();

  const posts = computed(() => postRef.value);
  const showItems = computed(() => showItemsRef.value);
  const noMoreProgram = computed(() => noMoreProgramRef.value);

  // actions
  const setPost = async (pageNumber: number, element: any) => {
    const offsetCount = (pageNumber - 1) * 8;
    const { data: postTempRef } = await useFetch<Posts | null>(
      `/api/blogs/posts`,
      {
        params: {
          limit: 8,
          offset: offsetCount,
        },
      }
    );

    if (postTempRef.value && postTempRef.value?.results?.length > 0) {
      showItemsRef.value = false;
      setTimeout(() => {
        showItemsRef.value = true;
      }, 500);
      setTimeout(() => {
        postRef.value = postTempRef.value;

        noMoreProgramRef.value = false;
      }, 200);
    } else {
      noMoreProgramRef.value = true;
    }
    window.scrollTo(0, element ? element.offsetTop - 140 : 0);
  };

  const setSearchPost = (searchText: string, element: any) => {
    const route = useRoute();

    if (route.name !== "blog") {
      const router = useRouter();
      router.push("/blog");
    }

    setTimeout(async () => {
      const { data: postTempRef } = await useFetch<Posts | null>(
        `/api/blogs/posts`,
        {
          params: {
            search: searchText,
          },
        }
      );

      if (postTempRef.value && postTempRef.value?.results?.length > 0) {
        showItemsRef.value = false;
        setTimeout(() => {
          showItemsRef.value = true;
        }, 500);
        setTimeout(() => {
          postRef.value = postTempRef.value;

          noMoreProgramRef.value = false;
          if (searchText != "" && element) {
            window.scrollTo(0, element.offsetTop - 140);
          }
        }, 200);
      } else {
        nuxtApp.$toast("clear");
        nuxtApp.$toast("error", {
          message: "There have no blog post.",
          className: "alert_error",
        });
        postRef.value = null;
        noMoreProgramRef.value = true;
      }
    }, 300);
  };
  return {
    setSearchPost,
    setPost,
    posts,
  };
});
