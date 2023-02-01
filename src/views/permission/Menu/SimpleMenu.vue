<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2023-01-11 17:21:00
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-menu">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button v-permission="['/permission/menu:add']" type="primary" @click="addMenus">+ 添 加</el-button>
    </div>

    <!--弹窗-->
    <el-dialog
      class="medium-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-scrollbar
        ref="scrollBar"
        class="medium-dialog--scroll"
        :wrap-style="[{ maxHeight: isFullscreen ? '100%' : '521px' }]"
      >
        <div class="medium-dialog--content">
          <el-form ref="menusRef" label-width="90px" :rules="rules" :model="menusForm">
            <el-form-item v-if="title === '添加菜单'" label="类型" prop="type">
              <el-radio-group v-model="menusForm.menuType" @change="typeChange">
                <el-radio-button :label="1">菜单</el-radio-button>
                <el-radio-button :label="2">权限</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-else label="类型" prop="type">
              <el-radio-group
                v-if="menusForm.menuType === 1"
                v-model="menusForm.menuType"
                @change="typeChange"
              >
                <el-radio-button :label="1">菜单</el-radio-button>
                <el-radio-button :label="2" disabled>权限</el-radio-button>
              </el-radio-group>
              <el-radio-group v-else v-model="menusForm.menuType" @change="typeChange">
                <el-radio-button :label="1" disabled>菜单</el-radio-button>
                <el-radio-button :label="2">权限</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="名称" prop="name">
              <el-input v-model="menusForm.name" placeholder="请输入名称" />
            </el-form-item>
            <el-form-item label="上级菜单" prop="parents">
              <cute-select-tree v-model="menusForm.parents" :options="dataOptions" @change="handleTree" />
            </el-form-item>

            <el-form-item label="排序" prop="orderNum">
              <el-input v-model="menusForm.orderNum" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="路由" prop="url">
              <el-input v-model="menusForm.url" placeholder="请输入" />
            </el-form-item>
            <div v-if="menusForm.menuType === 2">
              <hr class="segmentation" />
              <el-form-item>
                <el-alert :closable="false" title="权限标识与别名说明" type="info" class="el-alert-primary">
                  <p class="el-alert__description">
                    标识，别名属同一个权限，主要用于前后分离,前后权限标识不一致,且前后两端皆需判定权限的项目。一般情况别名置空即可,如有多个别名可逗号分隔。
                  </p>
                </el-alert>
              </el-form-item>

              <el-form-item label="标识" prop="perms">
                <el-input v-model="menusForm.perms" placeholder="请输入" :disabled="title === '编辑菜单'" />
              </el-form-item>

              <el-form-item label="别名" prop="alias">
                <el-input v-model="menusForm.alias" placeholder="请输入" />
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-scrollbar>

      <div class="medium-dialog--footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button
          type="primary"
          :loading="addEditLoading"
          @click="title === '添加菜单' ? createData() : updateData()"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!--表格-->
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="tableData"
      fit
      border
      row-key="_id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="menuType" label="类型" width="180">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.menuType === 0" type="info">目录</el-tag>
          <el-tag v-if="scope.row.menuType === 1" type="primary">菜单</el-tag>
          <el-tag v-if="scope.row.menuType === 2" type="success">权限</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="orderNum" label="排序"> </el-table-column>
      <el-table-column prop="url" label="路由"> </el-table-column>
      <el-table-column prop="perms" label="标识"> </el-table-column>
      <el-table-column prop="alias" label="别名"> </el-table-column>

      <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button v-permission="['/permission/menu:edit']" type="text" @click="gotoEdit(row)"
            >编辑</el-button
          >
          <el-button v-permission="['/permission/menu:del']" type="text" @click="gotoDetail(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 删除菜单 弹窗 -->
    <warn-dialog
      v-if="delVisible"
      :id="delId"
      :visible.sync="delVisible"
      title="确定删除数据吗? "
      message="此操作将永久删除数据, 是否继续？"
      cancel-button-text="取消"
      confirm-button-text="确定"
      @confirm="handleDel"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { getMenus, delMenus, addMenus, editMenus } from '@/api/simpleMenu'
import { ElTable } from 'element-ui/types/table'
import { ElForm } from 'element-ui/types/form'
import WarnDialog from './components/WarnDialog.vue'

