<!--
 * @Author: 马妍
 * @Date: 2022-07-15 10:12:49
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-03-23 15:57:32
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
  private myChange(key) {
    return key
  }
}
</script>

<style lang="scss" scoped>
.special-radio {
  ::v-deep.el-radio-group .el-radio-button--medium .el-radio-button__inner {
    padding: 6px 20px;
  }

  ::v-deep.el-radio-group .el-radio-button--small .el-radio-button__inner {
    padding: 6px 9px;
  }

  .el-radio-group .el-radio-button {
    margin-left: 4px;

    ::v-deep.el-radio-button__inner {
      border: 1px solid $color-neutral-5;
    }
  }

  ::v-deep.el-radio-group .el-radio-button:not(.is-active):not(.is-disabled) .el-radio-button__inner {
    background: $color-master-6;
    color: $color-grey-1;
    border-radius: 3px;

    &:hover {
      background: $color-master-5;
      color: $color-grey-1;
      margin: 0;
    }
  }

  ::v-deep.el-radio-group .el-radio-button.is-active .el-radio-button__inner,
  .el-radio-group .el-radio-button.is-active .el-radio-button__inner :hover {
    background: $color-master-5;
    border: 1px solid $color-master-1;
    border-radius: 3px;
    font-weight: 400;
    color: $color-neutral-10 !important;
  }

  ::v-deep.el-radio-button__orig-radio:checked + .el-radio-button__inner {
    box-shadow: none;
  }

}
</style>
