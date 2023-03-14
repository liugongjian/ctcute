<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:54
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-28 16:15:04
 * @Description:
-->
<template>
  <div class="sp-slider">
    <div ref="sliderRef" class="sp-slider__bar">
      <div v-for="(item, index) in showValue" :key="index">
        <el-popover
          v-if="textData && textData.length > 0"
          placement="top"
          width="auto"
          trigger="click"
          :content="textData[index]"
        >
          <div slot="reference" class="sp-slider__bar-item" :style="getBarStyle(index)" />
        </el-popover>
        <div v-else slot="reference" class="sp-slider__bar-item" :style="getBarStyle(index)" />
        <div
          v-if="showButton(index)"
          ref="button"
          class="sp-slider__wrap"
          :class="{
            dragging: dragging,
            hover: hovering,
          }"
          :style="getButtonWrapStyle(index)"
          tabindex="0"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @mousedown="onButtonDown($event, index)"
          @touchstart="onButtonDown($event, index)"
          @focus="handleMouseEnter"
          @blur="handleMouseLeave"
          @keydown.left="onLeftKeyDown($event, index)"
          @keydown.right="onRightKeyDown($event, index)"
          @keydown.down.prevent="onLeftKeyDown($event, index)"
          @keydown.up.prevent="onRightKeyDown($event, index)"
        >
          <div class="sp-slider__button" :style="getButtonStyle(index)" />
          <div></div>
        </div>
        <!-- <div class="sp-slider__text" :style="getTextStyle(index)">{{ item }}</div> -->
      </div>
    </div>
    <div class="sp-slider__max">{{ showPercentage ? max + '%' : max }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

const defaultValue = [50, 50]
@Component({
  name: 'CuteSplitBar',
})
export default class extends Vue {
  @Prop({ type: Array, default: () => defaultValue }) value?: []
  @Prop({ type: Boolean, default: false }) disabled?: boolean
  @Prop({ type: Number, default: 0 }) min?: number
  @Prop({ type: Number, default: 100 }) max?: number
  @Prop({ type: Number, default: 1 }) step?: number
  @Prop({ type: Boolean, default: false }) showLastButton?: boolean
  @Prop({ type: Array, default: () => [] }) textData?: []
  @Prop({ type: Boolean, default: true }) showPercentage?: boolean
  @Prop({
    type: Array,
    default: () => [
      variables.chartColorH12,
      variables.chartColor3,
      variables.chartColor4,
      variables.chartColor11,
      variables.chartColor8,
      variables.chartColor9,
      variables.chartColor5,
      variables.chartColor1,
      variables.chartColor6,
      variables.chartColor10,
    ],
  })
  barColor?: []

  public hovering = false
  public dragging = false
  private isClick = false
  private startX = 0
  private currentX = 0
  private startPosition = 0
  private newPosition: number | null = null
  private sliderSize = 1
  private precision = 0
  private activeIndex = 0
  public showValue = []

  get currentPosition() {
    const rate = this.changeToRate(this.showValue[this.activeIndex])
    return `${rate}%`
  }

  showButton(index) {
    return (this.showLastButton && index !== this.showValue.length - 1) || !this.showLastButton
  }

  getBarStyle(index) {
    const preValue = this.showValue[index - 1] || 0
    const currentValue = this.showValue[index] - preValue
    const preRate = this.changeToRate(preValue)
    const currentRate = this.changeToRate(currentValue)
    return {
      width: `${currentRate}%`,
      left: `${preRate}%`,
      'background-color': this.barColor[index],
      'z-index': 99 - index,
    }
  }
  getButtonWrapStyle(index) {
    const rate = this.changeToRate(this.showValue[index])
    return {
      left: `${rate}%`,
      'z-index': 1000 - index,
    }
  }
  getButtonStyle(index) {
    return {
      border: `2px solid ${this.barColor[index]}`,
    }
  }
  getTextStyle(index) {
    const rate = this.changeToRate(this.showValue[index])
    return {
      left: `${rate}%`,
      'z-index': 500 - index,
    }
  }
  handleSliderClick(event) {
    // 处理sideBar的点击
    if (this.disabled || this.dragging) return
    this.resetSliderSize()
    const sliderOffsetLeft = this.sliderRef.getBoundingClientRect().left
    const newPosition = ((event.clientX - sliderOffsetLeft) / this.sliderSize) * 100
    // 找到距离新位置最近的那个button
    let buttonIndex = 0
    this.showValue.forEach((item, index) => {
      const rate = this.changeToRate(item)
      if (rate < newPosition) {
        buttonIndex = index
        return
      }
    })
    this.activeIndex = buttonIndex
    this.setPosition(newPosition)
  }
  changeToRate(value) {
    return ((value - this.min) / (this.max - this.min)) * 100
  }
  handleMouseEnter() {
    this.hovering = true
  }

  handleMouseLeave() {
    this.hovering = false
  }
  onButtonDown(event, index) {
    if (this.disabled) return
    event.preventDefault()
    this.activeIndex = index
    this.onDragStart(event)
    window.addEventListener('mousemove', this.onDragging)
    window.addEventListener('touchmove', this.onDragging)
    window.addEventListener('mouseup', this.onDragEnd)
    window.addEventListener('touchend', this.onDragEnd)
    window.addEventListener('contextmenu', this.onDragEnd)
  }
  onLeftKeyDown(event, index) {
    if (this.disabled) return
    this.activeIndex = index
    this.newPosition = parseFloat(this.currentPosition) - (this.step / (this.max - this.min)) * 100
    this.setPosition(this.newPosition)
  }
  onRightKeyDown(event, index) {
    if (this.disabled) return
    this.activeIndex = index
    this.newPosition = parseFloat(this.currentPosition) + (this.step / (this.max - this.min)) * 100
    this.setPosition(this.newPosition)
  }
  onDragStart(event) {
    this.dragging = true
    this.isClick = true
    if (event.type === 'touchstart') {
      event.clientY = event.touches[0].clientY
      event.clientX = event.touches[0].clientX
    }
    this.startX = event.clientX
    this.startPosition = parseFloat(this.currentPosition)
    this.newPosition = this.startPosition
  }
  onDragging(event) {
    if (this.dragging) {
      this.isClick = false
      this.resetSliderSize()
      let diff = 0
      if (event.type === 'touchmove') {
        event.clientY = event.touches[0].clientY
        event.clientX = event.touches[0].clientX
      }
      this.currentX = event.clientX
      diff = ((this.currentX - this.startX) / this.sliderSize) * 100
      this.newPosition = this.startPosition + diff
      this.setPosition(this.newPosition)
    }
  }
  onDragEnd() {
    if (this.dragging) {
      /*
       * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
       * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
       */
      setTimeout(() => {
        this.dragging = false
        if (!this.isClick) {
          this.setPosition(this.newPosition)
        }
      }, 0)
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('touchmove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd)
      window.removeEventListener('touchend', this.onDragEnd)
      window.removeEventListener('contextmenu', this.onDragEnd)
    }
  }
  setPosition(newPosition) {
    if (newPosition === null || isNaN(newPosition)) return
    if (this.showLastButton && this.activeIndex === this.showValue.length - 1) return
    const nextPosition = this.changeToRate(this.showValue[this.activeIndex + 1] || this.max)
    const prePosition = this.changeToRate(this.showValue[this.activeIndex - 1] || this.min)
    if (newPosition < 0) {
      newPosition = 0
    } else if (newPosition > 100) {
      newPosition = 100
    } else if (newPosition >= nextPosition) {
      newPosition = nextPosition
    } else if (newPosition <= prePosition) {
      newPosition = prePosition
    }
    const lengthPerStep = 100 / ((this.max - this.min) / this.step)
    const steps = Math.round(newPosition / lengthPerStep)
    let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min
    value = parseFloat(value.toFixed(this.precision))
    this.showValue.splice(this.activeIndex, 1, value)
    this.emitChange()
  }
  emitChange() {
    const value = this.showValue.map((item, index) => {
      const preIndex = index - 1
      if (preIndex >= 0) {
        return item - this.showValue[preIndex]
      } else {
        return item
      }
    })
    this.$emit('input', value)
    this.$emit('change', value)
  }
  private resetSliderSize() {
    if (this.sliderRef) {
      this.sliderSize = this.sliderRef.clientWidth
    }
  }

  mounted() {
    this.resetSliderSize()
    window.addEventListener('resize', this.resetSliderSize)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resetSliderSize)
  }

  @Ref('sliderRef')
  private sliderRef

  @Watch('value', {
    immediate: true,
    deep: true,
  })
  valueChanged(value, oldVal) {
    if (!value || (value.length <= 0 && this.showValue.length > 0)) {
      this.showValue = []
      return
    }
    if (
      this.dragging ||
      (Array.isArray(value) &&
        Array.isArray(oldVal) &&
        value.every((item, index) => item === oldVal[index]) &&
        oldVal.every((item, index) => item === value[index]))
    ) {
      return
    }
    const totalValue = value.reduce((total, valueItem) => {
      return total + valueItem
    }, 0)
    if (totalValue > this.max) {
      console.error('cute-distribution-bar赋值校验失败。value数组的总和需要小于最大值，请重新赋值')
      return
    }
    this.showValue = value.map((item, index) => {
      const result = value.reduce((total, valueItem, valueIndex) => {
        return index >= valueIndex ? total + valueItem : total
      }, 0)
      return result
    })
  }
}
</script>
<style lang="scss" scoped>
.sp-slider {
  display: flex;
  align-items: center;

  .sp-slider__bar {
    width: 400px;
    height: 8px;
    // margin: 16px 0;
    background-color: $color-grey-8;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;

    .sp-slider__bar-item {
      position: absolute;
      left: 0;
      height: 8px;
      border-radius: 4px;
      // border-top-left-radius: 4px;
      // border-bottom-left-radius: 4px;
    }

    .sp-slider__wrap {
      width: 32px;
      height: 32px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;

      &.hover,
      &:hover {
        cursor: grab;
      }

      user-select: none;

      &.dragging {
        cursor: grabbing;
      }

      &.disabled {
        cursor: not-allowed;
      }
    }

    .sp-slider__button {
      width: 16px;
      height: 16px;
      background-color: $color-white;
      border-radius: 50%;
      transition: 0.2s;

      &.hover,
      &:hover {
        transform: scale(1.2);
      }
    }

    .sp-slider__text {
      position: absolute;
      top: -32px;
      font-size: 12px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      transform: translateX(-50%);
    }
  }

  .sp-slider__max {
    margin-left: 15px;
  }
}
</style>
