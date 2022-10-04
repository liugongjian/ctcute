<!--
 * @Author: 马妍
 * @Date: 2022-07-25 14:18:26
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-25 17:26:37
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteRemindInput / 带提示选择器</h1>
      <component-demo path="@/views/component/Base/CuteRemindInput/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteRemindInput Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
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
  name: 'CuteRemindInput',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'v-model',
      desc: '绑定值',
      type: 'string | number | boolean',
      options: null,
      default: null,
    },
    {
      name: 'options',
      desc: '选项列表',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'title',
      desc: '标题',
      type: 'string',
      options: null,
      default: null,
    },
    {
      name: 'placeholder',
      desc: '占位内容',
      type: 'string',
      options: null,
      default: null,
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-input {
    width: 300px;
  }
}
</style>
