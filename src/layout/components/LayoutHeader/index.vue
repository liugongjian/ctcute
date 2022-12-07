<template>
  <header class="layout-header">
    <div class="layout-header__logo" @click="toHome">
      <!-- 天翼云LOGO -->
      <img class="layout-header__logo--ct" src="./images/ct-logo.svg" />
      <!-- 项目LOGO -->
      <div class="layout-header__logo--project">
        <img src="./images/cute-design.svg" />
      </div>
    </div>
    <header-nav />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderNav from './HeaderNav.vue'

@Component({
  name: 'LayoutHeader',
  components: {
    HeaderNav,
  },
})
export default class extends Vue {
  private toHome() {
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1002;
  height: $header-height;
  display: flex;
  justify-content: space-between;
  background: $header-fill-1;

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
      border-left: 1px solid $header-border;

      img {
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
