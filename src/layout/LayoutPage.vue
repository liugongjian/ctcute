<!--
 * @Author: 胡佳婷
 * @Date: 2023-04-18 17:17:41
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-24 12:25:16
 * @Description:
-->
<template>
  <cute-layout
    :header-logo="logoIcon"
    :header-sub-logo="subLogoIcon"
    :sidebar-filter="filterRoutes"
    :sidebar-title="sidebarTitle"
    :sidebar-routes="routes"
    :navbar="!fullScreen"
    :sidebar="!fullScreen"
    :layout="layout"
    class="layout-page"
  >
    <template #navbar-breadcrumb>
      <cute-breadcrumb />
      <description />
    </template>
    <template #header-right>
      <header-nav />
    </template>
    <template #navbar-right>
      <code-viewer />
    </template>
    <router-view />
  </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import CuteBreadcrumb from '@cutedesign/ui/components/CuteLayout/Breadcrumb/index.vue'
import HeaderNav from './components/LayoutHeaderNav/index.vue'
import CodeViewer from './components/CodeViewer/index.vue'
import Description from './components/Description/index.vue'
import settings from '@/settings'

@Component({
  name: 'LayoutPage',
  components: {
    CuteLayout,
    CuteBreadcrumb,
    HeaderNav,
    CodeViewer,
    Description,
  },
})
export default class extends Vue {
  private sidebarTitle = '页面'
  private type = 'page'
  private logoIcon = settings.logoIcon
  private subLogoIcon = settings.subLogoIcon
  private layout = settings.layout
  private routes = this.$auth && this.$auth.getRoutes()

  private get fullScreen() {
    return this.$route.meta.fullScreen
  }

  private filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
<style lang="scss" scoped>
.layout-page {
  ::v-deep .cute-layout-navbar__breadcrumb {
    display: flex;
    align-items: center;

    .desc-box {
      margin-left: $margin;
    }
  }
}
</style>
