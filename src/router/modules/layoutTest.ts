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
    path: '/component/test/layout1',
    redirect: '/component/test/layout1/page1-1/page1-1-1',
    component: Layout,
    meta: {
      title: '布局-1(下钻)',
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
      title: '布局-2',
      icon: 'api',
      breadcrumb: false,
    },
    children: [
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: '测试页面2',
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
          title: '测试页面3(下钻)',
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
              title: '测试页面3-1',
              breadcrumb: true,
            },
          },
          {
            path: 'page3-2',
            name: 'Page3-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
            meta: {
              title: '测试页面3-2',
              breadcrumb: true,
            },
            children: [
              {
                path: 'page3-2-1',
                name: 'Page3-2-1',
                component: () => import('@/views/component/Test/CuteLayout/Page1-1.vue'),
                meta: {
                  title: '测试页面3-2-1',
                  breadcrumb: true,
                },
              },
              {
                path: 'page3-2-2',
                name: 'Page3-2-2',
                component: () => import('@/views/component/Test/CuteLayout/Page1-2.vue'),
                meta: {
                  title: '测试页面3-2-2',
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
              title: '测试页面3-3',
              breadcrumb: true,
            },
          },
        ],
      },
      {
        path: 'page3b',
        name: 'Page3b',
        component: () => import('@/views/component/Test/CuteLayout/Page3.vue'),
        meta: {
          title: '测试页面3',
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
              title: '测试页面3-1',
              breadcrumb: true,
            },
          },
          {
            path: 'page3b-2',
            name: 'Page3b-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
            meta: {
              title: '测试页面3-2',
              breadcrumb: true,
            },
          },
          {
            path: 'page3b-3',
            name: 'Page3b-3',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: '测试页面3-3',
              breadcrumb: true,
            },
          },
          {
            path: 'http://www.ctyun.cn',
            meta: {
              title: '外部链接',
            },
          },
          {
            path: 'page3b-create/:type',
            name: 'Page3bCreate',
            component: () => import('@/views/component/Test/CuteLayout/Page3Create.vue'),
            meta: {
              title: '测试页面3-create',
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
      title: '子菜单全隐藏',
      breadcrumb: false,
      hidden: true,
    },
    children: [
      {
        path: 'page1',
        name: 'Page1',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: '子菜单全隐藏1',
          breadcrumb: true,
          hidden: true,
        },
      },
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/component/Test/CuteLayout/Page2.vue'),
        meta: {
          title: '子菜单全隐藏2',
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
      title: '集群管理(下钻)',
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
          title: '节点池',
          breadcrumb: true,
        },
      },
      {
        path: 'sub-2',
        name: 'ClusterSub2',
        component: () => import('@/views/component/Test/CuteLayout/Page3-2.vue'),
        meta: {
          title: '任务',
          breadcrumb: true,
        },
        children: [
          {
            path: 'sub-2-1',
            name: 'ClusterSub2-1',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: '任务sub1',
              breadcrumb: true,
              history: 'hash',
            },
          },
          {
            path: 'sub-2-2',
            name: 'ClusterSub2-2',
            component: () => import('@/views/component/Test/CuteLayout/Page3-3.vue'),
            meta: {
              title: '任务sub2',
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
          title: '服务',
          breadcrumb: true,
          customPath: '/component/test/layout2/page3/page3-1',
        },
      },
    ],
  },
]

export default layoutTestRoutes
