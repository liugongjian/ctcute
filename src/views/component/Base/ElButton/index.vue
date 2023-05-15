<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-22 10:01:49
 * @LastEditors: Zhulh
 * @LastEditTime: 2023-03-22 10:17:55
 * @Description: 此为直接覆写element-ui的组件，el-button原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElButton / 支持使用Cuted的Icon</h1>
      <component-demo path="@/views/component/Base/ElButton/Demo1.vue">
        <demo1 />
      </component-demo>
      <h1>ElButton / 无边框的按钮</h1>
      <component-demo path="@/views/component/Base/ElButton/Demo2.vue">
        <demo2 />
      </component-demo>
      <h1>ElButton / 正方形按钮</h1>
      <component-demo path="@/views/component/Base/ElButton/Demo3.vue">
        <demo3 />
      </component-demo>
      <h2>ElButton 说明</h2>
      <p>此为直接覆写element-ui的组件，el-button原有的属性和事件未变，下面只列出新增/有改动的部分</p>
      <h2>ElButton Attributes</h2>
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
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'ElButton',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
    Demo3,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'icon',
      desc: '在原有的ElementUI的图标基础上，支持了Cuted的图标，可传入Cuted的图标名',
      type: 'String',
      required: '选填',
      options: '',
      default: '',
    },
    {
      name: 'border',
      desc: '是否显示按钮的边框',
      type: 'Boolean',
      required: '选填',
      options: '',
      default: 'true',
    },
    {
      name: 'square',
      desc: '是否方形按钮	',
      type: 'Boolean',
      required: '选填',
      options: '',
      default: 'false',
    },
    {
      name: 'text-type',
      desc: '文本按钮的颜色类型	',
      type: 'String',
      required: '选填',
      options: 'primary | success | warning | danger | ct | weak',
      default: 'primary',
    },
  ]
}
</script>
