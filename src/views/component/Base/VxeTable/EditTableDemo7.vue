<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 可编辑表格-展开行
-->

<template>
  <div>
    <vxe-table ref="xTable4" border="inner" show-overflow :loading="loading" :data="tableData">
      <vxe-column type="expand" title="#">
        <template #default="{ rowIndex }">
          <span>{{ rowIndex + 1 }}</span>
        </template>
        <template #content="{ row }">
          <el-form ref="simpleForm" label-width="90px">
            <el-form-item label="名字" prop="name">
              <el-input v-model="row.name" />
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="row.sex" popper-class="vxe-table--ignore-clear">
                <el-option
                  v-for="item in sexList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input-number v-model="row.age" controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="地址四字" prop="address">
              <el-input v-model="row.address" />
            </el-form-item>
          </el-form>
        </template>
      </vxe-column>
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
  name: 'EditTableDemo7',
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
}
</script>

<style scoped>
::v-deep .el-input__inner {
  width: 200px;
}
</style>
