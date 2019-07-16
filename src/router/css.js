
const css = {
    path: '/css',
    name: 'css',
    component: reslove => require(['../components/layout/singlePage'],reslove),
    children: [
    {
        path: 'flex',
        name: 'flex',
        component: reslove => require(['../components/css/flex'],reslove)
    },
    {
        path: 'fullScreen',
        name: 'fullScreen',
        component: reslove => require(['../components/css/fullScreen'],reslove)
    },
    {
        path: 'boxReflex',
        name: 'boxReflex',
        component: reslove => require(['../components/css/box-reflex'],reslove)
    },
    {
        path: 'svgIcon',
        name: 'svgIcon',
        component: reslove => require(['../components/css/svgicon'],reslove)
    },
]
}
export default css