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
