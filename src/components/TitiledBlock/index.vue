<template>
  <div class="block">
    <div class="block__title">{{ title }}</div>
    <div class="block__content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SimpleTable',
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
  margin-bottom: 24px;

  &__title {
    color: $text-color-primary;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;

    &:before {
      width: 4px;
      height: 14px;
      background-color: $color-master-1;
      margin-right: 12px;
      content: ' ';
      display: inline-block;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
