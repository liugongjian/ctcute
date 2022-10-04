<!--
 * @Author: 李志伟
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: lizhiwei
 * @LastEditTime: 2022-07-27 14:50:27
 * @Description: 告警弹窗
-->
<template>
  <el-card>
    <h2>警告弹窗</h2>
    <el-button type="primary" @click="open">警告弹窗</el-button>
    <el-dialog
      class="warn-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="warn-dialog--content">
        <slot name="icon">
          <svg-icon name="info-circle-fill" />
        </slot>
        <slot name="content">此操作将永久删除该文件，是否继续？</slot>
      </div>
      <div class="warn-dialog--btns">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'WarnDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  public visible = false
  public title = '警告提示'
  public open() {
    this.visible = true
  }
  public close() {
    this.visible = false
  }
  public confirm() {
    this.visible = false
  }
}
</script>
