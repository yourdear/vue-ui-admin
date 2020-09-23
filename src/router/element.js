const element = {
    path: '/element',
    name: 'element',
    component: reslove => require(['../components/layout/singlePage'],reslove),
    children: [
        {
            path:'form',
            name: 'form',
            component: reslove => require(['../components/element/Form.vue'],reslove) ,
        }
    ]
}
export default element
