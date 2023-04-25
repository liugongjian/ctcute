<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-12 19:58:35
 * @Description: 带提示的选择器
-->
<template>
  <el-select
    ref="select"
    class="cute-remind-select"
    filterable
    :multiple="multiple ? true : false"
    :placeholder="placeholder"
    :size="size"
    :disabled="disabled"
    clearable
    :collapse-tags="collapseTags ? true : false"
    :value="value"
    @change="myChange($event)"
  >
    <span slot="prefix" ref="prefix" class="prefix-placeholder">{{
      value && value.length > 0 ? title : ''
    }}</span>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'
@Component({
  name: 'CuteRemindSelect',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) multiple?: false // 是否多选
  @Prop({ type: Array, default: [] }) options?: [] // 下拉数据
  @Prop({ type: String, default: '' }) placeholder?: '' // placeholder
  @Prop({ type: String, default: '' }) title?: '' // 提示文案
  @Prop({ type: Boolean, default: false }) collapseTags?: false
  @Model('change', { default: '' }) value: Array<any> | string
  @Prop({ type: String, default: 'medium' }) size?: 'medium' //option 值
  @Prop({ type: Boolean, default: false }) disabled!: boolean //禁用状态
  @Emit('change')
  myChange(key) {
    this.multiple &&
      ((this.$refs.select as any).$el.childNodes[0].style.padding = `0px ${
        (this.$refs.prefix as any).getBoundingClientRect().width
      }px 0px 0px`)
    return key
  }
}
</script>
