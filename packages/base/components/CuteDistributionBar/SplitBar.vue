<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:54
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-25 15:38:45
 * @Description:
-->
<template>
  <div ref="sliderRef" class="sp-slider" @click="handleSliderClick">
    <div v-for="(item, index) in showValue" :key="index">
      <div class="sp-slider__bar" :style="getBarStyle(index)" />
      <div
        ref="button"
        class="sp-slider__wrap"
        :class="{
          dragging: dragging,
          hover: hovering,
          disabled: fixLastButton && index === showValue.length - 1,
        }"
        :style="getButtonStyle(index)"
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
        <div class="sp-slider__button" />
      </div>
      <div class="sp-slider__text" :style="getTextStyle(index)">{{ showValue[index] }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'

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
  @Prop({ type: Boolean, default: false }) fixLastButton?: boolean

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
  private barColor = ['#409eff', '#e6a23c', '#409eff', '#e6a23c', '#409eff', '#e6a23c', '#409eff', '#e6a23c']
  // barColor = ['#409eff', '#e6a23c', '#67c23a', '#409eff', '#e6a23c', '#67c23a', '#409eff', '#e6a23c', '#67c23a']
  public showValue = []

  get currentPosition() {
    const rate = this.changeToRate(this.showValue[this.activeIndex])
    return `${rate}%`
  }

  getBarStyle(index) {
    const rate = this.changeToRate(this.showValue[index])
    return {
      width: `${rate}%`,
      left: 0,
      'background-color': this.barColor[index],
      'z-index': 99 - index,
    }
  }
  getButtonStyle(index) {
    const rate = this.changeToRate(this.showValue[index])
    return {
      left: `${rate}%`,
      'z-index': 1000 - index,
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
    if (this.fixLastButton && this.activeIndex === this.showValue.length - 1) return
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
  })
  valueChanged(value, oldVal) {
    if (!value || (value.length <= 0 && this.showValue.length > 0)) {
      this.showValue = []
      return
    }
    if (
      this.dragging ||
      (Array.isArray(value) && Array.isArray(oldVal) && value.every((item, index) => item === oldVal[index]))
    ) {
      return
    }

    const totalValue = value.reduce((total, valueItem) => {
      return total + valueItem
    }, 0)
    if (totalValue > this.max) {
      console.error('splitBar赋值校验失败。value数组的总和需要小于最大值，请重新赋值')
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
  width: 400px;
  height: 6px;
  margin: 16px 0;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;

  .sp-slider__bar {
    position: absolute;
    left: 0;
    height: 6px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    // transition: .2s;
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
    border: 2px solid #409eff;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    // user-select: none;
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
</style>
