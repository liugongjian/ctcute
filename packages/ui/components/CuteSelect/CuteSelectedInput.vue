<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-17 07:04:02
 * @Description: 操作已选项
-->
<template>
  <div class="cute-selected-input">
    <el-select ref="select" :value="''" placeholder="" @change="handelSelectChange">
      <span slot="prefix" :class="flag ? 'select-field' : 'select-uncheck'">{{ sele }}</span>
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
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteSelectedInput',
})
export default class extends Mixins(Locale) {
  @Prop({ type: Array, default: [] }) checkedList?: [] //已选中数据
  @Prop({ type: Array, default: [] }) options?: [] //下拉数据
  private sele = ''
  private flag = false
  private created() {
    if (this.checkedList.length > 0) {
      this.flag = true
      this.sele = `${this.t('cute.selectedInput.action')}(${this.checkedList.length})`
    } else {
      this.flag = false
      this.sele = this.t('cute.selectedInput.action')
    }
  }
  @Watch('checkedList')
  private change() {
    if (this.checkedList.length > 0) {
      this.flag = true
      this.sele = `${this.t('cute.selectedInput.action')}(${this.checkedList.length})`
    } else {
      this.flag = false
      this.sele = this.t('cute.selectedInput.action')
    }
  }

  private handelSelectChange(e) {
    this.$emit('change', { checkedList: this.checkedList, value: e })
  }
}
</script>
