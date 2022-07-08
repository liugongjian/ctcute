<template>
  <div
    :style="style"
    :class="[
      !isSimple && `is-${$parent.direction}`,
      isSimple && 'is-simple',
      isLast && !space && !isCenter && 'is-flex',
      isCenter && !isVertical && !isSimple && 'is-center',
    ]"
    class="el-step"
  >
    <!-- icon & line -->
    <div :class="`is-${currentStatus}`" class="el-step__head">
      <div class="el-step__line" :style="isLast ? '' : { marginRight: $parent.stepOffset + 'px' }">
        <i class="el-step__line-inner" :style="lineStyle"></i>
      </div>

      <div :class="`is-${icon ? 'icon' : 'text'}`" class="el-step__icon">
        <slot v-if="currentStatus !== 'success' && currentStatus !== 'error'" name="icon">
          <i v-if="icon" class="el-step__icon-inner" :class="[icon]"></i>
          <div v-if="!icon && !isSimple" class="el-step__icon-inner">{{ index + 1 }}</div>
        </slot>
        <i
          v-else
          :class="['el-icon-' + (currentStatus === 'success' ? 'check' : 'close')]"
          class="el-step__icon-inner is-status"
        >
        </i>
      </div>
    </div>
    <!-- title & description -->
    <div class="el-step__main">
      <div ref="title" :class="['is-' + currentStatus]" class="el-step__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="isSimple" class="el-step__arrow"></div>
      <div v-else class="el-step__description" :class="['is-' + currentStatus]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElStep',

  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    lastStepWidth: {
      // 新增参数lastStepWidth,最后一个steps宽度，默认135
      type: Number,
      default: 135,
    },
  },

  data() {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: '',
    }
  },
  computed: {
    currentStatus() {
      return this.status || this.internalStatus
    },

    prevStatus() {
      const prevStep = this.$parent.steps[this.index - 1]
      return prevStep ? prevStep.currentStatus : 'wait'
    },

    isCenter() {
      return this.$parent.alignCenter
    },

    isVertical() {
      return this.$parent.direction === 'vertical'
    },

    isSimple() {
      return this.$parent.simple
    },

    isLast() {
      const parent = this.$parent
      return parent.steps[parent.steps.length - 1] === this
    },

    stepsCount() {
      return this.$parent.steps.length
    },

    space() {
      const {
        isSimple,
        $parent: { space },
      } = this
      return isSimple ? '' : space
    },

    style() {
      const style = {}
      const parent = this.$parent
      const len = parent.steps.length
      const lastStepWidth = this.lastStepWidth
      const steps = parent.steps
      let space
      if (typeof this.space === 'number') {
        space = this.space + 'px'
      } else if (this.space) {
        space = this.space
      } else {
        space = 100 / (len - (this.isCenter ? 0 : 1)) + '%'
      }
      style.flexBasis = space
      if (this.isVertical) return style
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + '%'
      } else {
        style.marginRight = -this.$parent.stepOffset + 'px'
      }
      steps.map((s, index) => {
        let result = ''
        if (index < steps.length - 1) {
          result = `calc((100% - ${lastStepWidth}px) / ${steps.length - 1})`
        } else {
          result = `${lastStepWidth}px`
        }
        style.minWidth = result
      })

      return style
    },
  },
  beforeCreate() {
    this.$parent.steps.push(this)
  },

  beforeDestroy() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.splice(index, 1)
    }
  },

  mounted() {
    const unwatch = this.$watch('index', () => {
      this.$watch('$parent.active', this.updateStatus, { immediate: true })
      this.$watch(
        '$parent.processStatus',
        () => {
          const activeIndex = this.$parent.active
          this.updateStatus(activeIndex)
        },
        { immediate: true }
      )
      unwatch()
    })
  },

  methods: {
    updateStatus(val) {
      const prevChild = this.$parent.$children[this.index - 1]

      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus
      } else {
        this.internalStatus = 'wait'
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus)
    },

    calcProgress(status) {
      let step = 100
      const style = {}

      style.transitionDelay = 150 * this.index + 'ms'
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0
      } else if (status === 'wait') {
        step = 0
        style.transitionDelay = -150 * this.index + 'ms'
      }

      style.borderWidth = step && !this.isSimple ? '1px' : 0
      this.$parent.direction === 'vertical' ? (style.height = step + '%') : (style.width = step + '%')

      this.lineStyle = style
    },
  },
}
</script>
