<template>
  <div
    class="el-steps"
    :class="[
      !simple && 'el-steps--' + direction,
      simple && 'el-steps--simple',
      size === 'small' ? 'el-steps--small' : 'el-steps--medium',
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
<style lang="scss">
/* $size:大小;
   $icon-height:步骤标号大小
   $title-size:标题字体大小
   $icon-inner-status-size: 步骤标号中状态icon字体大小
   $icon-inner-text-size：步骤标号中数字字体大小
*/
@mixin steps-size($size, $icon-height, $title-size, $icon-inner-status-size, $icon-inner-text-size) {
  // 垂直方向、simple模式、居中模式不改变title位置
  // size为重写el-step增加的class
  .el-steps--#{$size} {
    .el-step.is-horizontal:not(.is-center):not(.is-simple) {
      .el-step__title {
        position: absolute;
        left: $icon-height;
        top: 0;
        background-color: $color-bg-2;
      }

      .el-step__description {
        margin-left: $icon-height;
        margin-top: 0;
      }

      .el-step__title,
      .el-step__description {
        @if $size == small {
          padding: 0 $padding-2x 0 $padding;
        }

        @else {
          padding: 0 $padding-2x;
        }
      }
    }

    .el-step.is-vertical {
      .el-step__line {
        left: calc(($icon-height - $steps-line-size) / 2);
      }

      .el-step__head {
        width: $icon-height;
      }
    }

    .el-step.is-horizontal .el-step__line {
      top: calc(($icon-height - $steps-line-size) / 2);
    }

    .el-step:not(.is-simple) {
      .el-step__title {
        font-size: $title-size;
        line-height: $icon-height;
      }

      .el-step__icon .el-step__icon-inner {
        &:is(.is-text) {
          font-size: $icon-inner-text-size;
        }

        &:is(.is-status) {
          transform: translateY(0);
          font-size: $icon-inner-status-size;
        }
      }

      .el-step__icon.is-text {
        width: $icon-height;
        height: $icon-height;
      }
    }
  }
}

@include steps-size(
  medium,
  $steps-icon-height-md,
  $steps-title-size-md,
  $steps-icon-inner-status-size-md,
  $steps-icon-inner-text-size-md
);
@include steps-size(
  small,
  $steps-icon-height-sm,
  $steps-title-size-sm,
  $steps-icon-inner-status-size-sm,
  $steps-icon-inner-text-size-sm
);
</style>
