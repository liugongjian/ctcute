<!--
 * @Author: 马妍
 * @Date: 2022-07-25 17:54:37
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-16 19:03:32
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteSelectTree / 树形选择单/多选</h1>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <component-demo path="@/views/component/Base/CuteSelectTree/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>可配置树节点字段名及禁用</h1>
      <component-demo path="@/views/component/Base/CuteSelectTree/Demo2.vue">
        <demo2 />
      </component-demo>
      <h1>自定义树节点内容</h1>
      <component-demo path="@/views/component/Base/CuteSelectTree/Demo3.vue">
        <demo3 />
      </component-demo>
      <h2>CuteSelectTree Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSelectTree node-props</h2>
      <el-table :data="nodeProps" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSelectTree Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
      <h2>CuteSelectTree Scoped Slot</h2>
      <el-table :data="slots" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
    Demo3,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'v-model',
      desc: 'select绑定值',
      type: 'Array/String',
      options: null,
      default: null,
    },
    {
      name: 'value',
      desc: 'option绑定值',
      type: 'Array/String',
      options: null,
      default: null,
    },
    {
      name: 'multiple',
      desc: '是否多选',
      type: 'Boolean',
      options: null,
      default: 'true',
    },
    {
      name: 'options',
      desc: '选项列表',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'lazy',
      desc: '是否懒加载子节点，需与 load 方法结合使用',
      type: 'boolean',
      options: null,
      default: 'false',
    },
    {
      name: 'load',
      desc: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
      type: 'function(node, resolve)',
      options: null,
      default: null,
    },
    {
      name: 'node-props',
      desc: '树节点配置选项，具体看下表',
      type: 'Object',
      options: null,
      default: null,
    },
  ]

  private nodeProps = [
    {
      name: 'key',
      desc: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
      type: 'string',
      options: null,
      default: '"id"',
    },
    {
      name: 'label',
      desc: '指定节点标签为节点对象的某个属性值',
      type: 'string, function(data, node): string',
      options: null,
      default: '"label"',
    },
    {
      name: 'children',
      desc: '指定子树为节点对象的某个属性值',
      type: 'string',
      options: null,
      default: '"children"',
    },
    {
      name: 'disabled',
      desc: '指定节点选择框是否禁用为节点对象的某个属性值',
      type: 'string, function(data, node): boolean',
      options: null,
      default: '"disabled"',
    },
    {
      name: 'isLeaf',
      desc: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
      type: 'string, function(data, node): boolean',
      options: null,
      default: null,
    },
  ]

  private event = [
    // {
    //   name: 'remove-tag',
    //   desc: '多选模式下移除tag时触发（回调参数第一个为移除tag的值，第二个参数为选中所有数据的值）',
    //   callback: 'e（移除tag的值）, value（选中数据的值）',
    // },
    {
      name: 'change',
      desc: '	选中值发生变化时触发',
      callback: '目前的选中值',
    },
  ]

  private slots = [
    {
      name: 'node',
      desc: '自定义树节点的内容，参数为 { node, data }',
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px !important;
  }
}
</style>
