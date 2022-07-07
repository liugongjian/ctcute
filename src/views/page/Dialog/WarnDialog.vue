<template>
  <el-dialog
    class="warn-dialog"
    :title="title"
    :visible="visible"
    :close-on-click-modal="false"
    @close="onClose"
  >
    <div class="warn-dialog--content">
      <svg-icon name="info-circle-fill" />
      <slot name="content">此操作将永久删除该文件，是否继续？</slot>
    </div>
    <div class="warn-dialog--btns">
      <el-button @click="onClose">{{ cancelButtonText }}</el-button>
      <el-button type="primary">{{ confirmButtonText }}</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'WarnDialog',
})
export default class extends Vue {
  @Prop(Boolean) readonly visible: boolean
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '警告提示'
  private onClose() {
    this.$emit('update:visible', false)
    this.$emit('close')
  }
}
</script>
