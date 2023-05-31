<!--
 * @Author: 朱玉豆
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-31 13:16:06
 * @Description:
-->
<template>
  <div class="cell-remarks__pop">
    <div class="cell-remarks__pop__title">备注</div>
    <div
      v-if="cellConfig && cellConfig.config && cellConfig.config.remarks"
      class="cell-remarks__pop__content"
    >
      <div v-for="item in cellConfig.config.remarks" :key="item" class="cell-remarks__pop__content__item">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { CellConfig } from './../types'
@Component({
  name: 'CellRemarksPop',
})
export default class extends Vue {
  /**
   * cellConfig: 每个单元格当前配置
   */

  @Prop({ type: Object, default: () => ({}) }) cellConfig?: CellConfig
}
</script>
<style lang="scss" scoped>
$cell-edit-remark-pop-max-width: 238px;
$cell-edit-remark-pop-min-width: 128px;
$cell-edit-remark-pop-max-height: 500px;
.cell-remarks__pop {
  border-radius: $border-radius;
  max-width: $cell-edit-remark-pop-max-width;
  max-height: $cell-edit-remark-pop-max-height;
  min-width: $cell-edit-remark-pop-min-width;
  overflow-y: scroll;
  background: $color-neutral-8;
  padding: $padding-4x;
  &__title {
    color: $color-neutral-1;
    font-size: $text-size-md;
    font-weight: $text-title-weight;
  }
  &__content {
    margin-top: $margin-2x;
    color: $color-neutral-1;
    &__item {
      font-size: $text-size-small;
    }
  }
}
</style>
