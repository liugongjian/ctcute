<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:30
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-11-03 21:06:33
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteSortTable / 可移动排序的表格</h1>
      <p>可移动排序的表格</p>
      <component-demo path="@/views/component/Base/CuteSortTable/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteSortTable Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSortTable Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSortTable',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'tableData',
      desc: '显示的数据',
      type: 'array',
      options: null,
      default: null,
    },
    {
      name: 'loading',
      desc: '是否加载中',
      type: 'boolean',
      options: null,
      default: null,
    },
    {
      name: 'tableColumns',
      desc: '数据列',
      type: 'Object',
      options: null,
      default: null,
    },
  ]

  private event = [
    {
      name: 'sort',
      desc: '当用户拖拽数据行时触发的排序事件	',
      callback: '{newIndex, oldIndex}',
    },
  ]
}
</script>
<style lang="scss" scoped></style>
