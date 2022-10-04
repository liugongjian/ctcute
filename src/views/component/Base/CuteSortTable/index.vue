<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:30
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-16 10:20:10
 * @Description: 
-->
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteSortTable / 可移动排序的表格</h1>
      <p>可移动排序的表格</p>
      <component-demo path="@/views/component/Base/CuteSortTable/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteSortTable Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSortTable Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSortTable',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'data',
      desc: '显示的数据',
      type: 'array',
      options: null,
      default: null,
    },
    {
      name: 'height',
      desc: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
      type: 'string/number',
      options: null,
      default: null,
    },
    {
      name: 'max-height',
      desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
      type: 'string/number',
      options: null,
      default: null,
    },
    {
      name: 'stripe',
      desc: '是否为斑马纹 table',
      type: 'boolean',
      options: null,
      default: false,
    },
    {
      name: 'border',
      desc: '是否带有纵向边框',
      type: 'boolean',
      options: null,
      default: false,
    },
    {
      name: 'size',
      desc: 'Table 的尺寸',
      type: 'string',
      options: 'medium / small / mini',
      default: false,
    },
    {
      name: 'fit',
      desc: '列的宽度是否自撑开',
      type: 'boolean',
      options: null,
      default: true,
    },
    {
      name: 'header',
      desc: '是否显示表头',
      type: 'boolean',
      options: null,
      default: true,
    },
    {
      name: 'highlight-current-row',
      desc: '是否要高亮当前行',
      type: 'boolean',
      options: null,
      default: false,
    },
    {
      name: 'current-row-key',
      desc: '当前行的 key，只写属性',
      type: 'String,Number',
      options: null,
      default: null,
    },
    {
      name: 'row-class-name',
      desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
      type: 'Function({row, rowIndex})/String',
      options: null,
      default: null,
    },
    {
      name: 'row-style',
      desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
      type: 'Function({row, rowIndex})/Object',
      options: null,
      default: null,
    },
    {
      name: 'cell-class-name',
      desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
      type: 'Function({row, column, rowIndex, columnIndex})/String',
      options: null,
      default: null,
    },
    {
      name: 'cell-style',
      desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
      type: 'Function({row, column, rowIndex, columnIndex})/Object',
      options: null,
      default: null,
    },
    {
      name: 'header-row-class-name',
      desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
      type: 'Function({row, rowIndex})/String',
      options: null,
      default: null,
    },
    {
      name: 'header-row-style',
      desc: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
      type: 'Function({row, rowIndex})/Object',
      options: null,
      default: null,
    },
    {
      name: 'header-cell-class-name',
      desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
      type: 'Function({row, column, rowIndex, columnIndex})/String',
      options: null,
      default: null,
    },
    {
      name: 'header-cell-style',
      desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
      type: 'Function({row, column, rowIndex, columnIndex})/Object',
      options: null,
      default: null,
    },
    {
      name: 'row-key',
      desc: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
      type: 'Function(row)/String',
      options: null,
      default: null,
    },
    {
      name: 'empty-text',
      desc: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
      type: 'String',
      options: null,
      default: '暂无数据',
    },
    {
      name: 'default-expand-all',
      desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
      type: 'Boolean',
      options: null,
      default: false,
    },
    {
      name: 'expand-row-keys',
      desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
      type: 'Array',
      options: null,
      default: false,
    },
    {
      name: 'default-sort',
      desc: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
      type: 'Object',
      options: 'order: ascending, descending',
      default: '如果只指定了prop, 没有指定order, 则默认顺序是ascending',
    },
    {
      name: 'tooltip-effect',
      desc: 'tooltip effect 属性',
      type: 'String',
      options: null,
      default: null,
    },
    {
      name: 'show-summary',
      desc: '是否在表尾显示合计行',
      type: 'Boolean',
      options: null,
      default: false,
    },
    {
      name: 'sum-text',
      desc: '合计行第一列的文本',
      type: 'String',
      options: null,
      default: '合计',
    },
    {
      name: 'summary-method',
      desc: '自定义的合计计算方法',
      type: 'Function({ columns, data })	',
      options: null,
      default: null,
    },
    {
      name: 'span-method',
      desc: '合并行或列的计算方法',
      type: 'Function({ row, column, rowIndex, columnIndex })',
      options: null,
      default: null,
    },
    {
      name: 'select-on-indeterminate',
      desc: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
      type: 'Boolean',
      options: null,
      default: true,
    },
    {
      name: 'indent',
      desc: '展示树形数据时，树节点的缩进',
      type: 'Number',
      options: null,
      default: 16,
    },
    {
      name: 'lazy',
      desc: '是否懒加载子节点数据',
      type: 'Boolean',
      options: null,
      default: null,
    },
    {
      name: 'load',
      desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息',
      type: 'Function(row, treeNode, resolve)',
      options: null,
      default: null,
    },
    {
      name: 'tree-props',
      desc: '渲染嵌套数据的配置选项	',
      type: 'Object',
      options: null,
      default: null,
    },
  ]

  private event = [
    {
      name: 'select',
      desc: '当用户手动勾选数据行的 Checkbox 时触发的事件	',
      callback: 'selection, row',
    },
    {
      name: 'select-all',
      desc: '当用户手动勾选全选 Checkbox 时触发的事件	',
      callback: 'selection',
    },
    {
      name: 'selection-change',
      desc: '当选择项发生变化时会触发该事件 ',
      callback: 'selection',
    },
    {
      name: 'cell-mouse-enter',
      desc: '当单元格 hover 进入时会触发该事件 ',
      callback: 'row, column, cell, event',
    },
    {
      name: 'cell-mouse-leave',
      desc: '当单元格 hover 退出时会触发该事件 ',
      callback: 'row, column, cell, event',
    },
    {
      name: 'cell-click',
      desc: '当某个单元格被点击时会触发该事件 ',
      callback: 'row, column, cell, event',
    },
    {
      name: 'cell-dblclick',
      desc: '当某个单元格被双击击时会触发该事件 ',
      callback: 'row, column, cell, event',
    },
    {
      name: 'row-click',
      desc: '当某一行被点击时会触发该事件 ',
      callback: 'row, column, event',
    },
    {
      name: 'row-contextmenu',
      desc: '当某一行被鼠标右键点击时会触发该事件 ',
      callback: 'row, column, event',
    },
    {
      name: 'row-dblclick',
      desc: '当某一行被双击时会触发该事件 ',
      callback: 'row, column, event',
    },
    {
      name: 'header-click',
      desc: '当某一列的表头被点击时会触发该事件 ',
      callback: 'column, event',
    },
    {
      name: 'header-contextmenu',
      desc: '当某一列的表头被鼠标右键点击时触发该事件 ',
      callback: 'column, event',
    },
    {
      name: 'sort-change',
      desc: '当表格的排序条件发生变化的时候会触发该事件 ',
      callback: '{ column, prop, order }',
    },
    {
      name: 'filter-change',
      desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 ',
      callback: 'filters',
    },
    {
      name: 'current-change',
      desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 ',
      callback: 'currentRow, oldCurrentRow',
    },
    {
      name: 'header-dragend',
      desc: '当拖动表头改变了列的宽度的时候会触发该事件 ',
      callback: 'newWidth, oldWidth, column, event',
    },
    {
      name: 'expand-change',
      desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） ',
      callback: 'row, (expandedRows | expanded)',
    },
  ]
}
</script>
<style lang="scss" scoped></style>
