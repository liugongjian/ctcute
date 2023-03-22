<!--
 * @Author: 王亚振
 * @Date: 2022-10-11 15:06:30
 * @LastEditors: 王亚振
 * @LastEditTime: 2023-02-10 17:06:08
 * @Description: 
-->
<template>
  <span v-if="!editing"
    >{{ syncedValue }} <svg-icon class="edit-input-icon" name="edit" @click="startEdit"
  /></span>
  <span v-else class="cute-edit-input-wrap">
    <el-input v-model="editValue" :type="textarea ? 'textarea' : 'text'" placeholder="请输入"></el-input>
    <svg-icon name="check" :color="colorVariables.colorSuccess" @click="onOk" />
    <svg-icon name="close" :color="colorVariables.colorDanger" @click="editing = false" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'CuteEditInput',
})
export default class extends Vue {
  @VModel({ type: String }) syncedValue!: string
  @Prop({ default: false }) private textarea!: boolean
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
