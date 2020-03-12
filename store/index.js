export const state = () => ({
  locales: ['pt', 'en'],
  locale: 'pt',
  baseUrl: 'https://renato66.github.io',
  webpSupport: true
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_WEBP_SUPPORT (state, payload) {
    state.webpSupport = payload
  }
}

export const getters = {
  baseUrl (state) {
    return state.baseUrl
  },
  imageOutput (state) {
    return state.webpSupport ? 'webp' : 'png'
  }
}
