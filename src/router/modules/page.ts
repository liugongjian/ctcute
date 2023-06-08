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
          title: 'route.page.dashboard',
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
      title: 'route.page.chart.default',
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
          title: 'route.page.chart.default',
          breadcrumb: true,
        },
      },
      {
        path: 'simpleChart2',
        component: () => import(/* webpackChunkName: "simplechart" */ '@/views/page/Chart/SimpleChart.vue'),
        name: 'SimpleChart2',
        meta: {
          title: 'route.page.chart.default',
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
      title: 'route.page.dialog.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'small-dialog',
        component: () => import('@/views/page/Dialog/SmallDialog.vue'),
        name: 'SmallDialog',
        meta: {
          title: 'route.page.dialog.small',
          breadcrumb: true,
        },
      },
      {
        path: 'medium-dialog',
        component: () => import('@/views/page/Dialog/MediumDialog.vue'),
        name: 'MediumDialog',
        meta: {
          title: 'route.page.dialog.medium',
          breadcrumb: true,
        },
      },
      {
        path: 'medium-dialog2',
        component: () => import('@/views/page/Dialog/MediumDialog2.vue'),
        name: 'MediumDialog2',
        meta: {
          title: 'route.page.dialog.medium2',
          breadcrumb: true,
        },
      },
      {
        path: 'large-dialog',
        component: () => import('@/views/page/Dialog/LargeDialog.vue'),
        name: 'LargeDialog',
        meta: {
          title: 'route.page.dialog.large',
          breadcrumb: true,
        },
      },
      {
        path: 'fullscreen-dialog',
        component: () => import('@/views/page/Dialog/FullScreenDialog.vue'),
        name: 'FullScreenDialog',
        meta: {
          title: 'route.page.dialog.fullscreen',
          breadcrumb: true,
        },
      },
      {
        path: 'success-dialog',
        component: () => import('@/views/page/Dialog/SuccessDialog.vue'),
        name: 'SuccessDialog',
        meta: {
          title: 'route.page.dialog.success',
          breadcrumb: true,
        },
      },
      {
        path: 'warn-dialog',
        component: () => import('@/views/page/Dialog/WarnDialog.vue'),
        name: 'WarnDialog',
        meta: {
          title: 'route.page.dialog.warn',
          breadcrumb: true,
        },
      },
      {
        path: 'warn-dialog2',
        component: () => import('@/views/page/Dialog/WarnDialog2.vue'),
        name: 'WarnDialog2',
        meta: {
          title: 'route.page.dialog.warn2',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-small-dialog',
        component: () => import('@/views/page/Dialog/ProSmallDialog.vue'),
        name: 'ProSmallDialog',
        meta: {
          title: 'route.page.dialog.prosmall',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-medium-dialog',
        component: () => import('@/views/page/Dialog/ProMediumDialog.vue'),
        name: 'ProMediumDialog',
        meta: {
          title: 'route.page.dialog.promedium',
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
      title: 'route.page.form.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/SimpleForm.vue'),
        name: 'SimpleForm',
        meta: {
          title: 'route.page.form.simple',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-form1',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/ProForm1.vue'),
        name: 'ProForm1',
        meta: {
          title: 'route.page.form.pro1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-form2',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/ProForm2.vue'),
        name: 'ProForm2',
        meta: {
          title: 'route.page.form.pro2',
          breadcrumb: true,
        },
      },
      {
        path: 'step-form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/page/Form/StepForm.vue'),
        name: 'StepForm',
        meta: {
          title: 'route.page.form.step',
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
      title: 'route.page.table.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable.vue'),
        name: 'SimpleTable',
        meta: {
          title: 'route.page.table.simple',
          breadcrumb: true,
        },
      },
      {
        path: 'simple-table2',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/SimpleTable2.vue'),
        name: 'SimpleTable2',
        meta: {
          title: 'route.page.table.simple2',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table1',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable1.vue'),
        name: 'ProTable1',
        meta: {
          title: 'route.page.table.pro1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table2',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable2.vue'),
        name: 'ProTable2',
        meta: {
          title: 'route.page.table.pro2',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table3',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable3.vue'),
        name: 'ProTable3',
        meta: {
          title: 'route.page.table.pro3',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table4',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable4.vue'),
        name: 'ProTable4',
        meta: {
          title: 'route.page.table.pro4',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table5',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable5.vue'),
        name: 'ProTable5',
        meta: {
          title: 'route.page.table.pro5',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table6',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable6.vue'),
        name: 'ProTable6',
        meta: {
          title: 'route.page.table.pro6',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-table7',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ProTable7.vue'),
        name: 'ProTable7',
        meta: {
          title: 'route.page.table.pro7',
          breadcrumb: true,
        },
      },
      {
        path: 'scrolled-to-load-table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/page/Table/ScrolledToLoadTable.vue'),
        name: 'ScrolledToLoadTable',
        meta: {
          title: 'route.page.table.scroll',
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
      title: 'route.page.cardlist.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'card1',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card1.vue'),
        name: 'Card1',
        meta: {
          title: 'route.page.cardlist.card1',
          breadcrumb: true,
        },
      },
      {
        path: 'card2',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card2.vue'),
        name: 'Card2',
        meta: {
          title: 'route.page.cardlist.card2',
          breadcrumb: true,
        },
      },
      {
        path: 'card3',
        component: () => import(/* webpackChunkName: "card" */ '@/views/page/CardList/Card3.vue'),
        name: 'Card3',
        meta: {
          title: 'route.page.cardlist.card3',
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
      title: 'route.page.detail.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'simple-detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/SimpleDetail.vue'),
        name: 'SimpleDetail',
        meta: {
          title: 'route.page.detail.simple',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail1',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail1.vue'),
        name: 'ProDetail1',
        meta: {
          title: 'route.page.detail.pro1',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail2',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail2.vue'),
        name: 'ProDetail2',
        meta: {
          title: 'route.page.detail.pro2',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail3',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail3.vue'),
        name: 'ProDetail3',
        meta: {
          title: 'route.page.detail.pro3',
          breadcrumb: true,
        },
      },
      {
        path: 'pro-detail4',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/page/Detail/ProDetail4.vue'),
        name: 'ProDetail4',
        meta: {
          title: 'route.page.detail.pro4',
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
      title: 'route.page.status.default',
      breadcrumb: true,
    },
    children: [
      {
        path: 'Page403',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page403.vue'),
        name: 'Page403',
        meta: {
          title: 'route.page.status.page403',
          breadcrumb: true,
        },
      },
      {
        path: 'Page404',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page404.vue'),
        name: 'Page404',
        meta: {
          title: 'route.page.status.page404',
          breadcrumb: true,
        },
      },
      {
        path: 'Page500',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/Page500.vue'),
        name: 'Page500',
        meta: {
          title: 'route.page.status.page500',
          breadcrumb: true,
        },
      },
      {
        path: 'EmptyPage',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/EmptyPage.vue'),
        name: 'EmptyPage',
        meta: {
          title: 'route.page.status.empty',
          breadcrumb: true,
        },
      },
      {
        path: 'LoadError',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/StatusPage/LoadError.vue'),
        name: 'LoadError',
        meta: {
          title: 'route.page.status.error',
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
      title: 'route.page.preview.default',
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
          title: 'route.page.preview.simple',
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
      title: 'route.page.order.default',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'order-list',
        component: () => import('@/views/page/Order/OrderList.vue'),
        name: 'OrderList',
        meta: {
          title: 'route.page.order.list',
          fullScreen: true,
        },
      },
      {
        path: 'order-list1',
        component: () => import('@/views/page/Order/OrderList1.vue'),
        name: 'OrderList1',
        meta: {
          title: 'route.page.order.list1',
          fullScreen: true,
        },
      },
      {
        path: 'order-list2',
        component: () => import('@/views/page/Order/OrderList2.vue'),
        name: 'OrderList2',
        meta: {
          title: 'route.page.order.list2',
          fullScreen: true,
        },
      },
      {
        path: 'order-success',
        component: () => import('@/views/page/Order/OrderSuccess.vue'),
        name: 'OrderSuccess',
        meta: {
          title: 'route.page.order.success',
          fullScreen: true,
        },
      },

      {
        path: 'product-details',
        component: () => import('@/views/page/Order/ProductDetails.vue'),
        name: 'ProductDetails',
        meta: {
          title: 'route.page.order.detail',
          breadcrumb: true,
        },
      },
      {
        path: 'product-list',
        component: () => import('@/views/page/Order/ProductList.vue'),
        name: 'ProductList',
        meta: {
          title: 'route.page.order.product',
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
      title: 'route.page.other.default',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'icon',
        component: () => import(/* webpackChunkName: "icon" */ '@/views/page/Icon/index.vue'),
        name: 'Icon',
        meta: {
          title: 'route.page.other.icon',
          breadcrumb: true,
        },
      },
      {
        path: 'ts-demo',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/TsDemo/index.vue'),
        name: 'TypeScriptDemo',
        meta: {
          title: 'route.page.other.ts',
          breadcrumb: true,
        },
      },
      {
        path: 'echarts-demo',
        component: () => import(/* webpackChunkName: "ts-demo" */ '@/views/page/EchartsDemo/index.vue'),
        name: 'EchartsDemo',
        meta: {
          title: 'route.page.other.echarts',
          breadcrumb: true,
        },
      },
    ],
  },
]

const pageRoutes = [...indexPageRoutes, ...restPageRoutes]

export default pageRoutes

export { indexPageRoutes, restPageRoutes }
