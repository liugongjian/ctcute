<!--
 * @Author: 赵昕
 * @Date: 2022-09-01 10:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-10-31 10:18:26
 * @Description: 此为直接覆写element-ui的组件，el-collapse原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElCollapse/ 分离式折叠面板</h1>
      <component-demo path="@/views/component/Base/Collapse/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElCollapse 说明</h2>
      <p>此为直接覆写element-ui的组件，el-collapse原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElCollapse Attributes</h2>
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
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'ElCollapse',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'seperate',
      desc: '是否显示成分离式的折叠面板',
      type: 'Boolean',
      required: '选填',
      options: 'true/false',
      default: 'false',
    },
  ]
}
</script>
