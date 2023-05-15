<template>
  <header class="home-header">
    <div class="home-header__logo">
      <img class="home-header__logo--ct" src="./images/ct-logo.svg" />
      <div class="home-header__logo--project">
        <img src="./images/cute-design.svg" />
      </div>
    </div>
    <div class="home-header__right">
      <div class="home-header__search">
        <Search />
      </div>
      <el-select v-model="lang" class="home-header__lang-select" @change="langChangeHandle">
        <el-option value="zh" :label="$t('language.zh')" />
        <el-option value="en" :label="$t('language.en')" />
      </el-select>
      <el-select v-model="version" class="home-header__lang-select" @change="versionChangeHandle">
        <el-option value="v1" label="V1" />
        <el-option value="v2" label="V2" />
      </el-select>
      <div class="home-header__nav">
        <router-link to="/docs">文档</router-link>
        <router-link to="/ui">UI规范</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/page/chart">页面</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Search from '@/layout/components/Search/index.vue'
@Component({
  name: 'HomeHeader',
  components: {
    Search,
  },
})
export default class extends Vue {
  private lang = this.$i18n.locale
  private version = 'v2'

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
.home-header {
  background: rgba(255, 255, 255, 70%);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1002;
  height: $cute-layout-header-height;
  display: flex;
  justify-content: space-between;

  &__logo {
    display: flex;
    align-items: center;
    padding-left: 30px;
    overflow: hidden;

    &--ct {
      height: 22px;
    }

    &--project {
      display: flex;
      align-items: center;
      margin-left: 12px;
      padding-left: 12px;
      border-left: 1px solid #e1e4e6;
      overflow: hidden;

      img {
        height: 15px;
        margin-top: 3px;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__search {
    margin-right: $margin-6x;
  }

  .layout-header__search--input {
    margin-top: 5px;

    ::v-deep .el-input__inner {
      width: 200px;
      height: 30px;
      background: rgba(0, 0, 0, 4%);
      font-size: 12px;
      color: $color-neutral-7;
      line-height: 30px;
      font-weight: 400;
      border-radius: 3px;
      padding-left: 36px;
      border: none;
    }

    ::v-deep .el-input__prefix {
      margin-left: 5px;
    }

    .svg-icon {
      color: rgba(0, 0, 0, 4%);
    }
  }

  &__lang-select {
    margin-right: $margin-6x;
    max-width: 85px;
  }

  &__nav {
    a {
      color: $color-neutral-10;
      margin-right: 30px;
      font-size: 14px;

      &.active,
      &:hover {
        color: $color-master;
      }
    }
  }
}
</style>
