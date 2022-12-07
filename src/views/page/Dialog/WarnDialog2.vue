<!--
 * @Author: 马妍
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 马妍
 * @LastEditTime: 2022-10-26 09:36:52
 * @Description: 告警弹窗-有2次输入确认
-->
<template>
  <el-card>
    <h2>警告弹窗</h2>
    <p>警告提示-有2次输入确认</p>
    <el-button type="primary" @click="open">警告弹窗</el-button>
    <el-dialog
      class="warn-dialog2"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="warn-dialog--content">
        <div class="warn-dialog--content_describe">
          <slot name="icon">
            <svg-icon name="warning-circle-fill" />
          </slot>
          <span>删除该project数据后，数据将无法恢复，确定要删除吗？ </span>
        </div>

        <slot name="content">
          <el-form ref="warnDialog2" :rules="rules" :model="form">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="form.name" placeholder="请输入项目名称"></el-input></el-form-item></el-form
        ></slot>
      </div>
      <div class="warn-dialog--btns">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" :loading="submitting" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import WarnDialog2 from '@/types/WarnDialog2'
import { createWarnDialog2 } from '@/api/warnDialog2'

@Component({
  name: 'WarnDialog2',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string
  // 表单Ref对象
  @Ref('warnDialog2')
  private warnDialog2Ref

  // 表单提交状态
  private submitting = false

  private form: WarnDialog2.Form = {
    name: '',
  }
  // 表单校验规则
  private rules = {
    name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
  }
  public visible = false
  public title = '警告提示'
  public open() {
    this.visible = true
  }
  public close() {
    this.visible = false
  }

  //弹窗确认事件
  public async confirm() {
    this.warnDialog2Ref.validate(valid => {
      if (valid) {
        this.create()
      } else {
        return false
      }
    })
  }
  /**
   * 创建表单
   * 调用后端创建接口
   */
  private async create() {
    try {
      this.submitting = true
      const res = await createWarnDialog2(this.form)
      const data = res.data
      this.$message.success(`创建成功！ID: ${data.id}`)
      this.visible = false
    } catch (e) {
      this.$message.error('创建失败！')
    } finally {
      this.submitting = false
    }
  }
}
</script>
