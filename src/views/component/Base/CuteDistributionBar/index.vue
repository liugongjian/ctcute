<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-28 16:09:56
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteDistributionBar / 资源全部分配</h1>
      <component-demo path="@/views/component/Base/CuteDistributionBar/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>CuteDistributionBar / 不展示具体数值，只展示百分比</h1>
      <component-demo path="@/views/component/Base/CuteDistributionBar/Demo2.vue">
        <demo2 />
      </component-demo>
      <h1>CuteDistributionBar / 资源自由分配</h1>
      <component-demo path="@/views/component/Base/CuteDistributionBar/Demo3.vue">
        <demo3 />
      </component-demo>
      <h2>CuteDistributionBar Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteDistributionBar Props</h2>
      <el-table :data="dataProps" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteDistributionBar Methods</h2>
      <el-table :data="method" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="param" label="参数" />
      </el-table>
      <h2>CuteDistributionBar Events</h2>
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
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteDistributionBarDemo',
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
      name: 'data',
      desc: '展示数据,对象数组。最多支持8组数据的展示，超出10组不适用此组件，请选择其它合适的展示组件',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'props',
      desc: '配置选项，具体看下表',
      type: 'Object',
    },
    {
      name: 'mode',
      desc: '分配模式。fixed模式会将资源全部分配完，free模式可以进行资源自由分配',
      type: 'String',
      options: 'fixed / free',
      default: 'fixed',
    },
    {
      name: 'max',
      desc: '最大值',
      type: 'Number',
    },
    {
      name: 'ratePrecision',
      desc: '百分比展示精度',
      type: 'Number',
      default: 0,
    },
    {
      name: 'showValue',
      desc: '是否展示具体数值',
      type: 'Boolean',
      default: 'true',
    },
    {
      name: 'colors',
      desc: '对应数据项复选框和分配条颜色配置',
      type: 'Array',
    },
    {
      name: 'rowNumber',
      desc: '设定一行排列几个选项。默认值是auto，一行排完，自动换行',
      type: 'Number / String',
      default: 'auto',
    },
  ]
  private dataProps = [
    {
      name: 'name',
      desc: '内容的标题',
      type: 'String',
    },
    {
      name: 'code',
      desc: '唯一标识',
      type: 'Number / String',
    },
    {
      name: 'checked',
      desc: '选中状态',
      type: 'Boolean',
      options: 'false / true',
    },
    {
      name: 'value',
      desc: '默认值',
      type: 'Number',
    },
  ]
  private method = [
    {
      name: 'getCheckedData',
      desc: '返回目前被选中的数据项组成的数组',
    },
    {
      name: 'getAllData',
      desc: '返回所有数据项组成的数组',
    },
    {
      name: 'setCheckByCode',
      desc: '设置某一项选中',
      param: '(code, checked) 接收两个参数，1. 数据项标识 code 2. 是否选中 true/false, 默认值为true',
    },
    {
      name: 'setValueByCode',
      desc: '设置某一项数值。tip：当只有一个数据项的时候，fixed模式会自动将数据项填满到100%',
      param: '(code, value) 接收两个参数，1. 数据项标识 code 2. 数值, 默认值为0',
    },
  ]
  private event = [
    {
      name: 'change',
      desc: '改变复选框和数值时触发',
      callback: '所有选中的数据项数组',
    },
  ]
}
</script>
