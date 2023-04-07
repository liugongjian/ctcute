<!--
 * @Author: 吴博聪
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: zhulh
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 复杂小弹窗
-->
<template>
  <el-card>
    <h2>特殊弹窗-小</h2>
    <div>
      <p>查看信息，宽度480px</p>
      <el-button type="primary" @click="handleClick">特殊弹窗-小</el-button>
    </div>
    <el-dialog width="480px" :title="title" :visible="visible" :close-on-click-modal="false" @close="close">
      <pre class="pro-dialog__pre">{{ log }}</pre>
      <div slot="footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'ProSmallDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private log =
    'name-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)\nname-group_001(20)'

  private title = '小弹窗 (信息确认)'
  private visible = false

  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
<style lang="scss" scoped>
.pro-dialog__pre {
  width: 100%;
  margin: 0;
  padding: $padding-3x $padding-6x;
  line-height: $common-space-8x;
  background: $color-neutral-1;
}
</style>
