import { Post } from "~/types/posts";

export default cachedEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  // set response in redis cache
  const post = await $fetch<Post[]>(`${useRuntimeConfig().apiUrl}/posts/${slug}/`, {
    headers: {
      'Accept': 'application/json',
      'x-real-ip': `${event.node.req.headers['x-real-ip']}`,
      'x-forwarded-for': `${event.node.req.headers['x-forwarded-for']}`,
      'x-forwarded-proto': `${event.node.req.headers['x-forwarded-proto']}`,
      'user-agent': `${event.node.req.headers['user-agent']}`
    },
  });

  if (post) {

    return post
  }

  return null
},
  {
    name: 'posts',
    getKey: (event) => getRouterParam(event, 'slug'),
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)
