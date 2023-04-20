<!--
 * @Author: 马妍
 * @Date: 2022-07-15 10:12:49
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-19 17:54:47
 * @Description:
-->
<template>
  <div class="special-radio">
    <el-radio-group :value="value" :size="size" :disabled="disabled" @input="myChange">
      <el-radio-button
        v-for="(item, i) in options"
        :key="i"
        :label="item.label"
        :disabled="item.disabled"
      ></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'
@Component({
  name: 'CuteSpecialRadio',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) options?: []
  @Prop({ type: Boolean, default: false }) disabled?: false
  @Prop({ type: String, default: '' }) size?: ''
  @Model('change', { type: String, default: '' }) value: string
  @Emit('change')
  private myChange(key) {
    return key
  }
}
</script>
