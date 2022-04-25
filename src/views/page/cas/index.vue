<template>
  <el-card>
    <div v-if="casUserInfo">
      <p>你好！{{ casUserInfo.name }} ({{ casUserInfo.loginId }}) <el-button class="logout-btn" size="mini" @click="logout">退出登录</el-button></p>
      <hr />
      <p>通过CDN IAM配置的菜单：</p>
      <el-menu mode="horizontal" :default-active="activedMenu">
        <el-submenu v-for="item in menuItems" :key="item.id" :index="item.id">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item v-for="subItem in item.items" :key="subItem.id" :index="item.id">{{ subItem.name }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div v-else>
      <el-alert type="info">当前Demo不支持自动后自动跳转回当前页面，请手动返回当前页面查看登录状态。<br /><br />请添加本地HOST：127.0.0.1 local.ctcdn.cn<br /><br />本地需要通过local.ctcdn.cn域名访问</el-alert>
      <div class="login-btn"><el-button type="primary" @click="login">登录CDN IAM</el-button></div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CasModule } from '@/store/modules/cas'
import axios from 'axios'

@Component({
  name: 'Cas'
})
export default class extends Vue {
  private menuItems = null
  private activedMenu = null

  private mounted() {
    this.renderMenu()
  }

  private async renderMenu() {
    const res: any = await axios.get('/iam/gw/workspace/menu/GetTree?workspaceId=10000000&domain=cutedesign.test')
    this.menuItems = res.data.data.items
    this.activedMenu = this.menuItems[0].id
    // CasModule.UpdateMenu(this.menu)
  }

  private login() {
    window.location.href = 'https://iam-test.ctcdn.cn/h5/iam/login.html'
  }

  private logout() {
    window.location.href = 'https://iam-test.ctcdn.cn/iam/cas/logout'
  }

  private get casUserInfo() {
    return CasModule.userInfo && CasModule.userInfo
  }
}
</script>
<style lang="scss" scoped>
  .logout-btn {
    float: right;
  }

  .login-btn {
    margin-top: 15px;
  }
</style>
