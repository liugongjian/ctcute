<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-31 10:02:40
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-menu">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button v-permission="['/permission/role:add']" type="primary" @click="addRoles">+ 添 加</el-button>
    </div>

    <!--表格-->
    <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData" fit border>
      <el-table-column prop="_id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="角色名"> </el-table-column>
      <el-table-column prop="code" label="角色标识" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button v-permission="['/permission/role:edit']" type="text" @click="gotoEdit(row)"
            >编辑</el-button
          >
          <el-button v-permission="['/permission/role:copy']" type="text" @click="gotoCopy(row)"
            >复制</el-button
          >
          <el-button v-permission="['/permission/role:del']" type="text" @click="gotoDel(row)"
            >删除</el-button
          >
          <el-button v-permission="['/permission/role:setuser']" type="text" @click="gotoSetUser(row)"
            >设置用户</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--设置用户弹窗-->
    <el-dialog
      class="medium-dialog"
      title="设置用户"
      :visible="setUserVisible"
      :close-on-click-modal="false"
      @close="setUserVisible = false"
    >
      <el-scrollbar
        ref="scrollBar"
        class="medium-dialog--scroll"
        :wrap-style="{ maxHeight: isFullscreen ? '100%' : '461px', width: '100%' }"
      >
        <div class="medium-dialog--content" style="margin-bottom: 24px">
          <el-transfer
            ref="myTransfer"
            v-model="roleValue"
            v-loading="roleLoading"
            :titles="['用户', '角色下已有用户']"
            :data="roleData"
            filterable
            filter-placeholder="请输入姓名或手机号"
            @change="handleChange"
          ></el-transfer>
        </div>
      </el-scrollbar>
    </el-dialog>
    <!-- 编辑、添加角色 弹窗 -->
    <add-or-edit-role-dialog
      v-if="roleDialogVisible"
      :id="editRow._id"
      :edit-row="editRow"
      :visible.sync="roleDialogVisible"
      :role-dialog-status="roleDialogStatus"
      @confirm="handleAddOrEidt"
    />
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
import { ElTransfer } from 'element-ui/types/transfer'
import WarnDialog from './components/WarnDialog.vue'
import { getRoles, copyRoles, delRoles, getRoleUser, setRole } from '@/api/simpleRole'
import { getUsers } from '@/api/simpleUser'
import TableHookClass from '@cutedesign/base/hook/TableHook'
import AddOrEditRoleDialog from './components/AddOrEditRoleDialog.vue'
@Component({
  name: 'SimpleTable',
  components: { WarnDialog, AddOrEditRoleDialog },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable
  public tableHook = new TableHookClass()
  @Ref('myTransfer')
  private myTransfer: ElTransfer

  private isFullscreen = false

  //添加角色、编辑角色弹窗
  private roleDialogStatus = 'create'
  private roleDialogVisible = false
  private editRow = {
    _id: '',
    name: '',
    email: '',
    remark: '',
    menus: [],
  }

  //设置用户弹窗内容
  private setUserVisible = false
  private roleLoading = false
  private roleValue = []
  private roleData = []
  private setRoleUserRow = {
    _id: '',
  }
  private roleListQuery = {
    searchkey: '',
  }

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
    this.roleDialogVisible = true
    this.roleDialogStatus = 'create'
    this.editRow = {
      _id: '',
      name: '',
      email: '',
      remark: '',
      menus: [],
    }
  }
  /**
   * 编辑角色
   */
  private gotoEdit(row) {
    this.roleDialogVisible = true
    this.roleDialogStatus = 'update'
    this.editRow = { ...row }
  }
  private handleAddOrEidt() {
    this.tableHook.query()
  }
  /**
   * 设置角色
   */
  private gotoSetUser(row) {
    this.setRoleUserRow = Object.assign({}, row)
    setTimeout(() => {
      this.myTransfer.clearQuery('right')
    }, 10)
    this.getRoles()
    this.infoGetRole()
    this.setUserVisible = true
  }
  // 查询所有用户
  private async getRoles() {
    this.roleLoading = true
    try {
      const res = await getUsers({
        isPaging: 0,
        ...this.roleListQuery,
      })
      if ((res as any).code === 200) {
        const data = res.data.result
        this.roleData = []
        data.forEach(item => {
          this.roleData.push({
            label: item.name + '(' + item.phone + ')',
            key: item._id,
            id: item._id,
          })
        })
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  // 获取当前角色下的所有用户
  private async infoGetRole() {
    this.roleValue = []
    try {
      const res = await getRoleUser(this.setRoleUserRow)
      if ((res as any).code === 200) {
        const arr = res.data
        arr.forEach(item => {
          this.roleValue.push(item._id)
        })
        this.roleLoading = false
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  // 左右触发事件
  private handleChange(value, direction, movedKeys) {
    this.roleLoading = true
    const arr = this.getMoveId(value)
    // 设置角色用户接口
    setRole({ _id: this.setRoleUserRow._id, users: arr })
      .then(res => {
        this.roleLoading = false
        this.$message({
          message: res.data,
          type: 'success',
        })
      })
      .catch(res => {
        this.$message.error(res.msg)
      })
    // 获取移动的项
    const moveId = this.getMoveId(movedKeys)
    // 移除角色下已有用户时改变原zen用户下相同用户disable状态(若不移除会出现两个相同用户只是一个不可选择一个可选择)
    if (direction === 'left') {
      moveId.forEach(item => {
        // 过滤出移动项id与整个数组相同id的数据项
        this.roleData
          .filter(_item => {
            return _item.id === item
          })
          .map((str, _index, newArr) => {
            // 右侧数据改变时左侧去重并改变disable
            if (newArr.length > 1) {
              if (str.disabled) {
                str.disabled = false
              } else {
                this.roleData.splice(this.roleData.indexOf(str), 1)
              }
            }
          })
      })
    }
  }
  // 封装通过key查找相应id值
  getMoveId(val) {
    const arr = []
    val.forEach(item => {
      this.roleData
        .filter(data => {
          return data.key === item
        })
        .map(_item => {
          arr.push(_item.id)
        })
    })
    return arr
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
   *  删除角色事件
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
<style lang="scss" scoped></style>
