<template>
  <div class="cute-tag-add">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
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
import { Component, Vue, Prop } from 'vue-property-decorator'
const TYPE_CLASSES_MAP = {
  large: 'input-large-tag',
}
@Component({
  name: 'CuteTagAdd',
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
  private dynamicTags = []
  private inputVisible = false
  private inputValue = ''

  get typeClass() {
    return TYPE_CLASSES_MAP[this.tagSize] || 'input-new-tag'
  }

  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.dynamicTags.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  private handleClose(tag) {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
  }
}
</script>

<style lang="scss" scoped>
.cute-tag-add {
  display: inline-block;
  vertical-align: bottom;

  .el-tag {
    margin-right: 10px;
    vertical-align: bottom;
  }

  .el-input {
    margin-right: 10px;
  }

  .input-new-tag {
    width: 70px;

    ::v-deep.el-input__inner {
      height: 22px;
      line-height: 20px;
    }
  }

  .input-large-tag {
    width: 96px;

    ::v-deep.el-input__inner {
      height: 28px;
      line-height: 20px;
    }
  }
}
</style>
