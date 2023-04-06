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

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1999;
  height: $layout-header-height;
  display: flex;
  justify-content: space-between;
  background: $layout-header-fill-1;

  &__logo {
    display: flex;
    align-items: center;
    padding-left: 28px;

    &--ct {
      height: 22px;
    }

    &--project {
      display: flex;
      align-items: center;
      margin-left: 15px;
      padding-left: 15px;
      border-left: 1px solid $layout-header-border;
      color: $color-white;

      .logo-normal,
      .svg-icon {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }

      .logo-art {
        height: 15px;
        margin-top: 3px; // 因包含字母g，向下偏移3个像素，让视觉水平居中
      }
    }
  }

  &__logo:hover {
    cursor: pointer;
  }
}
</style>
