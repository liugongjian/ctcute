<!--
 * @Author: 王亚振
 * @Date: 2022-12-06 17:56:09
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-03-24 11:53:52
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CuteState / 状态</h1>
      <component-demo path="@/views/component/Base/CuteState/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteState Attributes</h2>
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
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'
import Demo1 from './Demo1.vue'

@Component({
  name: 'CuteStateDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'type',
      desc: '类型',
      type: 'String',
      required: '选填',
      options: 'info/success/warning/danger/fatal/master',
      default: 'info',
    },
    {
      name: 'color',
      desc: '颜色',
      type: 'String',
      required: '选填',
      options: null,
      default: null,
    },
    {
      name: 'icon',
      desc: '图标',
      type: 'String',
      required: '选填',
      options: null,
      default: null,
    },
    {
      name: 'loading',
      desc: '是否加载中',
      type: 'Boolean',
      required: '选填',
      options: 'true/false',
      default: 'false',
    },
  ]
}
</script>
