<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:23
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2023-02-06 17:36:41
 * @Description:
-->
<template>
  <div>
    <cute-sort-table
      ref="tableRef"
      :loading="tableHook.loading"
      :table-data="tableHook.tableData"
      :table-columns="tableColumns"
      @sort="handleSort"
    >
      <template #name="{ scope }">
        <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
      </template>
      <template #status="{ scope }">
        <span>{{ statusFormatter(scope.row) }}</span>
      </template>
      <template #healthy="{ scope }">
        <div>
          <span class="sub-spot" :class="`sub-spot--${scope.row.health}`"></span>
          <span>{{ HEALTH[scope.row.health] }}</span>
        </div>
      </template>
      <template #operation="{ scope }">
        <el-button
          type="text"
          size="small"
          class="bt-operation"
          @click="handleClick(scope.$index, scope.row)"
        >
          挂载
        </el-button>
        <el-button type="text" size="small" class="bt-operation">卸载</el-button>
        <el-button type="text" size="small" class="bt-operation">扩容</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
          <span class="el-dropdown-link">
            更多<i
              class="el-icon-arrow-down el-icon--right"
              :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退订</el-dropdown-item>
            <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
            <el-dropdown-item>创建</el-dropdown-item>
            <el-dropdown-item disabled>Disabled</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </cute-sort-table>
    <el-pagination
      class="pagination"
      :current-page.sync="tableHook.pager.page"
      :page-size.sync="tableHook.pager.limit"
      :total="tableHook.total"
      @size-change="() => tableHook.handleSizeChange(tableHook.pager.limit)"
      @current-change="() => tableHook.handleCurrentChange(tableHook.pager.page)"
    />
  </div>
</template>
<script lang="ts">
import { STATUS, HEALTH } from '@/dics/simpleTable'
import { Vue, Component, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/ui/hook/TableHook'
import CuteSortTable from '@cutedesign/sort-table'
import { getTable } from '@/api/cuteSortTable'
import * as SimpleTable from '@/types/SimpleTable'

@Component({
  name: 'Demo3',
  components: {
    CuteSortTable,
  },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable

  public tableHook = new TableHookClass()

  private tableColumns = [
    { prop: 'name', label: '主机别名', slot: 'name' },
    { prop: 'status', label: '实例状态', slot: 'status' },
    { prop: 'ip', label: 'IP地址' },
    { prop: 'cpu', label: 'CPU利用率(%)' },
    { prop: 'memory', label: '内存利用率(%)' },
    { prop: 'disk', label: '磁盘利用率(%)' },
    { prop: 'healthy', label: '健康状态', slot: 'healthy' },
    { prop: 'operation', label: '操作', slot: 'operation', props: { align: 'left', width: 190 } },
  ]
  private HEALTH = HEALTH
  private flag = false

  /**
   * 页面Mounted
   */
  private mounted() {
    this.tableHook = new TableHookClass({}, this.getTable, this.tableRef, false)
    this.tableHook.query()
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

  private handleSort(val) {
    const currRow = this.tableHook.tableData.splice(val.oldIndex, 1)[0]
    this.tableHook.tableData.splice(val.newIndex, 0, currRow)
    const newArray = this.tableHook.tableData.slice(0)
    this.tableHook.tableData = []
    this.$nextTick(function () {
      this.tableHook.tableData = newArray
    })
  }

  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }
  private handleClick(index, row) {
    console.log(index, row)
  }
}
</script>
<style lang="scss" scoped>
.el-table {
  // width: 65%;
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
  color: $color-grey-3;

  &:hover {
    color: $color-master-1;
  }
}
</style>
