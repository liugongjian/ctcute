<!--
 * @Author: 胡佳婷
 * @Date: 2023-04-18 17:17:41
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-18 17:21:01
 * @Description:
-->
<template>
  <cute-layout
    :header-sub-logo="logoIcon"
    :sidebar-filter="filterRoutes"
    :sidebar-title="sidebarTitle"
    :sidebar-routes="routes"
  >
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
import HeaderNav from './components/LayoutHeaderNav/index.vue'
import CodeViewer from './components/CodeViewer/index.vue'
import settings from '@/settings'

@Component({
  name: 'LayoutPage',
  components: {
    CuteLayout,
    HeaderNav,
    CodeViewer,
  },
})
export default class extends Vue {
  private sidebarTitle = '页面'
  private type = 'page'
  private logoIcon = settings.logoIcon
  private routes = this.$auth && this.$auth.getRoutes()

  private filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
