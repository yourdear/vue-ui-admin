const vue = {
  path: '/vue',
  name: 'vue',
  component: reslove => require(['../views/layout/singlePage'], reslove),
  children: [
    {
      path: 'httpLoader',
      name: '引入组件1',
      component: reslove => require(['../views/vue/httpVueLoadTest'], reslove)
    },
    {
      path: 'importComponent',
      name: '引入组件2',
      component: reslove => require(['../views/vue/borserImportCom'], reslove)
    },
    {
      path: 'slot',
      name: 'slot',
      component: reslove => require(['../views/vue/testSlot'], reslove)
    },
    {
      path: 'date',
      name: 'date',
      component: reslove => require(['../views/element/About'], reslove)
    },
    {
      path: 'render',
      name: 'render',
      component: reslove => require(['../views/vue/renderTable'], reslove)
    },
    {
      path: 'testRender',
      name: 'testRender',
      component: reslove => require(['../views/vue/TestRender'], reslove)
    },
    {
      path: 'testdirects',
      name: 'testdirects',
      component: reslove => require(['../views/vue/directs'], reslove)
    },
    {
      path: 'i18n',
      name: '国际化',
      component: reslove => require(['../views/vue/I18n.vue'], reslove)
    },
    {
      path: 'doubleBind',
      name: '双向绑定',
      component: reslove => require(['../views/vue/DoubleBind'], reslove)
    },
    {
      path: 'vuex',
      name: 'vuex',
      component: reslove => require(['../views/vue/vuex'], reslove)
    },
    {
      path: 'watch',
      name: 'watch',
      component: reslove => require(['../views/vue/watch'], reslove)
    },
    {
      path: 'filter',
      name: '过滤器',
      component: reslove => require(['../views/vue/filter.vue'], reslove)
    },
    {
      path: 'model',
      name: '父子组件双向绑定',
      component: reslove => require(['../views/vue/parentModelChid.vue'], reslove)
    },
    {
      path: 'menu',
      name: '菜单',
      component: reslove => require(['../views/layout/menu.vue'], reslove)
    },
    {
      path: 'vueDraggable',
      name: 'vue拖拽',
      component: reslove => require(['../views/vue/VueDraggable1.vue'], reslove)
    },
    {
      path: 'loterry',
      name: '彩票',
      component: reslove => require(['../views/lottery/grandLotto.vue'], reslove)
    }
  ]
}
export default vue
