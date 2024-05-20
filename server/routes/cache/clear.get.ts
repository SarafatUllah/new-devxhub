export default defineEventHandler(async () => {
  const storage = useStorage('cache')

  await storage.clear()

  return {
    success: true,
    message: `Successfully removed caches.`
  }
})
