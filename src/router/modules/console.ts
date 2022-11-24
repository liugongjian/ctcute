import ConsoleLayout from '@/layout/console.vue'

const consoleRoutes = [
  // 订购页
  {
    path: '/console/order',
    redirect: '/console/order/order-list',
    component: ConsoleLayout,
    name: 'Order',
    meta: {
      title: 'Order 订购页',
      alwaysShow: false,
      breadcrumb: false,
    },
    children: [
      {
        path: 'order-list',
        component: () => import('@/views/console/Order/OrderList.vue'),
        name: 'OrderList',
        meta: {
          title: 'OrderList 订购标准页',
          breadcrumb: true,
        },
      },
      {
        path: 'product-details',
        component: () => import('@/views/console/Order/ProductDetails.vue'),
        name: 'ProductDetails',
        meta: {
          title: 'ProductDetails 产品详情',
          breadcrumb: true,
        },
      },
      {
        path: 'product-list',
        component: () => import('@/views/console/Order/ProductList.vue'),
        name: 'ProductList',
        meta: {
          title: 'ProductList 产品列表',
          breadcrumb: false,
        },
      },
    ],
  },
]

export default consoleRoutes
