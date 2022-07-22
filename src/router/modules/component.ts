/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-21 17:06:47
 * @Description:
 */
import Layout from '@/layout/component.vue'

const componentRoutes = [
  // 基础组件
  {
    path: '/component/base',
    component: Layout,
    redirect: '/component/base/cute-redmind-select',
    meta: {
      title: '基础组件',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-redmind-select',
        name: 'CuteRemindSelect',
        component: () => import('@/views/component/Base/CuteRemindSelect/index.vue'),
        meta: {
          title: 'CuteRemindSelect',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-selected-input',
        name: 'CuteSelectedInput',
        component: () => import('@/views/component/Base/CuteSelectedInput/index.vue'),
        meta: {
          title: 'CuteSelectedInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-titled-block',
        name: 'CuteTitledBlock',
        component: () => import('@/views/component/Base/CuteTitledBlock/index.vue'),
        meta: {
          title: 'CuteTitledBlock',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-edit-input',
        name: 'CuteEditInput',
        component: () => import('@/views/component/Base/CuteEditInput/index.vue'),
        meta: {
          title: 'CuteEditInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-tag',
        name: 'CuteTag',
        component: () => import('@/views/component/Base/CuteTag/index.vue'),
        meta: {
          title: 'CuteTag',
        },
      },
      {
        path: 'cute-sort-table',
        name: 'CuteSortTable',
        component: () => import('@/views/component/Base/CuteSortTable/index.vue'),
        meta: {
          title: 'CuteSortTable',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
