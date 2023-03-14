<!--
 * @Author: 马妍
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-26 16:44:58
 * @Description: 操作已选项
-->
<template>
  <div class="selected-input">
    <el-select ref="select" :value="''" placeholder="" @change="handelSelectChange">
      <span slot="prefix" :class="flag ? 'select-field' : 'select-uncheck'">{{ sele }}</span>
      <el-option
        v-for="(v, i) in options"
        :key="i"
        :label="v.label"
        :value="v.value"
        class="field-option"
        :disabled="v.disabled"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'CuteSelectedInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) checkedList?: [] //已选中数据
  @Prop({ type: Array, default: [] }) options?: [] //下拉数据
  private sele = ''
  private flag = false
  private created() {
    if (this.checkedList.length > 0) {
      this.flag = true
      this.sele = `操作已选项(${this.checkedList.length})`
    } else {
      this.flag = false
      this.sele = '操作已选项'
    }
  }
  @Watch('checkedList')
  private change() {
    if (this.checkedList.length > 0) {
      this.flag = true
      this.sele = `操作已选项(${this.checkedList.length})`
    } else {
      this.flag = false
      this.sele = '操作已选项'
    }
  }

  private handelSelectChange(e) {
    this.$emit('change', { checkedList: this.checkedList, value: e })
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  ::v-deep .el-input.el-input--medium.el-input--suffix {
    width: 130px;
    padding-right: 0;
  }

  ::v-deep.el-input__inner {
    padding-right: 0;
    color: $color-grey-1;
  }
}

.select-uncheck {
  padding-right: 0;
  color: $color-grey-1;
}

.select-field {
  padding-right: 0;
  color: $color-master;
}
</style>
