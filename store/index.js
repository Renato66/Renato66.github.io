export const state = () => ({
  locales: ['pt', 'en'],
  locale: 'pt'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
