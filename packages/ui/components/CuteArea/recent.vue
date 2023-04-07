<template>
  <div class="cute-area-recent">
    <div class="cute-area-recent-head">最近访问</div>
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
export default {
  name: 'CuteAreaRecent',

  componentName: 'CuteAreaRecent',

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
