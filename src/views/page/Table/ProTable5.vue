<!--
 * @Author: 黄靖
 * @Date: 2023-01-10 16:45:36
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-23 12:33:24
 * @Description: 复杂表格5
-->
<template>
  <el-card class="pro-table-5">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__conditions">
        <el-form ref="conditionsRef" class="" :model="conditions" inline @submit.native.prevent>
          <el-form-item prop="ip">
            <el-input v-model="conditions.ip" placeholder="请输入IP" />
          </el-form-item>
          <el-form-item prop="host">
            <cute-remind-select
              v-model="conditions.host"
              :options="hostOptions"
              title="主机"
              placeholder="请选择主机"
            />
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="conditions.name" placeholder="请输入主机别名" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button type="primary" @click="search">查 询</el-button>
            <el-button @click="resetConditions">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="table-tools__buttons">
        <div class="table-tools__left">
          <cute-selected-input :checked-list="selectedData" :options="optionData" />
          <el-button type="primary">+ 新增按钮</el-button>
          <el-button>次按钮</el-button>
        </div>
        <div class="table-tools__right">
          <el-button type="text" plain @click="download">
            <svg-icon name="download" />
            <span>下载</span>
          </el-button>
          <el-button type="text" plain @click="exportFile">
            <svg-icon name="export" />
            <span>导出</span>
          </el-button>
        </div>
      </div>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
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
      <el-table-column prop="actions" label="操作" fixed="right" class-name="actions" width="200px">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="bt-operation" @click="gotoMount(scope.row)">
            挂载
          </el-button>
          <el-button type="text" size="small" class="bt-operation" @click="gotoUninstall(scope.row)"
            >卸载</el-button
          >
          <el-button type="text" size="small" class="bt-operation" @click="gotoExpansion(scope.row)"
            >扩容</el-button
          >
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
import * as ProTable5 from '@/types/ProTable5'
import { getTable, getHosts } from '@/api/proTable5'
import { STATUS, HEALTH2 } from '@/dics/proTable5'
import { ElForm } from 'element-ui/types/form'

@Component({
  name: 'ProTable5',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH2

  // 搜索信息
  private conditions: ProTable5.Conditions = {
    ip: '',
    host: '',
    name: '',
  }

  // 表格选中数据
  private selectedData = []

  // 主机信息下拉框选项
  private hostOptions = []

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
  private tableData: ProTable5.Host[] = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getHosts()
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
      const params: ProTable5.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        ...this.conditions,
      }
      const res = await getTable(params)
      this.pager.total = res.data.total
      this.tableData = res.data.list.map((item: any) => {
        item.flag = false
        return item
      })
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
  private gotoMount(data: ProTable5.Host) {
    this.$message.success(`前往${data.name}挂载页面`)
  }

  /**
   * 卸载
   * @param data
   */
  private gotoUninstall(data: ProTable5.Host) {
    this.$message.success(`前往${data.name}卸载页面`)
  }

  /**
   * 扩容
   * @param data
   */
  private gotoExpansion(data: ProTable5.Host) {
    this.$message.success(`前往${data.name}扩容页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data: ProTable5.Host) {
    return STATUS[data.status]
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(index) {
    this.tableData[index].flag = !this.tableData[index].flag
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
