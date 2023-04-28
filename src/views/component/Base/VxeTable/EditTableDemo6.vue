<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-04-21 18:45:36
 * @Description: 可编辑表格 - 禁用编辑单元格
-->

<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <el-button @click="saveEvent('xTable')">保存表格</el-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable"
      border="inner"
      show-overflow
      keep-source
      :loading="loading"
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'row' }"
      @edit-actived="editActivedEvent"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="姓名" :edit-render="{}">
        <template #edit="{ row }">
          <el-input v-model="row.name" type="text"></el-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="性别" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ sexFormatter(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <el-select v-model="row.sex" popper-class="vxe-table--ignore-clear">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </template>
      </vxe-column>
      <vxe-column field="age" title="年龄" :edit-render="{}">
        <template #edit="{ row }">
          <el-input-number v-model="row.age" controls-position="right"></el-input-number>
        </template>
      </vxe-column>
      <vxe-column field="address" title="地址" :edit-render="{}">
        <template #edit="{ row }">
          <el-tooltip
            content="某某某原因无法修改，无法修改"
            placement="top-start"
            trigger="hover"
            :disabled="!addressDisabled"
          >
            <el-input v-model="row.address" type="text" effect="dark" :disabled="addressDisabled"></el-input>
          </el-tooltip>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTableData2 } from './mock'
import { TableType2 } from './types'
import { SEX } from './dict'

@Component({
  name: 'EditTableDemo6',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()

  private sexList = [
    { label: '男', value: 'male' },
    { label: '女', value: 'female' },
  ]

  private loading = false

  private addressDisabled = false

  private sexFormatter(sex) {
    return SEX[sex]
  }

  private editActivedEvent({ rowIndex }) {
    this.addressDisabled = rowIndex === 0
  }

  private editDisabledEvent() {
    this.$message.error('不可编辑')
  }

  private saveEvent(refName) {
    const $table: any = this.$refs[refName]
    const { updateRecords } = $table.getRecordset()
    //添加与后端交互的逻辑
    this.$alert(`修改了${updateRecords.length}行数据`, '修改数据', {
      confirmButtonText: '确定',
    })
    console.log(updateRecords)
  }
}
</script>
<style type="scss" scoped>
.el-input-number {
  width: 100%;
}
</style>
