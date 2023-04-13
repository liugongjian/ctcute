<template>
  <cute-layout :sidebar-filter="filterRoutes" :sidebar-title="sidebarTitle">
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

@Component({
  name: 'LayoutComponent',
  components: {
    CuteLayout,
    HeaderNav,
  },
})
export default class extends Vue {
  public sidebarTitle = '文档'
  public type = 'doc'

  public filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
