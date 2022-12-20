<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 冻结列&冻结表头
-->

<template>
  <div>
    <!--冻结列-->
    <h3>冻结列</h3>
    <vxe-table border="inner" show-overflow :data="tableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="300" fixed="right"></vxe-column>
      <vxe-column field="amount" title="Amount" fixed="right" width="500"></vxe-column>
    </vxe-table>

    <!--冻结表头-->
    <h3>冻结表头</h3>
    <vxe-table border="inner" show-overflow :data="tableData" height="300">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="300"></vxe-column>
      <vxe-column field="amount" title="Amount" width="500"></vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import '@cutedesign/vxe-table'
import { getTableData2 } from './mock'
import { TableType2 } from './types'

@Component({
  name: 'Demo5',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()
}
</script>
