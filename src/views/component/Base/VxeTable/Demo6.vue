<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 合并行&合并列
-->

<template>
  <div>
    <h3>合并列</h3>
    <vxe-table border :span-method="colspanMethod" :data="mergeColtableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="key" title="Key"></vxe-column>
      <vxe-column field="translate" title="Translate"></vxe-column>
    </vxe-table>

    <h3>合并行</h3>
    <vxe-table border :span-method="rowspanMethod" :data="mergeRowtableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="key" title="Key"></vxe-column>
      <vxe-column field="translate" title="Translate"></vxe-column>
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
  private mergeRowtableData: Array<TableType2> = getTableData2()
  private mergeColtableData: Array<TableType2> = getTableData2()

  /**
   * 合并列方法
   * @param _rowIndex
   * @param _columnIndex
   */
  private colspanMethod({ _rowIndex, _columnIndex }) {
    if (_rowIndex === 8) {
      if (_columnIndex === 2) {
        return { rowspan: 1, colspan: 2 }
      } else if (_columnIndex === 3) {
        return { rowspan: 0, colspan: 0 }
      }
    }
  }
  /**
   * 合并行方法
   * @param _rowIndex
   * @param _columnIndex
   */
  private rowspanMethod({ _rowIndex, _columnIndex }) {
    if (_columnIndex === 2) {
      if (_rowIndex === 2) {
        return { rowspan: 2, colspan: 1 }
      } else if (_rowIndex === 3) {
        return { rowspan: 0, colspan: 0 }
      }
    }
  }
  /**
   * 页面Mounted
   */
  private mounted() {
    this.mergeColtableData[8].role = '合并了'
    this.mergeRowtableData[2].role = '合并了'
  }
}
</script>
