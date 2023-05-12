<template>
  <div class="cute-sliders">
    <el-slider
      v-model="values"
      class="cute-slider"
      :range="range"
      :min="min"
      :max="max"
      :marks="marks"
      :show-tooltip="true"
      :step="step"
      :disabled="disabled"
      :style="{ '--width-slider': width + 'px' }"
      @change="mouseMove"
    ></el-slider>
    <div v-if="!range" class="sliders-input">
      <el-input
        v-model="valueInput"
        :disabled="disabled"
        size="small"
        onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
        @blur="inputChange"
        @input="changeValues($event)"
      ></el-input>
      <span class="slider-unit">{{ unit }}</span>
    </div>
    <div v-else class="sliders-range">
      <div class="range-input">
        <el-input
          v-model="valueInput[0]"
          size="small"
          :disabled="disabled"
          onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
          @blur="inputChange"
          @input="minChange($event)"
        ></el-input>
        <span class="range-line">—</span>
        <el-input
          v-model="valueInput[1]"
          size="small"
          :disabled="disabled"
          onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
          @blur="inputChange"
          @input="maxChange($event)"
        ></el-input>
      </div>
      <span class="slider-unit">{{ unit }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, VModel, Watch, Mixins } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteSlider',
})
export default class extends Mixins(Locale) {
  @Prop({ default: 0 }) private min!: number
  @Prop({ default: 100 }) private max!: number
  @Prop({ default: false }) private disabled!: boolean
  @Prop({ default: true }) private range!: boolean // 是否双滑块模式
  @Prop({ default: null, type: Object }) private marks?: null
  @Prop({ default: 'Mbit/s' }) private unit!: string
  @Prop({ default: 1 }) private step!: number
  @Prop({ default: 695 }) private width!: number
  @VModel({ type: [Number, Array] }) private valueInput!: number | []
  @Watch('valueInput', { deep: true, immediate: true })
  private valuesChange(val) {
    // console.log(val, 'newwal')
    if (this.range) {
      this.values = [Number(val[0]), Number(val[1])]
    } else {
      this.values = Number(val)
      this.$nextTick(() => {
        this.$emit('input-change', Number(val))
      })
    }
  }
  private values: any = null
  // private inputValue = 0
  // private minRange = 0
  // private maxRange = 0
  $message: any

  private mouseMove(e) {
    if (this.range) {
      this.$emit('move-change', e)
    } else {
      this.valueInput = e
      this.$emit('move-change', e)
    }
  }
  private changeValues(e) {
    this.values = Number(e)
    this.valueInput = Number(e)
    this.$emit('input-change', Number(e))
    // if (this.range) {
    //   this.values = [Number(e[0]), Number(e[1])]
    //   this.valueInput = [Number(e[0]), Number(e[1])]
    //   console.log(this.values, this.valueInput, 'iiii')
    //   this.$emit('inputChange', [Number(e[0]), Number(e[1])])
    // } else {
    // }
  }
  private minChange(e) {
    // console.log(e, 'e1')
    // this.$set(this.values, 0, Number(e))
    // this.values[0] = Number(e)
    // this.valueInput[0] = Number(e)
    // this.$set(this.valueInput, 0, Number(e))
    // console.log(this.values, 'vallll')
    this.$emit('input-change', [Number(e), this.valueInput[1]])
  }
  private maxChange(e) {
    // console.log(e, 'e2')
    // this.values[1] = Number(e)
    // this.valueInput[1] = Number(e)
    // this.$set(this.values, 1, Number(e))
    // this.$set(this.valueInput, 1, Number(e))
    // console.log(this.values, 'vallll')
    this.$emit('input-change', [this.valueInput[0], Number(e)])
  }
  private inputChange(e) {
    if (!e.target.value) {
      if (this.range) {
        this.valueInput[0] = this.min
        this.valueInput[1] = this.min
      } else {
        this.$emit('input-change', Number(this.min))
      }
    }
    if (this.range) {
      this.values = [Number(this.valueInput[0]), Number(this.valueInput[1])]
      if (
        Number(this.valueInput[0]) > Number(this.valueInput[1]) ||
        Number(this.valueInput[1]) > this.max ||
        Number(this.valueInput[0]) > this.max
      ) {
        this.$message({
          message: this.t('cute.slider.warnMessage'),
          type: 'warning',
        })
        this.values = [this.min, this.min]
        this.valueInput[0] = this.min
        this.valueInput[1] = this.min
      } else {
        this.values = [Number(this.valueInput[0]), Number(this.valueInput[1])]
      }
      // this.values = [Number(this.valueInput[0]), Number(this.valueInput[1])]
      this.$emit('input-change', [Number(this.valueInput[0]), Number(this.valueInput[1])])
    } else {
      this.$emit('input-change', Number(e.target.value))
      // if (Number(this.inputValue > this.max)) {
      //   this.$message({
      //     message: '输入错误,请重新输入',
      //     type: 'warning',
      //   })
      //   this.value = 0
      //   this.inputValue = 0
      // } else {
      //   this.value = Number(this.inputValue)
      //   this.$emit('inputChange', Number(this.inputValue))
      // }
    }
  }

  private mounted() {
    const btn = document.querySelectorAll('.el-slider.cute-slider .el-tooltip.el-slider__button') as any
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.width = variables.cuteSliderBtnWidth // '17px'
      btn[i].style.height = variables.cuteSliderBtnHeight //'22px'
      btn[i].innerHTML = '<div class="cute-slider-user-button"><span></span><span></span><span></span> </div>'
      // '|||'
      // btn[i].style.width = '17px'
      // btn[i].style.height = '22px'
      // btn[i].innerHTML = `
      //   <div class='cute-slider-user-button'>
      //     <span></span>
      //     <span></span>
      //     <span></span>
      //   </div>
      // `
    }
  }
}
</script>
