import { useCareerStore } from "~/stores/career";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { setError } = useCareerStore();
  const slug = to.params.slug;
  if (slug) {
    const { data: job, pending } = await useLazyFetch<any>(
      `/api/careers/${slug}`,
      {
        headers: useRequestHeaders(),
      }
    );
    if (!pending.value) {
      const currentDate: Date = new Date();
      const otherDate: Date = new Date(job.value.deadline); // Replace with the desired date
      otherDate.setHours(otherDate.getHours() - 6);
      const formattedDate = otherDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      // Calculate the time difference in milliseconds
      const timeDifference: boolean = new Date(formattedDate) > currentDate;
      if (!timeDifference) {
        setError(true);
        return navigateTo("/career");
      }
    }
  }
});
