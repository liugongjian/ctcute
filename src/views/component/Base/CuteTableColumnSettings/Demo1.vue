<template>
  <cute-table-column-settings :table-data="tableData" :table-columns="tableColumns">
    <template #health="{ scope }">
      <div>
        <span class="sub-spot" :class="`sub-spot--${scope.row.health}`"></span>
        <span>{{ HEALTH[scope.row.health] }}</span>
      </div>
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
import { HEALTH } from '@/dics/simpleTable'

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

  private HEALTH = HEALTH
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

<style lang="scss" scoped>
.sub-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;

  &--1 {
    background: $color-status-success;
  }

  &--2 {
    background: $color-status-warning;
  }

  &--3 {
    background: $color-status-danger;
  }

  &--4 {
    background: $color-status-info;
  }

  &--5 {
    background: $disabled-color;
  }
}
</style>
