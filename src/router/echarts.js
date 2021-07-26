const echarts = {
  path: '/echarts',
  name: 'echarts',
  component: reslove => require(['../views/layout/singlePage'], reslove),
  children: [
    {
      path: 'line',
      name: 'Line',
      component: reslove => require(['../views/echarts/line'], reslove)
    }
  ]
}
export default echarts
