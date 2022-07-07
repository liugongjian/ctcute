<template>
  <el-dialog
    class="success-dialog"
    :title="title"
    :visible="visible"
    :close-on-click-modal="false"
    @close="close"
  >
    <div class="success-dialog--content">
      <slot name="icon"><svg-icon name="check-circle-fill" /></slot>
      <slot name="content"
        >已成功创建XXX数据源标签方案，是否配置任务？已成功创建XXX数据源标签方案，是否配置任务？</slot
      >
    </div>
    <div class="success-dialog--btns">
      <el-button @click="close">{{ cancelButtonText }}</el-button>
      <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SuccessDialog',
})
export default class extends Vue {
  @Prop(Boolean) readonly visible: boolean
  @Prop({ default: '以后再说' }) readonly cancelButtonText: string
  @Prop({ default: '前往配置' }) readonly confirmButtonText: string

  private title = '成功提示'
  private close() {
    this.$emit('update:visible', false)
    this.$emit('close')
  }

  private confirm() {
    this.$emit('confirm')
  }
}
</script>
