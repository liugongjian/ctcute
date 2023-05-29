/*
* @Author: 胡一苗
* @Date: 2023-05-29 16:24:24
* @LastEditors: 胡一苗
* @LastEditTime: 2023-05-29 19:09:50
* @Description: desc
*/
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTableFilter / 默认按 Tag 展示过滤条件</h1>
      <component-demo path="@/views/component/Base/CuteTableFilter/Demo1.vue">
        <demo1 />
      </component-demo>

      <h1>CuteTableFilter / 通过 slot 自定义展示过滤条件</h1>
      <component-demo path="@/views/component/Base/CuteTableFilter/Demo2.vue">
        <demo2 />
      </component-demo>

      <h2>CuteTableFilter Attributes</h2>
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

      <h2>CuteTableFilter Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>

      <h2>CuteTableFilter Slots</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import Demo2 from './Demo2.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTableColumnSettings',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'btnIcon',
      desc: '按钮图标',
      type: 'string',
      options: '选填',
      default: 'plus',
    },
    {
      name: 'btnText',
      desc: '按钮文本',
      type: 'string',
      options: '选填',
      default: '新增过滤',
    },
    {
      name: 'filters',
      desc: '过滤条件',
      type: 'CuteTableFilterItem[]',
      options: '选填',
      default: null,
      children: [
        {
          name: 'key',
          desc: '过滤条件的key',
          type: 'string',
          options: '选填',
          default: null,
        },
        {
          name: 'value',
          desc: '过滤条件的值',
          type: 'string',
          options: '必填',
          default: null,
        },
      ],
    },
  ]
  private event = [
    {
      name: 'submit',
      desc: '新增/编辑过滤条件，点击确定时触发',
      callback: '-',
    },
    {
      name: 'cancel',
      desc: '新增/编辑过滤条件，点击取消时触发',
      callback: '-',
    },
    {
      name: 'remove-filter',
      desc: '删除过滤条件时触发，如有自定义展示，则不会触发',
      callback: '(filter: CuteTableFilterItem)',
    },
  ]
  private slot = [
    {
      name: '-',
      desc: '展示过滤条件',
    },
    {
      name: 'popover-content',
      desc: 'Popover 中的内容区域，用于新增/编辑过滤条件',
    },
  ]
}
</script>
