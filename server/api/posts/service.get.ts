import { Service } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  // set response in redis cache
  const services = await $fetch<Service[]>(`${useRuntimeConfig().apiUrl}/services/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    }
  });

  if (services) {

    return services
  }

  return null
},
  {
    name: 'services',
    getKey: () => 'default',
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)