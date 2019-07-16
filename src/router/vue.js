const vue = {
    path: '/vue',
    name: 'vue',
    component: reslove => require(['../components/layout/singlePage'],reslove),
    children: [
        {
            path:'slot',
            name: 'slot',
            component: reslove => require(['../components/vue/testSlot'],reslove) ,
        }
    ]
}
export default vue