<!--
 * @Author: 胡一苗
 * @Date: 2023-03-31 14:54:29
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 14:51:40
 * @Description: desc
-->
<template>
  <cute-table-column-settings :table-data="tableData" :table-columns="tableColumns">
    <template #health="{ scope }">
      <cute-state :type="HEALTH[scope.row.health].colorType">{{ HEALTH[scope.row.health].text }}</cute-state>
    </template>

    <template #operation="{}">
      <div>
        <el-button
          type="text"
          size="small"
          class="bt-operation"
        >{{ $t('demo.table.common.unload') }}</el-button>
        <el-button
          type="text"
          size="small"
          class="bt-operation"
        >{{ $t('demo.table.common.expand') }}</el-button>
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
      label: this.$t('demo.table.common.hostAlias'),
      prop: 'name',
      isSelected: true,
      isDisabled: true,
    },
    {
      label: this.$t('demo.table.common.instanceStatus'),
      prop: 'status',
      isSelected: true,
      isDisabled: true,
    },
    {
      label: this.$t('demo.table.common.ip'),
      prop: 'ip',
      isSelected: true,
      props: {
        align: 'center',
        width: '200px',
      },
    },
    {
      label: this.$t('demo.table.common.cpu'),
      prop: 'cpu',
      isSelected: true,
    },
    {
      label: this.$t('demo.table.common.memory'),
      prop: 'memory',
    },
    {
      label: this.$t('demo.table.common.disk'),
      prop: 'disk',
    },
    {
      label: this.$t('demo.table.common.health'),
      prop: 'health',
      slot: 'health',
      isSelected: true,
    },
    {
      label: this.$t('demo.table.common.operate'),
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
