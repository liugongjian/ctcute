<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2022-12-28 13:41:27
 * @LastEditTime: 2022-12-28 20:03:27
 * @LastEditors: 甘雨涛
-->
<template>
  <div>
    <div class="component__container">
      <h1>CtMonaco / Monaco代码编辑器</h1>
      <component-demo path="@/views/component/Biz/CtLog/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CtMonaco Attributes</h2>
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
  name: 'CtMonaco',
  components: {
    Demo1,
    ComponentDemo,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'pipeline-option',
      desc:
        '必传参数。配置项，用于设置url、参数、默认值。说明：' +
        '{ pipelineRunDetail: {url: 日志流水线详情接口, args: 接口参数对象},' +
        ' pipelineStageRunList: {url: 流水线步骤接口, args: 接口参数对象},' +
        ' pipelineLogStream: {url: sse日志接口}' +
        '}',
      type: 'object',
      options: '-',
      default: '-',
    },
    {
      name: 'preset-id',
      desc: '必传参数。流水线作业ID，请求基础信息、步骤信息和 log 日志 sse 的必要参数',
      type: 'string',
      options: '-',
      default: '-',
    },
  ]
}
</script>

<style scoped></style>
