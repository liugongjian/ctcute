<!--
 * @Author: 朱凌浩
 * @Date: 2023-01-11 14:18:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-01-11 14:18:32
 * @Description: 此为直接覆写element-ui的组件，el-color-picker原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElColorPicker/ 预定义颜色</h1>
      <component-demo path="@/views/component/Base/ElColorPicker/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElColorPicker 说明</h2>
      <p>此为直接覆写element-ui的组件，el-color-picker原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElColorPicker Attributes</h2>
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
  name: 'ElColorPicker',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'type',
      desc: '显示风格类型，可以只显示与定义颜色选择栏',
      type: 'String',
      required: '选填',
      options: 'default/predefine',
      default: 'default',
    },
  ]
}
</script>
