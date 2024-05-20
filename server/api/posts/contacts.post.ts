export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await $fetch(`${useRuntimeConfig().apiUrl}/contacts/`, {
    body,
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-real-ip": `${event.node.req.headers["x-real-ip"]}`,
      "x-forwarded-for": `${event.node.req.headers["x-forwarded-for"]}`,
      "x-forwarded-proto": `${event.node.req.headers["x-forwarded-proto"]}`,
      "user-agent": `${event.node.req.headers["user-agent"]}`,
    },
  });

  if (response) {
    return response
  }

  throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
})