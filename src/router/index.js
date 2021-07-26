import Vue from 'vue'
import Router from 'vue-router'
import css from './css'
import tvue from './vue'
import jsTest from './js'
import element from './element'
import echarts from "@/router/echarts";
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
      component: reslove => require(['../views/login/login'], reslove)
    },
    {
      path: '/element',
      name: 'elment ui',
      component: reslove => require(['../views/layout/singlePage'], reslove),
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: reslove => require(['../views/element/upload'], reslove)
        },
        {
          path: 'table',
          name: 'table',
          component: reslove => require(['../views/element/table'], reslove)
        },
        {
          path: 'col',
          name: 'col',
          component: reslove => require(['../views/element/col'], reslove)
        }
      ]
    },
    css,
    tvue,
    jsTest,
    element,
    echarts
  ]
})
