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
        }
    ]
}
export default vue