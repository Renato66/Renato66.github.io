import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://renato66.github.io'
const imageProvider = process.env.NODE_ENV === 'production' ? 'weserv' : 'ipx'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      title: 'Renato Vicente',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        style: 'background-color: #000;',
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: `Renato Vicente - ${siteUrl}` },
        { name: 'theme-color', content: '#020617' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'msapplication-TileColor', content: '#2dd4bf' },
        { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' },
        { name: 'apple-mobile-web-app-title', content: 'Renato Vicente' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2dd4bf' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  image: {
    provider: imageProvider,
    weserv: {
      baseURL: siteUrl,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 236,
          height: 236,
        },
      },
    },
  },

  i18n: {
    baseUrl: siteUrl,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: 'locales/',
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'en', file: 'en.json', name: 'English', language: 'en-US' },
      { code: 'pt-BR', file: 'pt-BR.json', name: 'Português (BR)', language: 'pt-BR' },
      { code: 'es-ES', file: 'es-ES.json', name: 'Español (ES)', language: 'es-ES' },
    ],
    detectBrowserLanguage: false,
  },
})
