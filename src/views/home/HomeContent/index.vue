<template>
  <div class="home-content">
    <h3>标准化流程</h3>
    <div class="home-content-inner">
      <div>
        <img
          class="content-img1"
          :src="src1"
          alt=""
          @mouseleave="changeImageSrc(1, '')"
          @mouseenter="changeImageSrc(1, 'hover')"
        />
        <div class="text1" @mouseenter.stop>{{ text1 }}</div>
        <p>产品原型</p>
      </div>
      <div>
        <img
          class="content-img2"
          :src="src2"
          alt=""
          @mouseleave="changeImageSrc(2, '')"
          @mouseenter="changeImageSrc(2, 'hover')"
        />
        <div class="text2">{{ text2 }}</div>
        <p>UI规范</p>
      </div>
      <div>
        <img
          class="content-img3"
          :src="src3"
          alt=""
          @mouseleave="changeImageSrc(3, '')"
          @mouseenter="changeImageSrc(3, 'hover')"
        />
        <div class="text3">{{ text3 }}</div>
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
  private src1 = require('./images/产品原型.svg')
  private src2 = require('./images/UI规范.svg')
  private src3 = require('./images/前端开发.svg')

  private changeImageSrc(key, way) {
    switch (key) {
      //通过传递的参数  分别让不同的部件执行不同的内容
      case 1:
        way === 'hover'
          ? (this.src1 = require('./images/产品原型hover.svg'))
          : (this.src1 = require('./images/产品原型.svg'))
        way === 'hover' ? (this.text1 = '标准化多场景元件库') : (this.text1 = '') //悬停时更改文字
        break
      case 2:
        way === 'hover'
          ? (this.src2 = require('./images/UI规范hover.svg'))
          : (this.src2 = require('./images/UI规范.svg'))
        way === 'hover' ? (this.text2 = '统一高复用UI规范') : (this.text2 = '') //悬停时更改文字
        break
      case 3:
        way === 'hover'
          ? (this.src3 = require('./images/前端开发hover.svg'))
          : (this.src3 = require('./images/前端开发.svg'))
        way === 'hover' ? (this.text3 = '标准组件库自动化页面生成工具') : (this.text3 = '') //悬停时更改文字
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
      > img {
        position: absolute;
        left: -19px;
        top: 2px;
      }
      > div {
        position: absolute;
        z-index: 999;
        left: 120px;
        top: 17px;
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
        top: 275px;
        font-size: 16px;
        color: $color-grey-1;
        font-weight: 500;
        margin: 0;
        margin-top: 19px;
      }
    }
    .content-img1:hover {
      left: -65px;
      top: -52px;
      display: block;
      cursor: pointer;
    }
    .content-img2 {
      left: -1px;
      top: 2px;
    }
    .content-img2:hover {
      left: -62px;
      top: -52px;
      display: block;
      cursor: pointer;
    }
    .content-img3 {
      left: -23px;
      top: -122px;
    }
    .content-img3:hover {
      left: -62px;
      top: -122px;
      display: block;
      cursor: pointer;
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
