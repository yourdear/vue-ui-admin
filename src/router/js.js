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
        {
            path:'Mock',
            name: '模拟数据',
            component: reslove => require(['../components/js/Mock.vue'],reslove) ,
        },
        {
            path:'deepClone',
            name: '深拷贝',
            component: reslove => require(['../components/js/deepClone.vue'],reslove) ,
        },
        {
            path:'testMd',
            name: '测试markdown',
            component: reslove => require(['../components/md/test.md'],reslove) ,
        }
    ]
}
export default jsTest
