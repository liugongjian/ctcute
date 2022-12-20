<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 可编辑表格 - 单击编辑
-->

<template>
  <div>
    <h3>单击编辑-单击后触发单元格</h3>
    <vxe-toolbar>
      <template #buttons>
        <el-button @click="saveEvent('xTable')">保存表格</el-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable"
      border="inner"
      keep-source
      show-overflow
      :loading="loading"
      :data="tableData"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
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
          <el-input v-model="row.address" type="text"></el-input>
        </template>
      </vxe-column>
    </vxe-table>

    <h3>单击编辑-单击后触发行</h3>
    <vxe-toolbar>
      <template #buttons>
        <el-button @click="saveEvent('xTable2')">保存表格</el-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable2"
      border="inner"
      keep-source
      show-overflow
      :loading="loading"
      :data="tableData2"
      :edit-config="{ trigger: 'click', mode: 'row' }"
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
          <el-input v-model="row.address" type="text"></el-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import '@cutedesign/vxe-table'
import { getTableData2 } from './mock'
import { TableType2 } from './types'
import { SEX } from './dict'

@Component({
  name: 'EditTableDemo3',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()
  private tableData2: Array<TableType2> = getTableData2()

  private sexList = [
    { label: '男', value: 'male' },
    { label: '女', value: 'female' },
  ]

  private loading = false

  private sexFormatter(sex) {
    return SEX[sex]
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
