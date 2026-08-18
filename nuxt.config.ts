import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://renato66.github.io'
const imageProvider = process.env.NODE_ENV === 'production' ? 'weserv' : 'ipx'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: siteUrl,
    name: 'Renato Vicente',
    trailingSlash: true,
  },

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
        { name: 'apple-mobile-web-app-title', content: 'Renato Vicente' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
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
    trailingSlash: true,
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
