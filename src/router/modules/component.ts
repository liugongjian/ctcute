import Layout from '@/layout/component.vue'

const componentRoutes = [
  // 基础组件
  {
    path: '/component/base',
    component: Layout,
    redirect: '/component/base/cute-select',
    meta: {
      title: '基础组件',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-select',
        name: 'CuteSelect',
        component: () => import('@/views/component/Base/CuteSelect/index.vue'),
        meta: {
          title: 'CuteSelect 选择器',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
