<!--
 * @Author: 朱玉豆
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-24 10:11:59
 * @Description:
-->
<template>
  <div class="remark">
    <slot></slot>
    <el-input v-model="remark" placeholder="添加备注" />
    <div class="operate-bar">
      <!-- 这个是用el-link还是el-button 都和设计稿对不上 -->
      <el-link class="clear" size="small" type="info" @click="handleClearRemarks">清空</el-link>
      <!-- <el-button class="clear" size="small" type="text" @click="handleClearRemarks">清空</el-button> -->
      <el-button type="primary" size="mini" @click="handleSaveRemarks">确定</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'CellRemarks',
})
export default class extends Vue {
  @Prop({ default: 'cellId' }) public value!: string

  private remark = ''

  handleSaveRemarks() {
    this.$emit('updateremarks', this.remark)
    this.remark = ''
  }
  handleClearRemarks() {
    this.remark = ''
  }
}
</script>
<style lang="scss" scoped>
$cell-edit-remarks-width: 244px !default;
.remark {
  .operate-bar {
    text-align: right;
    margin-top: $padding-2x;
    width: $cell-edit-remarks-width;
    .clear {
      margin-right: $margin-4x;
    }
  }
}
</style>
