import Layout from '@/layout/index.vue'

const pageRoutes = [
  // 开发指南
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/quick-start',
    meta: {
      title: '开发指南',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'design-target',
        name: 'DesignTarget',
        component: () => import('@/views/page/Guides/DesignTarget.vue'),
        meta: {
          title: '设计目标',
          breadcrumb: true,
        },
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('@/views/page/Guides/QuickStart.vue'),
        meta: {
          title: '快速上手',
          breadcrumb: true,
        },
      },
    ],
  },
  // 表单
  {
    path: '/page/form',
    redirect: '/page/form/simple-form',
    component: Layout,
    name: 'Form',
    meta: {
      title: 'Form 表单',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/SimpleForm.vue'),
        name: 'SimpleForm',
        meta: {
          title: 'SimpleForm 基础表单',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-form1',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/ProForm1.vue'),
        name: 'ProForm1',
        meta: {
          title: 'ProForm 复杂表单1',
          breadcrumb: true,
        },
      },
    ],
  },
  // 表格
  {
    path: '/page/table',
    redirect: '/page/form/simple-table',
    component: Layout,
    name: 'Table',
    meta: {
      title: 'Table 表格',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable.vue'),
        name: 'SimpleTable',
        meta: {
          title: 'SimpleTable 基础表格',
          breadcrumb: true,
        },
      },
      // {
      //   path: 'pro-table',
      //   component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable.vue'),
      //   name: 'ProTable',
      //   meta: {
      //     title: 'ProTable 复杂表格',
      //     breadcrumb: true,
      //   },
      // },
      {
        path: 'pro-table1',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable1.vue'),
        name: 'ProTable',
        meta: {
          title: 'ProTable1 复杂表格1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table2',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable2.vue'),
        name: 'ProTable',
        meta: {
          title: 'ProTable2 复杂表格2',
          breadcrumb: true,
        },
      },
    ],
  },
  // 其他
  {
    path: '/page/other',
    redirect: '/page/other/icon',
    component: Layout,
    name: 'Other',
    meta: {
      title: 'Other 其他',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'icon',
        component: () => import(/* webpackChunkName: "icon" */ '@/views/page/Icon/index.vue'),
        name: 'Icon',
        meta: {
          title: 'Icon 图标',
          breadcrumb: true,
        },
      },
      {
        path: 'ts-demo',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/TsDemo/index.vue'),
        name: 'TypeScriptDemo',
        meta: {
          title: 'TypeScript Demo',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default pageRoutes
