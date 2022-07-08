<template>
  <el-card>
    <h2>中弹窗</h2>
    <div>
      <p>
        弹窗头部跟底部跟天翼云弹窗样式统一，在中尺寸弹窗中，宽度为
        560px，弹窗底部按钮水平居中展示，最大高度为640px。
      </p>
      <el-button type="primary" @click="handleClick">中弹窗</el-button>
    </div>
    <el-dialog
      class="medium-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="medium-dialog--content">
        <el-form ref="ruleForm" :rules="rules" :model="form" label-width="120px">
          <el-form-item label="主机别名" prop="name" placeholder="111">
            <el-input v-model="form.name" value="" placeholder="请输入主机别名"></el-input>
          </el-form-item>
          <el-form-item label="IP地址" prop="ip">
            <el-input v-model="form.ip" value="" placeholder="请输入IP地址"></el-input>
          </el-form-item>
          <el-form-item label="SSH端口" prop="ssh">
            <el-input v-model="form.ssh" value="" placeholder="请输入SSH端口"></el-input>
          </el-form-item>
          <el-form-item label="SSH用户名" prop="sshName">
            <el-input v-model="form.sshName" value="" placeholder="请提供具有sudo权限的账号"></el-input>
          </el-form-item>
          <el-form-item label="SSH密码" prop="password">
            <el-input v-model="form.password" value="" placeholder="请输入SSH密码"></el-input>
          </el-form-item>
          <el-form-item label="标签" class="sub-tags">
            <el-tag v-if="isShow" type="info" closable @close="closeTag">标签</el-tag>
            <el-tag
              v-for="tag in form.dynamicTags"
              :key="tag"
              type="info"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="saveTagInput"
              v-model="inputValue"
              size="small"
              class="input-new-tag"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-tag v-else type="newtag" :disable-transitions="true" @click="showInput">+ 标签</el-tag>
          </el-form-item>
          <el-form-item label="监控插件端口" prop="port">
            <el-input v-model="form.port" value="" placeholder="请输入监控插件端口"></el-input>
          </el-form-item>
          <el-form-item label="监控插件部署目录" prop="catalogue">
            <el-input v-model="form.catalogue" placeholder="请输入监控插件部署目录"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="medium-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import * as MediumDialog from '@/types/MediumDialog'
import { createMediumDialog } from '@/api/MediumDialog'
@Component({
  name: 'MediumDialog',
})
export default class extends Vue {
  @Ref('ruleForm')
  private ruleFormRef
  @Prop({ default: '取消' })
  readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '中弹窗（表单）'
  private visible = false
  private inputValue = ''
  private inputVisible = false
  private isShow = true
  private closeTag() {
    this.isShow = false
  }

  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.form.dynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  private handleClose(tag) {
    this.form.dynamicTags.splice(this.form.dynamicTags.indexOf(tag), 1)
  }
  //表单对象
  private form: MediumDialog.Form = {
    name: null,
    ip: null,
    ssh: null,
    sshName: null,
    password: null,
    port: null,
    catalogue: null,
    dynamicTags: [],
  }
  // 表单提交状态
  private submitting = false
  /**
   * 创建表单
   * 调用后端创建接口
   */
  private async create() {
    try {
      this.submitting = true
      const res = await createMediumDialog(this.form)
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
    name: [
      { required: true, message: '请输入主机别名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    ip: [{ required: true, message: '请输入ip地址', trigger: 'blur' }],
    ssh: [{ required: true, message: '请输入SSH端口', trigger: 'blur' }],
    sshName: [{ required: true, message: '请提供具有sudo权限的账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入SSH密码', trigger: 'blur' }],
    port: [{ required: true, message: '请输入监控插件端口', trigger: 'blur' }],
    catalogue: [{ required: true, message: '请输入监控插件部署目录', trigger: 'blur' }],
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
