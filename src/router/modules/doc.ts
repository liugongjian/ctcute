/*
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-05 09:20:35
 * @Description:
 */
import Layout from '@/layout/doc.vue'

const docRoutes = [
  // 设计目标
  {
    path: '/docs/design-target',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'DesignTarget',
        component: () => import('@/views/doc/Guides/DesignTarget.vue'),
        meta: {
          title: '设计目标',
          breadcrumb: true,
        },
      },
    ],
  },
  // 快速上手
  {
    path: '/docs/quick-start',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'QuickStart',
        component: () => import('@/views/doc/Guides/QuickStart.vue'),
        meta: {
          title: '快速上手',
          breadcrumb: true,
        },
      },
    ],
  },
  // 更换主题
  {
    path: '/docs/theme',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'Theme',
        component: () => import('@/views/doc/Guides/Theme.vue'),
        meta: {
          title: '更换主题',
          breadcrumb: true,
        },
      },
    ],
  },
  // 更新日志
  {
    path: '/docs/changelog',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'ChangeLog',
        component: () => import('@/views/doc/ChangeLog/index.vue'),
        meta: {
          title: '更新日志',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default docRoutes
