<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:30
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2023-04-11 15:57:14
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
      <!-- <h2>说明:</h2>
      <h3>Table Attributes以及Table Events的使用: 直接透传</h3>
      <h3>Table-column Attributes的使用: 通过tableColumns的props属性进行透传</h3>
      <h3>
        Table Methods的使用: 先获取table的实例,然后调用table方法 如const e = this.tableRef.$refs.table as
        ElTable; e.clearSelection()
      </h3> -->
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
      name: 'handle',
      desc: '可拖动的部分, 只能拖动指定的类',
      type: 'string',
      options: null,
      default: null,
    },
    {
      name: 'animate',
      desc: '指定动画速度(ms)',
      type: 'number',
      options: null,
      default: 100,
    },
  ]
}
</script>
<style lang="scss" scoped></style>
