<!--
 * @Author: 胡一苗 
 * @Date: 2023-03-31 14:54:29 
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 14:28:54
 * @Description: desc 
-->
<template>
  <div>
    <cute-sort-table handle=".handle">
      <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData">
        <el-table-column width="48">
          <div class="handle">
            <svg-icon name="sort-table" class="sort-icon" />
          </div>
        </el-table-column>
        <el-table-column prop="name" :label="$t('demo.table.common.hostAlias')" width="150px">
          <template slot-scope="scope">
            <div>
              <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" :label="$t('demo.table.common.instanceStatus')">
          <template slot-scope="scope">
            <span>{{ statusFormatter(scope.row) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="ip" :label="$t('demo.table.common.ip')"></el-table-column>
        <el-table-column prop="cpu" :label="$t('demo.table.common.cpu')"></el-table-column>
        <el-table-column prop="memory" :label="$t('demo.table.common.disk')"></el-table-column>
        <el-table-column prop="healthy" :label="$t('demo.table.common.health')">
          <template slot-scope="scope">
            <cute-state :type="HEALTH[scope.row.health].colorType">{{
              HEALTH[scope.row.health].text
            }}</cute-state>
          </template>
        </el-table-column>
        <el-table-column :label="$t('demo.table.common.operate')" width="200px">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              class="bt-operation"
              @click="handleClick(scope.$index, scope.row)"
              >{{ $t('demo.table.common.mount') }}</el-button
            >
            <el-button type="text" size="small" class="bt-operation">{{
              $t('demo.table.common.unload')
            }}</el-button>
            <el-button type="text" size="small" class="bt-operation">{{
              $t('demo.table.common.expand')
            }}</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown(scope.$index)">
              <el-button type="text" size="small" class="bt-operation">
                {{ $t('demo.table.common.more') }}
                <i
                  class="el-icon-arrow-down el-icon--right"
                  :class="scope.row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
                />
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ $t('demo.table.common.unsubscribe') }}</el-dropdown-item>
                <el-dropdown-item>{{ $t('demo.table.common.backup') }}</el-dropdown-item>
                <el-dropdown-item>{{ $t('demo.table.common.create') }}</el-dropdown-item>
                <el-dropdown-item disabled>Disabled</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
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
import { CuteSortTable } from '@cutedesign/ui'
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
