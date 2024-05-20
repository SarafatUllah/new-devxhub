import { WhyChooseUs } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const whyChooses = await $fetch<WhyChooseUs[]>(`${useRuntimeConfig().apiUrl}/why_choose/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (whyChooses) {

    return whyChooses
  }

  return null
},
  {
    name: 'why_choose',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)