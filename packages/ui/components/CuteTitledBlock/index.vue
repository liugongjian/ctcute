<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-23 06:09:04
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-08-08 14:00:49
 * @Description:
-->
<template>
  <div class="block">
    <div class="block__title">
      <div class="block__title__text">{{ title }}</div>
      <slot name="extra" class="block__title__extra"></slot>
    </div>
    <div class="block__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteTitledBlock',
})
export default class extends Vue {
  /**
   * 标题
   */
  @Prop({ default: '', required: true }) private readonly title: string
}
</script>
