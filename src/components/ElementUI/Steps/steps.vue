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
    space: [Number, String],
    active: Number,
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

  methods: {
    getMigratingConfig() {
      return {
        props: {
          center: 'center is removed.',
        },
      }
    },
  },

  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal)
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
    background-color: #fff;
    padding: 0 10px 0 16px;
  }
  ::v-deep .el-step .el-step__title {
    font-size: 16px;
    line-height: 32px;
  }
  ::v-deep .el-step__icon.is-text {
    width: 32px;
    height: 32px;
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
    background-color: #fff;
    padding: 0 10px 0 16px;
  }
  ::v-deep .el-step .el-step__title {
    font-size: 12px;
    line-height: 20px;
  }
  ::v-deep .el-step__icon.is-text {
    width: 20px;
    height: 20px;
  }
  ::v-deep .el-step.is-horizontal .el-step__line {
    top: 10px;
  }
}
</style>
