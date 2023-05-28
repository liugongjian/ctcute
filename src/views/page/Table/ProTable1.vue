<!--
 * @Author: 胡一苗
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-05-19 09:59:27
 * @Description: 复杂表格1
-->
<template>
  <el-card class="pro-table-1">
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
    <div class="table-filter">
      <div class="table-filter__text">指标条件</div>
      <cute-table-filter @submit="submitTableFilter">
        <el-tag
          v-for="item in tableFilterData"
          :key="item.key"
          type="info"
          size="large"
          closable
          @close="closeTableFilterItem(item.key)"
        >
          {{ item.value }}
        </el-tag>
        <template #filter-form>
          <el-form class="table-filter__form" label-width="84px">
            <el-form-item v-for="formItem in tableFilterForm" :key="formItem.key" :label="formItem.label">
              <el-select v-model="formItem.operator.value" :placeholder="t('cute.select.placeholder')">
                <el-option
                  v-for="(item, index) in formItem.operator.options"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input v-model="formItem.value" :placeholder="t('cute.editInput.placeholder')" />
              <span>{{ formItem.unit }}</span>
            </el-form-item>
          </el-form>
        </template>
      </cute-table-filter>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit>
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
import { Component, Mixins } from 'vue-property-decorator'
import * as ProTable1 from '@/types/ProTable1'
import { getTable, getHosts } from '@/api/proTable1'
import { STATUS, HEALTH2 } from '@/dics/proTable1'
import { CuteTableFilter } from '@cutedesign/ui'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'ProTable1',
  components: { CuteTableFilter },
})
export default class extends Mixins(Locale) {
  // 健康状态字典
  private HEALTH = HEALTH2

  // 搜索信息
  private conditions: ProTable1.Conditions = {
    host: '',
    name: '',
  }

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
  private tableData: ProTable1.Host[] = null

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
      const params: ProTable1.TableParams = {
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
    const conditionsForm: any = this.$refs.conditions
    conditionsForm.resetFields()
  }

  /**
   * 挂载
   * @param data
   */
  private gotoMount(data: ProTable1.Host) {
    this.$message.success(`前往${data.name}挂载页面`)
  }

  /**
   * 卸载
   * @param data
   */
  private gotoUninstall(data: ProTable1.Host) {
    this.$message.success(`前往${data.name}卸载页面`)
  }

  /**
   * 扩容
   * @param data
   */
  private gotoExpansion(data: ProTable1.Host) {
    this.$message.success(`前往${data.name}扩容页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {ProTable1.Host} 表格行对象
   */
  private statusFormatter(data: ProTable1.Host) {
    return STATUS[data.status]
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(index) {
    this.tableData[index].flag = !this.tableData[index].flag
  }

  /** 新增过滤条件的表单对象 **/
  private tableFilterForm = [
    {
      key: 'cpu',
      label: 'CPU使用量',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: '%',
    },
    {
      key: 'ram',
      label: 'RAM使用量',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'GB',
    },
    {
      key: 'disk',
      label: '磁盘剩余量',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'GB',
    },
    {
      key: 'network',
      label: '网络平均负数',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'kbs',
    },
    {
      key: 'else2',
      label: '其他参数2',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'kbs',
    },
    {
      key: 'else3',
      label: '其他参数3',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'kbs',
    },
    {
      key: 'else4',
      label: '其他参数4',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'kbs',
    },
    {
      key: 'else5',
      label: '其他参数5',
      operator: {
        options: [
          {
            label: '>=',
            value: '>=',
          },
          {
            label: '<=',
            value: '<=',
          },
        ],
        value: '',
      },
      value: '',
      unit: 'kbs',
    },
  ]

  /** 过滤条件 **/
  private tableFilterData = []

  /** 生成过滤条件 **/
  private getTableFilterData() {
    const data = []
    this.tableFilterForm.forEach(item => {
      const {
        label,
        operator: { value: operatorValue },
        value,
        unit,
      } = item
      if (operatorValue && value) {
        data.push({
          key: item.key,
          value: `${label}${operatorValue}${value}${unit}`,
        })
      }
    })
    return data
  }

  /** 提交过滤条件 **/
  private submitTableFilter() {
    this.tableFilterData = this.getTableFilterData()
    this.pager.page = 1
    this.getTable()
  }

  /** 删除过滤条件 **/
  private closeTableFilterItem(key: string) {
    const formItem = this.tableFilterForm.find(item => item.key === key)
    formItem.operator.value = ''
    formItem.value = ''
    this.submitTableFilter()
  }
}
</script>
<style lang="scss" scoped>
.table-filter__form {
  .el-form-item {
    .el-select,
    .el-input {
      width: 90px;
      margin-right: $margin-2x;
    }
  }
}
</style>
