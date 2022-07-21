import Layout from '@/layout/component.vue'

const componentRoutes = [
  // 基础组件
  {
    path: '/component/base',
    component: Layout,
    redirect: '/component/base/cute-redmind-select',
    meta: {
      title: '基础组件',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-redmind-select',
        name: 'CuteRemindSelect',
        component: () => import('@/views/component/Base/CuteRemindSelect/index.vue'),
        meta: {
          title: 'CuteRemindSelect',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-selected-input',
        name: 'CuteSelectedInput',
        component: () => import('@/views/component/Base/CuteSelectedInput/index.vue'),
        meta: {
          title: 'CuteSelectedInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-titled-block',
        name: 'CuteTitledBlock',
        component: () => import('@/views/component/Base/CuteTitledBlock/index.vue'),
        meta: {
          title: 'CuteTitledBlock',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-edit-input',
        name: 'CuteEditInput',
        component: () => import('@/views/component/Base/CuteEditInput/index.vue'),
        meta: {
          title: 'CuteEditInput',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
