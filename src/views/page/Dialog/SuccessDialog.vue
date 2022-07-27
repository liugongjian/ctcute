<!--
 * @Author: 李志伟
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: lizhiwei
 * @LastEditTime: 2022-07-27 14:50:48
 * @Description: 成功弹窗
-->
<template>
  <el-card>
    <h2>成功弹窗</h2>
    <el-button type="primary" @click="open">成功弹窗</el-button>
    <el-dialog
      class="success-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="success-dialog--content">
        <slot name="icon"><svg-icon name="check-circle-fill" /></slot>
        <slot name="content">
          已成功创建XXX数据源标签方案，是否配置任务？已成功创建XXX数据源标签方案，是否配置任务？
        </slot>
      </div>
      <div class="success-dialog--btns">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SuccessDialog',
})
export default class extends Vue {
  @Prop({ default: '以后再说' }) readonly cancelButtonText: string
  @Prop({ default: '前往配置' }) readonly confirmButtonText: string

  public visible = false
  public title = '成功提示'
  public open() {
    this.visible = true
  }
  public close() {
    this.visible = false
  }
  public confirm() {
    this.$emit('confirm')
    this.close()
  }
}
</script>
