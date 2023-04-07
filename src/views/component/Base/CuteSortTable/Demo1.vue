/*
* @Author: 胡一苗
* @Date: 2023-03-31 14:54:29
* @LastEditors: 胡一苗
* @LastEditTime: 2023-03-31 15:09:10
* @Description: desc
*/
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
        <cute-state :type="HEALTH[scope.row.health].colorType">
          {{ HEALTH[scope.row.health].text }}
        </cute-state>
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
        <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown(scope.$index)">
          <el-button type="text" size="small" class="bt-operation">
            更多
            <i
              class="el-icon-arrow-down el-icon--right"
              :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
            />
          </el-button>
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
import { STATUS, HEALTH2 } from '@/dics/simpleTable'
import { Vue, Component, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/ui/hook/TableHook'
import CuteSortTable from '@cutedesign/sort-table'
import { getTable } from '@/api/cuteSortTable'
import * as SimpleTable from '@/types/SimpleTable'

@Component({
  name: 'Demo1',
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
    { prop: 'operation', label: '操作', slot: 'operation', props: { align: 'left', width: 200 } },
  ]
  private HEALTH = HEALTH2

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
    // 有更多按钮 需要每个元素加个 flag 标志
    const list = res.data.list.map(item => {
      item.flag = false
      return item
    })
    this.tableHook.setResult(list, res.data.total)
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

  private openDropdown(index) {
    this.tableHook.tableData[index].flag = !this.tableHook.tableData[index].flag
  }

  private handleClick(index, row) {
    console.log(index, row)
  }
}
</script>
<style lang="scss" scoped>
.el-table {
  .text-ellipsis {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
  }

  .name-primary {
    color: $color-master;
  }
}

.pagination {
  text-align: right;
}
</style>
