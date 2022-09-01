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
  padding-bottom: 12px;
  border-bottom: 1px dashed $color-grey-6;
  .cute-area-recent-head {
    padding: 0 2px;
    color: $color-grey-1;
    font-size: $text-size-small;
    line-height: 20px;
    font-weight: 400;
  }

  .cute-area-recent-body {
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .cute-area-recent-option {
      float: left;
      padding: 0 2px;
      margin-top: 12px;
      text-align: center;
      .cute-area-recent-item {
        position: relative;
        height: 30px;
        line-height: 30px;
        color: $color-grey-2;
        font-size: $text-size-small;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        cursor: pointer;
        background-color: $color-master-7;
      }

      .cute-area-recent-item:hover {
        background-color: $color-master-7;
        color: $color-master-1;
      }
    }
  }
}
</style>
