/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: 王月功
 * @LastEditTime: 2022-11-30 09:25:20
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
        path: 'cute-table-column-settings',
        name: 'CuteTableColumnSettings',
        component: () => import('@/views/component/Base/CuteTableColumnSettings/index.vue'),
        meta: {
          title: 'CuteTableColumnSettings',
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
        path: 'cute-state',
        name: 'CuteState',
        component: () => import('@/views/component/Base/CuteState/index.vue'),
        meta: {
          title: 'CuteState',
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
        },
      },
      {
        path: 'cute-remind-input',
        name: 'CuteRemindInput',
        component: () => import('@/views/component/Base/CuteRemindInput/index.vue'),
        meta: {
          title: 'CuteRemindInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-special-radio',
        name: 'CuteSpecialRadio',
        component: () => import('@/views/component/Base/CuteSpecialRadio/index.vue'),
        meta: {
          title: 'CuteSpecialRadio',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-select-tree',
        name: 'CuteSelectTree',
        component: () => import('@/views/component/Base/CuteSelectTree/index.vue'),
        meta: {
          title: 'CuteSelectTree',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-area',
        name: 'CuteArea',
        component: () => import('@/views/component/Base/CuteArea/index.vue'),
        meta: {
          title: 'CuteArea',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-slider',
        name: 'CuteSlider',
        component: () => import('@/views/component/Base/CuteSlider/index.vue'),
        meta: {
          title: 'CuteSlider',
          breadcrumb: true,
        },
      },
      {
        path: 'el-alert',
        name: 'ElAlert',
        component: () => import('@/views/component/Base/ElAlert/index.vue'),
        meta: {
          title: 'ElAlert',
          breadcrumb: true,
        },
      },
      {
        path: 'el-collapse',
        name: 'ElCollapse',
        component: () => import('@/views/component/Base/ElCollapse/index.vue'),
        meta: {
          title: 'ElCollapse',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/component/biz',
    component: Layout,
    meta: {
      title: '业务组件',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'vss-video-player',
        name: 'VssVideoPlayer',
        component: () => import('@/views/component/Biz/VssVideoPlayer/index.vue'),
        meta: {
          title: 'VssVideoPlayer',
          breadcrumb: true,
        },
      },
      {
        path: 's3-upload',
        name: 'S3Upload',
        component: () => import('@/views/component/Biz/S3Upload/index.vue'),
        meta: {
          title: 'S3Upload',
          breadcrumb: true,
        },
      },
      {
        path: 'svg-topology',
        name: 'SvgTopology',
        component: () => import('@/views/component/Biz/SvgTopology/index.vue'),
        meta: {
          title: 'SvgTopology',
          breadcrumb: true,
        },
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/views/component/Biz/Markdown/index.vue'),
        meta: {
          title: 'Markdown',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
