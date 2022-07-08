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
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="resetConditions">重置</el-button>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-filter">
      <div class="table-filter_text">指标条件</div>
      <table-filter />
    </div>

    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit>
      <el-table-column prop="name" label="主机别名" />
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
      <el-table-column prop="actions" label="操作" fixed="right" class-name="actions" width="190px">
        <template slot-scope="scope">
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
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      :current-page="pager.page"
      :page-size="pager.limit"
      :total="pager.total"
      layout="total, prev, pager, next, sizes, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as SimpleTable from '@/types/SimpleTable'
import { getTable, getHosts } from '@/api/simpleTable'
import { STATUS, HEALTH } from '@/dics/simpleTable'
import TableFilter from '@/components/Table/TableFilter.vue'
@Component({
  name: 'SimpleTable',
  components: { TableFilter },
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH
  // 小三角旋转开关
  private flag = false

  // 搜索信息
  private conditions: SimpleTable.Conditions = {
    host: '',
    name: '',
  }

  // 主机信息下拉框选项
  private hostOptions = []

  // 分页信息
  private pager = {
    page: 1,
    limit: 10,
    total: 20,
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
      this.hostOptions = res.data
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
    const conditionsForm: any = this.$refs.conditions
    conditionsForm.resetFields()
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

  /** * 下拉展开旋转小三角 */
  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }

  private operationOptions = [
    { label: '> =', value: 1 },
    { label: '< =', value: 2 },
  ]
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
