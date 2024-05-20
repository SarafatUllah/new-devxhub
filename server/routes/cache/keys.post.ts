export default defineEventHandler(async (event) => {
  const storage = useStorage('cache')
  const body = await readBody(event)

  // remove key from cache
  if (body && body.hasOwnProperty('key')) {
    await storage.removeItem(body.key)

    return {
      success: true,
      message: `Successfully removed cache with '${body.key}' key.`
    }
  }

  return {
    success: false,
    message: `Unable to remove cache with '${body.key}' key.`
  }
})
