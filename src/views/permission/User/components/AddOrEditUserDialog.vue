<!--
 * @Author: 黄璐璐
 * @Date: 2022-07-13 13:41:05
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-16 13:33:10
 * @Description: 添加用户
-->
<template>
  <el-dialog
    width="600px"
    :title="textMap[userDialogStatus]"
    :visible.sync="visibleDia"
    :close-on-click-modal="false"
    @close="close"
  >
    <el-form ref="ruleForm" :rules="rules" :model="form" label-width="124px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" value="" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item v-if="userDialogStatus === 'create'" label="手机号" prop="phone">
        <el-input v-model="form.phone" value="" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item v-if="userDialogStatus === 'create'" label="邮箱" prop="email">
        <el-input v-model="form.email" value="" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" value="" placeholder="请输入备注" type="textarea" maxlength="200" />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="close">{{ cancelButtonText }}</el-button>
      <el-button type="primary" :loading="loading" @click="confirm">{{ confirmButtonText }}</el-button>
    </div>
  </el-dialog>
</template>
<script lang="ts">
import { validPhone, validateEmail } from '@/utils/validate'
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { editUsers, addUsers } from '@/api/simpleUser'

@Component({
  name: 'MediumDialog',
})
export default class extends Vue {
  @Ref('ruleForm')
  private ruleForm
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  @Prop({ type: Boolean, default: false }) visible?: false
  @Prop({ type: String, default: '' }) userDialogStatus?: ''
  @Prop({ type: String, default: '' }) id?: ''
  @Prop({ type: Object, default: { _id: '', name: '', phone: '', email: '', remark: '' } }) editRow?: {
    _id: ''
    name: ''
    phone: ''
    email: ''
    remark: ''
  }

  private textMap = {
    update: '编辑用户',
    create: '添加用户',
  }
  get visibleDia() {
    return this.visible
  }
  set visibleDia(val) {
    this.$emit('update:visible', val)
  }
  private loading = false

  //校验规则
  private rules = {
    name: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur' },
    ],
    phone: [{ required: true, validator: this.checkphone, trigger: 'blur' }],
    email: [{ required: true, validator: this.checkemail, trigger: 'blur' }],
  }

  // 校验手机号码
  private checkphone(rule, value, callback) {
    if (value == '') {
      callback(new Error('手机号码必须填写'))
    } else if (!validPhone(value)) {
      callback(new Error('请填写正确的手机号码!'))
    } else {
      callback()
    }
  }
  // 校验邮箱地址
  private checkemail(rule, value, callback) {
    if (value == '') {
      callback(new Error('邮箱地址必须填写'))
    } else if (!validateEmail(value)) {
      callback(new Error('请填写正确的邮箱地址!'))
    } else {
      callback()
    }
  }
  get form() {
    return this.editRow
  }
  set form(val) {
    this.$emit('update:editRow', val)
  }

  private close() {
    this.ruleForm.resetFields()
    this.visibleDia = false
  }
  private confirm() {
    this.ruleForm.validate(valid => {
      if (valid) {
        this.handleAddOrEidt()
      } else {
        return false
      }
    })
  }
  private async handleAddOrEidt() {
    try {
      this.loading = true
      if (this.form._id) {
        //编辑
        const data = {
          name: this.form.name,
          remark: this.form.remark,
        }
        const res = await editUsers(this.form._id, data)
        if ((res as any).code === 200) {
          this.visibleDia = false
          this.$message.success('编辑成功! ')
          this.$emit('confirm')
        } else {
          this.$message.error((res as any).msg)
        }
      } else {
        //新增
        const res = await addUsers(this.form)
        if ((res as any).code === 200) {
          this.$emit('confirm', `密码: ${res.data.password}`)
          this.$message.success('新增成功! ')
          this.visibleDia = false
        } else {
          this.$message.error((res as any).msg)
        }
      }
    } catch (e) {
      if (e !== 'cancel') {
        this.$message.error(e.msg || e)
      }
    } finally {
      this.loading = false
    }
  }
}
</script>
