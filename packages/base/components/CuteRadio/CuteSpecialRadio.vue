<!--
 * @Author: 马妍
 * @Date: 2022-07-15 10:12:49
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-20 18:38:40
 * @Description: 
-->
<template>
  <div class="special-radio">
    <el-radio-group :value="value" :size="size">
      <el-radio-button
        v-for="(item, i) in options"
        :key="i"
        :label="item.label"
        :disabled="item.disabled"
        @change="myChange($event)"
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
    padding: 8px 20px;
  }

  ::v-deep.el-radio-group .el-radio-button--small .el-radio-button__inner {
    padding: 6px 9px;
  }

  .el-radio-group .el-radio-button {
    margin-left: 2px;

    ::v-deep.el-radio-button__inner {
      border: none;
    }
  }

  ::v-deep.el-radio-group .el-radio-button:not(.is-active):not(.is-disabled) .el-radio-button__inner {
    background: #ffefe3;
    color: $color-grey-1;

    &:hover {
      background: #ffe6d2;
      color: $color-grey-1;
    }
  }

  ::v-deep.el-radio-group .el-radio-button.is-active .el-radio-button__inner,
  .el-radio-group .el-radio-button.is-active .el-radio-button__inner :hover {
    background: $color-master-1;
    border-radius: 2px 0 0 2px;
    color: $color-white !important;
  }
}
</style>
