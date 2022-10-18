<template>
  <div class="sliders">
    <el-slider
      v-model="value"
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
      <el-input v-model="inputValue" size="small"></el-input>
      <span class="slider-unit">Mbit/s</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, Ref } from 'vue-property-decorator'
@Component({
  name: 'CuteSlider',
})
export default class extends Vue {
  @Prop({ default: 0 }) private min!: number
  @Prop({ default: 100 }) private max!: number
  @Prop({ default: false }) private disabled!: boolean
  @Prop({ default: false }) private range!: boolean // 是否双滑块模式
  @Prop({ default: {} }) private marks!: object

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
  private created() {
    if (this.range) {
      this.value = [0, 0]
    } else {
      this.value = 0
    }
  }
  // private left = 0
  // private right = 0
  // private get scale() {
  //   return this.width / (this.max - this.min)
  // }
  // private get low() {
  //   console.log(Math.round(this.left / this.scale + this.min), 'low的值')
  //   // return Math.round(this.left / this.scale + this.min)
  //   return Math.round((this.left / this.width) * this.max)
  // }
  // private get high() {
  //   // return Math.round(this.right / this.scale + this.min)
  //   return Math.round((this.right / this.width) * this.max)
  // }
  // @Watch('low')
  // private lowChange(to) {
  //   console.log('low改变')
  //   this.$emit('lowChange', to)
  // }
  // @Watch('high')
  // private highChange(to) {
  //   this.$emit('highChange', to)
  // }
  // private mounted() {
  //   // this.left = this.range ? (this.initialMin - this.min) * this.scale : 0
  //   // this.right = (this.initialMax - this.min) * this.scale
  //   this.left = this.range ? (this.initialMin * this.width) / this.max : 0
  //   this.right = (this.initialMax * this.width) / this.max
  // }
  // private onClickPoint(e) {
  //   // const offsetLeft = this.sliders.offsetLeft // 滑动条左端距离屏幕左侧的距离
  //   // const moveX = e.clientX - offsetLeft
  //   // if (moveX <= this.left) {
  //   //   this.left = moveX
  //   // } else if (moveX >= this.right) {
  //   //   this.right = moveX
  //   // } else {
  //   //   if (moveX - this.left < this.right - moveX) {
  //   //     this.left = moveX
  //   //   } else {
  //   //     this.right = moveX
  //   //   }
  //   // }

  //   // 元素是absolute时，e.layerX是相对于自身元素左上角的水平位置
  //   const moveX = e.offsetX // 鼠标点击位置距离滑动输入条左端的水平距离
  //   if (this.range) {
  //     // 双滑块模式
  //     console.log(moveX, '移动距离')
  //     if (moveX <= this.left) {
  //       this.left = moveX
  //     } else if (moveX >= this.right) {
  //       this.right = moveX
  //     } else {
  //       if (moveX - this.left < this.right - moveX) {
  //         this.left = moveX
  //       } else {
  //         this.right = moveX
  //       }
  //     }
  //   } else {
  //     // 单滑块模式
  //     this.right = moveX
  //   }
  // }
  // private onLeftMouseDown() {
  //   // 滑块水平方向上距离屏幕左端的距离,减去滑块距离滑动条最左端的距离:e.clientX - this.$refs.left.offsetLeft
  //   const offsetLeft = this.sliders.getBoundingClientRect().left // 滑动条左端距离屏幕左侧的距离
  //   document.onmousemove = e => {
  //     const moveX = e.clientX - offsetLeft
  //     if (moveX < 0) {
  //       this.left = 0
  //     } else if (moveX >= this.right) {
  //       this.left = this.right
  //     } else {
  //       this.left = moveX
  //       console.log(this.left, 'llllll')
  //     }
  //   }
  //   document.onmouseup = () => {
  //     document.onmousemove = null
  //     // document.onmouseup = null
  //   }
  //   // // 在滚动条上拖动左滑块
  //   // const leftX = this.sliders.getBoundingClientRect().left // 滑动条左端距离屏幕可视区域左边界的距离
  //   // console.log(leftX, 'lllll')
  //   // document.onmousemove = e => {
  //   //   // e.clientX返回事件被触发时鼠标指针相对于浏览器可视窗口的水平坐标
  //   //   const moveX = e.clientX - leftX
  //   //   if (moveX < 0) {
  //   //     this.left = 0
  //   //   } else if (moveX >= this.right) {
  //   //     this.left = this.right
  //   //   } else {
  //   //     this.left = moveX
  //   //   }
  //   // }
  //   // document.onmouseup = () => {
  //   //   document.onmousemove = null
  //   // }
  // }
  // private onRightMouseDown() {
  //   // 在滚动条上拖动右滑块
  //   const leftX = this.sliders.getBoundingClientRect().left // 滑动条左端距离屏幕可视区域左边界的距离
  //   console.log(leftX, 'lllll')
  //   document.onmousemove = e => {
  //     // e.clientX返回事件被触发时鼠标指针相对于浏览器可视窗口的水平坐标
  //     const moveX = e.clientX - leftX
  //     if (moveX > this.width) {
  //       this.right = this.width
  //     } else if (moveX <= this.left) {
  //       this.right = this.left
  //     } else {
  //       this.right = moveX
  //     }
  //   }
  //   document.onmouseup = () => {
  //     document.onmousemove = null
  //   }
  // }
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

    .el-slider__runway {
      width: 695px;
      background: $color-master-5;
      height: 8px;
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
// .m-slider {
//   width: 100%;
//   display: inline-block;
//   height: 4px;
//   padding: 6px 0;
//   position: relative;
//   z-index: 9;
//   cursor: pointer;
//   touch-action: none; // 禁用元素上的所有手势,使用自己的拖放和缩放api

//   .u-slider-rail {
//     // 灰色未选择滑动条背景色
//     position: absolute;
//     z-index: 99;
//     height: 8px;
//     width: 100%;
//     background: $color-master-5;
//     border-radius: 2px;
//     transition: background 0.3s;
//   }

//   .u-slider-track {
//     // 蓝色已选择滑动条背景色
//     position: absolute;
//     z-index: 99;
//     background: $color-master-1;
//     border-radius: 2px;
//     height: 14px;
//     cursor: pointer;
//     transition: background 0.3s;
//     pointer-events: none;
//   }

//   &:hover {
//     .u-slider-rail {
//       // 灰色未选择滑动条背景色
//       background: $color-master-5;
//     }

//     .u-slider-track {
//       // 蓝色已选择滑动条背景色
//       background: $color-master-1;
//     }
//   }

//   .u-slider-handle {
//     // 滑块
//     position: absolute;
//     z-index: 999;
//     width: 12px;
//     height: 12px;
//     // top: 5px;
//     background: url('./images/SliderMaster.svg') no-repeat fixed center;
//     border: 2px solid $color-master-1;
//     border-radius: 50%;
//     cursor: pointer;
//     transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

//     &:focus {
//       border-color: $color-master-1;
//       box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);
//     }

//     &:hover {
//       border-color: $color-master-1;
//     }
//   }
// }

// .disabled {
//   cursor: not-allowed;

//   .u-slider-rail {
//     pointer-events: none;
//   }

//   .u-slider-track {
//     background: rgba(0, 0, 0, 0.25);
//   }

//   .u-slider-handle {
//     border-color: rgba(0, 0, 0, 0.25);
//     pointer-events: none;
//   }

//   &:hover {
//     .u-slider-track {
//       background: rgba(0, 0, 0, 0.25);
//     }
//   }
// }
</style>
