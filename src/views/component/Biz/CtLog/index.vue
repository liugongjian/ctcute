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
        <el-table-column prop="options" label="可选值">
          <template slot-scope="{ row }">
            <div v-html="row.options"></div>
          </template>
        </el-table-column>
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

@Component({
  name: 'CtLog',
  components: {
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'pipeline-option',
      desc: '必传参数。配置项，用于设置url、参数、默认值',
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
