<template>
  <el-card>
    <h2>中弹窗</h2>
    <div>
      <p>弹窗头部跟底部和天翼云弹窗......中弹窗</p>
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
        <slot name="content"
          >何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
          在当前页面正中打开一个浮层，承载相应的操作。大小是480px。</slot
        >
      </div>
      <div class="medium-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'MediumDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '中弹窗（表单）'
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
