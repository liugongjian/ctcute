<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 可编辑表格 - 弹框编辑
-->

<template>
  <div>
    <vxe-table ref="xTable" border="inner" show-overflow :loading="loading" :data="tableData">
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
          <el-button type="text" @click="editEvent(row)">编辑</el-button>
          <el-button type="text" @click="removeEvent(row)">删除</el-button>
        </template>
      </vxe-column>
    </vxe-table>

    <el-dialog
      class="medium-dialog"
      title="编辑"
      :visible="showEdit"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-scrollbar ref="scrollBar" class="medium-dialog--scroll">
        <div class="medium-dialog--content">
          <el-form ref="ruleForm" :model="form" label-width="124px">
            <el-form-item label="名字" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="form.sex">
                <el-option
                  v-for="item in sexList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input-number v-model="form.age" controls-position="right"></el-input-number>
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <el-input v-model="form.address" />
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
      <div class="medium-dialog--footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" :loading="loading" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import '@cutedesign/vxe-table'
import { getTableData2 } from './mock'
import { TableType2 } from './types'
import { SEX } from './dict'

@Component({
  name: 'EditTableDemo1',
})
export default class extends Vue {
  // 表格数据
  private tableData: Array<TableType2> = getTableData2()

  private form: TableType2 = {
    name: null,
    sex: null,
    age: null,
    address: null,
  }

  private selectRow: TableType2 = null

  private showEdit = false

  private sexList = [
    { label: '男', value: 'male' },
    { label: '女', value: 'female' },
  ]

  private loading = false

  private sexFormatter(sex) {
    return SEX[sex]
  }

  private editEvent(row) {
    this.form = {
      name: row.name,
      sex: row.sex,
      age: row.age,
      address: row.address,
    }
    this.selectRow = row
    this.showEdit = true
  }

  private async removeEvent(row) {
    const $table: any = this.$refs.xTable
    this.$confirm('确定要删除该行数据?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        $table.remove(row)
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
  }

  private close() {
    this.showEdit = false
  }

  private confirm() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.showEdit = false
      Object.assign(this.selectRow, this.form)
      this.$message.success('保存成功')
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
.el-select {
  width: 100%;
}
.el-input-number {
  width: 100%;
}
</style>
