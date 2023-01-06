<template>
  <div class="home-nav">
    <h3>在用项目</h3>
    <div class="home-nav-inner">
      <div class="nav-item" v-for="(item, index) in items" :key="index">
        <svg-icon :name="item.icon" color="#FA8334" width="24" height="24"></svg-icon>
        <p class="nav-item-title" @click="go(item.href)">{{ item.title }}</p>
      </div>
    </div>
    <div class="home-nav-more">
      <el-link type="primary">查看更多>>></el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'HomeNav',
})
export default class extends Vue {
  private items = [
    { title: '智能视图服务', icon: 'aim', href: '', info: '' },
    { title: 'MPP墨子', icon: 'ai-face', href: '', info: '' },
    { title: '混合云', icon: 'assets', href: '', info: '' },
    { title: '日志服务', icon: 'audit', href: '', info: '' },
    {
      title: '爬虫控制台',
      icon: 'bug-fill',
      href: 'https://console.ctcdn.cn/h5/ctbot/index.html',
      info: '',
    },
    { title: '项目协作应用平台', icon: 'async', href: '', info: '' },
    { title: '一站式研发协作平台', icon: 'automation-fill', href: '', info: '' },
    { title: '实时计算flink', icon: 'bar-chart', href: '', info: '' },
    { title: '飞鸽盘', icon: 'guide', href: '', info: '' },
    { title: '流水线平台', icon: 'data-screen', href: '', info: '' },
    { title: 'iStack安装管理平台', icon: 'cube', href: '', info: '' },
    { title: '看得见的项目管理平台', icon: 'datawarehouse', href: 'https://alm.ctcdn.cn/', info: '' },
    { title: '数据库多写引擎管理平台', icon: 'console-sql', href: '', info: '' },
    { title: '云拨测平台', icon: 'cloud', href: '', info: '' },
    { title: '算力交易平台', icon: 'sever', href: '', info: '' },
    { title: '翼MR', icon: 'cloud-sync', href: '', info: '' },
    { title: '语音质检', icon: 'ungroup', href: '', info: '' },
    { title: 'Datawings2.0', icon: 'datamodel', href: '', info: '' },
    { title: '分布式文件产品实例管理台', icon: 'file-protect', href: '', info: '' },
  ]
  private go(href: string) {
    if (!href) {
      this.$message.info('暂无生成环境')
      return
    }
    window.open(href, '_blank')
  }
}
</script>
<style lang="scss" scoped>
.home-nav {
  width: 100%;
  background: $color-grey-10;
  margin: 50px auto;
  padding-top: 50px;
  padding-bottom: 50px;
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
  &-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .nav-item {
      display: flex;
      align-items: center;
      border-radius: 4px;
      background: $color-white;
      padding: 14px 13px 15px 13px;
      box-shadow: 0 2px 8px 0 $shadow-table-card;
      margin-right: 20px;
      margin-bottom: 20px;
      &-title {
        display: inline-block;
        font-size: 12px;
        color: #6f6f6f;
        letter-spacing: 0;
        line-height: 17px;
        font-weight: 500;
        margin: 0 0 0 7px;
        cursor: pointer;
      }
    }
  }
  &-more {
    font-family: PingFangSC-Regular;
    margin: 0 auto;
    max-width: 1180px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
