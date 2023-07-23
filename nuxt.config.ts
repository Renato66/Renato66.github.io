// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    langDir: "locales",
    strategy: "prefix_and_default",
    defaultLocale: "pt",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "pt",
        file: "pt.json",
      },
    ],
  },
});
