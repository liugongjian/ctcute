<!--
 * @Author: 甘雨涛
 * @Date: 2022-12-28 13:41:27
 * @LastEditors: 甘雨涛
 * @LastEditTime: 2022-12-28 20:03:27
 * @Description: sse日志组件
-->
<template>
  <div>
    <div class="component__container">
      <h1>CtLog / sse日志组件</h1>
      <component-demo path="@/views/component/Biz/CtLog/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CtLog Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CtLog Slots</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
      <h2>Others</h2>
      页面显示基本固定，渲染的数据需和后端协商，具体后端返回参数详见README.md 。
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CtLog',
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
  private slot = [
    {
      name: 'log-header',
      desc: '插入头部元素',
    },
    {
      name: 'log-footer',
      desc: '插入底部元素',
    },
    {
      name: 'btn-group',
      desc: '插入按钮组',
    },
  ]
}
</script>

<style scoped></style>
