/* * @Author: 胡一苗 * @Date: 2023-05-29 16:46:44 * @LastEditors: 胡一苗 * @LastEditTime: 2023-05-29 18:38:15
* @Description: desc */
<template>
  <cute-table-filter
    btn-icon="plus-circle"
    btn-text="按钮文本"
    :filters="tableFilterData"
    @remove-filter="item => removeTableFilterItem(item.key)"
    @submit="submitTableFilter"
  >
    <template #popover-content>
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
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { CuteTableFilter } from '@cutedesign/ui'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'Demo1',
  components: { CuteTableFilter },
})
export default class extends Mixins(Locale) {
  /**
   * 获取表格数据
   */
  private async getTable() {
    // ...
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
    this.getTable()
  }

  /** 删除过滤条件 **/
  private removeTableFilterItem(key: string) {
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
