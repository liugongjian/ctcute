<template>
  <cute-layout :sidebar-filter="filterRoutes" :sidebar-title="sidebarTitle" :sidebar-routes="routes">
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
  private routes = this.$auth && this.$auth.getRoutes()

  private filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
