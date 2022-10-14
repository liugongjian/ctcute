/*
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 11:51:19
 * @Description:
 */
import Layout from '@/layout/doc.vue'

const docRoutes = [
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
  // 用户权限
  {
    path: '/docs/userperm',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'UserPerm',
        component: () => import('@/views/doc/Guides/UserPerm.vue'),
        meta: {
          title: '用户权限',
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
  // 最佳实践
  {
    path: '/doc/bestpractice',
    redirect: '/doc/bestpractice/richText',
    component: Layout,
    name: 'BestPractice',
    meta: {
      title: '最佳实践',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'richText',
        component: () => import('@/views/doc/BestPractice/RichText.vue'),
        name: 'RichText',
        meta: {
          title: 'RichText 富文本',
          breadcrumb: true,
        },
      },
      {
        path: 'codeMirror',
        component: () => import('@/views/doc/BestPractice/CodeMirror.vue'),
        name: 'CodeMirror',
        meta: {
          title: 'CodeMirror 代码编辑器',
          breadcrumb: true,
        },
      },
    ],
  },
  // 资源
  {
    path: '/docs/resource',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'Resource',
        component: () => import('@/views/doc/Guides/Resource.vue'),
        meta: {
          title: '资源',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default docRoutes
