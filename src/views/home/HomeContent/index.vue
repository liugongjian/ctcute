<template>
  <div class="home-content">
    <h3>标准化流程</h3>
    <div class="home-content-inner">
      <div
        @mouseleave="changeImageSrc(1, '')"
        @mouseenter="changeImageSrc(1, 'hover')"
        @click="handleOpen(1)"
      >
        <div class="content-background1" :style="active1"></div>
        <h4 class="text1" @mouseenter.stop>{{ text1 }}</h4>
        <img class="content-img1" src="./images/product.svg" alt="" />
        <p>产品原型</p>
      </div>

      <div
        @mouseleave="changeImageSrc(2, '')"
        @mouseenter="changeImageSrc(2, 'hover')"
        @click="handleOpen(2)"
      >
        <div class="content-background2" :style="active2"></div>
        <h4 class="text2">{{ text2 }}</h4>
        <img class="content-img2" src="./images/ui.svg" alt="" />

        <p>UI规范</p>
      </div>
      <div
        @mouseleave="changeImageSrc(3, '')"
        @mouseenter="changeImageSrc(3, 'hover')"
        @click="handleOpen(3)"
      >
        <div class="content-background3" :style="active3"></div>
        <h4 class="text3">{{ text3 }}</h4>
        <img class="content-img3" src="./images/fe.svg" alt="" />

        <p>前端开发</p>
      </div>
    </div>
    <div class="home-content-video">这是一个视频比例是16:9</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'HomeContent',
})
export default class extends Vue {
  private text1 = ''
  private text2 = ''
  private text3 = ''
  private active1 = ''
  private active2 = ''
  private active3 = ''

  private changeImageSrc(key, way) {
    switch (key) {
      //通过传递的参数  分别让不同的部件执行不同的内容
      case 1:
        way === 'hover' ? (this.active1 = 'background: #cfdce6;') : (this.active1 = '')
        way === 'hover' ? (this.text1 = '标准化多场景元件库') : (this.text1 = '') //悬停时更改文字
        break
      case 2:
        way === 'hover' ? (this.active2 = 'background: #cfdce6;') : (this.active2 = '')
        way === 'hover' ? (this.text2 = '统一高复用UI规范') : (this.text2 = '') //悬停时更改文字
        break
      case 3:
        way === 'hover' ? (this.active3 = 'background: #cfdce6;') : (this.active3 = '')
        way === 'hover' ? (this.text3 = '标准组件库自动化页面生成工具') : (this.text3 = '') //悬停时更改文字
        break
    }
  }
  private handleOpen(num) {
    switch (num) {
      //通过传递的参数  分别让不同的部件执行不同的内容
      case 1:
        window.open('https://cloud.ctcdn.cn/s/LPtSGxCiHAcibEe')
        break
      case 2:
        window.open('https://cloud.ctcdn.cn/s/3p5eTTn9J8FaRC3')
        break
      case 3:
        window.open('http://fed.ctyuncdn.cn/page/chart')
        break
    }
  }
}
</script>
<style lang="scss" scoped>
.home-content {
  max-width: 1180px;
  height: auto;
  margin: 50px auto;
  font-size: 16px;
  color: $color-grey-1;
  font-weight: 500;
  > h3 {
    text-align: center;
    font-size: 24px;
    color: $color-grey-1;
    font-weight: 500;
  }
  &-inner {
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      text-align: center;
      position: relative;
      width: 380px;
      height: 305px;
      cursor: pointer;
      > div {
        position: absolute;
        width: 380px;
        height: 213px;
        background: #ebf3f9;
        border-radius: 10px;
      }
      > img {
        position: absolute;
        left: -20px;
        top: 16px;
      }
      > h4 {
        position: absolute;
        z-index: 999;
        left: 120px;
        top: -4px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: $color-grey-1;
        font-weight: 400;
        pointer-events: none;
      }
      .text1 {
        left: 127px;
      }
      .text2 {
        left: 134px;
      }
      .text3 {
        left: 92px;
      }
      > p {
        position: absolute;
        left: 157px;
        top: 273px;
        font-size: 16px;
        color: $color-grey-1;
        font-weight: 500;
        margin: 0;
      }
    }
    .content-img2 {
      left: 85px;
      top: 52px;
      border-radius: 5px;
      box-shadow: 0 0 8px 0 $shadow-table-card;
    }
    .content-img3 {
      left: 100px;
      top: 41px;
    }
  }
  &-video {
    width: 100%;
    border-radius: 10px;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: $color-grey-4;
    font-weight: 400;
    height: 664px;
    background: #efefef;
    text-align: center;
    line-height: 664px;
  }
}
</style>
