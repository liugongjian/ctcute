<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-10-18 14:18:42
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-user">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__left">
        <el-button v-permission="['/permission/user/:add']" type="primary" @click="addUser"
          >+ 添加用户</el-button
        >
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
          <el-form-item prop="searchkey">
            <el-input v-model="conditions.searchkey" placeholder="请输入用户名/手机号" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button type="primary" @click="tableHook.query()">查询</el-button>
            <el-button @click="resetConditions">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--表格-->
    <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData" fit border>
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
          <el-button v-permission="['/permission/user/:edit']" type="text" @click="editUser(row)"
            >编辑</el-button
          >
          <el-button v-permission="['/permission/user/:setrole']" type="text" @click="setRoles(row)"
            >设置角色</el-button
          >
          <el-button v-permission="['/permission/user/:reset']" type="text" @click="resetPassword(row)"
            >重置密码</el-button
          >
          <el-button
            v-if="row.status === 0"
            v-permission="['/permission/user/:freeze']"
            type="text"
            @click="freeze(row)"
            >冻结</el-button
          >
          <el-button
            v-if="row.status === -2"
            v-permission="['/permission/user/:unfreeze']"
            type="text"
            @click="unfreeze(row)"
            >解冻</el-button
          >
          <el-button v-permission="['/permission/user/:del']" type="text" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--设置角色弹窗-->
    <el-dialog
      class="medium-dialog"
      title="设置角色"
      :visible="roleVisible"
      :close-on-click-modal="false"
      @close="roleVisible = false"
    >
      <el-scrollbar
        ref="scrollBar"
        class="medium-dialog--scroll"
        :wrap-style="[{ maxHeight: isFullscreen ? '100%' : '461px' }]"
      >
        <div class="medium-dialog--content">
          <el-form :model="roleDataForm" label-width="80px">
            <el-form-item label="用户名" prop="roleRow.name">
              <el-input v-model="roleRow.name" placeholder="请输用户名" :disabled="true" />
            </el-form-item>
            <el-form-item label="角色" prop="roleCheckList">
              <el-checkbox-group v-model="roleCheckList">
                <el-checkbox v-for="role in roles" :key="role._id" :label="role._id">{{
                  role.name
                }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
      <div class="medium-dialog--footer">
        <el-button @click="roleVisible = false">取 消</el-button>
        <el-button type="primary" :loading="setRoleLoading" @click="handleSetRole">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑、添加用户 弹窗 -->
    <add-or-edit-user-dialog
      v-if="userDialogVisible"
      :id="editRow._id"
      :edit-row="editRow"
      :visible.sync="userDialogVisible"
      :user-dialog-status="userDialogStatus"
      @confirm="handleAddOrEidt"
    />
    <!-- 冻结 弹窗 -->
    <warn-dialog
      v-if="freezeVisible"
      :id="freezeId"
      type=""
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
      type=""
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
      type=""
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
      type="pwd"
      :visible.sync="copyPWDVisible"
      :title="resetPWDId ? '重置密码成功' : '添加用户成功'"
      :message="resetPWDMessage"
      cancel-button-text="取消"
      confirm-button-text="复制密码"
      @confirm="handleCopyPWD"
      @pwdCancel="tableHook.query()"
    />
    <!-- 解冻 弹窗 -->
    <warn-dialog
      v-if="delVisible"
      :id="delId"
      type=""
      :visible.sync="delVisible"
      title="确定删除用户吗? "
      message="此操作将永久删除用户, 是否继续？"
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
import { ElForm } from 'element-ui/types/form'
import { ElTable } from 'element-ui/types/table'
import * as SimpleUser from '@/types/SimpleUser'
import {
  getUsers,
  freezeUsers,
  unfreezeUsers,
  delUsers,
  resetPWDUsers,
  getUserRoles,
  setUserRole,
} from '@/api/simpleUser'
import { formatDatetime } from '@/utils/date'
import copy from 'copy-to-clipboard'
import WarnDialog from './components/WarnDialog.vue'
import AddOrEditUserDialog from './components/AddOrEditUserDialog.vue'
import TableHookClass from '@cutedesign/base/hook/TableHook'
import { getRoles } from '@/api/simpleRole'

@Component({
  name: 'SimpleTable',
  components: { WarnDialog, AddOrEditUserDialog },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable
  // 条件搜索表单
  @Ref('conditions')
  private conditionsForm: ElForm
  // 角色设置表单
  @Ref('roleDataForm')
  private roleDataForm: ElForm

  public tableHook = new TableHookClass()

  //角色弹窗开关
  private roleVisible = false
  private roleRow = { _id: '' }
  private roleCheckList = []
  private isFullscreen = false
  private roles = []
  private setRoleLoading = false

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

  // 状态下拉框选项
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

  /**
   * 页面mounted
   */
  private mounted() {
    this.tableHook = new TableHookClass(this.conditions, this.getTable, this.tableRef, false)
    this.tableHook.query()
  }
  /**
   * 重置搜索表单
   */
  private resetConditions() {
    this.conditionsForm.resetFields()
    this.tableHook.query()
  }
  /**
   * 获取表格数据
   */
  private async getTable(param) {
    try {
      const res = await getUsers(param)
      if ((res as any).code === 200) {
        this.tableHook.setResult(res.data.result, res.data.pageInfo.totalItems)
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  /**
   *新增用户
   */
  private addUser() {
    this.userDialogStatus = 'create'
    this.userDialogVisible = true
    this.editRow = {
      _id: '',
      name: '',
      phone: '',
      email: '',
      remark: '',
    }
  }

  /**
   *编辑用户
   */
  private editUser(row) {
    this.userDialogStatus = 'update'
    this.userDialogVisible = true
    this.editRow = { ...row }
  }
  private handleAddOrEidt(data) {
    if (data) {
      // 创建 跳出复制密码弹窗
      this.copyPWDVisible = data.copyPWDVisible
      this.resetPWDMessage = data.resetPWDMessage
    } else {
      // edit 重新获取数据
      this.tableHook.query()
    }
  }

  /**
   *设置角色
   */
  private setRoles(row) {
    this.roleVisible = true
    this.roleRow = row
    //获取所有角色
    this.getRoles()
    //获取用户的所有角色
    this.getUserRoles(this.roleRow)
  }
  /**
   *获取角色
   */
  private async getUserRoles(row) {
    try {
      const res = await getUserRoles({ _id: row._id })
      if ((res as any).code === 200 && res.data) {
        this.roleCheckList = res.data
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  /**
   *获取角色
   */
  private async getRoles() {
    try {
      const res = await getRoles({ isPaging: 0 })
      if ((res as any).code === 200) {
        this.roles = res.data.result
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  /**
   * 角色确认事件
   */
  private async handleSetRole() {
    this.setRoleLoading = true
    const data = {
      _id: this.roleRow._id,
      roles: this.roleCheckList,
    }
    try {
      const res = await setUserRole(data)
      this.setRoleLoading = false
      if ((res as any).code === 200) {
        this.$message.success('设置角色成功')
        this.tableHook.query()
      } else {
        this.$message.error((res as any).msg)
      }
      this.roleVisible = false
    } catch (e) {
      console.error(e)
    } finally {
    }
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
      const res = await freezeUsers(id)
      if ((res as any).code === 200) {
        this.freezeVisible = false
        this.$message.success('冻结成功! ')
        this.freezeId = ''
        // this.getTable()
        this.tableHook.query()
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
      const res = await unfreezeUsers(id)
      if ((res as any).code === 200) {
        this.unfreezeVisible = false
        this.$message.success('解冻成功! ')
        this.unfreezeId = ''
        this.tableHook.query()
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
        this.tableHook.query()
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
      const res = await resetPWDUsers(id)
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
    this.tableHook.query()
  }
}
</script>
<style lang="scss" scoped></style>
