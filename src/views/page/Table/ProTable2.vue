<!--
 * @Author: 胡一苗
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-05-19 09:59:27
 * @Description: 复杂表格2
-->
<template>
  <el-card class="pro-table-2">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__conditions">
        <el-form
          ref="conditions"
          class="complex-table_from"
          :model="conditions"
          inline
          label-width="130px"
          @submit.native.prevent
        >
          <div class="table-tools__conditions__row">
            <el-form-item prop="name">
              <cute-remind-input
                v-model="conditions.name"
                placeholder="请输入数据资源名称"
                title="数据资源名称"
                @change="cahngeFun3"
              >
              </cute-remind-input>
            </el-form-item>
            <el-form-item prop="host">
              <cute-remind-select
                v-model="conditions.host"
                :options="hostOptions"
                :placeholder="'请选择主机名'"
                :title="'主机名称'"
                @change="changeFun"
              />
            </el-form-item>
            <el-form-item prop="environment">
              <cute-remind-select
                v-model="conditions.environment"
                :options="hostEnvironmentOptions"
                :placeholder="'请选择主机环境'"
                :title="'环境名称'"
                @change="changeFun1"
              />
            </el-form-item>
          </div>
          <div class="table-tools__conditions__row">
            <el-form-item prop="cpu">
              <cute-remind-select
                v-model="conditions.cpu"
                :options="cpuOptions"
                :placeholder="'请选择CPU利用率'"
                :title="'cpu利用率'"
                @change="changeFun2"
              />
            </el-form-item>
            <el-form-item>
              <!-- 占位 -->
            </el-form-item>
            <el-form-item class="table-tools__conditions__buttons">
              <el-button type="primary" plain @click="search">查 询</el-button>
              <el-button @click="resetConditions">重 置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="table-tools__buttons">
        <div class="table-tools__left">
          <cute-selected-input :checked-list="selectedData" :options="optionData" />
          <el-button type="primary"> + 新增按钮</el-button>
          <el-button @click="resetConditions">次按钮</el-button>
        </div>
        <div class="table-tools__right">
          <el-button type="text" text-type="weak">
            <svg-icon name="download" />
            下载
          </el-button>
          <el-button type="text" text-type="weak">
            <svg-icon name="Import" />
            导出
          </el-button>
        </div>
      </div>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="32"></el-table-column>
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
          <el-button type="text" size="small" class="bt-operation" @click="gotoUninstall(scope.row)">
            卸载
          </el-button>
          <el-button type="text" size="small" class="bt-operation" @click="gotoExpansion(scope.row)">
            扩容
          </el-button>
          <el-dropdown trigger="click" @visible-change="openDropdown(scope.$index)">
            <el-button type="text" size="small" class="bt-operation">
              更多<i :class="['el-icon-arrow-down', 'el-icon--right', scope.row.flag ? 'top-fill' : '']" />
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
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form'
import * as ProTable2 from '@/types/ProTable2'
import { getTable, getHosts } from '@/api/proTable2'
import { STATUS, HEALTH2 } from '@/dics/proTable2'

@Component({
  name: 'ProTable2',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH2

  // 搜索信息
  private conditions: ProTable2.ComplexConditions = {
    host: '',
    name: '',
    environment: '',
    cpu: '',
  }

  @Ref('conditions')
  private conditionsForm: ElForm

  // 表格选中数据
  private selectedData = []

  // 主机信息下拉框选项
  private hostOptions = []

  // 主机环境信息下拉框选项
  private hostEnvironmentOptions = [
    {
      label: '测试环境',
      value: '1',
    },
    {
      label: '生产环境',
      value: '2',
    },
  ]

  // cpu 利用率下拉框选项
  private cpuOptions = [
    {
      label: '80',
      value: '1',
    },
    {
      label: '90',
      value: '2',
    },
  ]

  // 操作已选项下拉数据
  private optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
  ]

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: ProTable2.Host[] = null

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
      console.log(res, 'ressss')
      res.data.forEach(item => {
        this.hostOptions.push({ value: Math.random(), label: item })
      })
      console.log(this.hostOptions, 'optuosss')
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
      const params: ProTable2.TableParams = {
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
    this.conditionsForm.resetFields()
  }

  /**
   * 挂载
   * @param data
   */
  private gotoMount(data: ProTable2.Host) {
    this.$message.success(`前往${data.name}挂载页面`)
  }

  /**
   * 卸载
   * @param data
   */
  private gotoUninstall(data: ProTable2.Host) {
    this.$message.success(`前往${data.name}卸载页面`)
  }

  /**
   * 扩容
   * @param data
   */
  private gotoExpansion(data: ProTable2.Host) {
    this.$message.success(`前往${data.name}扩容页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {ProTable2.Host} 表格行对象
   */
  private statusFormatter(data: ProTable2.Host) {
    return STATUS[data.status]
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(index) {
    this.tableData[index].flag = !this.tableData[index].flag
  }

  private operationOptions = [
    { label: '> =', value: 1 },
    { label: '< =', value: 2 },
  ]

  /** * 下子组件修改父组件的值*/
  private changeFun(key) {
    this.conditions.host = key
  }

  private changeFun1(key) {
    this.conditions.environment = key
  }

  private changeFun2(key) {
    this.conditions.cpu = key
  }

  private cahngeFun3(key) {
    this.conditions.name = key
  }
}
</script>
