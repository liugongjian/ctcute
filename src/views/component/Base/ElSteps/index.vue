<!--
 * @Author: 黄靖
 * @Date: 2023-03-31 15:30:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-31 15:30:49
 * @Description: 此为直接覆写element-ui的组件，el-steps原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElSteps / 尺寸</h1>
      <component-demo path="@/views/component/Base/ElSteps/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElSteps 说明</h2>
      <p>此为直接覆写element-ui的组件，el-steps原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElSteps Attributes</h2>
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
  name: 'ElSteps',
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
      type: 'string',
      required: '选填',
      options: 'medium/small',
      default: 'medium',
    },
  ]
}
</script>
