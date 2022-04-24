<template>
  <el-card>
    <div v-if="casUserInfo" class="">
      <p>你好！{{ casUserInfo.name }} ({{casUserInfo.loginId}})</p>
      <el-button @click="logout">退出登录</el-button>
    </div>
    <div v-else>
      <el-alert type="info">当前Demo不支持自动后自动跳转回当前页面，请手动返回当前页面查看登录状态。<br /><br />请添加本地HOST：127.0.0.1 local.ctcdn.cn</el-alert>
      <div class="login-btn"><el-button type="primary" @click="login">登录CDN IAM</el-button></div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CasModule } from '@/store/modules/cas'

@Component({
  name: 'Cas'
})
export default class extends Vue {
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
  .login-btn {
    margin-top: 15px;
  }
</style>
