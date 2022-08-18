<!--
 * @Author: 马妍
 * @Date: 2022-08-11 16:27:09
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 19:47:16
 * @Description: 
-->
<template>
  <div class="login">
    <div class="login-content">
      <img src="../../assets/images/login/插画2倍.png" alt="" class="login-content_img" />
      <img src="../../assets/images/login/组件1倍.png" alt="" class="login-content_image" />
      <div class="content-desc">
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
              <div class="code" v-html="codeUrl"></div>
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
import { getCodes, getSuperLogin } from '@/api/login'
import { encryptAes } from '@/utils/AES'

@Component({
  name: 'Login',
})
export default class extends Vue {
  private form = {
    password: 'alQNm7#JLQ=4', //密码
    username: 'super@chinatelecom.cn', //用户名
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
      const res = await getSuperLogin({
        username: this.form.username,
        password: encryptAes(this.form.password.trim()),
        verifyCode: this.form.verifyCode,
      })
      if ((res as any).code === 200) {
        this.loading = false
        //登录信息存到本地
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('username', this.form.username)
        const redirect_url = this.$route.query.redirect
        if (redirect_url) {
          window.location.href = decodeURIComponent(redirect_url as string)
        } else {
          window.location.href = '/guide'
        }
      } else {
        this.$message.error((res as any).msg)
        this.loading = false
        this.getCode()
      }
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  }
}
</script>
