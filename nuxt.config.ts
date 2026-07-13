import tailwindcss from '@tailwindcss/vite'

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

  app: {
    head: {
      bodyAttrs: {
        style: 'background-color: #000;',
      }
    }
  },

  image: {
    provider: imageProvider,
    weserv: {
      baseURL: 'https://renato66.github.io',
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
    strategy: 'no_prefix',
    defaultLocale: 'en',
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
