const element = {
  path: '/element',
  name: 'element',
  component: reslove => require(['../views/layout/singlePage'], reslove),
  children: [
    {
      path: 'form',
      name: 'form',
      component: reslove => require(['../views/element/Form.vue'], reslove)
    }
  ]
}
export default element

