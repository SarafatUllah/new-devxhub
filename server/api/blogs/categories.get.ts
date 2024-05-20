import { Categories } from "~/types/posts";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const categories = await $fetch<Categories[]>(`${useRuntimeConfig().apiUrl}/categories/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (categories) {

    return categories
  }

  return null
},
  {
    name: 'categories',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)
