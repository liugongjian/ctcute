<template>
  <header class="cute-layout-header">
    <div class="cute-layout-header__logo" @click="toHome">
      <slot name="header-logo">
        <!-- 天翼云LOGO -->
        <img class="cute-layout-header__logo__main" :src="logo" />
        <!-- 项目LOGO -->
        <div class="cute-layout-header__logo__sub">
          <template v-if="headerSubLogo">
            <img :src="headerSubLogo" class="cute-layout-header__logo__sub__img" />
          </template>
          <template v-if="headerSubTitle">
            <span class="cute-layout-header__logo__sub__title">{{ headerSubTitle }}</span>
          </template>
        </div>
      </slot>
    </div>
    <div class="cute-layout-header__right">
      <slot name="header-right" />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteLayoutHeader',
})
export default class extends Vue {
  @Prop({
    type: String,
    default: '',
    validator: function (value) {
      const reg = /^(?!https?:\/\/)/
      const result = reg.test(value)
      if (!result) {
        console.error('header-logo仅支持传入相对路径图片地址')
      }
      return reg.test(value)
    },
  })
  private headerLogo?: string

  @Prop({
    type: String,
    default: '',
    validator: function (value) {
      const reg = /^(?!https?:\/\/)/
      const result = reg.test(value)
      if (!result) {
        console.error('header-sub-logo仅支持传入相对路径图片地址')
      }
      return reg.test(value)
    },
  })
  private headerSubLogo?: string

  @Prop({ type: String, default: '' })
  private headerSubTitle?: string

  private toHome() {
    this.$router.push('/')
  }

  private get logo() {
    return this.headerLogo || require('./images/ct-logo.svg')
  }
}
</script>
