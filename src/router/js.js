const jsTest = {
  path: '/js',
  name: 'js',
  component: reslove => require(['../views/layout/singlePage'], reslove),
  children: [
    {
      path: 'dataDemo',
      name: '数据结构算法',
      component: reslove => require(['../views/js/DataDemo.vue'], reslove)
    },
    {
      path: 'async',
      name: 'async',
      component: reslove => require(['../views/js/async.vue'], reslove)
    },
    {
      path: 'array',
      name: 'array',
      component: reslove => require(['../views/js/Array.vue'], reslove)
    },
    {
      path: 'Mock',
      name: '模拟数据',
      component: reslove => require(['../views/js/Mock.vue'], reslove)
    },
    {
      path: 'deepClone',
      name: '深拷贝',
      component: reslove => require(['../views/js/deepClone.vue'], reslove)
    },
    {
      path: 'testMd',
      name: '测试markdown',
      component: reslove => require(['../views/md/test.md'], reslove)
    },
    {
      path: 'promise',
      name: '测试promise',
      component: reslove => require(['../views/js/promise.vue'], reslove)
    }
  ]
}
export default jsTest
