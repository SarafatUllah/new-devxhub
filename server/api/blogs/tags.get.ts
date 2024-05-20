import { Tags } from "~/types/posts";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const tags = await $fetch<Tags[]>(`${useRuntimeConfig().apiUrl}/tags/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (tags) {

    return tags
  }

  return null
},
  {
    name: 'tags',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)
