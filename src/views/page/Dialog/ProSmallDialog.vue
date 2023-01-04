<!--
 * @Author: 吴博聪
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2022-12-20 14:08:20
 * @Description: 复杂小弹窗
-->
<template>
  <el-card>
    <h2>特殊弹窗-小</h2>
    <div>
      <p>查看信息，宽度480px</p>
      <el-button type="primary" @click="handleClick">特殊弹窗-小</el-button>
    </div>
    <el-dialog
      class="info-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-scrollbar class="info-dialog--content" :wrap-style="[{ maxHeight: '483px' }]">
        <slot name="content">
          <pre class="info-dialog--pre">
            <span>{{ log }}</span>
          </pre>
        </slot>
      </el-scrollbar>
      <div class="info-dialog--footer">
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
  @Prop({
    default: `
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)
    name-group_001(20)`,
  })
  readonly log: string

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
