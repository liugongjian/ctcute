<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2023/4/26 14:50
 * @LastEditors: 黄靖
-->
<!--
 * @Author: 甘雨涛
 * @Date: 2023-04-26 14:50:32
 * @LastEditors: 甘雨涛
 * @LastEditTime: 2023-04-26 14:50:32
 * @Description: 支持不同类型的表单错误提示
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElFormItem / tooltip样式的表单错误提示</h1>
      <component-demo path="@/views/component/Base/ElFormItem/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElFormItem Attributes</h2>
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
  name: 'ElFormItem',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  prop = [
    {
      name: 'errorShowType',
      desc: '表单错误提示样式类型',
      type: 'String',
      required: '选填',
      options: 'tooltip/inline',
      default: 'inline',
    },
    {
      name: 'placement',
      desc: '当类型为tooltip时，提示位置',
      type: 'String',
      required: '选填',
      options:
        'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
      default: 'bottom',
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
