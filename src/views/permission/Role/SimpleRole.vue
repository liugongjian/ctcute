<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 21:10:50
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-menu">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button type="primary" @click="addRoles">+ 添 加</el-button>
    </div>

    <!--弹窗-->
    <el-dialog
      class="medium-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <!--新增-->
      <div v-if="title === '新建'">
        <el-form :model="form" :rules="rules" label-width="90px" class="simple-form">
          <el-form-item label="角色名" prop="remark">
            <el-input placeholder="请输入角色名" />
          </el-form-item>
          <el-form-item label="角色标识" prop="disabledSelect">
            <el-input placeholder="请输入角色标识" />
          </el-form-item>

          <el-form-item label="备注" prop="disabledInput">
            <el-input placeholder="请输入备注" />
          </el-form-item>
          <el-form-item label="角色权限" prop="disabledInput">
            <cute-select-tree multiple />
          </el-form-item>
        </el-form>
      </div>
      <!-- 设置用户 -->
      <div v-if="title === '设置用户'">
        <el-transfer v-model="value" :data="data"></el-transfer>
      </div>
      <div class="medium-dialog--footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" :loading="false" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <!--表格-->
    <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData" fit border>
      <el-table-column prop="_id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="角色名"> </el-table-column>
      <el-table-column prop="code" label="角色标识" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="gotoEdit(row)">编辑</el-button>
          <el-button type="text" @click="gotoCopy(row)">复制</el-button>
          <el-button type="text" @click="gotoDel(row)">删除</el-button>
          <el-button type="text" @click="gotoSetUser(row)">设置用户</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 复制角色 弹窗 -->
    <warn-dialog
      v-if="copyVisible"
      :id="copyId"
      :visible.sync="copyVisible"
      title="确定拷贝角色吗? "
      message="拷贝会拷贝角色以及相关权限, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleCopy"
    />

    <!-- 删除角色 弹窗 -->
    <warn-dialog
      v-if="delVisible"
      :id="delId"
      :visible.sync="delVisible"
      title="确定删除角色吗? "
      message="删除后，拥有该角色的用户权限将受到影响, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleDel"
    />

    <!--分页-->
    <el-pagination
      :current-page="tableHook.pager.page"
      :page-size="tableHook.pager.limit"
      :total="tableHook.pager.total"
      @size-change="tableHook.handleSizeChange"
      @current-change="tableHook.handleCurrentChange"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import WarnDialog from './components/WarnDialog.vue'
import { getRoles, copyRoles, delRoles } from '@/api/simpleRole'
import TableHookClass from '@cutedesign/base/hook/TableHook'

@Component({
  name: 'SimpleTable',
  components: { WarnDialog },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable
  public tableHook = new TableHookClass()

  private value = [1, 4]

  //弹窗标题
  private title = ''

  //弹窗标题
  private visible = false

  //新增弹窗内容
  private addFlag = false

  //设置用户啊弹窗内容
  private setFlag = false

  //复制角色
  private copyVisible = false
  private copyId = ''
  //删除角色
  private delVisible = false
  private delId = ''

  /**
   * 页面Mounted
   */
  private mounted() {
    this.tableHook = new TableHookClass({}, this.getTable, this.tableRef, false)
    this.tableHook.query()
  }

  /**
   * 获取表格数据
   */
  private async getTable(param) {
    try {
      const res = await getRoles(param)
      if ((res as any).code === 200) {
        this.tableHook.setResult(res.data.result, res.data.pageInfo.totalItems)
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  /**
   * 新增角色
   */
  private addRoles() {
    this.addFlag = true
    this.visible = true
    this.title = '新建'
  }
  private gotoSetUser() {
    this.setFlag = true
    this.visible = true
    this.title = '设置用户'
  }
  private confirm() {}
  /**
   *  关闭弹窗
   */

  private close() {
    this.visible = false
  }

  /**
   *  复制角色按钮
   */
  private gotoCopy(row) {
    this.copyVisible = true
    this.copyId = row._id
  }
  /**
   *  复制角色事件
   */
  private async handleCopy(id) {
    try {
      const params = {
        _id: id,
      }
      const res = await copyRoles(params)
      if ((res as any).code === 200) {
        this.copyVisible = false
        this.$message.success('复制角色成功! ')
        this.copyId = ''
        this.tableHook.query()
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  /**
   *  删除角色按钮
   */
  private gotoDel(row) {
    this.delVisible = true
    this.delId = row._id
  }
  /**
   *  复制角色事件
   */
  private async handleDel(id) {
    try {
      const params = {
        _id: id,
      }
      const res = await delRoles(params)
      if ((res as any).code === 200) {
        this.delVisible = false
        this.$message.success('删除角色成功! ')
        this.delId = ''
        this.tableHook.query()
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
}
</script>
<style lang="scss" scoped>
.health-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 100%;

  &--1 {
    background: $color-status-success;
  }

  &--2 {
    background: $color-status-warning;
  }

  &--3 {
    background: $color-status-danger;
  }

  &--4 {
    background: $color-status-info;
  }

  &--5 {
    background: $disabled-color;
  }
}
</style>
