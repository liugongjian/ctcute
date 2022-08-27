<!--
 * @Author: 黄璐璐
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-22 09:47:14
 * @Description: 告警弹窗
-->
<template>
  <el-dialog
    class="warn-dialog"
    :title="title"
    :visible="visibleDia"
    :close-on-click-modal="false"
    @close="close"
  >
    <div class="warn-dialog--content">
      <slot name="icon">
        <svg-icon name="info-circle-fill" />
      </slot>
      <slot name="content">{{ message }}</slot>
    </div>
    <div class="warn-dialog--btns">
      <el-button @click="close">{{ cancelButtonText }}</el-button>
      <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'WarnDialog',
})
export default class extends Vue {
  @Prop({ type: String, default: '取消' }) cancelButtonText?: '取消'
  @Prop({ type: String, default: '确定' }) confirmButtonText?: '确定'
  @Prop({ type: Boolean, default: false }) visible?: false
  @Prop({ type: String, default: '' }) title?: ''
  @Prop({ type: String, default: '' }) message?: ''
  @Prop({ type: String, default: '' }) id?: ''

  get visibleDia() {
    return this.visible
  }
  set visibleDia(val) {
    this.$emit('update:visible', val)
  }

  public confirm() {
    this.$emit('confirm', this.id)
  }
  public close() {
    this.visibleDia = false
  }
}
</script>
