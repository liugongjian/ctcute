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
  // 弹窗
  {
    path: '/page/dialog',
    component: Layout,
    name: 'Dialog',
    meta: {
      title: 'Dialog 弹窗',
      breadcrumb: true,
    },
    children: [
      {
        path: 'success-dialog',
        component: () => import('@/views/page/Dialog/SuccessDialog.vue'),
        name: 'SuccessDialog',
        meta: {
          title: 'SuccessDialog 成功弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'warn-dialog',
        component: () => import('@/views/page/Dialog/WarnDialog.vue'),
        name: 'WarnDialog',
        meta: {
          title: 'WarnDialog 告警弹窗',
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
          title: 'ProForm1 复杂表单1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-form2',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/ProForm2.vue'),
        name: 'ProForm2',
        meta: {
          title: 'ProForm2 复杂表单2',
          breadcrumb: true,
        },
      },
      {
        path: 'step-form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/StepForm.vue'),
        name: 'StepForm',
        meta: {
          title: 'StepForm 分步表单',
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
      {
        path: 'pro-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable.vue'),
        name: 'ProTable',
        meta: {
          title: 'ProTable 复杂表格',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table3',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable3.vue'),
        name: 'ProTable3',
        meta: {
          title: 'ProTable3 复杂表格3',
          breadcrumb: true,
        },
      },
    ],
  },
  // 卡片
  {
    path: '/page/card-list',
    redirect: '/page/card-list/card1',
    component: Layout,
    name: 'CardList',
    meta: {
      title: 'CardList 卡片列表',
      breadcrumb: true,
    },
    children: [
      {
        path: 'card1',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card1.vue'),
        name: 'Card1',
        meta: {
          title: 'Card1 小卡片',
          breadcrumb: true,
        },
      },
    ],
  },
  // 详情
  {
    path: '/page/detail',
    redirect: '/page/detail/simple-detail',
    component: Layout,
    name: 'Detail',
    meta: {
      title: 'Detail 详情',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/SimpleDetail.vue'),
        name: 'SimpleDetail',
        meta: {
          title: 'SimpleDetail 简单详情页',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail1',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail1.vue'),
        name: 'ProDetail1',
        meta: {
          title: 'ProDetail1 复杂详情页1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail2',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail2.vue'),
        name: 'ProDetail2',
        meta: {
          title: 'ProDetail2 复杂详情页2',
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
