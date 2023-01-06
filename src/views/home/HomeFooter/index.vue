<template>
  <div class="home-footer">
    <h3>前端孵化项目</h3>
    <div class="home-footer-project">
      <div
        v-for="(item, index) in arrContent"
        :key="item.title"
        class="project-item"
        @click="handleClick(index)"
      >
        <img :src="item.img" alt="" />
        <div>
          <h4>{{ item.title }}</h4>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import screen from './images/天翼大屏.svg'
import CTBI from './images/CTBI.svg'
import Acorn from './images/Acorn.svg'
import Document from './images/Document.svg'
@Component({
  name: 'HomeFooter',
})
export default class extends Vue {
  // private getUrl(url) {
  //   return new URL(`./images/${url}`, import.meta.url).href
  // }
  private arrContent = [
    {
      img: screen,
      title: '天翼大屏',
      content:
        '使用可视化应用的方式来分析并展示庞杂数据的产品。旨让更多的人看到数据可视化的魅力，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用，满足您会议展览、业务监控、风险预警、地理信息分析等多种业务的展示需求。',
    },
    {
      img: CTBI,
      title: '天翼报表',
      content:
        '提供海量数据实时在线分析服务。通过各种可视化组件构建具备交互式分析能力的仪表板和报表，实现业务流程和数据分析直接协同，提升企业内各种人员的数据分析效率。',
    },
    {
      img: Acorn,
      title: '前端博客',
      content:
        ' 前端技术内容管理、搜索、共享的平台。为打破异地跨团队的文档分享壁垒、解除常规静态文档的限制而专门设立博客系统。最终使用内容生产和文章生成隔离同步的方式部署，将团队gitlab仓库的内容自动发布至博客。',
    },
    {
      img: Document,
      title: '天翼文档',
      content:
        ' 天翼文档是一款可多人协作的在线文档，云端实时保存，可针对用户设置文档访问、编辑权限。目前支持Excel，其他文档类型敬请期待。',
    },
  ]
  private handleClick(ind) {
    switch (ind) {
      case 0:
        window.open('https://saas.ctyun.cn/apps/ctyunview/')
        break
      case 1:
        window.open('http://172.21.65.214:888/')
        break
      case 2:
        window.open('http://fed.ctyuncdn.cn/')
        break
      case 3:
        window.open('http://fed.ctyuncdn.cn:8088')
        break
      default:
        break
    }
  }
}
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
    margin: 0 0 50px;
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
      padding-right: 29px;
      cursor: pointer;
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
          margin: 15px 0 14px;
        }

        > p {
          font-family: PingFangSC-Regular;
          margin: 0;
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
