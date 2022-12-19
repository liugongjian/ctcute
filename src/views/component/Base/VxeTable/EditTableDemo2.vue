<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 可编辑表格 - 手动编辑
-->

<template>
  <div>
    <vxe-table
      ref="xTable"
      border="inner"
      keep-source
      show-overflow
      :loading="loading"
      :data="tableData"
      :edit-config="{ trigger: 'manual', mode: 'row' }"
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
      <vxe-column title="操作" width="160">
        <template #default="{ row }">
          <template v-if="$refs.xTable.isActiveByRow(row)">
            <el-button type="text" @click="saveRowEvent(row)">保存</el-button>
            <el-button type="text" @click="cancelRowEvent(row)">取消</el-button>
          </template>
          <template v-else>
            <el-button type="text" @click="editRowEvent(row)">编辑</el-button>
          </template>
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
  name: 'EditTableDemo2',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()

  private sexList = [
    { label: '男', value: 'male' },
    { label: '女', value: 'female' },
  ]

  private loading = false

  private sexFormatter(sex) {
    return SEX[sex]
  }

  private editRowEvent(row) {
    const $table: any = this.$refs.xTable
    $table.setActiveRow(row)
  }

  private saveRowEvent() {
    const $table: any = this.$refs.xTable
    $table.clearActived().then(() => {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 300)
    })
  }

  private cancelRowEvent(row) {
    const $table: any = this.$refs.xTable
    $table.clearActived().then(() => {
      // 还原行数据
      $table.revertData(row)
    })
  }
}
</script>
<style type="scss" scoped>
.el-input-number {
  width: 100%;
}
</style>
