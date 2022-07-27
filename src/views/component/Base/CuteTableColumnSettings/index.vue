<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTableColumnSettings / 带列设置的表格</h1>
      <component-demo path="@/views/component/Base/CuteTableColumnSettings/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteTableColumnSettings Attributes</h2>
      <el-table :data="prop" fit border default-expand-all row-key="name"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>

      <h2>CuteTableColumnSettings Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTableColumnSettings',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'data',
      desc: '数据',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'pager',
      desc: '分页设置',
      type: 'Object',
      options: null,
      default: null,
      children: [
        {
          name: 'page',
          desc: '当前页数',
          type: 'number',
          options: null,
          default: null,
        },
        {
          name: 'limit',
          desc: '每页显示条目个数',
          type: 'number',
          options: null,
          default: null,
        },
        {
          name: 'total',
          desc: '总条目数',
          type: 'number',
          options: null,
          default: null,
        },
      ],
    },
    {
      name: 'allOptions',
      desc: '全部字段',
      type: 'Array',
      options: null,
      default: null,
      children: [
        {
          name: 'label',
          desc: '表格标签',
          type: 'string',
          options: null,
          default: null,
        },
        {
          name: 'prop',
          desc: '数据渲染对应key值',
          type: 'string',
          options: null,
          default: null,
        },
      ],
    },
    {
      name: 'selectedOptions',
      desc: '默认选择字段',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'disabledOptions',
      desc: '禁止选择字段',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'className',
      desc: '命名空间',
      type: 'string',
      options: null,
      default: null,
    },
  ]

  private event = [
    {
      name: 'handleSizeChangeEmit',
      desc: 'pageSize 改变时会触发',
      callback: '每页条数',
    },
    {
      name: 'handleCurrentChangeEmit',
      desc: 'currentPage 改变时会触发',
      callback: '当前页',
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
</style>
