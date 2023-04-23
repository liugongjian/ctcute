import Layout from '@/layout/LayoutPage.vue'

const indexPageRoutes = [
  //首页展示
  {
    path: '/page',
    redirect: '/page/dashboard',
    component: Layout,
    meta: {
      breadcrumb: false,
      icon: 'dashboard',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/page/Dashboard/Dashboard.vue'),
        meta: {
          title: 'Dashboard',
          breadcrumb: true,
          icon: 'dashboard',
        },
      },
    ],
  },
  // 图表
  {
    path: '/page/chart',
    redirect: '/page/chart/simpleChart',
    component: Layout,
    name: 'Chart',
    meta: {
      title: 'Chart 图表',
      alwaysShow: true,
      breadcrumb: true,
      icon: 'area-chart',
    },
    children: [
      {
        path: 'simpleChart',
        component: () => import(/* webpackChunkName: "simplechart" */ '@/views/page/Chart/SimpleChart.vue'),
        name: 'SimpleChart',
        meta: {
          title: 'SimpleChart 基础图表',
          breadcrumb: true,
        },
      },
      {
        path: 'simpleChart2',
        component: () => import(/* webpackChunkName: "simplechart" */ '@/views/page/Chart/SimpleChart.vue'),
        name: 'SimpleChart2',
        meta: {
          title: 'SimpleChart 基础图表',
          breadcrumb: true,
          hidden: true,
        },
      },
    ],
  },
]

const restPageRoutes = [
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
        path: 'medium-dialog2',
        component: () => import('@/views/page/Dialog/MediumDialog2.vue'),
        name: 'MediumDialog2',
        meta: {
          title: 'MediumDialog 中弹窗2',
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
        path: 'warn-dialog2',
        component: () => import('@/views/page/Dialog/WarnDialog2.vue'),
        name: 'WarnDialog2',
        meta: {
          title: 'WarnDialog2 警告提示',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-small-dialog',
        component: () => import('@/views/page/Dialog/ProSmallDialog.vue'),
        name: 'ProSmallDialog',
        meta: {
          title: 'ProSmallDialog 复杂小弹窗',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-medium-dialog',
        component: () => import('@/views/page/Dialog/ProMediumDialog.vue'),
        name: 'ProMediumDialog',
        meta: {
          title: 'ProMediumDialog 复杂中弹窗',
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
        path: 'simple-table2',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable2.vue'),
        name: 'SimpleTable2',
        meta: {
          title: 'SimpleTable2 基础表格2',
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
      {
        path: 'pro-table5',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable5.vue'),
        name: 'ProTable5',
        meta: {
          title: 'ProTable5 复杂表格5',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table6',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable6.vue'),
        name: 'ProTable6',
        meta: {
          title: 'ProTable6 复杂表格6',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table7',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable7.vue'),
        name: 'ProTable7',
        meta: {
          title: 'ProTable7 复杂表格7',
          breadcrumb: true,
        },
      },
      {
        path: 'scrolled-to-load-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ScrolledToLoadTable.vue'),
        name: 'ScrolledToLoadTable',
        meta: {
          title: 'ScrolledToLoadTable 滚动查询表格',
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
          title: 'Card1 卡片1',
          breadcrumb: true,
        },
      },
      {
        path: 'card2',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card2.vue'),
        name: 'Card2',
        meta: {
          title: 'Card2 卡片2',
          breadcrumb: true,
        },
      },
      {
        path: 'card3',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card3.vue'),
        name: 'Card3',
        meta: {
          title: 'Card3 卡片3',
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
          title: 'SimpleDetail 简单详情',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail1',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail1.vue'),
        name: 'ProDetail1',
        meta: {
          title: 'ProDetail1 复杂详情1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail2',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail2.vue'),
        name: 'ProDetail2',
        meta: {
          title: 'ProDetail2 复杂详情2',
          breadcrumb: true,
        },
      },
    ],
  },
  // 状态页
  {
    path: '/page/pageStatus',
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
          title: 'Page403 403页',
          breadcrumb: true,
        },
      },
      {
        path: 'Page404',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page404.vue'),
        name: 'Page404',
        meta: {
          title: 'Page404 404页',
          breadcrumb: true,
        },
      },
      {
        path: 'Page500',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page500.vue'),
        name: 'Page500',
        meta: {
          title: 'Page500 500页',
          breadcrumb: true,
        },
      },
      {
        path: 'EmptyPage',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/EmptyPage.vue'),
        name: 'EmptyPage',
        meta: {
          title: 'EmptyPage 空页面',
          breadcrumb: true,
        },
      },
    ],
  },
  //文档预览
  {
    path: '/page/review',
    redirect: '/page/preview/simple-preview',
    component: Layout,
    name: 'Preview',
    meta: {
      title: 'Preview 文档预览',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-preview',
        component: () =>
          import(/* webpackChunkName: "simplepreview" */ '@/views/page/Preview/SimplePreview.vue'),
        name: 'SimplePreview',
        meta: {
          title: 'SimplePreview 文档预览',
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
      {
        path: 'variables-refactor',
        component: () =>
          import(/* webpackChunkName: "ts-demo" */ '@/views/page/TsDemo/VariablesRefactor.vue'),
        name: 'VariablesRefactor',
        meta: {
          title: 'VariablesRefactor(临时)',
          breadcrumb: true,
        },
      },
      {
        path: 'echarts-demo',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/EchartsDemo/index.vue'),
        name: 'EchartsDemo',
        meta: {
          title: 'Echarts Demo',
          breadcrumb: true,
        },
      },
    ],
  },
  // 订购页
  {
    path: '/page/order',
    redirect: '/page/order/order-list',
    component: Layout,
    name: 'Order',
    meta: {
      title: 'Order 订购页',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'order-list',
        component: () => import('@/views/page/Order/OrderList.vue'),
        name: 'OrderList',
        meta: {
          title: 'OrderList 订购标准页',
          fullScreen: true,
        },
      },
      {
        path: 'product-details',
        component: () => import('@/views/page/Order/ProductDetails.vue'),
        name: 'ProductDetails',
        meta: {
          title: 'ProductDetails 产品详情',
          breadcrumb: true,
        },
      },
      {
        path: 'product-list',
        component: () => import('@/views/page/Order/ProductList.vue'),
        name: 'ProductList',
        meta: {
          title: 'ProductList 产品列表',
          breadcrumb: true,
        },
      },
    ],
  },
]

const pageRoutes = [...indexPageRoutes, ...restPageRoutes]

export default pageRoutes

export { indexPageRoutes, restPageRoutes }
