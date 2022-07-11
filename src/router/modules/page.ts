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
    name: 'Dialog',
    component: Layout,
    meta: {
      title: 'Dialog 弹窗',
      breadcrumb: true,
    },
    children: [
      {
        path: 'small-dialog',
        component: () => import('@/views/page/Dialog/SmallDialog.vue'),
        name: 'SmallDialog',
        meta: {
          title: 'SmallDialog 小弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'medium-dialog',
        component: () => import('@/views/page/Dialog/MediumDialog.vue'),
        name: 'MediumDialog',
        meta: {
          title: 'MediumDialog 中弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'large-dialog',
        component: () => import('@/views/page/Dialog/LargeDialog.vue'),
        name: 'LargeDialog',
        meta: {
          title: 'LargeDialog 大弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'fullscreen-dialog',
        component: () => import('@/views/page/Dialog/FullScreenDialog.vue'),
        name: 'FullScreenDialog',
        meta: {
          title: 'FullScreenDialog 全屏弹窗',
          breadcrumb: true,
        },
      },
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
          title: 'WarnDialog 警告弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'info-dialog',
        component: () => import('@/views/page/Dialog/InfoDialog.vue'),
        name: 'InfoDialog',
        meta: {
          title: 'InfoDialog 信息弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'log-dialog',
        component: () => import('@/views/page/Dialog/LogDialog.vue'),
        name: 'LogDialog',
        meta: {
          title: 'LogDialog 日志弹窗',
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
        path: 'pro-table1',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable1.vue'),
        name: 'ProTable1',
        meta: {
          title: 'ProTable1 复杂表格1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table2',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable2.vue'),
        name: 'ProTable2',
        meta: {
          title: 'ProTable2 复杂表格2',
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
      {
        path: 'pro-table4',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable4.vue'),
        name: 'ProTable4',
        meta: {
          title: 'ProTable4 复杂表格4',
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
      {
        path: 'card2',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card2.vue'),
        name: 'Card2',
        meta: {
          title: 'Card2 小卡片描述较少',
          breadcrumb: true,
        },
      },
      {
        path: 'card3',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card3.vue'),
        name: 'Card3',
        meta: {
          title: 'Card3 大卡片',
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
  // 状态页
  {
    path: '/page/pageStatus',
    // redirect: '/page/form/simple-table',
    component: Layout,
    name: 'PageStatus',
    meta: {
      title: 'Status 状态页',
      breadcrumb: true,
    },
    children: [
      {
        path: 'Page403',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page403.vue'),
        name: 'Page403',
        meta: {
          title: '403页',
          breadcrumb: true,
        },
      },
      {
        path: 'Page404',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page404.vue'),
        name: 'Page404',
        meta: {
          title: '404页',
          breadcrumb: true,
        },
      },
      {
        path: 'Page500',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page500.vue'),
        name: 'Page500',
        meta: {
          title: '500页',
          breadcrumb: true,
        },
      },
      {
        path: 'EmptyPage',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/EmptyPage.vue'),
        name: 'EmptyPage',
        meta: {
          title: '空页面',
          breadcrumb: true,
        },
      },
    ],
  },
  // 图表

  {
    path: '/page/chart',
    redirect: '/page/chart/simpleChart',
    component: Layout,
    name: 'simpleChart',
    meta: {
      title: 'SimpleChart 基础图表',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'Chart',
        component: () => import(/* webpackChunkName: "simplechart" */ '@/views/page/Chart/SimpleChart.vue'),
        name: 'Chart',
        meta: {
          title: 'SimpleChart 基础图表',
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
