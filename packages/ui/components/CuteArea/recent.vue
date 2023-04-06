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
<style lang="scss" scoped>
.cute-area-recent {
  padding-bottom: $padding-3x;
  border-bottom: 1px dashed $cute-area-recent-border-color;
  .cute-area-recent-head {
    padding: 0 $cute-area-padding;
    color: $cute-area-recent-head-color;
    font-size: $text-size-sm;
    line-height: $cute-area-head-line-height;
    font-weight: $text-title-weight;
  }

  .cute-area-recent-body {
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .cute-area-recent-option {
      float: left;
      padding: 0 $cute-area-padding;
      margin-top: $margin-3x;
      text-align: center;
      .cute-area-recent-item {
        position: relative;
        height: $cute-area-item-height;
        line-height: $cute-area-item-height;
        color: $cute-area-recent-item-color;
        font-size: $text-size-sm;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        cursor: pointer;
        background-color: $cute-area-recent-item-background-color;
      }

      .cute-area-recent-item:hover {
        background-color: $cute-area-item-hover-background-color;
        color: $cute-area-item-hover-color;
      }
    }
  }
}
</style>
