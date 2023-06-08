<template>
  <div class="header-nav">
    <div class="header-nav__search">
      <Search />
    </div>
    <el-select v-model="lang" class="header-nav__lang-select" @change="langChangeHandle">
      <el-option value="zh" :label="$t('language.zh')" />
      <el-option value="en" :label="$t('language.en')" />
    </el-select>
    <el-select v-model="version" class="header-nav__lang-select" @change="versionChangeHandle">
      <el-option value="v1" label="V1" />
      <el-option value="v2" label="V2" />
    </el-select>
    <div class="header-nav__menu">
      <router-link to="/docs" :class="{ active: currentPath.startsWith('/docs') }">{{
        $t('menu.doc')
      }}</router-link>
      <router-link to="/ui" :class="{ active: currentPath.startsWith('/ui') }">{{
        $t('menu.ui')
      }}</router-link>
      <router-link to="/component" :class="{ active: currentPath.startsWith('/component') }">{{
        $t('menu.component')
      }}</router-link>
      <router-link to="/page" :class="{ active: currentPath.startsWith('/page') }">{{
        $t('menu.page')
      }}</router-link>
    </div>
    <!-- 用户信息 -->
    <div v-if="isLogin" v-click-outside="hideDropdown" class="header-nav__login-info" @click="flag = !flag">
      <img class="img" src="./images/cute-portrait.svg" alt="" />
      <span class="user-name">{{ username }}</span>
      <svg-icon :name="!flag ? 'caret-down' : 'caret-up'" />

      <ul v-if="flag" :class="flag ? 'down' : 'ul'">
        <li>{{ $t('menu.text') }}</li>
        <li>{{ $t('menu.text') }}</li>
        <li>{{ $t('menu.text') }}</li>
        <li>{{ $t('menu.text') }}</li>
        <li @click="outLogin">{{ $t('menu.signout') }}</li>
      </ul>
    </div>
    <div v-else class="header-nav__login-info">
      <el-button type="primary" @click="toLogin">{{ $t('menu.signin') }}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import ClickOutside from 'vue-click-outside'
import Search from '../Search/index.vue'

@Component({
  name: 'LayoutHeaderNav',
  components: {
    Search,
  },
  directives: {
    ClickOutside,
  },
})
export default class extends Vue {
  private keyword = ''
  private isLogin = this.$auth.isLogin || false
  private flag = false
  private username = this.$auth.userInfo?.name || ''

  private lang = this.$i18n.locale
  private version = 'v2'

  private get currentPath() {
    return this.$route.path
  }

  @Watch('$route')
  private onRouteChange() {
    this.getAuthInfo()
  }

  private hideDropdown() {
    this.flag = false
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
  }

  private toLogin() {
    this.$router.push('/login')
  }

  private getAuthInfo() {
    this.isLogin = this.$auth.isLogin
    this.username = this.$auth.userInfo?.name
  }

  private langChangeHandle(value) {
    this.$i18n.locale = value
    localStorage.setItem('cute-lang', value)
  }

  private versionChangeHandle(value) {
    if (value === 'v1') {
      window.location.href = 'http://fed.ctyuncdn.cn/cutev1/'
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;

  &__login-info {
    margin-right: $margin-5x;
    display: flex;
    align-items: center;
    color: $cute-layout-header-text-color;
    position: relative;
    cursor: pointer;

    .svg-icon {
      margin-left: $margin;
    }

    .img {
      margin-right: $margin-2x;
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
      background: $header-input-bg;
      color: $cute-layout-header-text-color;
      margin: 0;
      padding-left: 0;

      li {
        list-style: none;
        height: 32px;
        line-height: 32px;
        text-align: center;
        cursor: pointer;

        &:hover {
          background: $cute-layout-header-bg;
          color: $cute-layout-header-text-color;
        }
      }
    }
  }

  &__search {
    margin-right: $margin-10x;

    &__input {
      ::v-deep .el-input__inner {
        width: 200px;
        background: $header-input-bg;
        padding-left: $margin-9x;
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

  &__lang-select {
    margin-right: $margin-6x;
    max-width: 85px;

    ::v-deep .el-input__inner {
      background: $header-input-bg;
      color: $header-search-text-color;
      border: none;
    }
  }

  &__menu {
    a {
      color: $cute-layout-header-text-color;
      margin-right: $margin-6x;
      font-size: $text-size-md;

      &.active,
      &:hover {
        color: $color-master;
      }
    }
  }
}
</style>
