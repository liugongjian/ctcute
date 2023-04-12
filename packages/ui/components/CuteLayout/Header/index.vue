<template>
  <header class="cute-layout-header">
    <div class="cute-layout-header__logo" @click="toHome">
      <slot name="header-logo">
        <!-- 天翼云LOGO -->
        <img class="cute-layout-header__logo__main" :src="logo" />
        <!-- 项目LOGO -->
        <div class="cute-layout-header__logo__sub">
          <template v-if="headerSubTitle">
            {{ headerSubTitle }}
          </template>
          <template v-else>
            <img :src="subLogo" class="cute-layout-header__logo__sub__img" />
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
  @Prop({ type: String, default: '' })
  private headerLogo?: string

  @Prop({ type: String, default: '' })
  private headerSubLogo?: string

  @Prop({ type: String, default: '' })
  private headerSubTitle?: string

  private toHome() {
    this.$router.push('/')
  }

  private get logo() {
    return this.headerLogo || require('./images/ct-logo.svg')
  }

  private get subLogo() {
    return this.headerSubLogo || require('./images/cute-design.svg')
  }
}
</script>
