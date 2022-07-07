<template>
  <el-card>
    <h2>小弹窗</h2>
    <div>
      <p>在小尺寸弹窗中，宽度为480px</p>
      <el-button type="primary" @click="handleClick">小弹窗</el-button>
    </div>
    <el-dialog
      class="small-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="small-dialog--content">
        <slot name="content"
          >何时使用：需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
          在当前页面正中打开一个浮层，承载相应的操作。大小是480px。</slot
        >
      </div>
      <div class="small-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SmallDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '小弹窗（提示框）'
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
