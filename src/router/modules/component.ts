/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-20 09:15:28
 * @Description:
 */
// import Layout from '@/layout/component.vue'
import Layout from '@/layout/LayoutComponent.vue'

const componentRoutes = [
  // 基础组件
  {
    path: '/component/base',
    component: Layout,
    redirect: '/component/base/cute-remind-select',
    meta: {
      title: 'component.base.title',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-layout',
        name: 'CuteLayout',
        component: () => import('@/views/component/Base/CuteLayout/index.vue'),
        meta: {
          title: 'CuteLayout',
          breadcrumb: true,
        },
      },
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
        path: 'cute-chart',
        name: 'CuteChart',
        component: () => import('@/views/component/Base/CuteChart/index.vue'),
        meta: {
          title: 'CuteChart',
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
        path: 'cute-button-group',
        name: 'CuteButtonGroup',
        component: () => import('@/views/component/Base/CuteButtonGroup/index.vue'),
        meta: {
          title: 'CuteButtonGroup',
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
        path: 'el-form',
        name: 'ElForm',
        component: () => import('@/views/component/Base/ElForm/index.vue'),
        meta: {
          title: 'ElForm',
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
        path: 'el-breadcrumb',
        name: 'ElBreadcrumb',
        component: () => import('@/views/component/Base/ElBreadcrumb/index.vue'),
        meta: {
          title: 'ElBreadcrumb',
          breadcrumb: true,
        },
      },
      {
        path: 'el-steps',
        name: 'ElSteps',
        component: () => import('@/views/component/Base/ElSteps/index.vue'),
        meta: {
          title: 'ElSteps',
          breadcrumb: true,
        },
      },
      {
        path: 'el-tabs',
        name: 'ElTabs',
        component: () => import('@/views/component/Base/ElTabs/index.vue'),
        meta: {
          title: 'ElTabs',
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
      {
        path: 'cute-scroller',
        name: 'CuteScroller',
        component: () => import('@/views/component/Base/CuteScroller/index.vue'),
        meta: {
          title: 'CuteScroller',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/component/biz',
    component: Layout,
    redirect: '/component/biz/vss-video-player',
    meta: {
      title: 'component.biz.title',
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
        path: 'cute-layout',
        name: 'CuteLayout',
        component: () => import('@/views/component/Test/CuteLayout/index.vue'),
        meta: {
          title: 'CuteLayout',
          breadcrumb: true,
        },
      },
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
        path: 'radio',
        name: 'Radio',
        component: () => import('@/views/component/Test/Radio.vue'),
        meta: {
          title: 'Radio',
          breadcrumb: true,
        },
      },
      {
        path: 'checkbox',
        name: 'Checkbox',
        component: () => import('@/views/component/Test/Checkbox.vue'),
        meta: {
          title: 'Checkbox',
          breadcrumb: true,
        },
      },
      {
        path: 'cascadeSelect',
        name: 'CascadeSelect',
        component: () => import('@/views/component/Test/CascadeSelect.vue'),
        meta: {
          title: 'CascadeSelect',
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
        path: 'dialog',
        name: 'Dialog',
        component: () => import('@/views/component/Test/Dialog.vue'),
        meta: {
          title: 'Dialog',
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
        path: 'switch',
        name: 'Switch',
        component: () => import('@/views/component/Test/Switch.vue'),
        meta: {
          title: 'Switch',
          breadcrumb: true,
        },
      },
      {
        path: 'drawer',
        name: 'Drawer',
        component: () => import('@/views/component/Test/Drawer.vue'),
        meta: {
          title: 'Drawer',
          breadcrumb: true,
        },
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/component/Test/Upload.vue'),
        meta: {
          title: 'Upload',
          breadcrumb: true,
        },
      },
      {
        path: 'slider',
        name: 'Slider',
        component: () => import('@/views/component/Test/Slider.vue'),
        meta: {
          title: 'Slider',
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
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/component/Test/Tree.vue'),
        meta: {
          title: 'Tree',
          breadcrumb: true,
        },
      },
      {
        path: 'state',
        name: 'State',
        component: () => import('@/views/component/Test/State.vue'),
        meta: {
          title: 'State',
          breadcrumb: true,
        },
      },
      {
        path: 'descriptions',
        name: 'Descriptions',
        component: () => import('@/views/component/Test/Descriptions.vue'),
        meta: {
          title: 'Descriptions',
          breadcrumb: true,
        },
      },
      {
        path: 'breadcrumb',
        name: 'Breadcrumb',
        component: () => import('@/views/component/Test/Breadcrumb.vue'),
        meta: {
          title: 'Breadcrumb',
          breadcrumb: true,
        },
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: () => import('@/views/component/Test/Transfer.vue'),
        meta: {
          title: 'Transfer',
          breadcrumb: true,
        },
      },
      {
        path: 'dropdown',
        name: 'DropDown',
        component: () => import('@/views/component/Test/DropDown.vue'),
        meta: {
          title: 'DropDown',
          breadcrumb: true,
        },
      },
      {
        path: 'rate',
        name: 'Rate',
        component: () => import('@/views/component/Test/Rate.vue'),
        meta: {
          title: 'Rate',
          breadcrumb: true,
        },
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('@/views/component/Test/Alert.vue'),
        meta: {
          title: 'Alert',
          breadcrumb: true,
        },
      },
      {
        path: 'pagination',
        name: 'Pagination',
        component: () => import('@/views/component/Test/Pagination.vue'),
        meta: {
          title: 'Pagination',
          breadcrumb: true,
        },
      },
      {
        path: 'steps',
        name: 'Steps',
        component: () => import('@/views/component/Test/Steps.vue'),
        meta: {
          title: 'Steps',
          breadcrumb: true,
        },
      },
      {
        path: 'content-area-tips',
        name: 'ContentAreaTips',
        component: () => import('@/views/component/Test/ContentAreaTips.vue'),
        meta: {
          title: 'ContentAreaTips',
          breadcrumb: true,
        },
      },
      {
        path: 'loading',
        name: 'Loading',
        component: () => import('@/views/component/Test/Loading.vue'),
        meta: {
          title: 'Loading',
          breadcrumb: true,
        },
      },
      {
        path: 'popover',
        name: 'Popover',
        component: () => import('@/views/component/Test/Popover.vue'),
        meta: {
          title: 'Popover',
          breadcrumb: true,
        },
      },
      {
        path: 'toast',
        name: 'Toast',
        component: () => import('@/views/component/Test/Toast.vue'),
        meta: {
          title: 'Toast',
          breadcrumb: true,
        },
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: () => import('@/views/component/Test/Tooltip.vue'),
        meta: {
          title: 'Tooltip',
          breadcrumb: true,
        },
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/component/Test/Tabs.vue'),
        meta: {
          title: 'Tabs',
          breadcrumb: true,
        },
      },
      {
        path: 'badge',
        name: 'Badge',
        component: () => import('@/views/component/Test/Badge.vue'),
        meta: {
          title: 'Badge',
          breadcrumb: true,
        },
      },
      {
        path: 'progress',
        name: 'Progress',
        component: () => import('@/views/component/Test/Progress.vue'),
        meta: {
          title: 'Progress',
          breadcrumb: true,
        },
      },
      {
        path: 'timeline',
        name: 'Timeline',
        component: () => import('@/views/component/Test/Timeline.vue'),
        meta: {
          title: 'Timeline',
          breadcrumb: true,
        },
      },
      {
        path: 'card',
        name: 'Card',
        component: () => import('@/views/component/Test/Card.vue'),
        meta: {
          title: 'Card',
          breadcrumb: true,
        },
      },
      {
        path: 'Layout',
        name: 'Layout',
        component: () => import('@/views/component/Test/Layout.vue'),
        meta: {
          title: 'Layout',
          breadcrumb: true,
        },
      },
      {
        path: 'Container',
        name: 'Container',
        component: () => import('@/views/component/Test/Container.vue'),
        meta: {
          title: 'Container',
          breadcrumb: true,
        },
      },
      {
        path: 'PageHeader',
        name: 'PageHeader',
        component: () => import('@/views/component/Test/PageHeader.vue'),
        meta: {
          title: 'PageHeader',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
