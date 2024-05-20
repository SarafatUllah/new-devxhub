import { Technologies } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const technologies = await $fetch<Technologies[]>(`${useRuntimeConfig().apiUrl}/technologies/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (technologies) {

    return technologies
  }

  return null
},
  {
    name: 'technologies',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)