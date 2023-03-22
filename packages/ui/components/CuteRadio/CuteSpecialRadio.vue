<!--
 * @Author: 马妍
 * @Date: 2022-07-15 10:12:49
 * @LastEditors: 马妍
 * @LastEditTime: 2022-12-15 21:08:45
 * @Description:
-->
<template>
  <div class="special-radio">
    <el-radio-group :value="value" :size="size" @input="myChange">
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
  @Prop({ type: String, default: '' }) size?: ''
  @Model('change', { type: String, default: '' }) value: string
  @Emit('change')
  myChange(key) {
    return key
  }
}
</script>
