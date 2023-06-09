/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-06-02 10:53:50
 * @Description:
 */
import Layout from '@/views/component/Test/CuteLayout/Layout.vue'

const layoutTestRoutes = [
  {
    path: '/component/test/layout1',
    redirect: '/component/test/layout1/page1-1/page1-1-1',
    component: Layout,
    meta: {
      title: 'route.layoutTest.page1.default',
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
          title: 'route.layoutTest.page1.page1_1',
          breadcrumb: true,
          icon: 'phone',
        },
        children: [
          {
            path: 'page1-1-1',
            name: 'Page1-1-1',
            component: () => import('@/views/component/Test/CuteLayout/Page1-1.vue'),
            meta: {
              title: 'route.layoutTest.page1.page1_1_1',
              breadcrumb: true,
              icon: 'business',
            },
          },
          {
            path: 'page1-1-2',
            name: 'Page1-1-2',
            component: () => import('@/views/component/Test/CuteLayout/Page1-2.vue'),
            meta: {
              title: 'route.layoutTest.page1.page1_1_2',
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
          title: 'route.layoutTest.page1.page1_2',
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
      title: 'route.layoutTest.page2.default',
      icon: 'api',
      breadcrumb: false,
    },
    children: [
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: 'route.layoutTest.page2.page2',
          icon: 'api',
          breadcrumb: true,
        },
      },
      {
        path: 'page3',
        name: 'Page3',
        component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
        // redirect: '/component/test/layout2/page3/page3-1',
        meta: {
          title: 'route.layoutTest.page3.default',
          breadcrumb: true,
          drillDown: true,
          drillDownBackPath: '/component/test/layout2/page2',
        },
        children: [
          {
            path: 'page3-1',
            name: 'Page3-1',
            component: () => import('@/views/component/Test/CuteLayout/Page3-1.vue'),
            meta: {
              title: 'route.layoutTest.page3.page3_1',
              breadcrumb: true,
            },
          },
          {
            path: 'page3-2',
            name: 'Page3-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
            meta: {
              title: 'route.layoutTest.page3.page3_2',
              breadcrumb: true,
            },
            children: [
              {
                path: 'page3-2-1',
                name: 'Page3-2-1',
                component: () => import('@/views/component/Test/CuteLayout/Page1-1.vue'),
                meta: {
                  title: 'route.layoutTest.page3.page3_2_1',
                  breadcrumb: true,
                },
              },
              {
                path: 'page3-2-2',
                name: 'Page3-2-2',
                component: () => import('@/views/component/Test/CuteLayout/Page1-2.vue'),
                meta: {
                  title: 'route.layoutTest.page3.page3_2_2',
                  breadcrumb: true,
                },
              },
            ],
          },
          {
            path: 'page3-3',
            name: 'Page3-3',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: 'route.layoutTest.page3.page3_3',
              breadcrumb: true,
            },
          },
        ],
      },
      {
        path: 'page3b',
        name: 'Page3b',
        component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
        redirect: '/component/test/layout2/page3b/page3b-1',
        meta: {
          title: 'route.layoutTest.page3b.default',
          icon: 'api',
          iconType: 'svg',
          breadcrumb: true,
        },
        children: [
          {
            path: 'page3b-1',
            name: 'Page3b-1',
            component: () => import('@/views/component/Test/CuteLayout/Page3-1.vue'),
            meta: {
              title: 'route.layoutTest.page3b.page3b_1',
              breadcrumb: true,
            },
          },
          {
            path: 'page3b-2',
            name: 'Page3b-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
            meta: {
              title: 'route.layoutTest.page3b.page3b_2',
              breadcrumb: true,
            },
          },
          {
            path: 'page3b-3',
            name: 'Page3b-3',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: 'route.layoutTest.page3b.page3b_3',
              breadcrumb: true,
            },
          },
          {
            path: 'http://www.ctyun.cn',
            meta: {
              title: 'route.layoutTest.page3b.outlink',
            },
          },
          {
            path: 'page3b-create/:type',
            name: 'Page3bCreate',
            component: () => import('@/views/component/Test/CuteLayout/Page3Create.vue'),
            meta: {
              title: 'route.layoutTest.page3b.create',
              hidden: true,
              breadcrumb: true,
              activeMenu: null,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/component/test/layout4',
    component: Layout,
    meta: {
      title: 'route.layoutTest.pagehide.default',
      breadcrumb: false,
      hidden: true,
    },
    children: [
      {
        path: 'page1',
        name: 'Page1',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: 'route.layoutTest.pagehide.page1',
          breadcrumb: true,
          hidden: true,
        },
      },
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: 'route.layoutTest.pagehide.page2',
          breadcrumb: true,
          hidden: true,
        },
      },
    ],
  },
  {
    path: '/cluster',
    name: 'Cluster',
    component: Layout,
    meta: {
      title: 'route.layoutTest.cluster.default',
      breadcrumb: true,
      hidden: true,
      drillDown: true,
      drillDownBackPath: '/component/test/layout2/page2',
    },
    children: [
      {
        path: 'sub-1',
        name: 'ClusterSub1',
        component: () => import('@/views/component/Test/CuteLayout/Page3-1.vue'),
        meta: {
          title: 'route.layoutTest.cluster.sub1',
          breadcrumb: true,
        },
      },
      {
        path: 'sub-2',
        name: 'ClusterSub2',
        component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
        meta: {
          title: 'route.layoutTest.cluster.sub2.default',
          breadcrumb: true,
        },
        children: [
          {
            path: 'sub-2-1',
            name: 'ClusterSub2-1',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: 'route.layoutTest.cluster.sub2.s1',
              breadcrumb: true,
              history: 'hash',
            },
          },
          {
            path: 'sub-2-2',
            name: 'ClusterSub2-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: 'route.layoutTest.cluster.sub2.s2',
              breadcrumb: true,
            },
          },
        ],
      },
      {
        path: 'sub-3',
        name: 'ClusterSub3',
        component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
        meta: {
          title: 'route.layoutTest.cluster.sub3',
          breadcrumb: true,
          customPath: '/component/test/layout2/page3/page3-1',
        },
      },
    ],
  },
]

export default layoutTestRoutes
