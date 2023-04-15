<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-15 23:29:22
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-user">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__left">
        <el-button v-permission="['/permission/user/:add']" type="primary" @click="addUser">
          + 添加用户
        </el-button>
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
      <el-table-column prop="actions" label="操作" width="120" fixed="right" class-name="actions">
        <template slot-scope="{ row, $index }">
          <el-button v-permission="['/permission/user/:edit']" type="text" @click="editUser(row)">
            编辑
          </el-button>
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown($index)">
            <el-button type="text" size="small" class="bt-operation">
              更多
              <i
                class="el-icon-arrow-down el-icon--right"
                :class="row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
              />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button v-permission="['/permission/user/:setrole']" type="text" @click="setRoles(row)">
                  设置角色
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button v-permission="['/permission/user/:reset']" type="text" @click="resetPassword(row)">
                  重置密码
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item v-if="row.status === 0">
                <el-button v-permission="['/permission/user/:freeze']" type="text" @click="freeze(row)">
                  冻结
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item v-if="row.status === -2">
                <el-button v-permission="['/permission/user/:unfreeze']" type="text" @click="unfreeze(row)">
                  解冻
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button v-permission="['/permission/user/:del']" type="text" @click="del(row)">
                  删除
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      class="pagination"
      :current-page.sync="tableHook.pager.page"
      :page-size.sync="tableHook.pager.limit"
      :total="tableHook.total"
      @size-change="() => tableHook.handleSizeChange(tableHook.pager.limit)"
      @current-change="() => tableHook.handleCurrentChange(tableHook.pager.page)"
    />

    <!--设置角色弹窗-->
    <el-dialog
      class="medium-dialog"
      width="600px"
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
                <el-checkbox v-for="role in roles" :key="role._id" :label="role._id">
                  {{ role.name }}
                </el-checkbox>
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
import AddOrEditUserDialog from './components/AddOrEditUserDialog.vue'
import TableHookClass from '@cutedesign/ui/hook/TableHook'
import { getRoles } from '@/api/simpleRole'

const defaultItem = {
  _id: '',
  name: '',
  phone: '',
  email: '',
  remark: '',
}

@Component({
  name: 'SimpleTable',
  components: { AddOrEditUserDialog },
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
  private editRow = { ...defaultItem }

  // 搜索信息
  private conditions: SimpleUser.Conditions = {
    status: '',
    searchkey: '',
  }

  private formatDatetime = formatDatetime

  // 状态下拉框选项
  private statusOptions = [
    { value: '', label: '全部' },
    { value: 0, label: '正常' },
    { value: -2, label: '冻结' },
  ]

  private mounted() {
    this.tableHook = new TableHookClass(this.conditions, this.getTable, this.tableRef, false)
    this.tableHook.query()
  }

  // 重置搜索表单
  private resetConditions() {
    this.conditionsForm.resetFields()
    this.conditions.status = ''
    this.conditions.searchkey = ''
    this.tableHook.query()
  }

  // 获取表格数据
  private async getTable(param) {
    try {
      const res = await getUsers(param)
      if (res.code === 200) {
        this.tableHook.setResult(
          res.data.result.map(item => ({ ...item, flag: false })),
          res.data.pageInfo.totalItems
        )
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }

  // 下拉展开旋转小三角
  private openDropdown(index) {
    this.tableHook.tableData[index].flag = !this.tableHook.tableData[index].flag
  }

  // 新增
  private addUser() {
    this.userDialogStatus = 'create'
    this.userDialogVisible = true
    this.editRow = { ...defaultItem }
  }

  // 编辑用户
  private editUser(row) {
    this.userDialogStatus = 'update'
    this.userDialogVisible = true
    this.editRow = { ...row }
  }

  // 新增/编辑回调
  private async handleAddOrEidt(msg) {
    this.tableHook.query()

    if (msg) {
      try {
        await this.$confirm(msg, '重置密码成功', {
          type: 'success',
          confirmButtonText: '复制密码',
        })

        copy(msg)
        this.$message.success('密码已复制! ')
      } catch (e) {
        //
      }
    }
  }

  // 设置角色
  private setRoles(row) {
    this.roleVisible = true
    this.roleRow = row
    //获取所有角色
    this.getRoles()
    //获取用户的所有角色
    this.getUserRoles(this.roleRow)
  }

  // 获取用户角色
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
  // 获取所有角色
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

  // 角色确认事件
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

  // 重置密码
  private async resetPassword(row) {
    try {
      await this.$confirm('重置后会导致原密码不可用, 是否继续？', '确认要重置密码吗？', {
        type: 'warning',
      })

      const res = await resetPWDUsers(row._id)
      if (res.code === 200) {
        const msg = `密码: ${res.data.password}`

        await this.$confirm(msg, '重置密码成功', {
          type: 'success',
          confirmButtonText: '复制密码',
        })

        copy(msg)
        this.$message.success('密码已复制! ')
      }

      this.tableHook.query()
    } catch (err) {
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }

  // 点击冻结按钮
  private async freeze(row) {
    try {
      await this.$confirm('冻结后会导致该用户不能登录, 是否继续？', '确定冻结用户吗？', {
        type: 'warning',
      })

      const res = await freezeUsers(row._id)
      if (res.code === 200) {
        this.$message.success('冻结成功! ')
        this.tableHook.query()
      }
    } catch (err) {
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }

  // 点击解冻按钮
  private async unfreeze(row) {
    try {
      await this.$confirm('解冻后该用户即可正常登录, 是否继续？', '确定解冻用户吗？', {
        type: 'warning',
      })

      const res = await unfreezeUsers(row._id)
      if (res.code === 200) {
        this.$message.success('解冻成功! ')
        this.tableHook.query()
      }
    } catch (err) {
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }

  // 点击删除按钮
  private async del(row) {
    try {
      await this.$confirm('此操作将永久删除用户, 是否继续？', '确定删除用户吗？', {
        type: 'warning',
      })

      const data = {
        ids: [row._id],
      }
      const res = await delUsers(data)
      if (res.code === 200) {
        this.$message.success('删除成功! ')
        this.tableHook.query()
      }
    } catch (err) {
      console.log(err)
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