@Component({
  name: 'SimpleTable',
  components: { WarnDialog },
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable
  @Ref('menusRef')
  private menusRef: ElForm
  //新建菜单、编辑菜单弹窗标题
  private addEditLoading = false
  private title = '添加菜单'
  private visible = false
  private menusForm = {
    menuId: undefined,
    name: '',
    menuType: 1,
    url: '',
    orderNum: undefined,
    perms: '',
    icon: '',
    parents: '',
    parentId: '',
  }
  private dataOptions = []
  private isFullscreen = false

  private tableData = []
  private tableDataTemp = []
  private loading = false

  //删除弹框
  private delVisible = false
  private delId = ''

  //校验规则
  private rules = {
    name: [
      { required: true, message: '名称必须填写', trigger: 'blur' },
      { min: 1, max: 32, message: '名称最多可填写32个字符' },
    ],
    url: [{ min: 1, max: 512, message: '路由链接最多可填写512个字符', trigger: 'blur' }],
    orderNum: [
      { required: true, message: '排序必须填写', trigger: 'blur' },
      { pattern: /^\+?[1-9]\d*$/, message: '排序取值范围1-10000' },
    ],
    perms: [{ required: true, message: '标识必须填写', trigger: 'blur' }],
  }

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getTable()
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      const res = await getMenus()

      if ((res as any).code === 200) {
        const res_menus = res.data.result.map(item => {
          item.label = item.name
          item.id = item._id
          return item
        })
        this.tableDataTemp = res_menus
        if (res_menus && res_menus.length > 0) {
          this.tableData = this.o(res_menus, '')
          this.dataOptions = [
            {
              id: '999999',
              label: '一级菜单',
              children: this.tableData,
            },
          ]
        } else {
          this.tableData = []
          this.dataOptions = [
            {
              id: '9999999',
              label: '一级菜单',
            },
          ]
        }
      }
      this.loading = false
    } catch (e) {
      console.error(e)
      this.loading = false
    } finally {
    }
  }
  private o(data, _id) {
    const menu = data.filter(o => o.parentId === _id)
    menu.forEach(o => {
      const children = this.o(data, o._id)
      if (children && children.length > 0) {
        o.children = children
      }
    })
    return menu
  }
  // 点击按钮后置空From
  typeChange(type) {
    this.resetMenusForm()
    this.menusForm.menuType = type
  }
  /**
   * 重置form对象
   */
  private resetMenusForm() {
    this.menusForm = {
      menuId: undefined,
      name: '',
      menuType: 1,
      url: '',
      orderNum: undefined,
      perms: '',
      icon: '',
      parents: '',
      parentId: '',
    }
  }
  private handleTree(data) {
    this.menusForm.parentId = data._id
    this.menusForm.parents = data.label
  }
  /**
   * 添加菜单
   */
  private addMenus() {
    this.resetMenusForm()
    this.visible = true
    this.title = '添加菜单'
  }

  private createData() {
    this.menusRef.validate(async valid => {
      if (valid) {
        this.addEditLoading = true
        if (this.menusForm.url === '' && this.menusForm.menuType === 1) {
          this.$message.error('请输入路由地址')
          this.addEditLoading = false
          return
        }
        if (this.menusForm.perms === '' && this.menusForm.menuType === 2) {
          this.$message.error('请输入授权标识')
          this.addEditLoading = false
          return
        }

        delete this.menusForm.parents

        try {
          const res = await addMenus(this.menusForm)
          this.addEditLoading = false
          if ((res as any).code === 200) {
            this.visible = false
            this.$message.success('添加成功! ')
            this.getTable()
          }
        } catch (e) {
          console.error(e)
        } finally {
        }
      } else {
        return false
      }
    })
  }

  /**
   * 编辑菜单
   */
  private gotoEdit(row) {
    this.resetMenusForm()
    this.menusForm = { ...row, parents: row.parentId }
    this.visible = true
    this.title = '编辑菜单'
  }

  private updateData() {
    this.menusRef.validate(async valid => {
      if (valid) {
        this.addEditLoading = true
        if (this.menusForm.url === '' && this.menusForm.menuType === 1) {
          this.$message.error('请输入路由地址')
          this.addEditLoading = false
          return
        }
        if (this.menusForm.perms === '' && this.menusForm.menuType === 2) {
          this.$message.error('请输入授权标识')
          this.addEditLoading = false
          return
        }
        const tempData = Object.assign({}, this.menusForm)
        delete tempData.parents
        try {
          const res = await editMenus(tempData)
          this.addEditLoading = false
          if ((res as any).code === 200) {
            this.visible = false
            this.$message.success('编辑成功! ')
            this.getTable()
          }
        } catch (e) {
          console.error(e)
        } finally {
        }
      }
    })
  }
  /**
   * 删除菜单
   */
  private gotoDetail(row) {
    this.delVisible = true
    this.delId = row._id
  }
  /**
   *  删除菜单事件
   */
  private async handleDel(id) {
    try {
      const res = await delMenus(id)
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
  private close() {
    this.visible = false
  }
}
</script>
<style lang="scss" scoped></style>
