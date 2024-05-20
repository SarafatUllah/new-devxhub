export default defineEventHandler(async () => {
  const keys = await useStorage('cache').getKeys()

  return { keys }
})
