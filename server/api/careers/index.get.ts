import { Job } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const circulars = await $fetch<Job[]>(`${useRuntimeConfig().apiUrl}/carrers/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (circulars) {

    return circulars
  }

  return null
},
  {
    name: 'jobs',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)