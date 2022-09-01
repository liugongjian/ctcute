<!--
 * @Author: 马妍
 * @Date: 2022-08-11 16:27:09
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-09-01 13:44:16
 * @Description:
-->
<template>
  <div class="login">
    <div class="login-content">
      <img src="../../assets/images/login/cute背景打包.png" alt="" class="login-content_img" />
      <div class="content-desc">
        <p class="blur"></p>
        <div class="content-desc_from">
          <h3>登录 Cute Design</h3>
          <p>这是一句Cute Design的介绍，我应该会有两行以上，长长的效果感觉会好一点呢</p>
          <el-form>
            <el-form-item prop="checkPass">
              <el-input v-model="form.username" autocomplete="off" placeholder="请输入用户">
                <svg-icon slot="prefix" name="user" />
              </el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码"
                ><svg-icon slot="prefix" name="lock" />
              </el-input>
            </el-form-item>

            <el-form-item prop="code" class="content-desc-code">
              <el-input
                v-model="form.verifyCode"
                placeholder="请输入验证码"
                @keyup.enter.native="submitForm('ruleForm')"
                ><svg-icon slot="prefix" name="safety certificate" />
              </el-input>
              <div class="code" @click="refreshCode" v-html="codeUrl"></div>
            </el-form-item>
            <el-form-item class="content-desc_from-pass">
              <div class="remember"><el-checkbox></el-checkbox>记住密码</div>
              <!-- <el-link type="primary">修改密码</el-link> -->
            </el-form-item>
            <el-form-item class="content-desc_btn">
              <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getCodes } from '@/api/login'
import { encryptAes } from '@/utils/AES'

@Component({
  name: 'Login',
})
export default class extends Vue {
  private form = {
    password: '', //密码
    username: '', //用户名
    verifyCode: '', //验证码
  }
  private loading = false
  private codeUrl: any = ''
  private submitForm() {
    this.Login()
  }
  private created() {
    this.getCode()
  }
  //刷新验证码
  private refreshCode() {
    this.getCode()
  }
  //获取验证码
  private async getCode() {
    try {
      const res = await getCodes()
      this.codeUrl = res
    } catch (e) {
      console.log(e)
    }
  }
  //登录
  private async Login() {
    try {
      this.loading = true
      // 使用this.$auth插件，把setToken的事情交给插件内部
      const user = {
        username: this.form.username,
        password: encryptAes(this.form.password.trim()),
        verifyCode: this.form.verifyCode,
      }
      const successCb = () => {
        // sessionStorage.setItem('username', this.form.username)
      }
      const errorCb = response => {
        this.$message.error((response as any).msg)
        this.loading = false
        this.getCode()
      }
      const finallyCb = () => {
        this.loading = false
      }
      this.$auth.login({
        user,
        successCb,
        errorCb,
        finallyCb,
        instance: this,
      })
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  }
}
</script>
