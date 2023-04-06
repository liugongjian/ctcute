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
<style lang="scss" scoped>
.block {
  margin-bottom: $margin-6x;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $margin-4x;

    &__text {
      color: $text-color;
      font-weight: $text-title-weight;
      display: flex;
      align-items: center;
      font-size: $text-size-md;

      &:before {
        width: 4px;
        height: $text-size-md;
        background-color: $color-master;
        margin-right: $margin-3x;
        content: ' ';
        display: inline-block;
      }
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
