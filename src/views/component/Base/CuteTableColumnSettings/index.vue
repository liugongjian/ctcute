<!--
 * @Author: 胡永凯
 * @Date: 2022-09-01 10:01:49
 * @LastEditors: 胡永凯
 * @LastEditTime: 2022-09-01 10:06:01
 * @Description:
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTableColumnSettings / 带列设置的表格</h1>
      <component-demo path="@/views/component/Base/CuteTableColumnSettings/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteTableColumnSettings Attributes</h2>
      <el-table
        :data="prop"
        fit
        border
        default-expand-all
        row-key="name"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>

      <h3>说明</h3>
      <h4>
        《cute-table-column-settings》组件可以透传原有的 el-table 上的props, 使用方式和原有的el-table方式相同
      </h4>
      <h4>tableColumns 属性对象中的 props 参数可以透传原有的 el-table-column 上的 props</h4>

      <h2>CuteTableColumnSettings Events</h2>
      <el-table fit border>
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
      name: 'tableData',
      desc: '表格数据',
      type: 'Array',
      options: null,
    },
    {
      name: 'tableColumns',
      desc: '列字段',
      type: 'Array',
      options: null,
      default: null,
      children: [
        {
          name: 'label',
          desc: '显示的标题',
          type: 'string',
          options: null,
          default: null,
        },
        {
          name: 'prop',
          desc: '对应列内容的字段名',
          type: 'string',
          options: null,
          default: null,
        },
        {
          name: 'isSelected',
          desc: '展示该字段',
          type: 'boolean',
          options: 'true, false',
          default: false,
        },
        {
          name: 'slot',
          desc: '具名插槽名称，与自己提供的插槽名称对应',
          type: 'string',
          options: null,
          default: null,
        },
        {
          name: 'isDisabled',
          desc: '禁止设置该字段',
          type: 'boolean',
          options: null,
          default: null,
        },
        {
          name: 'props',
          desc: '用于透传 el-table-column 属性',
          type: 'object',
          options: '',
          default: '',
        },
      ],
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
