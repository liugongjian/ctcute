<!--
 * @Author: 孙善鹏
 * @Date: 2022-10-11 15:06:30
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-12-16 17:06:34
 * @Description: 
-->
<template>
  <span v-if="!editing">{{ syncedValue }} </span>
  <span v-else class="wrap">
    <el-input v-model="syncedValue" :type="textarea ? 'textarea' : 'text'" placeholder="请输入"></el-input>
    <svg-icon name="check" :color="colorVariables.colorSuccess" @click="onOk" />
    <svg-icon name="close" :color="colorVariables.colorDanger" @click="onClose" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/theme/css/_variables.scss'

@Component({
  name: 'CuteEdit',
})
export default class extends Vue {
  @VModel({ type: String }) syncedValue!: string
  @Prop({ default: false }) private textarea!: boolean
  private colorVariables = variables
  private editing = true
  private onOk() {
    this.editing = false
    this.$emit('edit-input-save', this.syncedValue)
  }
  private onClose() {
    this.editing = false
    this.$emit('edit-input-close', this.syncedValue)
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
