<!--
 * @Author: 马妍
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: 马妍
 * @LastEditTime: 2023-04-17 16:46:24
 * @Description:
-->
<template>
  <el-input
    class="inline-input"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    :value="value"
    :size="size"
    :disabled="disabled"
    type="text"
    @input="myChange($event)"
  >
    <span ref="suffix" slot="suffix" class="prompt-title"
      ><div>{{ value ? title : '' }}</div>
    </span>
  </el-input>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'

@Component({
  name: 'CuteRemindInput',
})
export default class extends Vue {
  @Prop({ type: String, default: '' }) placeholder?: '' //placeholder
  @Prop({ type: String, default: '' }) title?: '' //label
  @Prop({ type: String, default: '' }) size?: '' //size
  @Prop({ type: Boolean, default: false }) disabled?: false //disabled
  @Model('change', { type: String }) value: string
  @Emit('change')
  myChange(key) {
    setTimeout(() => this.getPosition(), 0)
    return key
  }
  private getPosition() {
    const input = document.querySelectorAll('.inline-input') as any
    for (let i = 0; i < input.length; i++) {
      input[i].__vue__.$refs.input.style.padding = `0px ${
        (this.$refs.suffix as any).getBoundingClientRect().width + 22
      }px 0px 12px`
    }
  }
}
</script>
