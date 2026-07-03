export default defineNuxtRouteMiddleware(async (to) => {
  const { $i18n } = useNuxtApp()
  const lang = (to.query.lang as string | undefined)?.toLowerCase()

  if (lang) {
    const found = $i18n.locales.find((locale) => locale.code.toLowerCase() === lang)
    if (found) {
      await $i18n.setLocale(found.code)
    }
  }
})
