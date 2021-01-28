const vue = {
    path: '/vue',
    name: 'vue',
    component: reslove => require(['../components/layout/singlePage'],reslove),
    children: [
        {
            path:'slot',
            name: 'slot',
            component: reslove => require(['../components/vue/testSlot'],reslove) ,
        },
        {
            path:'date',
            name: 'date',
            component: reslove => require(['../components/element/About'],reslove) ,
        },
        {
            path:'render',
            name: 'render',
            component: reslove => require(['../components/vue/renderTable'],reslove) ,
        },
        {
            path:'testRender',
            name: 'testRender',
            component: reslove => require(['../components/vue/TestRender'],reslove) ,
        },
        {
            path:'testdirects',
            name: 'testdirects',
            component: reslove => require(['../components/vue/directs'],reslove) ,
        },
        {
            path:'i18n',
            name: '国际化',
            component: reslove => require(['../components/vue/I18n.vue'],reslove) ,
        },
        {
            path:'doubleBind',
            name: '双向绑定',
            component: reslove => require(['../components/vue/DoubleBind'],reslove) ,
        },
        {
            path:'vuex',
            name: 'vuex',
            component: reslove => require(['../components/vue/vuex'],reslove) ,
        },
        {
            path:'watch',
            name: 'watch',
            component: reslove => require(['../components/vue/watch'],reslove) ,
        },
        {
            path:'filter',
            name: '过滤器',
            component: reslove => require(['../components/vue/filter.vue'],reslove) ,
        },
        {
            path:'model',
            name: '父子组件双向绑定',
            component: reslove => require(['../components/vue/parentModelChid.vue'],reslove) ,
        },
        {
            path:'menu',
            name: '菜单',
            component: reslove => require(['../components/layout/menu.vue'],reslove) ,
        }
    ]
}
export default vue
