<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-05-09 16:47:28
 * @Description: 操作已选项
-->
<template>
  <div class="cute-selected-input">
    <el-select ref="select" :value="''" placeholder="" :size="size" @change="handelSelectChange">
      <span slot="prefix" class="text" :class="flag ? 'select-field' : 'select-uncheck'">{{ sele }}</span>
      <el-option
        v-for="(v, i) in options"
        :key="i"
        :label="v.label"
        :value="v.value"
        class="field-option"
        :disabled="v.disabled"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteSelectedInput',
})
export default class extends Mixins(Locale) {
  @Prop({ type: Array, default: [] }) checkedList?: [] //已选中数据
  @Prop({ type: Array, default: [] }) options?: [] //下拉数据
  @Prop({ type: String, default: 'mormal' }) size?: 'mormal' //size

  private get flag() {
    return this.checkedList.length > 0
  }
  private get sele() {
    return this.checkedList.length > 0
      ? `(${this.checkedList.length})${this.t('cute.selectedInput.action')}`
      : this.t('cute.selectedInput.action')
  }
  private handelSelectChange(e) {
    this.$emit('change', { checkedList: this.checkedList, value: e })
  }
}
</script>
