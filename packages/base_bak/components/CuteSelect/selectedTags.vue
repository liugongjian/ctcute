<!--
 * @Author: 黄靖
 * @Date: 2023-03-17 18:15:10
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-17 18:15:10
 * @Description: 树选择器多选用到的selected Tags，覆盖原本的已选择tags，解决无法控制label、value的问题
-->
<template>
  <span>
    <el-tag
      v-for="tag in value"
      :key="tag.value"
      type="info"
      :size="size"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      >{{ tag.label }}</el-tag
    >
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
  name: 'CuteSelectTreeTags',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) value: Array<any>
  @Prop({ type: String, required: true }) size!: string

  /* 关闭标签 */
  @Emit('close')
  private handleClose(tag) {
    return tag
  }
}
</script>
