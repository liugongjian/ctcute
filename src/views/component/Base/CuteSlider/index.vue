<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteSlider / 滑动输入条</h1>
      <component-demo path="@/views/component/Base/CuteSlider/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteSlider Attributes</h2>
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
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'min',
      desc: '最小值',
      type: 'Number',
      options: null,
      default: 0,
    },
    {
      name: 'max',
      desc: '最大值',
      type: 'Number',
      options: null,
      default: 100,
    },
    {
      name: 'disabled',
      desc: '是否禁用',
      type: 'Boolean',
      options: null,
      default: 'false',
    },
    {
      name: 'range',
      desc: '是否是双滑块',
      type: 'Boolean',
      options: null,
      default: 'true',
    },
    {
      name: 'marks',
      desc: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内',
      type: 'Object',
      options: null,
      default: null,
    },
    {
      name: 'unit',
      desc: '单位',
      type: 'String',
      options: null,
      default: null,
    },
  ]

  private event = [
    {
      name: 'moveChange',
      desc: '滑动条滑动时触发',
      callback: '滑动条当前值',
    },
    {
      name: 'inputChange',
      desc: 'input输入框改变时触发',
      callback: 'input框当前值',
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
