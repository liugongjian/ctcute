<!--
 * @Author: 胡一苗
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-05-18 11:27:38
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-table">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__left">
        <el-button type="primary">+ 新增按钮</el-button>
        <el-button>次按钮</el-button>
      </div>
      <div class="table-tools__right table-tools__conditions">
        <el-form ref="conditions" :model="conditions" inline @submit.native.prevent>
          <el-form-item prop="host">
            <cute-remind-select
              v-model="conditions.host"
              :options="hostOptions"
              title="主机"
              placeholder="请选择主机"
            />
          </el-form-item>
          <el-form-item prop="name">
            <cute-remind-input v-model="conditions.name" placeholder="请输入主机别名" title="主机别名" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button type="primary" plain @click="search">查 询</el-button>
            <el-button @click="resetConditions">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--表格-->
    <cute-scroller v-model="tableHeight" :offset="32">
      <el-table v-loading="loading" :data="tableData" fit :height="tableHeight">
        <el-table-column prop="name" label="主机别名">
          <template slot-scope="{ row }">
            <router-link to="/">{{ row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"></el-table-column>
        <el-table-column prop="ip" label="IP地址" />
        <el-table-column prop="cpu" label="CPU利用率(%)" />
        <el-table-column prop="memory" label="内存利用率(%)" />
        <el-table-column prop="disk" label="磁盘利用率(%)" />
        <el-table-column prop="health" label="健康状态">
          <template slot-scope="scope">
            <cute-state :type="HEALTH[scope.row.health].colorType">
              {{ HEALTH[scope.row.health].text }}
            </cute-state>
          </template>
        </el-table-column>
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
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form'
import * as SimpleTable from '@/types/SimpleTable'
import { getTable, getHosts } from '@/api/simpleTable'
import { STATUS, HEALTH2 } from '@/dics/simpleTable'

@Component({
  name: 'SimpleTable',
})
export default class extends Vue {
  // 表格的高度，将通过CuteScroller组件动态返回
  private tableHeight = 'none'

  // 健康状态字典
  private HEALTH = HEALTH2

  // 搜索信息
  private conditions: SimpleTable.Conditions = {
    host: '',
    name: '',
  }

  // 条件搜索表单
  @Ref('conditions')
  private conditionsForm: ElForm

  // 主机信息下拉框选项
  private hostOptions = []

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: SimpleTable.Host[] = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getHosts()
    this.getTable()
  }

  /**
   * 获取主机列表
   */
  private async getHosts() {
    try {
      const res = await getHosts()
      const options = res.data.map(item => {
        return {
          value: item,
          label: item,
        }
      })
      this.hostOptions = options
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      // 分页信息和搜索条件
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
   * 搜索
   */
  private search() {
    this.getTable()
  }

  /**
   * 重置搜索表单
   */
  private resetConditions() {
    this.conditionsForm.resetFields()
  }

  /**
   * 查看详情
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDetail(data: SimpleTable.Host) {
    this.$message.success(`前往${data.name}详情页面`)
  }

  /**
   * 查看监控指标
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDashboard(data: SimpleTable.Host) {
    this.$message.info(`前往${data.name}监控指标页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data: SimpleTable.Host) {
    return STATUS[data.status]
  }
}
</script>
