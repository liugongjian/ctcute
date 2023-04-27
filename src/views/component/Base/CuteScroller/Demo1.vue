<!--
 * @Author: 马妍
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 15:44:24
 * @Description:
-->
<template>
  <div>
    <h3>{{ $t('demo.scoller.demo1.table') }}</h3>
    <cute-scroller v-model="heightVal">
      <el-table v-loading="loading" :data="tableData" fit border :height="heightVal">
        <el-table-column prop="name" :label="$t('demo.table.common.hostAlias')">
          <template slot-scope="{ row }">
            <router-link to="/">{{ row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="status" :label="$t('demo.table.common.instanceStatus')"></el-table-column>
        <el-table-column prop="ip" :label="$t('demo.table.common.ip')" />
        <el-table-column prop="cpu" :label="$t('demo.table.common.cpu')" />
        <el-table-column prop="memory" :label="$t('demo.table.common.memory')" />
        <el-table-column prop="disk" :label="$t('demo.table.common.disk')" />
        <el-table-column prop="health" :label="$t('demo.table.common.health')"></el-table-column>
        <el-table-column
          prop="actions"
          :label="$t('demo.table.common.operate')"
          width="150"
          fixed="right"
          class-name="actions"
        >
          <template slot-scope="{ row }">
            <el-button type="text" @click="gotoDetail(row)">{{ $t('demo.scoller.demo1.detail') }}</el-button>
            <el-button
              type="text"
              @click="gotoDashboard(row)"
            >{{ $t('demo.scoller.demo1.monitor') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </cute-scroller>
    <!--分页-->
    <el-pagination
      :current-page="pager.page"
      :page-size="pager.limit"
      :total="pager.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTable } from '@/api/simpleTable'
import * as SimpleTable from '@/types/SimpleTable'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private heightVal = 'none'

  // 表格数据
  private tableData: SimpleTable.Host[] = null

  private conditions: SimpleTable.Conditions = {
    host: '',
    name: '',
  }

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  private loading = false

  private mounted() {
    this.getTable()
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      const params: SimpleTable.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        ...this.conditions,
      }
      const res = await getTable(params)
      this.pager.total = res.data.total
      this.tableData = res.data.list
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }

  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    this.getTable()
  }

  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    this.getTable()
  }

  /**
   * 查看详情
   */
  private gotoDetail() {
    this.$message.success('前往详情页面')
  }

  /**
   * 查看监控指标
   */
  private gotoDashboard() {
    this.$message.info('前往监控指标页面')
  }
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-pagination {
    text-align: right;
  }
}
</style>
