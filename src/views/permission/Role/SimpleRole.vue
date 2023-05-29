<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-16 13:34:50
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-table">
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
      <el-table-column prop="actions" label="操作" width="120" fixed="right" class-name="actions">
        <template slot-scope="{ row, $index }">
          <el-button v-permission="['/permission/role:edit']" type="text" @click="gotoEdit(row)">
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
                <el-button v-permission="['/permission/role:setuser']" type="text" @click="gotoSetUser(row)">
                  设置用户
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button v-permission="['/permission/role:copy']" type="text" @click="gotoCopy(row)">
                  复制
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button v-permission="['/permission/role:del']" type="text" @click="gotoDel(row)">
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

    <!-- 编辑、添加角色 弹窗 -->
    <add-or-edit-role-dialog
      v-if="roleDialogVisible"
      :id="editRow._id"
      :edit-row="editRow"
      :visible.sync="roleDialogVisible"
      :role-dialog-status="roleDialogStatus"
      @confirm="handleAddOrEidt"
    />

    <!--设置用户弹窗-->
    <el-dialog
      title="设置用户"
      width="600px"
      :visible="setUserVisible"
      :close-on-click-modal="false"
      @close="setUserVisible = false"
    >
      <el-transfer
        ref="myTransfer"
        v-model="roleValue"
        v-loading="roleLoading"
        :titles="['用户', '角色下已有用户']"
        :data="roleData"
        filterable
        filter-placeholder="请输入姓名或手机号"
        @change="handleChange"
      />
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import { ElTransfer } from 'element-ui/types/transfer'
import { getRoles, copyRoles, delRoles, getRoleUser, setRole } from '@/api/simpleRole'
import { getUsers } from '@/api/simpleUser'
import TableHookClass from '@cutedesign/ui/hook/TableHook'
import AddOrEditRoleDialog from './components/AddOrEditRoleDialog.vue'
@Component({
  name: 'SimpleTable',
  components: { AddOrEditRoleDialog },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable
  public tableHook = new TableHookClass()
  @Ref('myTransfer')
  private myTransfer: ElTransfer

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
    setRole({ roleId: this.setRoleUserRow._id, users: arr })
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
          .filter(_item => _item.id === item)
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
  private async gotoCopy(row) {
    try {
      await this.$confirm('拷贝会拷贝角色以及相关权限, 是否继续？', '确定拷贝角色吗？', {
        type: 'warning',
      })

      const res = await copyRoles(row._id)
      if ((res as any).code === 200) {
        this.$message.success('复制角色成功! ')
        this.tableHook.query()
      }
    } catch (err) {
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }

  /**
   *  删除角色按钮
   */
  private async gotoDel(row) {
    try {
      await this.$confirm('删除后，拥有该角色的用户权限将受到影响, 是否继续？', '确定删除角色吗？', {
        type: 'warning',
      })

      const res = await delRoles(row._id)
      if ((res as any).code === 200) {
        this.$message.success('删除角色成功! ')
        this.tableHook.query()
      }
    } catch (err) {
      if (err !== 'cancel') {
        console.log(err.msg || err)
      }
    }
  }

  // 下拉展开旋转小三角
  private openDropdown(index) {
    this.tableHook.tableData[index].flag = !this.tableHook.tableData[index].flag
  }
}
</script>
<style lang="scss" scoped></style>
