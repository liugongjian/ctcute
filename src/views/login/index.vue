<!--
 * @Author: 马妍
 * @Date: 2022-08-11 16:27:09
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-21 10:45:03
 * @Description:
-->
<template>
  <div class="cute-login">
    <div class="cute-login__content">
      <img src="../../assets/images/login/cute-login.png" alt="" class="cute-login__img" />
      <div class="cute-login__desc">
        <h3 class="cute-login__title">登录 Cute Design</h3>
        <h5 class="cute-login__tip">模拟登录效果 非真实用户和登录</h5>
        <el-form ref="ruleForm" :rules="rules" :model="form">
          <el-form-item prop="username">
            <el-input v-model="form.username" autocomplete="off" placeholder="请输入用户">
              <svg-icon slot="prefix" name="user" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码">
              <svg-icon slot="prefix" name="lock" />
            </el-input>
          </el-form-item>

          <el-form-item prop="verifyCode" class="cute-login__code">
            <el-input
              v-model="form.verifyCode"
              placeholder="请输入验证码"
              @keyup.enter.native="submitForm('ruleForm')"
            >
              <svg-icon slot="prefix" name="safety certificate" />
            </el-input>
            <div class="cute-login__code__svg" @click="refreshCode" v-html="codeUrl"></div>
          </el-form-item>
          <el-form-item class="cute-login__remember">
            <el-checkbox></el-checkbox>记住密码
            <!-- <el-link type="primary">修改密码</el-link> -->
          </el-form-item>
          <el-form-item>
            <el-button
              class="cute-login__btn"
              type="primary"
              :loading="loading"
              @click="submitForm('ruleForm')"
            >
              登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import { getCodes } from '@/api/login'
import { encryptAes } from '@/utils/AES'
import { ElForm } from 'element-ui/types/form'

@Component({
  name: 'Login',
})
export default class extends Vue {
  @Ref('ruleForm') readonly ruleForm!: ElForm

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
    await this.ruleForm.validate()

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
      console.log(e)
    } finally {
      this.loading = false
    }
  }
}
</script>
