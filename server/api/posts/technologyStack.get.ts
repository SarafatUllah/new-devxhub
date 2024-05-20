import { TechnologyStack } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const technologyStack = await $fetch<TechnologyStack[]>(`${useRuntimeConfig().apiUrl}/technology_stacks/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (technologyStack) {

    return technologyStack
  }

  return null
},
  {
    name: 'technology_stacks',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)