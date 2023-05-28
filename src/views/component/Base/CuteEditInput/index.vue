<!--
 * @Author: 刘功坚
 * @Date: 2022-07-21 10:56:09
 * @LastEditors: 刘功坚
 * @LastEditTime: 2023-04-21 11:10:10
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CuteEditInput / 可编辑按钮</h1>
      <component-demo path="@/views/component/Base/CuteEditInput/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteEditInput Attributes</h2>
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
  name: 'CuteTitledBlockDemo',
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
      type: 'String',
      required: '必填',
      options: null,
      default: null,
    },
    {
      name: 'edit-input-save',
      desc: '点确定按钮时 emit 事件',
      type: 'callback',
      required: '选填',
      options: null,
      default: null,
    },
    {
      name: 'size',
      desc: '同el-input的size参数',
      type: 'String',
      required: '选填',
      options: 'large/medium/small/mini',
      default: 'medium',
    },
  ]
}
</script>
