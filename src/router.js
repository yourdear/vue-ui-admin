import Vue from 'vue'
import Router from 'vue-router'


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
      component: reslove => require(['./components/login/login'],reslove)
    },
    {
      path: '/element',
      component: reslove => require(['./components/layout/singlePage'],reslove),
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: reslove => require(['./components/element/upload'],reslove)
        },
      ]
    },

  ]
})
