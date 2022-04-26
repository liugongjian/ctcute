<template>
  <el-card>
    <div v-if="userInfo">
      <p>你好！{{ userInfo.name }} ({{ userInfo.loginId }}) <el-button class="logout-btn" size="mini" @click="logout">退出登录</el-button></p>
      <p>登录时间: {{ userInfo.loginTime }}</p>
      <hr>
      <h3>通过CDN IAM配置的菜单：</h3>
      <el-menu mode="horizontal" :default-active="activedMenu">
        <el-submenu v-for="item in menuItems" :key="item.id" :index="item.id">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item v-for="subItem in item.items" :key="subItem.id" :index="item.id">{{ subItem.name }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div v-else>
      <el-alert type="info">
        <p>当前Demo不支持自动后自动跳转回当前页面，请手动返回当前页面查看登录状态。</p>
      </el-alert>
      <div class="login-btn"><el-button type="primary" @click="login">登录CDN IAM</el-button></div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getMenu } from '@/api/cas'

@Component({
  name: 'CasCtcdn'
})
export default class extends Vue {
  @Prop()
  private userInfo

  private menuItems = null
  private activedMenu = null

  private mounted() {
    this.renderMenu()
  }

  private async renderMenu() {
    const params = {
      workspaceId: '10000000',
      domain: 'cutedesign.test'
    }
    const res: any = await getMenu(params)
    if (res.data) {
      this.menuItems = res.data.items
      this.activedMenu = this.menuItems[0].id
      // 使用IAM配置的菜单更新左侧二级菜单
      // CasModule.UpdateMenu(this.menu)
    }
  }

  private login() {
    window.location.href = 'https://iam-test.ctcdn.cn/h5/iam/login.html'
  }

  private logout() {
    window.location.href = 'https://iam-test.ctcdn.cn/iam/cas/logout'
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
