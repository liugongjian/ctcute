<template>
  <div :style="{ 'max-width': maxWidth }" class="cute-steps-multi">
    <div v-if="hasGoButton" class="button-col point-style" @click="goPre">
      <i :class="['el-icon-arrow-left', disableLeft ? 'disabled' : '']"></i>
    </div>
    <!-- <div> -->
    <el-steps
      class="cute-steps-multi-main"
      :space="space"
      :active="active"
      finish-status="success"
      :direction="direction"
      :size="size"
      :style="{ 'max-width': `${space * (stepSize + 1) + lastStepWidth}px` }"
    >
      <el-step
        v-for="(s, index) in steps"
        v-show="getShow(index)"
        :key="index"
        :title="getTitle(s, index)"
        :last-step-width="lastStepWidth"
        :status="s.status"
        :class="{ stepErr: s.disabled }"
        @click.native="!s.disabled && handleStep(s, index)"
      ></el-step>
    </el-steps>
    <!-- </div> -->
    <div v-if="hasGoButton" class="button-col point-style" @click="goNext">
      <i :class="['el-icon-arrow-right', disableRight ? 'disabled' : '']"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteStepsMulti',
})
export default class extends Mixins(Locale) {
  @Prop({ type: String, default: 'medium' }) size?: string // 步骤条大小，medium / small
  @Prop({ type: String, default: '100%' }) maxWidth?: string // 步骤条长度
  @Prop({ type: String }) direction?: string // 步骤条方向
  @Prop({ type: Number, default: 0 }) active?: number // 激活
  @Prop({ type: Number, default: 300 }) space?: number // 每个 step 的间距，不填写将自适应间距。支持百分比。
  @Prop(Array) readonly steps: any // step数据
  @Prop({ type: Number, default: 1 }) stepSize?: number // 多步骤条时使用，显示几个步骤
  @Prop({ type: Boolean, default: false }) hasGoButton?: boolean // 是否展示前后退按钮
  @Prop({ type: Number, default: 135 }) lastStepWidth?: number
  width = '0'
  disableLeft = false
  disableRight = false
  @Watch('active')
  private change(val: any) {
    if (val >= this.steps.length - 1) {
      this.disableRight = true
    } else {
      this.disableRight = false
    }
    if (val <= 0) {
      this.disableLeft = true
    } else {
      this.disableLeft = false
    }

    this.$forceUpdate()
  }
  handleStep(s: any, index: number) {
    this.$emit('click-step', s, index)
  }

  getShow(index: number) {
    if (this.stepSize === 1) {
      if (
        index === 0 ||
        index === this.steps.length - 1 ||
        this.active === index ||
        (this.active >= this.steps.length - 1 && index === this.steps.length - 2) ||
        (this.active === 0 && index === 1)
      ) {
        return true
      } else {
        return false
      }
    } else {
      if (index === 0 || index === this.steps.length - 1) {
        return true
      } else if (this.active === 0 && index <= this.stepSize) {
        return true
      } else if (
        this.active >= this.steps.length - 1 - this.stepSize &&
        index >= this.steps.length - 1 - this.stepSize
      ) {
        return true
      } else if (
        this.active < this.steps.length - 1 - this.stepSize &&
        index < this.active + this.stepSize &&
        index >= this.active
      ) {
        return true
      } else {
        return false
      }
    }
  }

  getTitle(s: any, index: number) {
    if (index === this.active) {
      return this.t('cute.stepsMulti.processing')
    } else if (index === this.active + 1) {
      return this.t('cute.stepsMulti.pending')
    } else if (this.steps.length - 1 === this.active) {
      return this.t('cute.stepsMulti.completed')
    } else {
      return s.title
    }
  }

  goPre() {
    const changeValue = -1
    this.$emit('change', changeValue)
  }

  goNext() {
    const changeValue = 1
    this.$emit('change', changeValue)
  }

  mounted() {
    this.getShow(0)
  }
}
</script>
