/*
* @Author: 胡一苗
* @Date: 2023-03-31 14:54:29
* @LastEditors: 胡一苗
* @LastEditTime: 2023-03-31 15:01:08
* @Description: desc
*/
<template>
  <cute-table-column-settings :table-data="tableData" :table-columns="tableColumns">
    <template #health="{ scope }">
      <cute-state :type="HEALTH[scope.row.health].colorType">
        {{ HEALTH[scope.row.health].text }}
      </cute-state>
    </template>

    <template #operation="{}">
      <div>
        <el-button type="text" size="small" class="bt-operation">卸载</el-button>
        <el-button type="text" size="small" class="bt-operation">扩容</el-button>
      </div>
    </template>
  </cute-table-column-settings>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTable } from '@/api/cuteTableColumnSettings'
import { HEALTH2 } from '@/dics/simpleTable'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  // 全部的字段选项
  private tableColumns = [
    {
      label: '主机别名',
      prop: 'name',
      isSelected: true,
      isDisabled: true,
    },
    {
      label: '实例状态',
      prop: 'status',
      isSelected: true,
      isDisabled: true,
    },
    {
      label: 'IP地址',
      prop: 'ip',
      isSelected: true,
      props: {
        align: 'center',
        width: '200px',
      },
    },
    {
      label: 'CPU利用率(%)',
      prop: 'cpu',
      isSelected: true,
    },
    {
      label: '内存利用率(%)',
      prop: 'memory',
    },
    {
      label: '磁盘利用率(%)',
      prop: 'disk',
    },
    {
      label: '健康状态',
      prop: 'health',
      slot: 'health',
      isSelected: true,
    },
    {
      label: '操作',
      prop: 'operation',
      slot: 'operation',
      isSelected: true,
      isDisabled: true,
    },
  ]

  private HEALTH = HEALTH2
  private tableData = []

  private async initTableData() {
    const res = await getTable({
      page: 1,
      limit: 20,
    })
    this.tableData = res.data.list
  }

  mounted() {
    this.initTableData()
  }
}
</script>
