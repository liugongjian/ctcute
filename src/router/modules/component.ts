/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: huanglulu
 * @Date: 2022-07-20 10:15:03
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-06-02 10:09:47
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
          title: 'component.base.cuteLayout',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-remind-select',
        name: 'CuteRemindSelect',
        component: () => import('@/views/component/Base/CuteRemindSelect/index.vue'),
        meta: {
          title: 'component.base.cuteRemindSelect',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-selected-input',
        name: 'CuteSelectedInput',
        component: () => import('@/views/component/Base/CuteSelectedInput/index.vue'),
        meta: {
          title: 'component.base.cuteSelectedInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-table-column-settings',
        name: 'CuteTableColumnSettings',
        component: () => import('@/views/component/Base/CuteTableColumnSettings/index.vue'),
        meta: {
          title: 'component.base.cuteTableColumnSettings',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-table-filter',
        name: 'CuteTableColumnSettings',
        component: () => import('@/views/component/Base/CuteTableFilter/index.vue'),
        meta: {
          title: 'component.base.cuteTableFilter',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-titled-block',
        name: 'CuteTitledBlock',
        component: () => import('@/views/component/Base/CuteTitledBlock/index.vue'),
        meta: {
          title: 'component.base.cuteTitledBlock',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-card-box',
        name: 'CuteCardBox',
        component: () => import('@/views/component/Base/CuteCardBox/index.vue'),
        meta: {
          title: 'component.base.cuteCardBox',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-edit-input',
        name: 'CuteEditInput',
        component: () => import('@/views/component/Base/CuteEditInput/index.vue'),
        meta: {
          title: 'component.base.cuteEditInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-state',
        name: 'CuteState',
        component: () => import('@/views/component/Base/CuteState/index.vue'),
        meta: {
          title: 'component.base.cuteState',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-tag',
        name: 'CuteTag',
        component: () => import('@/views/component/Base/CuteTag/index.vue'),
        meta: {
          title: 'component.base.cuteTag',
        },
      },
      {
        path: 'cute-sort-table',
        name: 'CuteSortTable',
        component: () => import('@/views/component/Base/CuteSortTable/index.vue'),
        meta: {
          title: 'component.base.cuteSortTable',
        },
      },
      {
        path: 'cute-remind-input',
        name: 'CuteRemindInput',
        component: () => import('@/views/component/Base/CuteRemindInput/index.vue'),
        meta: {
          title: 'component.base.cuteRemindInput',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-select-tree',
        name: 'CuteSelectTree',
        component: () => import('@/views/component/Base/CuteSelectTree/index.vue'),
        meta: {
          title: 'component.base.cuteSelectTree',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-area',
        name: 'CuteArea',
        component: () => import('@/views/component/Base/CuteArea/index.vue'),
        meta: {
          title: 'component.base.cuteArea',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-slider',
        name: 'CuteSlider',
        component: () => import('@/views/component/Base/CuteSlider/index.vue'),
        meta: {
          title: 'component.base.cuteSlider',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-steps-multi',
        name: 'CuteSteps',
        component: () => import('@/views/component/Base/CuteStepsMulti/index.vue'),
        meta: {
          title: 'component.base.cuteStepsMulti',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-distribution-bar',
        name: 'CuteDistributionBar',
        component: () => import('@/views/component/Base/CuteDistributionBar/index.vue'),
        meta: {
          title: 'component.base.cuteDistributionBar',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-scroller',
        name: 'CuteScroller',
        component: () => import('@/views/component/Base/CuteScroller/index.vue'),
        meta: {
          title: 'component.base.cuteScroller',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-fixed-footer',
        name: 'CuteFixedFooter',
        component: () => import('@/views/component/Base/CuteFixedFooter/index.vue'),
        meta: {
          title: 'component.base.cuteFixedFooter',
          breadcrumb: true,
        },
      },
      {
        path: 'cute-form-info',
        name: 'CuteFormInfo',
        component: () => import('@/views/component/Base/CuteFormInfo/index.vue'),
        meta: {
          title: 'component.base.cuteFormInfo',
          breadcrumb: true,
        },
      },
      {
        path: 'el-alert',
        name: 'ElAlert',
        component: () => import('@/views/component/Base/ElAlert/index.vue'),
        meta: {
          title: 'component.base.elAlert',
          breadcrumb: true,
        },
      },
      {
        path: 'el-form-item',
        name: 'ElFormItem',
        component: () => import('@/views/component/Base/ElFormItem/index.vue'),
        meta: {
          title: 'component.base.elFormItem',
          breadcrumb: true,
        },
      },
      {
        path: 'el-collapse',
        name: 'ElCollapse',
        component: () => import('@/views/component/Base/ElCollapse/index.vue'),
        meta: {
          title: 'component.base.elCollapse',
          breadcrumb: true,
        },
      },
      {
        path: 'el-color-picker',
        name: 'ElColorPicker',
        component: () => import('@/views/component/Base/ElColorPicker/index.vue'),
        meta: {
          title: 'component.base.elColorPicker',
          breadcrumb: true,
        },
      },
      {
        path: 'el-button',
        name: 'ElButton',
        component: () => import('@/views/component/Base/ElButton/index.vue'),
        meta: {
          title: 'component.base.elButton',
          breadcrumb: true,
        },
      },
      {
        path: 'el-breadcrumb',
        name: 'ElBreadcrumb',
        component: () => import('@/views/component/Base/ElBreadcrumb/index.vue'),
        meta: {
          title: 'component.base.elBreadcrumb',
          breadcrumb: true,
        },
      },
      {
        path: 'el-steps',
        name: 'ElSteps',
        component: () => import('@/views/component/Base/ElSteps/index.vue'),
        meta: {
          title: 'component.base.elSteps',
          breadcrumb: true,
        },
      },
      {
        path: 'el-tabs',
        name: 'ElTabs',
        component: () => import('@/views/component/Base/ElTabs/index.vue'),
        meta: {
          title: 'component.base.elTabs',
          breadcrumb: true,
        },
      },
      {
        path: 'el-card',
        name: 'ElCard',
        component: () => import('@/views/component/Base/ElCard/index.vue'),
        meta: {
          title: 'component.base.elCard',
          breadcrumb: true,
        },
      },
      {
        path: 'vxe-table',
        name: 'VxeTable',
        component: () => import('@/views/component/Base/VxeTable/index.vue'),
        meta: {
          title: 'component.base.vxeTable',
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
          title: 'component.biz.vssVideoPlayer',
          breadcrumb: true,
        },
      },
      {
        path: 's3-upload',
        name: 'S3Upload',
        component: () => import('@/views/component/Biz/S3Upload/index.vue'),
        meta: {
          title: 'component.biz.s3Upload',
          breadcrumb: true,
        },
      },
      {
        path: 'svg-topology',
        name: 'SvgTopology',
        component: () => import('@/views/component/Biz/SvgTopology/index.vue'),
        meta: {
          title: 'component.biz.svgTopology',
          breadcrumb: true,
        },
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/views/component/Biz/Markdown/index.vue'),
        meta: {
          title: 'component.biz.markdown',
          breadcrumb: true,
        },
      },
      {
        path: 'markdown-book',
        name: 'MarkdownBook',
        component: () => import('@/views/component/Biz/MarkdownBook/index.vue'),
        meta: {
          title: 'component.biz.markdownBook',
          breadcrumb: true,
        },
      },
      {
        path: 'ct-log',
        name: 'CtLog',
        component: () => import('@/views/component/Biz/CtLog/index.vue'),
        meta: {
          title: 'component.biz.ctLog',
          breadcrumb: true,
        },
      },
      {
        path: 'ct-monaco',
        name: 'CtMonaco',
        component: () => import('@/views/component/Biz/CtMonaco/index.vue'),
        meta: {
          title: 'component.biz.ctMonaco',
          breadcrumb: true,
        },
      },
      {
        path: 'cuted-guide',
        name: 'CutedGuide',
        component: () => import('@/views/component/Biz/CutedGuide/index.vue'),
        meta: {
          title: 'component.biz.cutedGuide',
          breadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/component/test',
    component: Layout,
    meta: {
      title: 'component.test.title',
      alwaysShow: true,
      breadcrumb: true,
    },
    children: [
      {
        path: 'cute-layout',
        name: 'CuteLayout',
        component: () => import('@/views/component/Test/CuteLayout/index.vue'),
        meta: {
          title: 'component.test.cuteLayout',
          breadcrumb: true,
        },
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/views/component/Test/Button.vue'),
        meta: {
          title: 'component.test.button',
          breadcrumb: true,
        },
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import('@/views/component/Test/Radio.vue'),
        meta: {
          title: 'component.test.radio',
          breadcrumb: true,
        },
      },
      {
        path: 'checkbox',
        name: 'Checkbox',
        component: () => import('@/views/component/Test/Checkbox.vue'),
        meta: {
          title: 'component.test.checkbox',
          breadcrumb: true,
        },
      },
      {
        path: 'cascadeSelect',
        name: 'CascadeSelect',
        component: () => import('@/views/component/Test/CascadeSelect.vue'),
        meta: {
          title: 'component.test.cascadeSelect',
          breadcrumb: true,
        },
      },
      {
        path: 'color-picker',
        name: 'ColorPicker',
        component: () => import('@/views/component/Test/ColorPicker.vue'),
        meta: {
          title: 'component.test.colorPicker',
          breadcrumb: true,
        },
      },
      {
        path: 'collapse',
        name: 'Collapse',
        component: () => import('@/views/component/Test/Collapse.vue'),
        meta: {
          title: 'component.test.collapse',
          breadcrumb: true,
        },
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: () => import('@/views/component/Test/Dialog.vue'),
        meta: {
          title: 'component.test.dialog',
          breadcrumb: true,
        },
      },
      {
        path: 'input',
        name: 'Input',
        component: () => import('@/views/component/Test/Input.vue'),
        meta: {
          title: 'component.test.input',
          breadcrumb: true,
        },
      },
      {
        path: 'link',
        name: 'Link',
        component: () => import('@/views/component/Test/Link.vue'),
        meta: {
          title: 'component.test.link',
          breadcrumb: true,
        },
      },
      {
        path: 'message-box',
        name: 'MessageBox',
        component: () => import('@/views/component/Test/MessageBox.vue'),
        meta: {
          title: 'component.test.messageBox',
          breadcrumb: true,
        },
      },
      {
        path: 'notification',
        name: 'Notification',
        component: () => import('@/views/component/Test/Notification.vue'),
        meta: {
          title: 'component.test.notification',
          breadcrumb: true,
        },
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import('@/views/component/Test/Select.vue'),
        meta: {
          title: 'component.test.select',
          breadcrumb: true,
        },
      },
      {
        path: 'switch',
        name: 'Switch',
        component: () => import('@/views/component/Test/Switch.vue'),
        meta: {
          title: 'component.test.switch',
          breadcrumb: true,
        },
      },
      {
        path: 'drawer',
        name: 'Drawer',
        component: () => import('@/views/component/Test/Drawer.vue'),
        meta: {
          title: 'component.test.drawer',
          breadcrumb: true,
        },
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/component/Test/Upload.vue'),
        meta: {
          title: 'component.test.upload',
          breadcrumb: true,
        },
      },
      {
        path: 'slider',
        name: 'Slider',
        component: () => import('@/views/component/Test/Slider.vue'),
        meta: {
          title: 'component.test.slider',
          breadcrumb: true,
        },
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/component/Test/Table.vue'),
        meta: {
          title: 'component.test.table',
          breadcrumb: true,
        },
      },
      {
        path: 'tag',
        name: 'Tag',
        component: () => import('@/views/component/Test/Tag.vue'),
        meta: {
          title: 'component.test.tag',
          breadcrumb: true,
        },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/component/Test/Tree.vue'),
        meta: {
          title: 'component.test.tree',
          breadcrumb: true,
        },
      },
      {
        path: 'state',
        name: 'State',
        component: () => import('@/views/component/Test/State.vue'),
        meta: {
          title: 'component.test.state',
          breadcrumb: true,
        },
      },
      {
        path: 'descriptions',
        name: 'Descriptions',
        component: () => import('@/views/component/Test/Descriptions.vue'),
        meta: {
          title: 'component.test.descriptions',
          breadcrumb: true,
        },
      },
      {
        path: 'breadcrumb',
        name: 'Breadcrumb',
        component: () => import('@/views/component/Test/Breadcrumb.vue'),
        meta: {
          title: 'component.test.breadcrumb',
          breadcrumb: true,
        },
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: () => import('@/views/component/Test/Transfer.vue'),
        meta: {
          title: 'component.test.transfer',
          breadcrumb: true,
        },
      },
      {
        path: 'dropdown',
        name: 'DropDown',
        component: () => import('@/views/component/Test/DropDown.vue'),
        meta: {
          title: 'component.test.dropDown',
          breadcrumb: true,
        },
      },
      {
        path: 'rate',
        name: 'Rate',
        component: () => import('@/views/component/Test/Rate.vue'),
        meta: {
          title: 'component.test.rate',
          breadcrumb: true,
        },
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('@/views/component/Test/Alert.vue'),
        meta: {
          title: 'component.test.alert',
          breadcrumb: true,
        },
      },
      {
        path: 'pagination',
        name: 'Pagination',
        component: () => import('@/views/component/Test/Pagination.vue'),
        meta: {
          title: 'component.test.pagination',
          breadcrumb: true,
        },
      },
      {
        path: 'steps',
        name: 'Steps',
        component: () => import('@/views/component/Test/Steps.vue'),
        meta: {
          title: 'component.test.steps',
          breadcrumb: true,
        },
      },
      {
        path: 'content-area-tips',
        name: 'ContentAreaTips',
        component: () => import('@/views/component/Test/ContentAreaTips.vue'),
        meta: {
          title: 'component.test.contentAreaTips',
          breadcrumb: true,
        },
      },
      {
        path: 'loading',
        name: 'Loading',
        component: () => import('@/views/component/Test/Loading.vue'),
        meta: {
          title: 'component.test.loading',
          breadcrumb: true,
        },
      },
      {
        path: 'popover',
        name: 'Popover',
        component: () => import('@/views/component/Test/Popover.vue'),
        meta: {
          title: 'component.test.popover',
          breadcrumb: true,
        },
      },
      {
        path: 'toast',
        name: 'Toast',
        component: () => import('@/views/component/Test/Toast.vue'),
        meta: {
          title: 'component.test.toast',
          breadcrumb: true,
        },
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: () => import('@/views/component/Test/Tooltip.vue'),
        meta: {
          title: 'component.test.tooltip',
          breadcrumb: true,
        },
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/component/Test/Tabs.vue'),
        meta: {
          title: 'component.test.tabs',
          breadcrumb: true,
        },
      },
      {
        path: 'badge',
        name: 'Badge',
        component: () => import('@/views/component/Test/Badge.vue'),
        meta: {
          title: 'component.test.badge',
          breadcrumb: true,
        },
      },
      {
        path: 'progress',
        name: 'Progress',
        component: () => import('@/views/component/Test/Progress.vue'),
        meta: {
          title: 'component.test.progress',
          breadcrumb: true,
        },
      },
      {
        path: 'timeline',
        name: 'Timeline',
        component: () => import('@/views/component/Test/Timeline.vue'),
        meta: {
          title: 'component.test.timeline',
          breadcrumb: true,
        },
      },
      {
        path: 'card',
        name: 'Card',
        component: () => import('@/views/component/Test/Card.vue'),
        meta: {
          title: 'component.test.card',
          breadcrumb: true,
        },
      },
      {
        path: 'Layout',
        name: 'Layout',
        component: () => import('@/views/component/Test/Layout.vue'),
        meta: {
          title: 'component.test.layout',
          breadcrumb: true,
        },
      },
      {
        path: 'Container',
        name: 'Container',
        component: () => import('@/views/component/Test/Container.vue'),
        meta: {
          title: 'component.test.container',
          breadcrumb: true,
        },
      },
      {
        path: 'PageHeader',
        name: 'PageHeader',
        component: () => import('@/views/component/Test/PageHeader.vue'),
        meta: {
          title: 'component.test.pageHeader',
          breadcrumb: true,
        },
      },
    ],
  },
]

export default componentRoutes
