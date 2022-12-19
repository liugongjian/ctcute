<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description:
-->
<template>
  <div>
    <vxe-toolbar :custom="{ icon: 'el-icon-setting' }">
      <template #buttons>
        <!--<vxe-button>按钮1</vxe-button>-->
        <!--<vxe-button>按钮2</vxe-button>-->
      </template>
    </vxe-toolbar>
    <vxe-table
      id="toolbar_demo3"
      ref="xTable1"
      height="400"
      :custom-config="{ checkMethod: checkColumnMethod }"
      :data="tableData"
    >
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { STATUS } from '@/dics/simpleTable'
import { Vue, Component, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/base/hook/TableHook'
import '@cutedesign/vxe-table'
import { getTable } from '@/api/cuteSortTable'
import * as SimpleTable from '@/types/SimpleTable'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable

  public tableHook = new TableHookClass()
  private tableData = [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  ]

  /**
   * 页面Mounted
   */
  private mounted() {
    this.$nextTick(() => {
      // 手动将表格和工具栏进行关联
      // this.$refs.xTable1.connect(this.$refs.xToolbar1)
    })
    // this.tableHook = new TableHookClass({}, this.getTable, this.tableRef, false)
    // this.tableHook.query()
  }

  /**
   * 获取表格数据
   */
  private async getTable(param) {
    // 接口
    const res = await getTable(param)
    this.tableHook.setResult(res.data.list, res.data.total)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data: SimpleTable.Host) {
    return STATUS[data.status]
  }

  private handleClick(index, row) {
    console.log(index, row)
  }

  private checkColumnMethod({ column }) {
    return column.property !== 'role'
  }
}
</script>
<style lang="scss" scoped>
.el-table {
  margin: 24px 0;

  .text-ellipsis {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
  }

  .name-primary {
    color: $color-master-1;
  }

  .cell {
    span {
      font-size: 12px;
    }

    .el-button--text:last-child:before {
      content: '|';
      color: $border-color-primary;
      margin-right: 10px;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: $color-master-1;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-table__fixed {
    height: 1000px;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sub-table:not(:last-child) {
  border-bottom: 1px solid $color-grey-7;
  padding-bottom: 24px;
}

.bt-operation {
  color: $color-master-1;
}

.sub-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  top: -1px;

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

.sub-small-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;

  &--6 {
    background: $color-status-success;
  }

  &--7 {
    background: $color-status-danger;
  }

  &--8 {
    background: $color-status-warning;
  }

  &--9 {
    background: $disabled-color;
  }
}

.top-fill {
  transform: rotate(180deg);
}

.sort-icon {
  cursor: pointer;
  color: #777;

  &:hover {
    color: $color-master-1;
  }
}
</style>
