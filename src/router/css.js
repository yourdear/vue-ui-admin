
const css = {
  path: '/css',
  name: 'css',
  component: reslove => require(['../views/layout/singlePage'], reslove),
  children: [
    {
      path: 'flex',
      name: 'flex',
      component: reslove => require(['../views/css/flex'], reslove)
    },
    {
      path: 'fullScreen',
      name: 'fullScreen',
      component: reslove => require(['../views/css/fullScreen'], reslove)
    },
    {
      path: 'boxReflex',
      name: 'boxReflex',
      component: reslove => require(['../views/css/box-reflex'], reslove)
    },
    {
      path: 'svgIcon',
      name: 'svgIcon',
      component: reslove => require(['../views/css/svgicon'], reslove)
    }
  ]
}
export default css
