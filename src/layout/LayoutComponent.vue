<template>
  <cute-layout
    :header-sub-logo="logoIcon"
    :sidebar-filter="filterRoutes"
    :sidebar-title="$t('menu.component')"
    :sidebar-routes="routes"
    class="layout-page"
  >
    <template #navbar-breadcrumb>
      <cute-breadcrumb />
      <description />
    </template>
    <template #header-right>
      <header-nav />
    </template>
    <el-card shadow="always-light">
      <router-view />
    </el-card>
  </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import CuteBreadcrumb from '@cutedesign/ui/components/CuteLayout/Breadcrumb/index.vue'
import HeaderNav from './components/LayoutHeaderNav/index.vue'
import Description from './components/Description/index.vue'
import settings from '@/settings'

@Component({
  name: 'LayoutComponent',
  components: {
    CuteLayout,
    CuteBreadcrumb,
    HeaderNav,
    Description,
  },
})
export default class extends Vue {
  private type = 'component'
  private logoIcon = settings.logoIcon
  private routes = this.$auth && this.$auth.getRoutes()

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
