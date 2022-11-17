<!--
 * @Author: 马妍
 * @Date: 2022-08-11 16:27:09
 * @LastEditors: 马妍
 * @LastEditTime: 2022-11-17 14:59:32
 * @Description:
-->
<template>
  <div class="login">
    <div class="login-content">
      <img src="../../assets/images/login/cute-login-dark.png" alt="" class="login-content_img" />
      <div class="content-desc">
        <div class="content-desc_from">
          <h3>登录 Cute Design</h3>
          <p>这是一句Cute Design的介绍，我应该会有两行以上，长长的效果感觉会好一点呢</p>
          <el-form ref="ruleForm" :rules="rules" :model="form">
            <el-form-item prop="username">
              <el-input v-model="form.username" autocomplete="off" placeholder="请输入用户">
                <svg-icon slot="prefix" name="user" />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码"
                ><svg-icon slot="prefix" name="lock" />
              </el-input>
            </el-form-item>

            <el-form-item prop="verifyCode" class="content-desc-code">
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
import { Vue, Component, Ref } from 'vue-property-decorator'
import { getCodes } from '@/api/login'
import { encryptAes } from '@/utils/AES'

@Component({
  name: 'Login',
})
export default class extends Vue {
  @Ref('ruleForm')
  private ruleForm
  private form = {
    password: 'alQNm7#JLQ=4', //密码
    username: 'super@chinatelecom.cn', //用户名
    verifyCode: '', //验证码
  }
  private loading = false
  private codeUrl: any = ''
  //校验规则
  private rules = {
    username: [{ required: true, message: '请输入用户', trigger: 'change' }],
    password: [{ required: true, message: '请输入密码', trigger: 'change' }],
    verifyCode: [{ required: true, message: '请输入验证码', trigger: 'change' }],
  }
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
    this.ruleForm.validate(async valid => {
      if (valid) {
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
      } else {
        return false
      }
    })
  }
}
</script>
