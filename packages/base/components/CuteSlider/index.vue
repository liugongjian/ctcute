<template>
  <div class="sliders">
    <el-slider
      v-model="value"
      class="cute-slider"
      :range="range"
      :min="min"
      :max="max"
      :marks="marks"
      :show-tooltip="false"
      :step="step"
      :disabled="disabled"
      @change="mouseMove"
    >
    </el-slider>
    <div v-if="!range" class="sliders-input">
      <el-input
        v-model="inputValue"
        :disabled="disabled"
        size="small"
        onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
        @blur="inputChange"
      ></el-input>
      <span class="slider-unit">{{ unit }}</span>
    </div>
    <div v-else class="sliders-range">
      <div class="range-input">
        <el-input
          v-model="minRange"
          size="small"
          :disabled="disabled"
          onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
          @blur="inputChange"
        ></el-input>
        <span class="range-line">—</span>
        <el-input
          v-model="maxRange"
          size="small"
          :disabled="disabled"
          onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
          @blur="inputChange"
        ></el-input>
      </div>
      <span class="slider-unit">{{ unit }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'CuteSlider',
})
export default class extends Vue {
  @Prop({ default: 0 }) private min!: number
  @Prop({ default: 100 }) private max!: number
  @Prop({ default: false }) private disabled!: boolean
  @Prop({ default: true }) private range!: boolean // 是否双滑块模式
  @Prop({ default: {} }) private marks!: object
  @Prop({ default: 'Mbit/s' }) private unit!: string
  @Prop({ default: 1 }) private step!: number
  private value: any = null
  private inputValue = 0
  private minRange = 0
  private maxRange = 0
  $message: any

  private mouseMove(e) {
    if (this.range) {
      this.minRange = e[0]
      this.maxRange = e[1]
      this.$emit('moveChange', [this.minRange, this.maxRange])
    } else {
      this.inputValue = e
      this.$emit('moveChange', this.inputValue)
    }
  }
  // private blurNumber(e) {
  //   if (!e.target.value) {
  //     if (this.range) {
  //       this.minRange = this.min
  //     } else {
  //       this.inputValue = this.min
  //     }
  //   }
  // }
  private inputChange(e) {
    if (!e.target.value) {
      if (this.range) {
        this.minRange = this.min
      } else {
        this.inputValue = this.min
      }
    }
    if (this.range) {
      this.value = [Number(this.minRange), Number(this.maxRange)]
      if (
        Number(this.minRange) > Number(this.maxRange) ||
        Number(this.maxRange) > this.max ||
        Number(this.minRange) > this.max
      ) {
        this.$message({
          message: '输入错误,请重新输入',
          type: 'warning',
        })
        this.value = [this.min, this.min]
        this.minRange = this.min
        this.maxRange = this.min
      } else {
        this.value = [Number(this.minRange), Number(this.maxRange)]
      }
      this.value = [Number(this.minRange), Number(this.maxRange)]
      this.$emit('inputChange', [Number(this.minRange), Number(this.maxRange)])
    } else {
      this.value = Number(this.inputValue)
      this.$emit('inputChange', Number(this.inputValue))
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
  private created() {
    if (this.range) {
      this.minRange = this.min
      this.maxRange = this.min
      this.value = [this.min, this.min]
    } else {
      this.inputValue = this.min
      this.value = this.min
    }
  }
  private mounted() {
    const btn = document.querySelectorAll('.el-slider.cute-slider .el-tooltip.el-slider__button') as any
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.width = '20px'
      btn[i].style.height = '28px'
      btn[i].innerHTML = '|||'
    }
  }
}
</script>
<style lang="scss" scoped>
.sliders {
  display: flex;
  ::v-deep .disabled {
    background: #f0f0f0 !important;
  }
  ::v-deep .el-slider__stop {
    border: 1px solid $color-white;
    width: 1px;
    height: 8px;
  }
  ::v-deep .el-slider {
    width: 695px;
    margin-right: 20px;

    //常规
    .el-slider__runway {
      width: 695px;
      background: $color-master-5;
      height: 8px;

      .el-slider__button {
        border: 1px solid $color-master-1;
        border-radius: 20px;
        background: linear-gradient(to bottom, $color-white, $color-master-5);
        line-height: 25px;
        color: $color-master-1;
        letter-spacing: 1px;
      }
    }
    //禁用
    .el-slider__runway.disabled {
      .el-slider__button {
        border: 1px solid $color-grey-exception-1;
        border-radius: 20px;
        background: $color-grey-10;
        line-height: 25px;
        color: $color-grey-4;
        letter-spacing: 1px;
      }
    }

    .el-slider__bar {
      height: 16px;
      top: -5px;
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
</style>
