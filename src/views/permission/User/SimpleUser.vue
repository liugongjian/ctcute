<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 15:09:24
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-user">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__left">
        <el-button type="primary" @click="addUser">+ 新增按钮</el-button>
      </div>
      <div class="table-tools__right table-tools__conditions">
        <el-form ref="conditions" :model="conditions" inline @submit.native.prevent>
          <el-form-item prop="host">
            <el-select v-model="conditions.status" placeholder="请选择状态">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="conditions.searchkey" placeholder="请输入用户名/手机号" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="resetConditions">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit border>
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          <div v-if="scope.row.status === 0">正常</div>
          <div v-else-if="scope.row.status === -2">冻结</div>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" :show-overflow-tooltip="true" />
      <el-table-column prop="createdTime" label="创建时间">
        <template slot-scope="scope">
          <div>
            {{ formatDatetime(scope.row.createdTime) }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录时间">
        <template slot-scope="scope">
          <div>
            {{ formatDatetime(scope.row.lastLoginTime) }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="actions" label="操作" width="300" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="editUser(row)">编辑</el-button>
          <el-button type="text" @click="setRoles(row)">设置角色</el-button>
          <el-button type="text" @click="resetPassword(row)">重置密码</el-button>
          <el-button v-if="row.status === 0" type="text" @click="freeze(row)">冻结</el-button>
          <el-button v-if="row.status === -2" type="text" @click="unfreeze(row)">解冻</el-button>
          <el-button type="text" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--弹窗-->
    <el-dialog
      :class="title === '确认要重置密码吗' ? 'warn-dialog' : title === '设置角色' ? 'medium-dialog' : ''"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div v-if="title === '确认要重置密码吗'">
        <div class="warn-dialog--content">
          <slot name="icon">
            <svg-icon name="info-circle-fill" />
          </slot>
          <slot name="content">重置后会导致原密码不可用</slot>
        </div>
      </div>
      <div v-if="title === '设置角色'">
        <el-form :model="form" :rules="rules" label-width="90px" class="simple-form">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输用户名" />
          </el-form-item>
          <el-form-item label="角色" prop="disabledSelect">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="审计员"></el-checkbox>
              <el-checkbox label="账号开通,冻结"></el-checkbox>
              <el-checkbox label="超级管理员"></el-checkbox>
              <el-checkbox label="运营人员"></el-checkbox>
              <el-checkbox label="用户管理"></el-checkbox>
              <el-checkbox label="角色管理"></el-checkbox>
              <el-checkbox label="菜单管理"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
      <div
        :class="
          title === '确认要重置密码吗'
            ? 'warn-dialog--btns'
            : title === '设置角色'
            ? 'medium-dialog--footer'
            : ''
        "
      >
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑、添加用户 弹窗 -->
    <add-or-edit-user-dialog
      v-if="userDialogVisible"
      :edit-row="editRow"
      :visible.sync="userDialogVisible"
      :user-dialog-status="userDialogStatus"
      @confirm="handleAddOrEidt"
    />
    <!-- 冻结 弹窗 -->
    <warn-dialog
      v-if="freezeVisible"
      :id="freezeId"
      :visible.sync="freezeVisible"
      title="确定冻结用户吗? "
      message="冻结后会导致该用户不能登录, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleFreeze"
    />
    <!-- 解冻 弹窗 -->
    <warn-dialog
      v-if="unfreezeVisible"
      :id="unfreezeId"
      :visible.sync="unfreezeVisible"
      title="确定解冻用户吗? "
      message="解冻后该用户即可正常登录, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleunFreeze"
    />
    <!-- 重置密码 弹窗 -->
    <warn-dialog
      v-if="resetPWDVisible"
      :id="resetPWDId"
      :visible.sync="resetPWDVisible"
      title="确认要重置密码吗? "
      message="重置后会导致原密码不可用, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleResetPWD"
    />
    <!-- 复制用户名密码 弹窗 -->
    <warn-dialog
      v-if="copyPWDVisible"
      id=""
      :visible.sync="copyPWDVisible"
      :title="resetPWDId ? '重置密码成功' : '添加用户成功'"
      :message="resetPWDMessage"
      cancel-button-text="取消"
      confirm-button-text="复制密码"
      @confirm="handleCopyPWD"
    />
    <!-- 解冻 弹窗 -->
    <warn-dialog
      v-if="delVisible"
      :id="delId"
      :visible.sync="delVisible"
      title="确定删除用户吗? "
      message="此操作将永久删除用户, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleDel"
    />
    <!--分页-->
    <el-pagination
      :current-page="pager.page"
      :page-size="pager.limit"
      :total="pager.total"
      :hide-on-single-page="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as SimpleUser from '@/types/SimpleUser'
import {
  getUsers,
  freezeUsers,
  unfreezeUsers,
  delUsers,
  resetPWDUsers,
  editUsers,
  addUsers,
} from '@/api/simpleUser'
import { formatDatetime } from '@/utils/date'
import copy from 'copy-to-clipboard'
import WarnDialog from './components/WarnDialog.vue'
import AddOrEditUserDialog from './components/AddOrEditUserDialog.vue'

@Component({
  name: 'SimpleTable',
  components: { WarnDialog, AddOrEditUserDialog },
})
export default class extends Vue {
  private checkList = []
  //弹窗标题
  private title = ''
  private token = localStorage.getItem('token')

  //弹窗开关
  private visible = false

  //设置角色弹窗
  private setrole = false

  //添加用户、编辑用户弹窗
  private userDialogStatus = 'create'
  private userDialogVisible = false
  private editRow = {
    _id: '',
    name: '',
    phone: '',
    email: '',
    remark: '',
  }

  //冻结弹窗
  private freezeVisible = false
  private freezeId = ''

  //冻结弹窗
  private unfreezeVisible = false
  private unfreezeId = ''

  //删除弹窗
  private delVisible = false
  private delId = ''

  //重置密码弹窗
  private resetPWDVisible = false
  private resetPWDId = ''

  //复制用户名密码弹窗
  private copyPWDVisible = false
  private resetPWDMessage = ''

  // 搜索信息
  private conditions: SimpleUser.Conditions = {
    status: '',
    searchkey: '',
  }
  private formatDatetime = formatDatetime

  // 主机信息下拉框选项
  private statusOptions = [
    {
      value: '',
      label: '全部',
    },
    {
      value: 0,
      label: '正常',
    },
    {
      value: -2,
      label: '冻结',
    },
  ]

  // 分页信息
  private pager = {
    page: 1,
    limit: 10,
    total: 0,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData = []

  /**
   * 页面Mounted
   */
  private created() {
    this.getTable()
  }
  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      // 分页信息和搜索条件
      const params: SimpleUser.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        ...this.conditions,
      }
      this.loading = true
      const res = await getUsers(params)
      if ((res as any).code === 200) {
        this.loading = false
        this.tableData = res.data.result
        this.pager.total = res.data.pageInfo.totalItems
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }

  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    this.getTable()
  }

  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    this.getTable()
  }

  /**
   * 搜索
   */
  private search() {
    this.getTable()
  }

  /**
   * 重置搜索表单
   */
  private resetConditions() {
    this.conditions = {
      status: '',
      searchkey: '',
    }
    this.getTable()
  }

  /**
   * 关闭弹窗
   */
  private close() {
    this.visible = false
  }

  /**
   * 确认弹窗
   */
  private confirm() {
    this.visible = false
  }

  /**
   *新增用户
   */
  private addUser() {
    this.userDialogStatus = 'create'
    this.userDialogVisible = true
  }

  /**
   *编辑用户
   */
  private editUser(row) {
    this.userDialogStatus = 'update'
    this.userDialogVisible = true
    this.editRow = { ...row }
  }

  private async handleAddOrEidt(form) {
    if (form._id) {
      //编辑
      try {
        const data = {
          _id: form._id,
          name: form.name,
          remark: form.remark,
        }
        const res = await editUsers(data._id, data)
        if ((res as any).code === 200) {
          this.userDialogVisible = false
          this.$message.success('编辑成功! ')
          this.getTable()
        } else {
          this.$message.error((res as any).msg)
          this.getTable()
        }
      } catch (e) {
        console.error(e)
      } finally {
      }
    } else {
      //新增
      try {
        const res = await addUsers(form)
        if ((res as any).code === 200) {
          this.userDialogVisible = false
          this.copyPWDVisible = true
          this.resetPWDMessage = `密码: ${(res as any).data.password}`
        }
      } catch (e) {
        console.error(e)
      } finally {
      }
    }
  }

  /**
   *设置角色
   */
  private setRoles() {
    this.visible = true
    this.title = '设置角色'
  }

  /**
   *点击冻结按钮
   */
  private freeze(row) {
    this.freezeVisible = true
    this.freezeId = row._id
  }

  /**
   *冻结事件
   */
  private async handleFreeze(id) {
    try {
      const params = {
        _id: id,
      }
      const res = await freezeUsers(params)
      if ((res as any).code === 200) {
        this.freezeVisible = false
        this.$message.success('冻结成功! ')
        this.freezeId = ''
        this.getTable()
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  /**
   *点击解冻按钮
   */
  private unfreeze(row) {
    this.unfreezeVisible = true
    this.unfreezeId = row._id
  }

  /**
   *解冻事件
   */
  private async handleunFreeze(id) {
    try {
      const params = {
        _id: id,
      }
      const res = await unfreezeUsers(params)
      if ((res as any).code === 200) {
        this.unfreezeVisible = false
        this.$message.success('解冻成功! ')
        this.unfreezeId = ''
        this.getTable()
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  /**
   *点击删除按钮
   */
  private del(row) {
    this.delVisible = true
    this.delId = row._id
  }

  /**
   *删除事件
   */
  private async handleDel(id) {
    try {
      const data = {
        ids: [id],
      }
      const res = await delUsers(data)
      if ((res as any).code === 200) {
        this.delVisible = false
        this.$message.success('删除成功! ')
        this.delId = ''
        this.getTable()
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  /**
   * 重置密码
   */
  private resetPassword(row) {
    this.resetPWDVisible = true
    this.resetPWDId = row._id
  }

  /**
   *重置密码事件
   */
  private async handleResetPWD(id) {
    try {
      const params = {
        _id: id,
      }
      const res = await resetPWDUsers(params)
      if ((res as any).code === 200) {
        this.resetPWDVisible = false
        this.copyPWDVisible = true
        this.resetPWDMessage = `密码: ${(res as any).data.password}`
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  /**
   *复制密码事件
   */
  private handleCopyPWD() {
    this.copyPWDVisible = false
    const str = this.resetPWDMessage
    copy(str)
    this.$message.success('密码已复制! ')
    this.getTable()
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
