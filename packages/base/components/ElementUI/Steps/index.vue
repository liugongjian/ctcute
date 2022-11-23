<template>
  <div
    class="el-steps"
    :class="[
      !simple && 'el-steps--' + direction,
      simple && 'el-steps--simple',
      size === 'mini' ? 'el-steps--min' : 'el-steps--normal',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import Migrating from 'element-ui/src/mixins/migrating'

export default {
  name: 'ElSteps',

  mixins: [Migrating],

  props: {
    space: { type: [Number, String], default: 300 },
    active: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish',
    },
    processStatus: {
      type: String,
      default: 'process',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },

  data() {
    return {
      steps: [],
      stepOffset: 0,
    }
  },

  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal)
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            center: 'center is removed.',
          },
        }
      },
    },

    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.el-steps--normal {
  ::v-deep .el-step .el-step__main {
    position: absolute;
    left: 24px;
    top: 2px;
    height: 26px;
    line-height: 26px;
    background-color: $color-bg-2;
    padding: 0 10px 0 16px;
  }

  ::v-deep .el-step .el-step__title {
    font-size: 16px;
    line-height: 32px;
  }

  ::v-deep .el-step__icon.is-text {
    width: 32px;
    height: 32px;
    background-color: $color-bg-2;
  }

  ::v-deep .el-step.is-horizontal .el-step__line {
    top: 16px;
  }
}

.el-steps--min {
  ::v-deep .el-step .el-step__main {
    position: absolute;
    left: 12px;
    top: 1px;
    height: 26px;
    line-height: 26px;
    background-color: $color-bg-2;
    padding: 0 10px 0 16px;
  }

  ::v-deep .el-step .el-step__title {
    font-size: 12px;
    line-height: 20px;
  }

  ::v-deep .el-step__icon.is-text {
    width: 20px;
    height: 20px;
    background-color: $color-bg-2;
  }

  ::v-deep .el-step.is-horizontal .el-step__line {
    top: 10px;
  }

  ::v-deep .el-step__icon-inner.is-status {
    transform: translateY(0);
    font-size: 12px;
  }
}
</style>
