<!--
 * @Author: 马妍
 * @Date: 2022-07-25 17:54:37
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-28 10:35:59
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
      <h2>CuteSelectTree Attributes</h2>
      <el-table :data="prop" fit border>
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
  ]

  private event = [
    {
      name: 'remove-tag',
      desc: '多选模式下移除tag时触发（回调参数第一个为移除tag的值，第二个参数为选中所有数据的值）',
      callback: 'e（移除tag的值）, value（选中数据的值）',
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
</style>
