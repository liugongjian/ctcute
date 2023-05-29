<!--
 * @Author: 徐忠勇
 * @Date: 2023-02-07 14:28:24
 * @LastEditors: 徐忠勇
 * @LastEditTime: 2023-02-07 15:35:00
 * @Description: 自研的svg拓扑图组件
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>SvgTopology 引力斥力布局</h1>
      <component-demo path="@/views/component/Biz/SvgTopology/Demo.vue">
        <demo />
      </component-demo>

      <h1>SvgTopology 脑图布局</h1>
      <component-demo path="@/views/component/Biz/SvgTopology/Demo1.vue">
        <demo1 />
      </component-demo>

      <h1>SvgTopology 组织架构</h1>
      <component-demo path="@/views/component/Biz/SvgTopology/Demo2.vue">
        <demo2 />
      </component-demo>
      <h2>SvgTopology Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值"
      /></el-table>
      <h2>SvgTopology Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数"
      /></el-table>
      <h2>SvgTopology Slots</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="scope" label="作用域插槽参数"
      /></el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo from './Demo.vue'
import Demo1 from './Demo1.vue'
import Demo2 from './Demo2.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

type EventItem = {
  name: string
  desc: string
  callback: string
}
type SlotItem = {
  name: string
  desc: string
  scope: string
}

@Component({
  name: 'CuteXXX',
  components: {
    ComponentDemo,
    Demo,
    Demo1,
    Demo2,
  },
})
export default class extends Vue {
  prop = [
    {
      name: 'node',
      desc: '节点数组',
      type: 'NodeItem',
      options: '必填',
      default: null,
    },
    {
      name: 'links',
      desc: '节点连线数组',
      type: 'LinkItem',
      options: '必填',
      default: null,
    },
    {
      name: 'width',
      desc: '画布宽度',
      type: 'Number',
      options: '选填',
      default: '窗口宽度window.innerWidth',
    },
    {
      name: 'height',
      desc: '画布高度',
      type: 'Number',
      options: '选填',
      default: 800,
    },
    {
      name: 'layout',
      desc: '布局类型，mindmap是脑图类型树状结构，forcedGraph是引力斥力布',
      type: 'mindmap',
      options: 'mindmap 或者 forcedGraph',
      default: 'mindmap',
    },
    {
      name: 'defs',
      desc: 'svg的group类型是否使用defs',
      type: 'Boolean',
      options: '选填',
      default: 'true',
    },
    {
      name: 'graphStyle',
      desc: '图表样式',
      type: 'type GraphStyle = { canvasPadding: number;}',
      options: '选填',
      default: '{}',
    },
  ]

  event: EventItem[] = [
    {
      name: 'layout-change',
      desc: '布局完成时触发事件',
      callback: '{nodes: 所有原始节点数据以及坐标数据的数组; canvasWidth: 画布宽度; canvasHeight: 画布高度}',
    },
    {
      name: 'layout-tick',
      desc: '引力斥力布局时需要多次拟合，每次拟合会实时更新布局，触发事件',
      callback: '参数与layout-change的参数一致',
    },
    {
      name: 'add-link',
      desc: '增加节点间连线时的回调',
      callback: 'fromId, toId',
    },
    {
      name: 'select-node',
      desc: '选中某个节点时的回调',
      callback: '所有选中节点的数据数组。节点数据包括原始数据，以及坐标等数据。没有节点选择时，返回为空',
    },
    {
      name: 'select-path',
      desc: '选中某个连线时的回调',
      callback:
        '{path: svg路径d数据; id: 路径的id，如果原始数据有则使用原始数据，如果原始数据没有则使用规则生成; data: 路径的原始数据}',
    },
  ]

  slot: SlotItem[] = [
    {
      name: 'graph-dom-root',
      desc: '整个图的dom节点拓展插槽',
      scope: `{parentScope:{
        layoutOutput: 布局完成时的数据,
        view: 画布dom节点,
        domRefs: 几个可能需要的画布内的dom或者组件索引,
        width: 宽度,
        height: 高度,
        layoutChangeCount: tick更新标记,
        layoutDoneCount: 布局更新标记
      }, injectModel: 内部状态, injectModelFunc: 修改内部状态的方法}`,
    },
    {
      name: 'graph-svg-front',
      desc: '整个图的svg上层',
      scope: '同graph-dom-root',
    },
    {
      name: 'graph-svg-back',
      desc: '整个图的svg下层',
      scope: '同graph-dom-root',
    },
    {
      name: 'node-${node.id}',
      desc: '每个节点的插槽，可以通过不同的id指定不同的节点',
      scope: '节点所有数据，包括原始数据，以及坐标数据等',
    },
  ]
}
</script>
