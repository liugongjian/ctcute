import UiLayout from '@/layout/ui.vue'

const uiRoutes = [
  {
    path: '/ui',
    component: UiLayout,
    name: 'Ui',
    meta: {
      title: 'UI',
      breadcrumb: false,
      hidden: true,
    },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "component" */ '@/views/ui/index.vue'),
        name: 'Component',
        meta: {
          title: 'Component 组件',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default uiRoutes
