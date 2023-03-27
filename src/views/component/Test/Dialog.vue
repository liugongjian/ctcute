<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-23 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-23 14:09:19
 * @Description: Dialog
-->
<template>
  <div class="dialog-test">
    <h1>Dialog</h1>
    <el-row>
      <h3>基本用法</h3>
      <el-button @click="dialogVisible1 = true">点击打开 Dialog</el-button>
      <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%">
        <span>
          这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
        </span>
        <div slot="footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-row>
      <h3>自定义内容</h3>
      <el-button @click="dialogTableVisible = true">打开嵌套表格的 Dialog (未固定高度)</el-button>
      <el-button @click="dialogTableVisible2 = true">打开嵌套表格的 Dialog (固定高度)</el-button>
      <el-button @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

      <!-- Table1 -->
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="gridData" style="margin: 0">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <div slot="footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- Table2 -->
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible2" custom-class="dialog-fixed-height">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <div slot="footer">
          <el-button @click="dialogTableVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- Form -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-row>
      <h3>全屏</h3>
      <el-button @click="dialogFullscreenVisible = true">打开全屏嵌套表格的 Dialog</el-button>

      <!-- Table -->
      <el-dialog title="收货地址" :visible.sync="dialogFullscreenVisible" fullscreen>
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <div slot="footer">
          <el-button @click="dialogFullscreenVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFullscreenVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dialog',
})
export default class extends Vue {
  private dialogVisible1 = false
  private dialogTableVisible = false
  private dialogTableVisible2 = false
  private dialogFullscreenVisible = false
  private dialogFormVisible = false

  private gridData = []

  private form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  }
  private formLabelWidth = '120px'

  private mounted() {
    for (let i = 0; i < 50; i++) {
      this.gridData.push({
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-table {
  margin: 0;
}

.dialog-test {
  ::v-deep .dialog-fixed-height {
    height: 70vh;
  }
}
</style>
