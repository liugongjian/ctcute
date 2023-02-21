<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 马妍
 * @LastEditTime: 2023-02-21 09:43:52
 * @Description: 带提示的选择器
-->
<template>
  <el-select
    ref="select"
    filterable
    :multiple="multiple ? true : false"
    :placeholder="placeholder"
    clearable
    :collapse-tags="collapseTags ? true : false"
    :value="value"
    @change="myChange($event)"
  >
    <span slot="prefix" ref="prefix" class="prefix-placeholder">{{ value.length > 0 ? title : '' }}</span>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'
@Component({
  name: 'CuteRemindSelect',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) multiple?: false // 是否多选
  @Prop({ type: Array, default: [] }) options?: [] // 下拉数据
  @Prop({ type: String, default: '' }) placeholder?: '' // placeholder
  @Prop({ type: String, default: '' }) title?: '' // 提示文案
  @Prop({ type: Boolean, default: false }) collapseTags?: false

  @Model('change', { default: '' }) value: Array<any> | string
  @Emit('change')
  myChange(key) {
    ;(this.$refs.select as any).$el.childNodes[0].style.padding = `0px ${
      (this.$refs.prefix as any).getBoundingClientRect().width
    }px 0px 0px`

    return key
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;

  ::v-deep.el-input__inner {
    padding-left: 12px;
  }

  ::v-deep.el-input__prefix {
    position: absolute;
    right: 33px;

    span {
      color: $color-grey-4;
      position: absolute;
      right: 0;
    }
  }
}
</style>
