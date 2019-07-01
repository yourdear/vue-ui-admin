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
      name: 'elment ui',
      component: reslove => require(['./components/layout/singlePage'],reslove),
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: reslove => require(['./components/element/upload'],reslove)
        },
      ]
    },
    {
      path: '/css',
      name: 'css',
      component: reslove => require(['./components/layout/singlePage'],reslove),
      children: [
        {
          path: 'flex',
          name: 'flex',
          component: reslove => require(['./components/css/flex'],reslove)
        },
        {
          path: 'fullScreen',
          name: 'fullScreen',
          component: reslove => require(['./components/css/fullScreen'],reslove)
        },
        {
          path: 'boxReflex',
          name: 'boxReflex',
          component: reslove => require(['./components/css/box-reflex'],reslove)
        },
      ]
    }
  ]
})
