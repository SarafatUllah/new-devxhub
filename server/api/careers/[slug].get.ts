import { Job, JobDetail } from "~~/types/post";

export default cachedEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  // set response in redis cache
  const job = await $fetch<JobDetail>(`${useRuntimeConfig().apiUrl}/jobs/${slug}/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (job) {

    return job
  }

  return null
},
  {
    name: 'jobs',
    getKey: (event) => getRouterParam(event, 'slug'),
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)