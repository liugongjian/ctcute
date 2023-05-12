/* * @Author: 胡一苗 * @Date: 2023-03-22 15:40:28 * @LastEditors: 胡一苗 * @LastEditTime: 2023-03-24 13:52:33
* @Description: desc */
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElBreadcrumb/ 面包屑</h1>
      <component-demo path="@/views/component/Base/ElBreadcrumb/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElBreadcrumb 说明</h2>
      <p>此为直接覆写element-ui的组件，el-breadcrumb原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElBreadcrumb Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="required" label="必/选填" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'
import Demo1 from './Demo1.vue'

@Component({
  name: 'ElBreadcrumb',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'size',
      desc: '尺寸',
      type: 'String',
      required: '选填',
      options: 'small/medium',
      default: 'medium',
    },
  ]
}
</script>
