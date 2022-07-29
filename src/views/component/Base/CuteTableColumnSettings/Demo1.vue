<template>
  <cute-table-column-settings
    :data="tableData"
    :get-table="getTable"
    :table-columns="tableColumns"
    :class-name="myName"
  >
    <template #healthy="{ scope }">
      <div>
        <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
        <span>{{ HEALTH[scope.row.healthy] }}</span>
      </div>
    </template>

    <template #operation="{ scope }">
      <div>
        <el-button type="text" size="small" class="bt-operation">卸载</el-button>
        <el-button type="text" size="small" class="bt-operation">扩容</el-button>
      </div>
    </template>
  </cute-table-column-settings>
</template>

<script lang="ts">
// 由于未知问题：直接引入不显示组件，但是放入到频率高的组件列表中就可使用
// import { CuteTableColumnSettings } from '@cutedesign/base'
import { Vue, Component } from 'vue-property-decorator'
import { getTable } from '@/api/cuteTableColumnSettings'
import data from '@/utils/mock'
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
      prop: 'healthy',
      slot: 'healthy',
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

  // 上传自己的命名空间，定制化设置
  private myName = 'myClassName'
  private HEALTH = HEALTH
  private getTable = getTable

  // 在URL 地址不通的情况下，先传入一个 data 数据
  private tableData = data.tableData10
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
