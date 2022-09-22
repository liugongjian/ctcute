<template>
  <div class="home-nav">
    <h3>在用项目</h3>
    <div class="home-nav-inner">
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
      </div>
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
      </div>
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
      </div>
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
      </div>
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
      </div>
      <div class="nav-item">
        <svg-icon name="detail-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>日志服务</p>
      </div>

      <div class="nav-item">
        <svg-icon name="bug-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>爬虫管理</p>
      </div>
      <div class="nav-item">
        <svg-icon name="safety-certificate-fill" color="#FA8334" width="24" height="24"></svg-icon>

        <p>数据安全</p>
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
export default class extends Vue {}
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
      box-shadow: 0 2px 8px 0 rgba(200, 201, 204, 0.5);
      margin-right: 20px;
      margin-bottom: 20px;
      > p {
        font-size: 12px;
        color: #6f6f6f;
        letter-spacing: 0;
        line-height: 17px;
        font-weight: 500;
        margin: 0 0 0 7px;
      }
    }
    .nav-item:nth-child(9n) {
      margin-right: 0px;
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
