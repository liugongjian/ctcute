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
  <span v-else class="wrap">
    <el-input v-model="editValue" :type="textarea ? 'textarea' : 'text'" placeholder="请输入"></el-input>
    <svg-icon name="check" :color="colorVariables.colorSuccess" @click="onOk" />
    <svg-icon name="close" :color="colorVariables.colorDanger" @click="editing = false" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/theme/css/_variables.scss'

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

<style lang="scss" scoped>
.edit-input-icon {
  font-size: $text-size-large;
  margin-left: 10px;
  color: $color-grey-3;
  cursor: pointer;

  &:hover {
    color: $color-master-1;
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
    width: calc(100% - 84px);
    height: 100%;
    margin-right: 10px;
  }

  .el-textarea ~ svg {
    margin-bottom: 4px;
  }

  svg {
    cursor: pointer;
    font-size: $text-size-large;
    margin-right: 4px;
    vertical-align: sub;
  }
}
::v-deep textarea {
  height: 100%;
}
</style>
