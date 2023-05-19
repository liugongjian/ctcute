<!--
 * @Author: 朱凌浩
 * @Date: 2023-05-16 10:01:49
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-16 10:01:49
 * @Description: 表单项提示
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteFormInfo / 表单项提示</h1>
      <component-demo path="@/views/component/Base/CuteFormInfo/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteFormInfo Attributes</h2>
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
  name: 'CuteTag',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'effect',
      desc: 'Tooltip配色',
      type: 'String',
      required: '',
      options: 'dark | light',
      default: 'dark',
    },
    {
      name: 'width',
      desc: 'Tooltip宽度',
      type: 'Number',
      required: '',
      options: null,
      default: null,
    },
    {
      name: 'title',
      desc: '提示标题',
      type: 'String',
      required: '',
      options: null,
      default: null,
    },
    {
      name: 'content',
      desc: '提示内容',
      type: 'String',
      required: '',
      options: null,
      default: null,
    },
  ]
}
</script>
