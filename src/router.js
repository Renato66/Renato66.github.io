import Vue from 'vue'
import Router from 'vue-router'
import { loadLanguageAsync } from '@/plugins/i18n'

Vue.use(Router)

const App = () => import('@/App')
const PageNotFound = () => import('@/components/404')

export const router = new Router({
  routes: [
    {
      path: '/:lang',
      name: 'App',
      component: App
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  loadLanguageAsync(lang).then(() => next())
})