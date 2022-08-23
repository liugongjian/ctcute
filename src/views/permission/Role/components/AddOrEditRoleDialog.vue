<!--
 * @Author: 黄璐璐
 * @Date: 2022-07-13 13:41:05
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-23 14:35:00
 * @Description: 添加用户
-->
<template>
  <el-card>
    <el-dialog
      class="medium-dialog"
      :title="textMap[roleDialogStatus]"
      :visible.sync="visibleDia"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-scrollbar
        ref="scrollBar"
        class="medium-dialog--scroll"
        :wrap-style="{ maxHeight: isFullscreen ? '100%' : '461px', width: '100%' }"
      >
        <div class="medium-dialog--content">
          <el-form ref="ruleForm" :rules="rules" :model="form" label-width="124px">
            <el-form-item label="角色名" prop="name">
              <el-input v-model="form.name" value="" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="角色标识" prop="code">
              <el-input v-model="form.code" value="" placeholder="请输入角色标识英文字母"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input
                v-model="form.remark"
                value=""
                placeholder="请输入备注"
                type="textarea"
                maxlength="200"
              ></el-input>
            </el-form-item>
            <el-form-item label="角色权限" prop="menus">
              <div class="line">
                <el-tree
                  ref="treeRef"
                  show-checkbox
                  :data="treeData"
                  :props="treeProps"
                  node-key="_id"
                  :default-expand-all="false"
                  :default-checked-keys="checkedKeys"
                >
                </el-tree>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
      <div class="medium-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { getMenus } from '@/api/simpleMenu'
import { ElTree } from 'element-ui/types/tree'
@Component({
  name: 'MediumDialog',
})
export default class extends Vue {
  @Ref('ruleForm')
  private ruleForm
  @Ref('treeRef')
  private treeRef?: ElTree<'', any>
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  @Prop({ type: Boolean, default: false }) visible?: false
  @Prop({ type: String, default: '' }) roleDialogStatus?: ''
  @Prop({ type: String, default: '' }) id?: ''
  @Prop({ type: Object, default: { _id: '', name: '', code: '', remark: '', menus: [] } }) editRow?: {
    _id: ''
    name: ''
    code: ''
    remark: ''
    menus: []
  }
  private isFullscreen = false
  private treeProps = {
    children: 'children',
    label: 'name',
  }
  private treeData = []
  private textMap = {
    update: '编辑角色',
    create: '添加角色',
  }
  get visibleDia() {
    return this.visible
  }
  set visibleDia(val) {
    this.$emit('update:visible', val)
  }
  private checkedId = []
  private checkedKeys = []

  //校验规则
  private rules = {
    name: [
      { required: true, message: '角色名必须填写', trigger: 'blur' },
      { min: 1, max: 32, message: '角色名最多可填写32个字符' },
    ],
    code: [
      { required: true, message: '角色标识必须填写', trigger: 'blur' },
      { pattern: /^[a-zA-Z]+$/, message: '角色标识必须为英文' },
      { min: 1, max: 32, message: '角色标识最多可填写32个字符' },
    ],
  }

  private mounted() {
    this.getPermList()
  }
  get form() {
    return this.editRow
  }
  set form(val) {
    this.$emit('update:editRow', val)
  }
  // 角色权限
  private checked(id, data) {
    data.forEach(item => {
      if (item._id === id) {
        if (item.children.length === 0) {
          this.checkedId.push(item._id)
        }
      } else {
        if (item.children.length !== 0) {
          this.checked(id, item.children)
        }
      }
    })
  }
  private async getPermList() {
    try {
      const res = await getMenus()
      if ((res as any).code === 200) {
        if (res.data && res.data.result.length > 0) {
          const res_menus = res.data.result

          this.treeData = this.o(res_menus, '')
        } else {
          this.treeData = []
        }
        const { menus = [] } = this.editRow
        this.checkedId = []
        menus.forEach(item => {
          this.checked(item, this.treeData)
        })
        this.checkedKeys = this.checkedId
      }
    } catch (e) {
      console.error(e)
    } finally {
    }
  }
  private o(data, _id) {
    const menu = data.filter(o => o.parentId === _id)
    menu.forEach(o => {
      o.children = this.o(data, o._id)
    })
    return menu
  }

  private close() {
    this.ruleForm.resetFields()
    this.visibleDia = false
  }
  private confirm() {
    this.ruleForm.validate(valid => {
      if (valid) {
        const menus = []
        this.treeRef.getCheckedKeys().forEach(o => {
          menus.push(o)
        })
        const arr = [].concat(this.treeRef.getCheckedKeys()).concat(this.treeRef.getHalfCheckedKeys())
        this.form.menus = arr
        this.$emit('confirm', this.form)
      } else {
        return false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.line {
  border: 1px solid #ddd;
  padding: 0 10px;
}
</style>
