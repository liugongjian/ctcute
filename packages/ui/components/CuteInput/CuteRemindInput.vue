<!--
 * @Author: 马妍
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: 马妍
 * @LastEditTime: 2023-02-27 15:17:48
 * @Description: 
-->
<template>
  <el-input
    ref="input"
    class="inline-input"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    :value="value"
    :size="size"
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
  @Model('change', { type: String }) value: string
  @Emit('change')
  myChange(key) {
    ;(this.$refs.input as any).$refs.input.style.padding = `0px ${
      (this.$refs.suffix as any).getBoundingClientRect().width + 15
    }px 0px 12px`
    return key
  }
}
</script>
