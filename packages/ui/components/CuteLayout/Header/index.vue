<template>
  <header class="layout-header">
    <div class="layout-header__logo" @click="toHome">
      <slot name="header-logo">
        <!-- 天翼云LOGO -->
        <img class="layout-header__logo--ct" :src="logoImgNew" />
        <!-- 项目LOGO -->
        <div class="layout-header__logo--project">
          <template v-if="headerSubtitle">
            <svg-icon v-if="isSvgName" :name="logoIconNew" />
            <img v-else :src="logoIconNew" class="logo-normal" />
            {{ headerSubtitle }}
          </template>
          <img v-else :src="logoIconNew" class="logo-art" />
        </div>
      </slot>
    </div>
    <div class="layout-header__right">
      <slot name="header-right"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'LayoutHeader',
  components: {
    // HeaderNav,
  },
})
export default class extends Vue {
  @Prop({ type: String, default: '' }) headerSubtitle?: string
  @Prop({ type: String, default: '' }) headerSubLogo?: string
  @Prop({ type: String, default: '' }) headerLogo?: string

  private toHome() {
    this.$router.push('/')
  }

  private get isSvgName() {
    return this.headerSubLogo?.includes('/')
  }
  private get logoIconNew() {
    return this.headerSubLogo || require('./images/cute-design.svg')
  }
  private get logoImgNew() {
    return this.headerLogo || require('./images/ct-logo.svg')
  }
}
</script>
