<!--
 * @Author: 黄靖
 * @Date: 2023-04-10 14:55:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-19 19:46:04
 * @Description: 
-->
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
    space: { type: [Number, String] },
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
