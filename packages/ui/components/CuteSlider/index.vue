<template>
  <div class="sliders">
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
    >
    </el-slider>
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
import { Component, Prop, Vue, VModel, Watch } from 'vue-property-decorator'
@Component({
  name: 'CuteSlider',
})
export default class extends Vue {
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
        this.$emit('inputChange', Number(val))
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
      // console.log(e, 'eeeee')
      this.$emit('moveChange', e)
    } else {
      this.valueInput = e
      this.$emit('moveChange', e)
    }
  }
  private changeValues(e) {
    this.values = Number(e)
    this.valueInput = Number(e)
    this.$emit('inputChange', Number(e))
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
    this.$emit('inputChange', [Number(e), this.valueInput[1]])
  }
  private maxChange(e) {
    // console.log(e, 'e2')
    // this.values[1] = Number(e)
    // this.valueInput[1] = Number(e)
    // this.$set(this.values, 1, Number(e))
    // this.$set(this.valueInput, 1, Number(e))
    // console.log(this.values, 'vallll')
    this.$emit('inputChange', [this.valueInput[0], Number(e)])
  }
  private inputChange(e) {
    if (!e.target.value) {
      if (this.range) {
        this.valueInput[0] = this.min
        this.valueInput[1] = this.min
      } else {
        this.$emit('inputChange', Number(this.min))
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
          message: '输入错误,请重新输入',
          type: 'warning',
        })
        this.values = [this.min, this.min]
        this.valueInput[0] = this.min
        this.valueInput[1] = this.min
      } else {
        this.values = [Number(this.valueInput[0]), Number(this.valueInput[1])]
      }
      // this.values = [Number(this.valueInput[0]), Number(this.valueInput[1])]
      this.$emit('inputChange', [Number(this.valueInput[0]), Number(this.valueInput[1])])
    } else {
      this.$emit('inputChange', Number(e.target.value))
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
      btn[i].style.width = '17px'
      btn[i].style.height = '22px'
      btn[i].innerHTML = `
        <div class='cute-slider-user-button'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      `
    }
  }
}
</script>
<style lang="scss" scoped>
.sliders {
  display: flex;

  ::v-deep .disabled {
    background: $color-neutral-2 !important;
  }

  ::v-deep .el-slider__stop {
    border: 1px solid $color-bg-2;
    width: 1px;
    height: 8px;
    border-radius: 0;
  }

  ::v-deep .el-slider__stop:last-child {
    display: none;
  }

  ::v-deep .el-slider {
    margin-right: 20px;

    //常规
    .el-slider__runway {
      width: var(--width-slider);
      background: $color-neutral-2;
      height: 8px;

      .el-slider__button {
        line-height: 22px;
        border: none;
        color: $color-master-1;
        letter-spacing: 0;
      }
    }
    //禁用
    .el-slider__runway.disabled {
      .el-slider__bar {
        background-color: $color-master-bg;
      }

      .el-slider__button {
        border: 1px solid $color-master;
        border-radius: 8px;
        background: $color-grey-10;
        color: $color-grey-4;
      }
    }

    .el-slider__bar {
      height: 10px;
      top: -1px;
      border-radius: 3px;
    }

    .el-slider__marks {
      height: 8px;
      // background: $color-master-5;
    }

    .el-slider__marks-text {
      text-align: left;
      margin-top: 19px;
    }
  }

  .sliders-input {
    display: flex;
    align-items: center;
  }

  .slider-unit {
    margin-left: 10px;
    font-size: 12px;
    color: $color-grey-1;
    font-weight: 400;
  }

  .sliders-range {
    display: flex;
    align-items: center;

    .range-input {
      display: flex;
      align-items: center;
      color: $color-grey-1;

      .range-line {
        margin: 0 10px;
      }
    }
  }
}

::v-deep .el-slider__bar {
  z-index: 1;
}

::v-deep .el-input {
  width: 60px;

  .el-input__inner {
    width: 64px;
  }
}

::v-deep .cute-slider-user-button {
  border: 1px solid $color-master-1;
  border-radius: 8px;
  background: linear-gradient(to bottom, $color-white, $color-master-5);
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 15px;

  span {
    display: block;
    background-color: $color-master;
    width: 1px;
    height: 8px;

    &:first-child {
      margin-left: 0;
    }

    &:nth-child(2) {
      height: 10px;
      margin: 0 2px;
    }
  }
}

::v-deep .disabled {
  .el-slider__button {
    border: none !important;
    background: none;
  }

  .cute-slider-user-button {
    border: 1px solid $color-master-4;
    width: 15px;
    background: linear-gradient(to bottom, $color-white, $color-master-5);

    span {
      background-color: $color-master-4;
    }
  }
}
</style>
