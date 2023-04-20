<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-20 13:47:29
 * @Description: 操作已选项
-->
<template>
  <div class="cute-selected-input">
    <el-select
      ref="select"
      :value="''"
      placeholder=""
      :size="size"
      :disabled="disabled"
      @change="handelSelectChange"
    >
      <span slot="prefix" class="cute-select-input-field" :class="flag ? 'select-field' : 'select-uncheck'">
        {{ sele }}
      </span>
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

  private get flag() {
    return this.checkedList.length > 0
  }
  private get sele() {
    return this.checkedList.length > 0
      ? `(${this.checkedList.length})${this.t('cute.selectedInput.action')}`
      : this.t('cute.selectedInput.action')
  }
  @Watch('sele')
  // 动态宽度
  private seleChange() {
    const field: any = document.getElementsByClassName('cute-select-input-field')
    for (const i of field) {
      const parent: any = i.parentNode.parentNode
      this.$nextTick(() => {
        parent.style.width = i.clientWidth + 55 + 'px'
      })
    }
  }

  private handelSelectChange(e) {
    this.$emit('change', { checkedList: this.checkedList, value: e })
  }
}
</script>
