<!--
 * @Author: 马妍
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: yanchengxiang 675036196@qq.com
 * @LastEditTime: 2023-04-06 14:54:51
 * @Description:
-->
<template>
  <div>
    <h3>表格</h3>
    <cute-scroller v-model="heightVal">
      <el-table v-loading="loading" :data="tableData" fit border :height="heightVal">
        <el-table-column prop="name" label="主机别名2">
          <template slot-scope="{ row }">
            <router-link to="/">{{ row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态"> </el-table-column>
        <el-table-column prop="ip" label="IP地址" />
        <el-table-column prop="cpu" label="CPU利用率(%)" />
        <el-table-column prop="memory" label="内存利用率(%)" />
        <el-table-column prop="disk" label="磁盘利用率(%)" />
        <el-table-column prop="health" label="健康状态"> </el-table-column>
        <el-table-column prop="actions" label="操作" width="150" fixed="right" class-name="actions">
          <template slot-scope="{ row }">
            <el-button type="text" @click="gotoDetail(row)">详情</el-button>
            <el-button type="text" @click="gotoDashboard(row)">监控指标</el-button>
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

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private heightVal = 'none'

  private tableData = []

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
      const res = await getTable({
        page: this.pager.page,
        limit: this.pager.limit,
      })
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
