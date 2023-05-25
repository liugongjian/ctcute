<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-25 11:00:36
 * @Description: 冻结列&冻结表头
-->

<template>
  <div>
    <!--冻结列-->
    <h3>冻结列</h3>
    <vxe-table border show-overflow :data="tableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="300"></vxe-column>
      <vxe-column field="amount" title="Amount" fixed="right" width="300"></vxe-column>
    </vxe-table>

    <!--冻结表头-->
    <h3>冻结表头</h3>
    <vxe-table border="inner" show-overflow :data="tableData" height="300" size="small">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="amount" title="Amount"></vxe-column>
    </vxe-table>

    <!--冻结表尾-->
    <h3>冻结表尾</h3>
    <vxe-table
      border="inner"
      show-overflow
      :data="tableData"
      show-footer
      :footer-method="footerMethod"
      height="300"
      size="small"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="amount" title="Amount"></vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTableData2 } from './mock'
import { TableType2 } from './types'

@Component({
  name: 'Demo5',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()
  footerMethod({ columns, data }) {
    const footerData = [
      columns.map((column, _columnIndex) => {
        if (_columnIndex === 0) {
          return '合计'
        }
        if (['age'].includes(column.field)) {
          return this.sumNum(data, 'age')
        }
        if (['amount'].includes(column.field)) {
          return this.sumNum(data, 'amount')
        }
        return '-'
      }),
    ]
    // 返回一个二维数组的表尾合计
    return footerData
  }
  sumNum(data, type) {
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += data[i][type]
    }
    return total
  }
}
</script>
