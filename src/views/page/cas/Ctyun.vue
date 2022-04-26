<template>
  <el-card>
    <div v-if="userInfo">
      <p>你好！{{ userInfo.name }} ({{ userInfo.loginId }}) <el-button class="logout-btn" size="mini" @click="logout">退出登录</el-button></p>
      <p>登录时间: {{ userInfo.loginTime }}</p>
    </div>
    <div v-else>
      <el-alert type="info">
        <p>当前Demo不支持自动后自动跳转回当前页面，请手动返回当前页面查看登录状态。</p>
      </el-alert>
      <div class="login-btn"><el-button type="primary" @click="login">登录天翼云</el-button></div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CasCtyun'
})
export default class extends Vue {
  @Prop()
  private userInfo

  private login() {
    window.location.href = 'https://www.ctyun.cn/h5/auth/'
  }

  private logout() {
    window.location.href = 'https://www.ctyun.cn/cas/logout'
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
