<!--
 * @Author: 吴静
 * @Date: 2022-12-05 13:34:02
 * @LastEditors: 吴静
 * @LastEditTime: 2022-12-05 09:12:11
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteStepsMulti / 步骤多展示不全</h1>
      <component-demo path="@/views/component/Base/CuteSlider/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteStepsMulti Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSlider Events</h2>
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
  name: 'CuteStepsMulti',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'active',
      desc: '设置当前激活步骤',
      type: 'Number',
      options: null,
      default: 0,
    },
    {
      name: 'steps',
      desc: '步骤条内容,对象数组,可对应设置每个步骤的标题(title)、可用状态(disabled)、当前步骤的状态(status)',
      type: 'Array',
      options: `disabled(false / true); status(wait / process / finish / error / success)`,
      default: null,
    },
    {
      name: 'lastStepWidth',
      desc: '最后一个步骤的宽度',
      type: 'Number',
      options: null,
      default: 135,
    },
    {
      name: 'size',
      desc: '步骤条大小',
      type: 'String',
      options: 'normal/mini',
      default: 'normal',
    },
    {
      name: 'space',
      desc: '每个 step 的间距，不填写将自适应间距。支持百分比',
      type: 'Number / String',
      options: null,
      default: 300,
    },
    {
      name: 'maxWidth',
      desc: '整个步骤条的最大长度,百分比',
      type: 'String',
      options: null,
      default: null,
    },
    {
      name: 'stepSize',
      desc: '显示几个中间步骤',
      type: 'Number',
      options: null,
      default: 1,
    },
     {
      name: 'direction',
      desc: '显示方向',
      type: 'String',
      options: 'vertical/horizontal',
      default: 'horizontal',
    },
    {
      name: 'hasGoButton',
      desc: '是否显示前进后退按钮',
      type: 'Boolean',
      options: 'false/true',
      default: false,
    },
  ]

  private event = [
    {
      name: 'clickStep',
      desc: '点击相应步骤时触发',
      callback: '被选中的步骤实例及其index',
    },
    {
      name: 'change',
      desc: '点击前进后退按钮时触发',
      callback: '前进或后退的步数',
    },
  ]
}
</script>
<style lang="scss" scoped>
</style>
