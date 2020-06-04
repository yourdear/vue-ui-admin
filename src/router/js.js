const jsTest = {
    path: '/js',
    name: 'js',
    component: reslove => require(['../components/layout/singlePage'],reslove),
    children: [
        {
            path:'async',
            name: 'async',
            component: reslove => require(['../components/js/async.vue'],reslove) ,
        },
        {
            path:'array',
            name: 'array',
            component: reslove => require(['../components/js/Array.vue'],reslove) ,
        },
    ]
}
export default jsTest