<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-20 10:59:18
 * @Description: 带提示的选择器
-->
<template>
  <el-select filterable :placeholder="placeholder" clearable :value="value" @change="myChange($event)">
    <span slot="prefix" class="prefix-placeholder">{{ value ? title : '' }}</span>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'
@Component({
  name: 'CuteRemindSelect',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) options?: [] // 下拉数据
  @Prop({ type: String, default: '' }) placeholder?: '' // placeholder
  @Prop({ type: String, default: '' }) title?: '' // 提示文案
  @Model('change', { type: String, default: '' }) value: string
  @Emit('change')
  myChange(key) {
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
      color: #999;
      position: absolute;
      right: 0;
    }
  }
}
</style>
