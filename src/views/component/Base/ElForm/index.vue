<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>ElForm / tooltip样式的表单错误提示</h1>
      <component-demo path="@/views/component/Base/CuteRemindInput/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>ElAlert Attributes</h2>
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
  name: 'ElForm',
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
      options: 'bottom/top/right/left',
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
