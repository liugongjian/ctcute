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
      :disabled="disabled"
      @change="mouseMove"
    >
    </el-slider>
    <div class="sliders-input">
      <el-input v-model="inputValue" :readonly="range" size="small" @input="inputChange"></el-input>
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
  @Prop({ default: false }) private range!: boolean // 是否双滑块模式
  @Prop({ default: {} }) private marks!: object
  @Prop({ default: 'Mbit/s' }) private unit!: string
  private value: any = null
  private inputValue = 0

  private mouseMove(e) {
    this.inputValue = e
    if (this.range) {
      this.inputValue = e[1] - e[0]
    } else {
      this.inputValue = e
    }
    this.$emit('moveChange', this.inputValue)
  }
  private inputChange() {
    if (!this.range) {
      this.value = Number(this.inputValue)
    }
    this.$emit('inputChange', this.inputValue)
  }
  private created() {
    if (this.range) {
      this.value = [0, 0]
    } else {
      this.value = 0
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
  width: 700px;

  ::v-deep .disabled {
    background: #f0f0f0 !important;
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

    .el-slider__button-wrapper {
    }

    .el-slider__marks-text {
      text-align: left;
    }
  }

  .sliders-input {
    display: flex;
    align-items: center;

    .slider-unit {
      margin-left: 10px;
      font-size: 12px;
      color: $color-grey-1;
      font-weight: 400;
    }
  }
}

::v-deep .el-slider__bar {
  z-index: 1;
}

::v-deep .el-input {
  width: 64px;

  .el-input__inner {
    width: 64px;
  }
}
</style>
