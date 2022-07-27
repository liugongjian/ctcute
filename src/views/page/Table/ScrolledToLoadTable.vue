<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 何晋升
 * @LastEditTime: 2022-07-26 17:44:06
 * @Description: 基础表格 - 滚动底部加载
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
            <el-select v-model="conditions.host" placeholder="请选择主机">
              <el-option v-for="item in hostOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="conditions.name" placeholder="请输入主机别名" />
            <el-form-item class="table-tools__conditions__buttons">
              <el-button type="primary" @click="tableHook.query()">查询</el-button>
              <el-button @click="resetConditions">重置</el-button>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--表格-->
    <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData" fit border>
      <el-table-column prop="name" label="主机别名">
        <template slot-scope="{ row }">
          <router-link to="/">{{ row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" />
      <el-table-column prop="cpu" label="CPU利用率(%)" />
      <el-table-column prop="memory" label="内存利用率(%)" />
      <el-table-column prop="disk" label="磁盘利用率(%)" />
      <el-table-column prop="health" label="健康状态">
        <template slot-scope="{ row }">
          <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
        </template>
      </el-table-column>
      <el-table-column prop="actions" label="操作" width="150" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="gotoDetail(row)">详情</el-button>
          <el-button type="text" @click="gotoDashboard(row)">监控指标</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <!-- <el-pagination
      :current-page="tableHook.pager.page"
      :page-size="tableHook.pager.limit"
      :total="tableHook.total"
      @size-change="tableHook.handleSizeChange"
      @current-change="tableHook.handleCurrentChange"
    /> -->
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form'
import { ElTable } from 'element-ui/types/table'
import * as SimpleTable from '@/types/SimpleTable'
import { getTable, getHosts } from '@/api/simpleTable'
import { STATUS, HEALTH } from '@/dics/simpleTable'
import tableHookClass from '@/hook/tableHook'

@Component({
  name: 'ScrolledToLoadTable',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH

  // 搜索信息
  private conditions: SimpleTable.Conditions = {
    host: '',
    name: '',
  }

  // 条件搜索表单
  @Ref('conditions')
  private conditionsForm: ElForm

  @Ref('tableRef')
  private tableRef: ElTable

  // 主机信息下拉框选项
  private hostOptions = []

  public tableHook = new tableHookClass()

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getHosts()
    this.tableHook = new tableHookClass(this.conditions, this.getTable, this.tableRef, true)
    this.tableHook.query()
  }

  private beforeDestroy() {
    this.tableHook.removeLazyLoadEvent()
  }

  /**
   * 获取表格数据
   */
  private async getTable(param) {
    const res = await getTable(param)
    this.tableHook.setResult(res.data.list, res.data.total)
  }

  /**
   * 获取主机列表
   */
  private async getHosts() {
    try {
      const res = await getHosts()
      this.hostOptions = res.data
    } catch (e) {
      this.$message.error(e)
    }
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
<style lang="scss" scoped>
.health-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 100%;

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
