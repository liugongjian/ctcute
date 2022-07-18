<!--
 * @Author: 吴博聪
 * @Date: 2022-07-08 16:29:27
 * @LastEditors: 吴博聪
 * @LastEditTime: 2022-07-18 13:45:42
 * @Description: 全屏弹窗
-->
<template>
  <el-card>
    <h2>全屏弹窗</h2>
    <div>
      <p>弹窗铺满全屏，上下左右间距是24px</p>
      <el-button type="primary" @click="handleClick">全屏弹窗</el-button>
    </div>
    <el-dialog
      class="fullscreen-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="fullscreen-dialog--content">
        <slot name="content"> 弹窗铺满全屏，上下左右间距是24px </slot>
      </div>
      <div class="fullscreen-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'FullScreenDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '全屏弹窗示例'
  private visible = false
  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
