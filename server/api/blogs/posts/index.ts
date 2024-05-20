import { Posts } from "~/types/posts";

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)
  let response;

  if (query.search) {
    response = await $fetch<Posts>(`${useRuntimeConfig().apiUrl}/posts/`,
      {
        query: {
          search: query.search,
        },
        headers: {
          Accept: "application/json",
          "x-real-ip": `${event.node.req.headers["x-real-ip"]}`,
          "x-forwarded-for": `${event.node.req.headers["x-forwarded-for"]}`,
          "x-forwarded-proto": `${event.node.req.headers["x-forwarded-proto"]}`,
          "user-agent": `${event.node.req.headers["user-agent"]}`,
        },
      }
    );
  } else {
    response = await $fetch<Posts>(`${useRuntimeConfig().apiUrl}/posts/`,
      {
        query: {
          limit: 8,
          offset: query.offset,
        },
        headers: {
          Accept: "application/json",
          "x-real-ip": `${event.node.req.headers["x-real-ip"]}`,
          "x-forwarded-for": `${event.node.req.headers["x-forwarded-for"]}`,
          "x-forwarded-proto": `${event.node.req.headers["x-forwarded-proto"]}`,
          "user-agent": `${event.node.req.headers["user-agent"]}`,
        },
      }
    );
  }

  if (response.results.length > 0) {

    return response
  }

  return null
},
  {
    name: 'posts',
    getKey: (event) => JSON.stringify(getQuery(event)),
    swr: true,
    group: 'api',
    maxAge: 60 * 60
  }
)
