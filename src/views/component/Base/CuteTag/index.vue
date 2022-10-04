<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTag / 带新增功能的标签组</h1>
      <component-demo path="@/views/component/Base/CuteTag/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteTag Attributes</h2>
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
      name: 'tag-name',
      desc: '标签名称',
      type: 'String',
      required: '必填',
      options: null,
      default: null,
    },
    {
      name: 'dynamic-tags',
      desc: '存放动态新增标签的数组',
      type: 'Array',
      required: '必填',
      options: null,
      default: null,
    },
    {
      name: 'tag-size',
      desc: '标签尺寸（不填即默认为普通标签大小）',
      type: 'String',
      required: '选填',
      options: 'large',
      default: '',
    },
    {
      name: 'tag-class',
      desc: '标签的自定义class',
      type: 'String',
      required: '选填',
      options: null,
      default: null,
    },
    {
      name: 'input-class',
      desc: '输入框的自定义class',
      type: 'String',
      required: '选填',
      options: null,
      default: null,
    },
  ]
}
</script>
