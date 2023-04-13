<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:56:09
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-13 10:41:46
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CuteButtonGroup / 按钮组</h1>
      <component-demo path="@/views/component/Base/CuteButtonGroup/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteButtonGroup Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteButtonGroup Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTitledBlockDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'data',
      desc: '按钮名称数组',
      type: 'Array<String>',
      required: '选填',
      options: '[{ label: "操作一", name: "op1"}]',
      default: null,
    },
    {
      name: 'main',
      desc: '主操作按钮',
      type: 'Object',
      required: '选填',
      options: '{ label: "主操作", name: "op-main"}',
      default: 'null',
    },
    {
      name: 'max',
      desc: '最大展现按钮数',
      type: 'number',
      required: '选填',
      options: null,
      default: null,
    },
  ]
  private event = [{ name: 'change', desc: '点击操作时触发', callback: '选中项' }]
}
</script>
