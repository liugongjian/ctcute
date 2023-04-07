<!--
 * @Author: 王亚振
 * @Date: 2022-10-11 15:06:30
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-07 11:33:08
 * @Description:
-->
<template>
  <span v-if="!editing"
    >{{ syncedValue }} <svg-icon class="edit-input-icon" name="edit" @click="startEdit"
  /></span>
  <span v-else class="wrap">
    <el-input
      v-model="editValue"
      :type="textarea ? 'textarea' : 'text'"
      :placeholder="t('cute.editInput.placeholder')"
    ></el-input>
    <svg-icon name="check" :color="colorVariables.colorSuccess" @click="onOk" />
    <svg-icon name="close" :color="colorVariables.colorDanger" @click="editing = false" />
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

<style lang="scss" scoped>
.edit-input-icon {
  font-size: $text-size-lg;
  margin-left: $margin-10;
  color: $color-neutral-8;
  cursor: pointer;

  &:hover {
    color: $color-master;
  }

  &.svg-icon {
    vertical-align: sub;
  }
}

.wrap {
  width: 100%;
  height: 100%;
  display: inline-block;

  .el-input,
  .el-textarea {
    width: $cute-edit-input-width;
    height: 100%;
    margin-right: $margin-10;
  }

  .el-textarea ~ svg {
    margin-bottom: $margin;
  }

  svg {
    cursor: pointer;
    font-size: $text-size-lg;
    margin-right: $margin;
    vertical-align: sub;
  }
}

::v-deep textarea {
  height: 100%;
}
</style>
