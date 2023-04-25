<!--
 * @Author: 胡佳婷
 * @Date: 2023-04-10 06:51:22
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-22 10:02:15
 * @Description: 图表组件说明
-->

<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteChart / 图表组件</h1>
      <component-demo path="@/views/component/Base/CuteChart/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteChart Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
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
  name: 'CuteChartDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'option',
      desc: 'echarts配置项',
      type: 'Object',
      options: null,
      default: null,
    },
    {
      name: 'title',
      desc: '标题',
      type: 'String',
      options: null,
      default: '--',
    },
    {
      name: 'width',
      desc: '图表宽度',
      type: 'String',
      options: null,
      default: '300px',
    },
    {
      name: 'height',
      desc: '图表高度',
      type: 'String',
      options: null,
      default: '200px',
    },
    {
      name: 'theme',
      desc: 'echarts主题',
      type: 'String',
      options: 'cuted-light, cuted-dark, echarts内置的theme',
      default: 'cuted-light',
    },
  ]
}
</script>
