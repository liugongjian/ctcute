<!--
 * @Author: zhulh
 * @Date: 2022-09-22 17:54:37
 * @LastEditors: zhulh
 * @LastEditTime: 2022-10-05 10:07:24
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CutedGuide / 引导组件</h1>
      <component-demo path="@/views/component/Biz/VssVideoPlayer/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>Guide Options Attributes</h2>
      <el-table :data="optionsProp" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>Guide steps Attribute</h2>
      <el-table :data="stepsProp" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>Guide steps popover Attribute</h2>
      <el-table :data="popoverProp" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>Guide Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
      <h2>StartModal Attribute</h2>
      <el-table :data="startModalProp" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>StartModal productList Attribute</h2>
      <el-table :data="startModalProductListProp" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>FinishModal Attribute</h2>
      <el-table :data="finishModalProp" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>FinishModal stepList Attribute</h2>
      <el-table :data="finishModalStepListProp" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>FinishModal productList Attribute</h2>
      <el-table :data="finishModalProductListProp" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private optionsProp = [
    {
      name: 'className',
      desc: 'className来包装弹出窗口',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'opacity',
      desc: '背景不透明度(0表示只有弹出窗口，没有覆盖)',
      type: 'Number',
      options: '',
      default: '0.2',
    },
    {
      name: 'padding',
      desc: '元素到周围边缘的距离 支持数组格式必须为[x, x, x, x]',
      type: 'Number | Array',
      options: '',
      default: 5,
    },
    {
      name: 'showButtons',
      desc: '是否展示操作按钮',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
    {
      name: 'allowClose',
      desc: '点击遮罩是否关闭流程',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: '更多',
      desc: '更多参数请查看driver.js（https://github.com/kamranahmedse/driver.js）',
      type: '',
      options: '',
      default: '',
    },
  ]

  private stepsProp = [
    {
      name: 'element',
      desc: '聚焦元素id名或className',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'padding',
      desc: '元素到周围边缘的距离 支持数组格式必须为[x, x, x, x]',
      type: 'Number | Array',
      options: '',
      default: 5,
    },
    {
      name: 'stageBackground',
      desc: '聚焦元素高亮背景色支持rgba',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'toReplayUrl',
      desc: '重新体验按钮点击跳转地址, 配合showReplayBtn为true使用',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'popover',
      desc: '查看Guide steps popover Attribute',
      type: '',
      options: '',
      default: null,
    },
  ]

  private popoverProp = [
    {
      name: 'modelName',
      desc: '模块名称(标题)',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'totalSteps',
      desc: '模块步骤数',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'currentStep',
      desc: '模块当前步骤',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'descriptionTitle',
      desc: '内容区描述标题',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'descriptionDetails',
      desc: '内容区描述文案',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'disable',
      desc: '是否禁止按钮点击（配合模块自动演示使用）',
      type: 'Boolean',
      options: '',
      default: false,
    },
    {
      name: 'showReplayBtn',
      desc: '是否显示重新体验按钮',
      type: 'Boolean',
      options: '',
      default: false,
    },
    {
      name: 'onNext',
      desc: '点击下一步回调',
      type: 'Function',
      options: '',
      default: '() => {}',
    },
    {
      name: 'onHighlighted',
      desc: '步骤显示时回调',
      type: 'Function',
      options: '',
      default: '() => {}',
    },
  ]

  private event = [
    {
      name: 'getCtx',
      desc: '获取Driver对象',
      params: '',
    },
  ]

  private startModalProp = [
    {
      name: 'visible',
      desc: '控制窗口显隐',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: 'width',
      desc: '窗口宽度支持传百分比',
      type: 'String',
      options: '',
      default: '760px',
    },
    {
      name: 'title',
      desc: '标题',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'description',
      desc: '描述',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'productList',
      desc: '涉及产品列表',
      type: 'Array',
      options: '',
      default: '查看StartModal productList Attribute',
    },
    {
      name: 'stepList',
      desc: '流程步骤列表(只传步骤名称)',
      type: 'Array',
      options: '',
      default: null,
    },
    {
      name: 'gatherList',
      desc: '展示"你将收获"模块文案',
      type: 'Array',
      options: '',
      default: null,
    },
    {
      name: 'toUrl',
      desc: '底部按钮跳转地址',
      type: 'String',
      options: '',
      default: null,
    },
  ]
  private startModalProductListProp = [
    {
      name: 'icon',
      desc: '产品图标，同原生',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'size',
      desc: '产品图标大小	',
      type: 'Number',
      options: '',
      default: '20',
    },
    {
      name: 'title',
      desc: '产品名称',
      type: 'String',
      options: '',
      default: '',
    },
  ]

  private finishModalProp = [
    {
      name: 'visible',
      desc: '控制窗口显隐',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: 'width',
      desc: '窗口宽度支持传百分比',
      type: 'String',
      options: '',
      default: '760px',
    },
    {
      name: 'productList',
      desc: '涉及产品列表',
      type: 'Array',
      options: '',
      default: '查看FinishModal productList Attribute',
    },
    {
      name: 'stepList',
      desc: '流程步骤列表',
      type: 'Array',
      options: '',
      default: '查看FinishModal stepList Attribute',
    },
    {
      name: 'backUrl',
      desc: '底部左侧按钮跳转地址',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'toUrl',
      desc: '底部右侧按钮跳转地址',
      type: 'String',
      options: '',
      default: null,
    },
  ]
  private finishModalProductListProp = [
    {
      name: 'icon',
      desc: '产品图标，同原生',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'size',
      desc: '产品图标大小	',
      type: 'Number',
      options: '',
      default: '20',
    },
    {
      name: 'title',
      desc: '产品名称',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'status',
      desc: '产品发布状态',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'link',
      desc: '点击产品名称跳转地址',
      type: 'String',
      options: '',
      default: '',
    },
  ]

  private finishModalStepListProp = [
    {
      name: 'title',
      desc: '步骤名称',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'link',
      desc: '点击步骤名称跳转地址',
      type: 'String',
      options: '',
      default: '',
    },
  ]
}
</script>
