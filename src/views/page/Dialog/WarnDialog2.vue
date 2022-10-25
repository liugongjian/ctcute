<!--
 * @Author: 马妍
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 马妍
 * @LastEditTime: 2022-10-25 14:20:16
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
        <slot name="icon">
          <svg-icon name="info-circle-fill" />
        </slot>
        <slot name="content"
          ><span>删除该project数据后，数据将无法恢复，确定要删除吗？ </span>
          <el-form ref="warnDialog2" :rules="rules" :model="form">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="form.name" placeholder="请输入项目名称"></el-input></el-form-item></el-form
        ></slot>
      </div>
      <div class="warn-dialog--btns">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'

@Component({
  name: 'WarnDialog2',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string
  // 表单Ref对象
  @Ref('warnDialog2')
  private warnDialog2Ref
  private form: any = {
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
  public confirm() {
    this.warnDialog2Ref.validate(valid => {
      if (valid) {
        this.form.name = ''
        this.visible = false
      } else {
        return false
      }
    })
  }
}
</script>
