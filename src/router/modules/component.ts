/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-09 08:46:22
 * @Description:
 */
import Layout from '@/layout/component.vue'

const componentRoutes = [
  // 基础组件
  {
    path: '/component/base',
    component: Layout,
    redirect: '/component/base/cute-remind-select',
    meta: {
      title: '基础组件',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-remind-select',
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
        path: 'cute-card-box',
        name: 'CuteCardBox',
        component: () => import('@/views/component/Base/CuteCardBox/index.vue'),
        meta: {
          title: 'CuteCardBox',
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
        path: 'cute-steps-multi',
        name: 'CuteSteps',
        component: () => import('@/views/component/Base/CuteStepsMulti/index.vue'),
        meta: {
          title: 'CuteStepsMulti',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-distribution-bar',
        name: 'CuteDistributionBar',
        component: () => import('@/views/component/Base/CuteDistributionBar/index.vue'),
        meta: {
          title: 'CuteDistributionBar',
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
      {
        path: 'el-color-picker',
        name: 'ElColorPicker',
        component: () => import('@/views/component/Base/ElColorPicker/index.vue'),
        meta: {
          title: 'ElColorPicker',
          breadcrumb: true,
        },
      },
      {
        path: 'el-button',
        name: 'ElButton',
        component: () => import('@/views/component/Base/ElButton/index.vue'),
        meta: {
          title: 'ElButton',
          breadcrumb: true,
        },
      },
      {
        path: 'vxe-table',
        name: 'VxeTable',
        component: () => import('@/views/component/Base/VxeTable/index.vue'),
        meta: {
          title: 'VxeTable',
        },
      },
    ],
  },
  {
    path: '/component/biz',
    component: Layout,
    redirect: '/component/biz/vss-video-player',
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
      {
        path: 'markdown-book',
        name: 'MarkdownBook',
        component: () => import('@/views/component/Biz/MarkdownBook/index.vue'),
        meta: {
          title: 'MarkdownBook',
          breadcrumb: true,
        },
      },
      {
        path: 'ct-log',
        name: 'CtLog',
        component: () => import('@/views/component/Biz/CtLog/index.vue'),
        meta: {
          title: 'CtLog',
          breadcrumb: true,
        },
      },
      {
        path: 'ct-monaco',
        name: 'CtMonaco',
        component: () => import('@/views/component/Biz/CtMonaco/index.vue'),
        meta: {
          title: 'CtMonaco',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/component/test',
    component: Layout,
    meta: {
      title: '组件测试',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/views/component/Test/Button.vue'),
        meta: {
          title: 'Button',
          breadcrumb: true,
        },
      },
      {
        path: 'color-picker',
        name: 'ColorPicker',
        component: () => import('@/views/component/Test/ColorPicker.vue'),
        meta: {
          title: 'ColorPicker',
          breadcrumb: true,
        },
      },
      {
        path: 'collapse',
        name: 'Collapse',
        component: () => import('@/views/component/Test/Collapse.vue'),
        meta: {
          title: 'Collapse',
          breadcrumb: true,
        },
      },
      {
        path: 'input',
        name: 'Input',
        component: () => import('@/views/component/Test/Input.vue'),
        meta: {
          title: 'Input',
          breadcrumb: true,
        },
      },
      {
        path: 'link',
        name: 'Link',
        component: () => import('@/views/component/Test/Link.vue'),
        meta: {
          title: 'Link',
          breadcrumb: true,
        },
      },
      {
        path: 'message-box',
        name: 'MessageBox',
        component: () => import('@/views/component/Test/MessageBox.vue'),
        meta: {
          title: 'MessageBox',
          breadcrumb: true,
        },
      },
      {
        path: 'notification',
        name: 'Notification',
        component: () => import('@/views/component/Test/Notification.vue'),
        meta: {
          title: 'Notification',
          breadcrumb: true,
        },
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import('@/views/component/Test/Select.vue'),
        meta: {
          title: 'Select',
          breadcrumb: true,
        },
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/component/Test/Table.vue'),
        meta: {
          title: 'Table',
          breadcrumb: true,
        },
      },
      {
        path: 'tag',
        name: 'Tag',
        component: () => import('@/views/component/Test/Tag.vue'),
        meta: {
          title: 'Tag',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
