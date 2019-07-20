import Vue from 'vue'
import Router from 'vue-router'
import { loadLanguageAsync } from '@/plugins/i18n'

Vue.use(Router)

const App = () => import('@/App')

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:lang',
      name: 'App',
      component: App
    }
  ]
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang).then(() => next())
})
