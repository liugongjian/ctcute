<template>
  <div class="cute-tag-add">
    <el-tag
      v-for="(tag, index) in syncedDynamicTags"
      :key="index"
      type="info"
      :size="tagSize"
      :class="tagClass"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      >{{ tag }}</el-tag
    >
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      size="small"
      :class="[typeClass, inputClass]"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    ></el-input>
    <el-tag
      v-else
      type="newtag"
      :disable-transitions="true"
      :size="tagSize"
      :class="tagClass"
      @click="showInput"
      >{{ tagName }}</el-tag
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
const TYPE_CLASSES_MAP = {
  large: 'input-large-tag',
}
@Component({
  name: 'CuteTag',
})
export default class extends Vue {
  /** tag的显示名称 必填 */
  @Prop({ default: '', required: true }) private readonly tagName: string
  /** tag的尺寸 选填 使用大标签填：large   */
  @Prop({ default: '', required: false }) private readonly tagSize: string
  /** tag的自定义class 选填 */
  @Prop({ default: '', required: false }) private readonly tagClass: string
  /** input的自定义class 选填 */
  @Prop({ default: '', required: false }) private readonly inputClass: string
  /** tag 默认显示的数组 */
  @PropSync('dynamicTags', { type: Array, default: [] }) private syncedDynamicTags!: string[]
  // 新增标签input框是否可见
  private inputVisible = false
  // 新增标签input框输入值
  private inputValue = ''

  get typeClass() {
    return TYPE_CLASSES_MAP[this.tagSize] || 'input-new-tag'
  }
  /* 输入确认后添加标签 */
  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.syncedDynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  /* 点击新增标签 显示输入框 */
  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }
  /* 关闭标签 */
  private handleClose(tag) {
    this.syncedDynamicTags.splice(this.syncedDynamicTags.indexOf(tag), 1)
  }
}
</script>
