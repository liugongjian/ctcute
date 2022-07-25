<!--
 * @Author: 张晨曦
 * @Date: 2022-07-10 13:13:36
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-22 17:51:23
 * @Description: 复杂表格3
-->
<template>
  <el-card class="pro-table-3">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__conditions">
        <el-form ref="conditionsRef" :model="conditions" inline @submit.native.prevent>
          <el-row v-show="conditionsOpenFlag" :gutter="24">
            <el-col :span="8">
              <el-form-item prop="name">
                <el-input v-model="conditions.name" placeholder="请输入主机别名" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="host">
                <el-select v-model="conditions.host" placeholder="请选择主机">
                  <el-option v-for="item in hostOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="mb-16">
              <el-form-item prop="env">
                <el-select v-model="conditions.env" placeholder="请选择所属环境">
                  <el-option v-for="item in envOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="name_copy">
                <el-input v-model="conditions.name_copy" placeholder="请输入主机别名" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="host_copy">
                <el-select v-model="conditions.host_copy" placeholder="请选择主机">
                  <el-option v-for="item in hostOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="mb-16">
              <el-form-item prop="env_copy">
                <el-select v-model="conditions.env_copy" placeholder="请选择所属环境">
                  <el-option v-for="item in envOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="host_copy_copy">
                <el-select v-model="conditions.host_copy_copy" placeholder="请选择主机">
                  <el-option v-for="item in hostOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="env_copy_copy">
                <el-select v-model="conditions.env_copy_copy" placeholder="请选择所属环境">
                  <el-option v-for="item in envOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="mb-16">
              <el-form-item>
                <div class="table-tools__conditions__buttons">
                  <el-button type="primary" @click="search">查询</el-button>
                  <el-button @click="resetConditions">重置</el-button>
                  <span class="table-tools__conditions__buttons__txt" @click="openConditions">
                    <span>{{ conditionsOpenFlag ? '收起' : '展开' }}</span>
                    <svg-icon :name="conditionsOpenFlag ? 'up' : 'down'" class="ml-6" />
                  </span>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="table-tools__bottom">
        <div class="table-tools__left">
          <cute-selected-input :checked-list="selectedData" :options="optionData" />
          <el-button type="primary" class="ml-20">+ 新增按钮</el-button>
          <el-button class="ml-12">次按钮</el-button>
        </div>
        <div class="table-tools__right">
          <div class="table-tools__right__button__txt" @click="download">
            <svg-icon name="vertical-align-bottom" />
            <span class="ml-6">下载</span>
          </div>
          <div class="table-tools__right__button__txt ml-22" @click="exportFile">
            <svg-icon name="export" />
            <span class="ml-6">导出</span>
          </div>
        </div>
      </div>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
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
      <el-table-column prop="actions" label="操作" width="200" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="gotoMount(row)">挂载</el-button>
          <el-button type="text" @click="gotoUninstall(row)">卸载</el-button>
          <el-button type="text" @click="gotoExpansion(row)">扩容</el-button>
          <el-dropdown trigger="click">
            <span class="actions__txt"> 更多<svg-icon name="caret-down" class="actions__svgicon" /> </span>
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as ProTable3 from '@/types/ProTable3'
import { getTable, getHosts, getEnvs } from '@/api/proTable3'
import { STATUS, HEALTH } from '@/dics/proTable3'
import { ElForm } from 'element-ui/types/form'

@Component({
  name: 'ProTable3',
})
export default class extends Vue {
  // 展开搜索状态
  private conditionsOpenFlag = true

  // 健康状态字典
  private HEALTH = HEALTH

  // 搜索信息
  private conditions: ProTable3.Conditions = {
    name: '',
    host: '',
    env: '',
    name_copy: '',
    host_copy: '',
    env_copy: '',
    host_copy_copy: '',
    env_copy_copy: '',
  }

  // 表格选中数据
  private selectedData = []

  // 主机信息下拉框选项
  private hostOptions = []

  private envOptions = []

  // 操作已选项下拉数据
  private optionData = [
    {
      value: '1',
      label: '退订',
    },
    {
      value: '2',
      label: '续订',
    },
    {
      value: '3',
      label: '创建',
    },
    {
      value: '4',
      label: 'Disable',
      disabled: true,
    },
  ]

  private selectedOptionVal = ''

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: ProTable3.Host[] = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getHosts()
    this.getEnvs()
    this.getTable()
  }

  private handleSelectionChange(val: []) {
    this.selectedData = val
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
   *  获取所属环境列表
   */
  private async getEnvs() {
    try {
      const res = await getEnvs()
      this.envOptions = res.data
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
      const params: ProTable3.TableParams = {
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
    const conditionsRef = this.$refs.conditionsRef as ElForm
    conditionsRef.resetFields()
  }

  /**
   * 挂载
   * @param data
   */
  private gotoMount(data: ProTable3.Host) {
    this.$message.success(`前往${data.name}挂载页面`)
  }

  /**
   * 卸载
   * @param data
   */
  private gotoUninstall(data: ProTable3.Host) {
    this.$message.success(`前往${data.name}卸载页面`)
  }

  /**
   * 扩容
   * @param data
   */
  private gotoExpansion(data: ProTable3.Host) {
    this.$message.success(`前往${data.name}扩容页面`)
  }

  /**
   * 查看监控指标
   * @param data
   */
  private gotoDashboard(data: ProTable3.Host) {
    this.$message.info(`前往${data.name}监控指标页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data: ProTable3.Host) {
    return STATUS[data.status]
  }

  // 是否展开搜索条件
  private openConditions() {
    this.conditionsOpenFlag = !this.conditionsOpenFlag
  }

  // 下载
  private download() {
    console.log('download')
  }

  // 导出
  private exportFile() {
    console.log('exportFile')
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

.ml-6 {
  margin-left: 6px;
}

.ml-12 {
  margin-left: 12px;
}

.ml-22 {
  margin-left: 22px;
}

.ml-20 {
  margin-left: 20px;
}

.mb-16 {
  margin-bottom: 16px;
}

::v-deep .el-form-item {
  width: 100%;
}

::v-deep .el-form-item__content {
  width: 100%;
}

::v-deep .el-dropdown {
  margin: 0;
}
</style>
