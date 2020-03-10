export const state = () => ({
  locales: ['pt', 'en'],
  locale: 'pt',
  baseUrl: 'https://renato66.github.io'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const getters = {
  baseUrl (state) {
    return state.baseUrl
  }
}
