/*
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-06-01 18:01:13
 * @Description:
 */
import Layout from '@/layout/LayoutDoc.vue'

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
          title: 'route.doc.log',
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
          title: 'route.doc.target',
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
          title: 'route.doc.start',
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
          title: 'route.doc.userperm',
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
      title: 'route.doc.theme.default',
    },
    children: [
      {
        path: 'change',
        name: 'Theme',
        component: () => import('@/views/doc/Theme/Change.vue'),
        meta: {
          title: 'route.doc.theme.change',
          breadcrumb: true,
        },
      },
      {
        path: 'custom',
        name: 'Theme',
        component: () => import('@/views/doc/Theme/Custom.vue'),
        meta: {
          title: 'route.doc.theme.custom',
          breadcrumb: true,
        },
      },
      {
        path: 'tool',
        name: 'Tool',
        component: () => import('@/views/doc/Theme/Tool.vue'),
        meta: {
          title: 'route.doc.theme.tool',
          breadcrumb: true,
        },
      },
      {
        path: 'echarts-theme',
        name: 'Echarts-Theme',
        component: () => import('@/views/doc/Theme/EchartsTheme.vue'),
        meta: {
          title: 'route.doc.theme.echarts',
          breadcrumb: true,
        },
      },
    ],
  },
  // 最佳实践
  {
    path: '/docs/bestpractice',
    redirect: '/docs/bestpractice/richText',
    component: Layout,
    name: 'BestPractice',
    meta: {
      title: 'route.doc.best.default',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'richText',
        component: () => import('@/views/doc/BestPractice/RichText.vue'),
        name: 'RichText',
        meta: {
          title: 'route.doc.best.richText',
          breadcrumb: true,
        },
      },
      {
        path: 'codeMirror',
        component: () => import('@/views/doc/BestPractice/CodeMirror.vue'),
        name: 'CodeMirror',
        meta: {
          title: 'route.doc.best.codeMirror',
          breadcrumb: true,
        },
      },
      {
        path: 'headerLogo',
        component: () => import('@/views/doc/BestPractice/HeaderLogo.vue'),
        name: 'HeaderLogo',
        meta: {
          title: 'route.doc.best.headerLogo',
          breadcrumb: true,
        },
      },
      {
        path: 'menuIcon',
        component: () => import('@/views/doc/BestPractice/MenuIcon.vue'),
        name: 'MenuIcon',
        meta: {
          title: 'route.doc.best.menuIcon',
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
          title: 'route.doc.resource',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/docs/variables',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'Variables',
        component: () => import('@/views/doc/Guides/Variables.vue'),
        meta: {
          title: 'route.doc.variables',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/docs/upgrade-v2',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'UpgradeV2',
        component: () => import('@/views/doc/Guides/UpgradeV2.vue'),
        meta: {
          title: 'route.doc.upgrade',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/docs/template-intro',
    component: Layout,
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'TemplateIntro',
        component: () => import('@/views/doc/Guides/TemplateIntro.vue'),
        meta: {
          title: 'route.doc.template',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default docRoutes
