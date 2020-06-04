import Vue from 'vue'
import Router from 'vue-router'
import css from './css'
import tvue from './vue'
import jsTest from './js'
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
        {
          path: 'table',
          name: 'table',
          component: reslove => require(['../components/element/table'],reslove)
        },
        {
          path: 'col',
          name: 'col',
          component: reslove => require(['../components/element/col'],reslove)
        },
      ]
    },
    css,
    tvue,
    jsTest
  ]
})
