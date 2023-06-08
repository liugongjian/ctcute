import UiLayout from '@/layout/LayoutUi.vue'

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
          title: 'route.ui.component',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default uiRoutes
