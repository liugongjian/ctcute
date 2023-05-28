/* * @Author: 胡一苗 * @Date: 2023-05-16 17:19:04 * @LastEditors: 胡一苗 * @LastEditTime: 2023-05-16 17:32:24
* @Description: desc */
<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteTableFilter / 表格过滤</h1>
      <component-demo path="@/views/component/Base/CuteTableFilter/Demo1.vue">
        <demo1 />
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
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTableColumnSettings',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = []
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
  ]
  private slot = [
    {
      name: '-',
      desc: '展示过滤条件',
    },
    {
      name: 'filter-form',
      desc: '新增/编辑过滤条件的表单',
    },
  ]
}
</script>
