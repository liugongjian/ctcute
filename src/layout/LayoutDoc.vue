<template>
  <cute-layout
    :header-logo="logoIcon"
    :header-sub-logo="subLogoIcon"
    :sidebar-filter="filterRoutes"
    :sidebar-title="sidebarTitle"
    :layout="layout"
    :sidebar-routes="routes"
  >
    <template #header-right>
      <header-nav />
    </template>
    <router-view />
  </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import HeaderNav from './components/LayoutHeaderNav/index.vue'
import settings from '@/settings'

@Component({
  name: 'LayoutComponent',
  components: {
    CuteLayout,
    HeaderNav,
  },
})
export default class extends Vue {
  private sidebarTitle = '文档'
  private type = 'doc'
  private logoIcon = settings.logoIcon
  private subLogoIcon = settings.subLogoIcon
  private layout = settings.layout
  private routes = this.$auth && this.$auth.getRoutes()

  private filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
