<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:20:54
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:35:53
 * @Description: 有标题的卡片，通常用于图表类的盒子
-->

<template>
  <el-card class="cute-card">
    <div slot="header" class="cute-card__header">
      <span class="cute-card__header__title">{{ title }}</span>
      <div v-if="$slots.extra" class="cute-card__header__extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="cute-card__content">
      <slot name="content"></slot>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteCardBox',
})
export default class extends Vue {
  /**
   * 标题
   */
  @Prop({ default: '', required: true }) private readonly title: string
}
</script>
<style lang="scss" scoped>
.cute-card {
  ::v-deep .el-card__header {
    padding: 0 22px;
  }

  &__header {
    clear: both;
    display: flex;
    align-items: center;

    &__title {
      font-size: 14px;
      color: $color-grey-1;
      line-height: 52px;
      font-weight: bold;
    }

    &__extra {
      margin-left: auto;
    }
  }
}
</style>
