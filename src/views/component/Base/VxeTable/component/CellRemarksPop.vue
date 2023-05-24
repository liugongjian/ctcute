<!--
 * @Author: 朱玉豆
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-24 10:11:19
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
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component({
  name: 'CellRemarksPop',
})
export default class extends Vue {
  /**
   * cellConfig: 每个单元格当前配置
   */

  @Prop({ type: Object, default: () => ({}) }) cellConfig?: {
    value: ''
    config: {
      fillColor: string
      bold: string // bold normal
      italic: string // italic normal
      remarks: Array<string>
      fontColor: string
    }
  }
}
</script>
<style lang="scss" scoped>
.cell-remarks__pop {
  padding: $padding-4x;
  &__title {
    font-size: $text-size-md;
  }
  &__content {
    margin-top: $margin-2x;
  }
}
</style>
