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
        }
    ]
}
export default vue