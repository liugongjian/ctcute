<template>
  <cute-layout :sidebar-filter="filterRoutes" :sidebar-title="sidebarTitle">
    <template #header-right>
      <header-nav />
    </template>
    <el-card>
      <router-view />
    </el-card>
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
  public sidebarTitle = '组件'
  public type = 'component'

  public filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
}
</script>
