<!--
 * @Author: zhaodan
 * @Date: 2023-01-06 14:40:32
 * @LastEditors: zhulh
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 中弹窗2
-->

<template>
  <el-card>
    <h2>中弹窗2</h2>
    <div>
      <p>
        弹窗头部跟底部跟天翼云弹窗样式统一，在中尺寸弹窗中，宽度为
        600px，弹窗底部按钮水平居中展示，最大高度为窗口高度70%。
      </p>
      <el-button type="primary" @click="handleClick">中弹窗2</el-button>
    </div>
    <el-dialog width="600px" :title="title" :visible="visible" :close-on-click-modal="false" @close="close">
      <el-form ref="ruleForm" :rules="rules" :model="form" label-width="104px">
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio-button label="default">默认选项</el-radio-button>
            <el-radio-button label="active">选中选项</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" value="" placeholder="请输入名称"></el-input>
        </el-form-item>

        <el-form-item label="上级菜单" prop="menu">
          <el-select v-model="form.menu" placeholder="请选择上级菜单">
            <el-option label="菜单一" value="shanghai"></el-option>
            <el-option label="菜单二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="排序" prop="sort">
          <el-input v-model="form.sort" value="" placeholder="请输入排序"></el-input>
        </el-form-item>

        <el-form-item label=" " class="medium-dialog2__explain">
          <span>
            <svg-icon name="warning-circle" />
          </span>
          <span class="medium-dialog2__explain__text">
            权限标识与别名说明<br />
            标识，别名属同一个权限，主要用于前后分离，前后权限标识不一致，且前后两端皆须判定权限的项目，一般情况别名指控即可，如有多个别名可逗号分隔。
          </span>
        </el-form-item>

        <el-form-item label="标识" prop="permissionTag">
          <el-input v-model="form.permissionTag" value="" placeholder="请输入权限标识"></el-input>
        </el-form-item>
        <el-form-item label="别名" prop="alias">
          <el-input v-model="form.alias" value="" placeholder="请输入别名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" :loading="submitting" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import * as MediumDialog2 from '@/types/MediumDialog2'
import { createMediumDialog2 } from '@/api/mediumDialog2'

@Component({
  name: 'MediumDialog',
})
export default class extends Vue {
  @Ref('ruleForm')
  private ruleFormRef
  @Prop({ default: '取消' })
  readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  @Prop({ default: '中弹窗2' }) private title: string
  private visible = false
  private isFullscreen = false

  // 表单提交状态
  private submitting = false
  //表单对象
  private form: MediumDialog2.Form = {
    type: 'active',
    name: null,
    menu: null,
    sort: null,
    permissionTag: null,
    alias: null,
  }

  /**
   * 创建表单
   * 调用后端创建接口
   */
  private async create() {
    try {
      this.submitting = true
      const res = await createMediumDialog2(this.form)
      const data = res.data
      this.$message.success(`创建成功！ID: ${data.id}`)
      this.visible = false
    } catch (e) {
      this.$message.error('创建失败！')
    } finally {
      this.submitting = false
    }
  }
  //校验规则
  private rules = {
    type: [{ required: true, message: '请选择类型', trigger: 'blur' }],
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
    // menu: [{ required: true, message: '请选择上级菜单', trigger: 'blur' }],
    sort: [{ required: true, message: '请输入排序', trigger: 'blur' }],
    permissionTag: [{ required: true, message: '请输入权限标识', trigger: 'blur' }],
  }
  private close() {
    this.ruleFormRef.resetFields()
    this.visible = false
  }
  private confirm() {
    this.ruleFormRef.validate(valid => {
      if (valid) {
        this.create()
      } else {
        return false
      }
    })
  }
  private handleClick() {
    this.visible = true
  }
}
</script>
