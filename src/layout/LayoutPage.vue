<template>
  <cute-layout :sidebar-filter="filterRoutes" :sidebar-title="sidebarTitle" layout="fixed-navbar">
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
  public sidebarTitle = '页面'
  public type = 'page'

  public filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
