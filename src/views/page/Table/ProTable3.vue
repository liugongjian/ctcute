<!--
 * @Author: 胡一苗
 * @Date: 2022-07-10 13:13:36
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-05-19 09:59:27
 * @Description: 复杂表格3
-->
<template>
  <el-card class="pro-table-3">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__conditions">
        <el-form ref="conditionsRef" :model="conditions" inline @submit.native.prevent>
          <div v-show="conditionsOpenFlag" class="table-tools__conditions__row">
            <el-form-item prop="name">
              <cute-remind-input v-model="conditions.name" placeholder="请输入主机别名" title="主机别名" />
            </el-form-item>
            <el-form-item prop="host">
              <cute-remind-select
                v-model="conditions.host"
                :options="hostOptions"
                title="主机"
                placeholder="请选择主机"
              />
            </el-form-item>
            <el-form-item prop="env">
              <cute-remind-select
                v-model="conditions.env"
                :options="envOptions"
                title="所属环境"
                placeholder="请选择所属环境"
              />
            </el-form-item>
          </div>
          <div v-show="conditionsOpenFlag" class="table-tools__conditions__row">
            <el-form-item prop="name_copy">
              <cute-remind-input
                v-model="conditions.name_copy"
                placeholder="请输入主机别名"
                title="主机别名"
              />
            </el-form-item>
            <el-form-item prop="host_copy">
              <cute-remind-select
                v-model="conditions.host_copy"
                :options="hostOptions"
                title="主机"
                placeholder="请选择主机"
              />
            </el-form-item>
            <el-form-item prop="env_copy">
              <cute-remind-select
                v-model="conditions.env_copy"
                :options="envOptions"
                title="所属环境"
                placeholder="请选择所属环境"
              />
            </el-form-item>
          </div>
          <div class="table-tools__conditions__row">
            <el-form-item prop="host_copy_copy">
              <cute-remind-select
                v-model="conditions.host_copy_copy"
                :options="hostOptions"
                title="主机"
                placeholder="请选择主机"
              />
            </el-form-item>
            <el-form-item prop="env_copy_copy">
              <cute-remind-select
                v-model="conditions.env_copy_copy"
                :options="envOptions"
                title="所属环境"
                placeholder="请选择所属环境"
              />
            </el-form-item>
            <el-form-item class="table-tools__conditions__buttons">
              <el-button type="primary" plain @click="search">查 询</el-button>
              <el-button @click="resetConditions">重 置</el-button>
              <el-button type="text" @click="openConditions">
                <span>{{ conditionsOpenFlag ? '收起' : '展开' }}</span>
                <i
                  :class="['el-icon--right', conditionsOpenFlag ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                />
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="table-tools__buttons">
        <div class="table-tools__left">
          <cute-selected-input :checked-list="selectedData" :options="optionData" />
          <el-button type="primary">+ 新增按钮</el-button>
          <el-button>次按钮</el-button>
          <el-dropdown trigger="click">
            <el-button square icon="ellipsis" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退订</el-dropdown-item>
              <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
              <el-dropdown-item>创建</el-dropdown-item>
              <el-dropdown-item disabled>Disabled</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="table-tools__right">
          <el-button type="text" text-type="weak" @click="download">
            <svg-icon name="download" />
            <span>下载</span>
          </el-button>
          <el-button type="text" text-type="weak" @click="exportFile">
            <svg-icon name="export" />
            <span>导出</span>
          </el-button>
        </div>
      </div>
    </div>
    <!--表格-->
    <cute-scroller ref="tableScroller" v-model="tableHeight" offset="32">
      <el-table
        v-loading="loading"
        :data="tableData"
        fit
        @selection-change="handleSelectionChange"
        :row-class-name="getRowClassName"
        :height="tableHeight"
      >
        <el-table-column type="selection" width="32" :selectable="getRowSelectable" />
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
import { Component, Vue } from 'vue-property-decorator'
import * as ProTable3 from '@/types/ProTable3'
import { getTable, getHosts, getEnvs } from '@/api/proTable3'
import { STATUS, HEALTH2 } from '@/dics/proTable3'
import { ElForm } from 'element-ui/types/form'

@Component({
  name: 'ProTable3',
})
export default class extends Vue {
  // 表格的高度，将通过CuteScroller组件动态返回
  private tableHeight = 'none'

  // 展开搜索状态
  private conditionsOpenFlag = true

  // 健康状态字典
  private HEALTH = HEALTH2

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
   *  获取所属环境列表
   */
  private async getEnvs() {
    try {
      const res = await getEnvs()
      const options = res.data.map(item => {
        return {
          value: item,
          label: item,
        }
      })
      this.envOptions = options
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
      this.tableData = res.data.list.map((item: any, index: number) => {
        item.flag = false
        // 是否整行禁用，这里仅为演示行禁用的效果，实际使用时可按需调整
        item.disabled = false
        // 第二行整行禁用（演示）
        if (index === 1) {
          item.disabled = true
        }
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
   * 使用字典格式化实例状态
   * @param data {ProTable3.Host} 表格行对象
   */
  private statusFormatter(data: ProTable3.Host) {
    return STATUS[data.status]
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(index) {
    this.tableData[index].flag = !this.tableData[index].flag
  }

  // 是否展开搜索条件
  private openConditions() {
    this.conditionsOpenFlag = !this.conditionsOpenFlag
    this.$nextTick(() => {
      ;(this.$refs.tableScroller as any).calHeight()
      console.log('tableHeight', this.tableHeight)
    })
  }

  // 下载
  private download() {
    console.log('download')
  }

  // 导出
  private exportFile() {
    console.log('exportFile')
  }

  // 自定义行className，为了演示整行禁用
  private getRowClassName({ row }) {
    if (row.disabled) {
      return 'row--disabled'
    }
  }

  // 行是否可选择，为了演示整行禁用
  private getRowSelectable(row) {
    return !row.disabled
  }
}
</script>
<style lang="scss" scoped>
.el-table {
  // 行禁用样式，可按需调整className以及需要置灰的CSS属性
  ::v-deep .el-table__row.row--disabled {
    cursor: not-allowed;

    .cell {
      &,
      * {
        pointer-events: none;
        color: $disabled-color;
      }
    }
  }
}
</style>
