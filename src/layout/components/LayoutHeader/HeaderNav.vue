<template>
  <div class="layout-header__right">
    <div class="layout-header__search">
      <Search />
    </div>
    <div class="layout-header__nav">
      <el-select v-model="lang" size="mini" class="lang-select" @change="langChangeHandle">
        <el-option value="zh" :label="$t('language.zh')" />
        <el-option value="en" :label="$t('language.en')" />
      </el-select>
      <router-link to="/docs" :class="{ active: currentPath.startsWith('/docs') }">文档</router-link>
      <router-link to="/ui" :class="{ active: currentPath.startsWith('/ui') }">UI规范</router-link>
      <router-link to="/component" :class="{ active: currentPath.startsWith('/component') }"
        >组件</router-link
      >
      <router-link to="/page/chart" :class="{ active: currentPath.startsWith('/page') }">页面</router-link>
    </div>
    <!-- 用户信息 -->
    <div v-if="isLogin" class="login-info" @click="flag = !flag">
      <img class="img" src="./images/cute-portrait.svg" alt="" />
      <span class="user-name">{{ isLogin ? username : '未登录' }}</span>
      <svg-icon :name="!flag ? 'caret-down' : 'caret-up'" />

      <ul v-if="flag" :class="flag ? 'down' : 'ul'">
        <li>文字</li>
        <li>文字</li>
        <li>文字</li>
        <li>文字</li>
        <li @click="outLogin">退出登录</li>
      </ul>
    </div>
    <div v-else class="login-info">
      <el-button type="primary" @click="toLogin">登 录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Search from '../Search/index.vue'

@Component({
  name: 'LayoutHeaderNav',
  components: {
    Search,
  },
})
export default class extends Vue {
  private keyword = ''
  private isLogin = this.$auth.isLogin || false
  private flag = false
  private username = this.$auth.userInfo?.name || ''

  private lang = this.$i18n.locale

  private langChangeHandle(value) {
    this.$i18n.locale = value
    localStorage.setItem('cute-lang', value)
  }

  private get currentPath() {
    return this.$route.path
  }
  //退出登录
  private async outLogin() {
    const successCb = () => {
      sessionStorage.clear()
    }
    this.$auth.logout({
      successCb,
      instance: this,
    })
    // const res = await Logout()
    // if ((res as any).code === 200) {
    //   this.$router.push('/login')
    //   sessionStorage.clear()
    // }
  }
  private toLogin() {
    this.$router.push('/login')
  }
  private getAuthInfo() {
    this.isLogin = this.$auth.isLogin
    this.username = this.$auth.userInfo?.name
  }
  @Watch('$route')
  private onRouteChange() {
    this.getAuthInfo()
  }
}
</script>

<style lang="scss" scoped>
.layout-header__right {
  display: flex;
  align-items: center;
}

.login-info {
  margin-right: 40px;
  display: flex;
  align-items: center;
  color: $header-text-color;
  position: relative;
  cursor: pointer;

  .svg-icon {
    margin-left: 5px;
  }

  .img {
    margin-right: 10px;
  }

  .down {
    transform-origin: center bottom;
  }

  .ul,
  .down {
    width: 120px;
    position: absolute;
    top: 39px;
    left: 0;
    background: $header-fill-2;
    color: $header-text-color;
    margin: 0;
    padding-left: 0;

    li {
      list-style: none;
      height: 32px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: $header-fill-1;
        color: $color-white;
      }
    }
  }
}

.layout-header__search {
  margin-right: 56px;

  &--input {
    ::v-deep .el-input__inner {
      width: 200px;
      height: 32px;
      background: $header-fill-2;
      border-radius: 2px;
      padding-left: 36px;
      color: $header-search-text-color;
      border: none;
    }

    ::v-deep .el-input__prefix {
      margin-left: 5px;
    }

    ::v-deep .svg-icon {
      color: $header-search-text-color;
    }
  }
}

.layout-header__nav {
  a {
    color: $header-text-color;
    margin-right: 24px;
    font-size: 14px;

    &.active,
    &:hover {
      color: $color-master-1;
    }
  }
}

.lang-select {
  margin-right: 24px;
  max-width: 85px;
}
</style>
