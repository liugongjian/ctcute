<!--
 * @Author: 胡佳婷
 * @Date: 2023-04-07 13:57:38
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-17 23:09:38
 * @Description:
-->
<template>
  <div class="cute-area-recent">
    <div class="cute-area-recent-head">{{ t('cute.area.recent') }}</div>
    <div class="cute-area-recent-body">
      <div
        v-for="item in data"
        :key="item.label"
        class="cute-area-recent-option"
        :style="{ width: columnWidth }"
      >
        <div class="cute-area-recent-item" @click.stop="selectRecentClick(item)">{{ formatLabel(item) }}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import Locale from '@cutedesign/ui/mixins/localeJs'
export default {
  name: 'CuteAreaRecent',

  componentName: 'CuteAreaRecent',
  mixins: [Locale],
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columnWidth: {
      type: String,
      default: '25%',
    },
    format: {
      type: Function,
      default: null,
    },
  },

  methods: {
    formatLabel(item) {
      return this.format ? this.format(item) : item.label
    },
    selectRecentClick(item) {
      this.$emit('change', item)
    },
  },
}
</script>
