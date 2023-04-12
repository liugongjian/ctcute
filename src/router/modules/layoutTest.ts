/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-10 07:01:51
 * @Description:
 */
import Layout from '@/views/component/Test/CuteLayout/Layout.vue'

const layoutTestRoutes = [
  {
    path: '/component/test/layout',
    redirect: '/component/test/layout/page1-1/page1-1-1',
    component: Layout,
    meta: {
      title: '布局框架测试1(下钻)',
      alwaysShow: true,
      breadcrumb: true,
      drillDown: true,
      drillDownBackPath: '/component/test/layout2/page2',
    },
    children: [
      {
        path: 'page1-1',
        name: 'Page1-1',
        component: () => import('@/views/component/Test/CuteLayout/Page1-1.vue'),
        meta: {
          title: '测试页面1-1',
          breadcrumb: true,
          icon: 'phone',
        },
        children: [
          {
            path: 'page1-1-1',
            name: 'Page1-1-1',
            component: () => import('@/views/component/Test/CuteLayout/Page1-1.vue'),
            meta: {
              title: '测试页面1-1-1',
              breadcrumb: true,
              icon: 'business',
            },
          },
          {
            path: 'page1-1-2',
            name: 'Page1-1-2',
            component: () => import('@/views/component/Test/CuteLayout/Page1-2.vue'),
            meta: {
              title: '测试页面1-1-2',
              breadcrumb: true,
              icon: 'business',
            },
          },
        ],
      },
      {
        path: 'page1-2',
        name: 'Page1-2',
        component: () => import('@/views/component/Test/CuteLayout/Page1-2.vue'),
        meta: {
          title: '测试页面1-2',
          breadcrumb: true,
          icon: 'business',
        },
      },
    ],
  },
  {
    path: '/component/test/layout2',
    component: Layout,
    meta: {
      title: '布局框架测试2',
      breadcrumb: false,
    },
    children: [
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: '测试页面2',
          breadcrumb: true,
        },
      },
      {
        path: 'page3',
        name: 'Page3',
        component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
        meta: {
          title: '测试页面3',
          breadcrumb: true,
        },
        children: [
          {
            path: 'page3-1',
            name: 'Page3-1',
            component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
            meta: {
              title: '测试页面3-1',
              breadcrumb: true,
            },
          },
          {
            path: 'page3-2',
            name: 'Page3-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
            meta: {
              title: '测试页面3-2',
              breadcrumb: true,
            },
          },
          {
            path: 'page3-3',
            name: 'Page3-3',
            component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
            meta: {
              title: '测试页面3-3',
              breadcrumb: true,
            },
          },
        ],
      },
    ],
  },
]

export default layoutTestRoutes
