<template>
  <div class="home-footer">
    <h3>前端孵化项目</h3>
    <div class="home-footer-project">
      <div class="project-item">
        <img src="./images/天翼大屏.svg" alt="" />
        <div>
          <h4>天翼大屏</h4>
          <p>
            这是天翼大屏的介绍，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长
          </p>
        </div>
      </div>
      <div class="project-item">
        <img src="./images/CTBI.svg" alt="" />
        <div>
          <h4>天翼报表</h4>
          <p>
            这是天翼大屏的介绍，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长
          </p>
        </div>
      </div>
      <div class="project-item">
        <img src="./images/Acorn.svg" alt="" />
        <div>
          <h4>Acorn博客</h4>
          <p>
            这是博客分享的介绍，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长，我的介绍比较长的介绍，我的介绍比较长，我的介绍比较长
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SvgIcons from '../components/SvgIcons/index.vue'
@Component({
  name: 'HomeFooter',
  components: {
    SvgIcons,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.home-footer {
  max-width: 1180px;
  margin: 50px auto;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 500;
  > h3 {
    text-align: center;
    margin: 0 0 50px 0;
    font-weight: 500;
    font-size: 26px;
    color: #181818;
    letter-spacing: 0;
    font-weight: 500;
  }
  &-project {
    // margin: 50px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .project-item {
      width: 575px;
      height: 150px;
      display: flex;
      box-sizing: border-box;
      border: 1px solid $color-grey-6;
      border-radius: 10px;
      margin: 0 30px 30px 0;
      padding-right: 30px;
      position: relative;
      > img {
        top: -1px;
        left: -1px;
        position: absolute;
      }
      > div {
        margin-left: 180px;
        > h4 {
          font-size: 20px;
          color: $color-grey-1;
          line-height: 20px;
          font-weight: 500;
          margin: 28px 0 14px 0;
        }
        > p {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          line-height: 20px;
          color: $color-grey-1;
          font-weight: 400;
        }
      }
    }
    .project-item:nth-child(2n) {
      margin-right: 0;
    }
  }
  &-video {
    width: 100%;
    height: 664px;
    background: #efefef;
    text-align: center;
    line-height: 664px;
  }
}
</style>
