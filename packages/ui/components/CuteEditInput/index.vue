<!--
 * @Author: 王亚振
 * @Date: 2022-10-11 15:06:30
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-07 15:50:59
 * @Description:
-->
<template>
  <span v-if="!editing">
    {{ syncedValue }} <svg-icon class="edit-input-icon" name="edit" @click="startEdit" />
  </span>
  <span v-else class="cute-edit-input-wrap">
    <el-input
      v-model="editValue"
      :type="textarea ? 'textarea' : 'text'"
      :placeholder="t('cute.editInput.placeholder')"
    ></el-input>
    <svg-icon
      :class="'cute-edit-input__edit-icon--' + size"
      name="check"
      :color="colorVariables.colorSuccess"
      @click="onOk"
    />
    <svg-icon
      :class="'cute-edit-input__edit-icon--' + size"
      name="close"
      :color="colorVariables.colorDanger"
      @click="editing = false"
    />
  </span>
</template>

<script lang="ts">
import { Component, Prop, VModel } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteEditInput',
})
export default class extends mixins(Locale) {
  @VModel({ type: String }) syncedValue!: string
  @Prop({ default: false }) private textarea!: boolean
  @Prop({ type: String, default: '' }) size?: '' //size
  private colorVariables = variables
  private editing = false
  private editValue = ''

  private onOk() {
    this.editing = false
    this.syncedValue = this.editValue
    this.$emit('edit-input-save', this.syncedValue)
  }
  private startEdit() {
    this.editing = true
    this.editValue = this.syncedValue
  }
}
</script>
