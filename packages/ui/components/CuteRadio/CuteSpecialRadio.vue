<!--
 * @Author: 马妍
 * @Date: 2022-07-15 10:12:49
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-03-23 15:55:01
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

<style lang="scss" scoped>
.special-radio {
  ::v-deep.el-radio-group .el-radio-button--medium .el-radio-button__inner {
    padding: $padding-2x $padding-5x;
  }

  ::v-deep.el-radio-group .el-radio-button--small .el-radio-button__inner {
    padding: $padding-6 $cute-special-radio-padding;
  }

  .el-radio-group .el-radio-button {
    margin-left: $cute-special-radio-size;

    ::v-deep.el-radio-button__inner {
      border: none;
    }
  }

  ::v-deep.el-radio-group .el-radio-button:not(.is-active):not(.is-disabled) .el-radio-button__inner {
    background: $color-master-6;
    color: $color-grey-1;

    &:hover {
      background: $color-master-5;
      color: $color-grey-1;
    }
  }

  ::v-deep.el-radio-group .el-radio-button.is-active .el-radio-button__inner,
  .el-radio-group .el-radio-button.is-active .el-radio-button__inner :hover {
    background: $color-master-1;
    border-radius: $cute-special-radio-size 0 0 $cute-special-radio-size;
    color: $color-white !important;
  }

  ::v-deep.el-radio-button__orig-radio:checked + .el-radio-button__inner {
    box-shadow: none;
  }
}
</style>
