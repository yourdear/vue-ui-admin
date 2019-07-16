import Vue from 'vue'
import Router from 'vue-router'
import css from './css'
import tvue from './vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: reslove => require(['../components/login/login'],reslove)
    },
    {
      path: '/element',
      name: 'elment ui',
      component: reslove => require(['../components/layout/singlePage'],reslove),
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: reslove => require(['../components/element/upload'],reslove)
        },
      ]
    },
    css,
    tvue
  ]
})
