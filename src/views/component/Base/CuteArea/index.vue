<!--
 * @Author: 万安沛
 * @Date: 2022-08-25 17:54:37
 * @LastEditors: 万安沛
 * @LastEditTime: 2022-08-25 18:11:55
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteArea / 地区选择多列展示</h1>
      <component-demo path="@/views/component/Base/CuteArea/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>CuteArea / 地区选择可清空</h1>
      <component-demo path="@/views/component/Base/CuteArea/Demo2.vue">
        <demo2 />
      </component-demo>
      <h2>CuteArea Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteArea Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
      <h2>CuteArea Slots</h2>
      <el-table :data="slot" fit border>
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
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'v-model',
      desc: 'select绑定值',
      type: 'String',
      options: null,
      default: null,
    },
    {
      name: 'column',
      desc: '设置几列展示，默认为4，最小可设为2',
      type: 'Number',
      options: null,
      default: 4,
    },
    {
      name: 'clearable',
      desc: '是否可以清空选项',
      type: 'boolean',
      options: '—',
      default: 'false',
    },
    {
      name: 'popper-width',
      desc: '弹窗宽度',
      type: 'String',
      options: null,
      default: null,
    },
    {
      name: 'popper-max-height',
      desc: '弹窗最大高度',
      type: 'String',
      options: null,
      default: null,
    },
    {
      name: 'data',
      desc: '列表数据',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'value-key',
      desc: '可以指定选项的键名作为实际取值的key',
      type: 'String',
      options: null,
      default: 'value',
    },
    {
      name: 'format',
      desc: '展示格式化函数，参数为单条数据项',
      type: 'Function',
      options: null,
      default: null,
    },
    {
      name: 'rencent-data',
      desc: '最近访问列表',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'show-recent',
      desc: '是否显示最近访问列表',
      type: 'Boolean',
      options: null,
      default: 'false',
    },
  ]

  private event = [
    {
      name: 'change',
      desc: '选中值发生变化时触发',
      callback: '目前的选中值',
    },
    {
      name: 'clear',
      desc: '可清空模式下用户点击清空按钮时触发',
      callback: '—',
    },
  ]

  private slot = [
    {
      name: 'prefix',
      desc: '组件前缀内容',
    },
    {
      name: 'other',
      desc: '额外展示其他内容',
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
