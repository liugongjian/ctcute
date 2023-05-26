<!--
 * @Author: 朱玉豆
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-26 17:23:11
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
$cell-edit-max-width: 238px;
$cell-edit-max-height: 238px;
.cell-remarks__pop {
  max-width: $cell-edit-max-width;
  max-height: $cell-edit-max-height;
  overflow-y: scroll;
  background: $neutral-8;
  padding: $padding-4x;
  &__title {
    color: $neutral-1;
    font-size: $text-size-md;
    font-weight: $text-title-weight;
  }
  &__content {
    margin-top: $margin-2x;
    color: $neutral-1;
  }
}
</style>
