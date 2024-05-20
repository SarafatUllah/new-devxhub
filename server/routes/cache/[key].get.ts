export default defineEventHandler(async (event) => {
  const storage = useStorage('cache')
  const key = getRouterParam(event, 'key')

  // remove key from cache
  if (key) {
    await storage.removeItem(key)

    return {
      success: true,
      message: `Successfully removed cache with '${key}' key.`
    }
  }

  return {
    success: false,
    message: `Unable to remove cache with '${key}' key.`
  }
})
