<template>
  <div class="app-wrapper">
    <layout-header />
    <!--
      传入routes可以指定显示路由表，默认使用全量的路由表。
      本脚手架指定显示了页面规范下的路由表。
      如不需要标题，可直接删除title属性。
    -->
    <sidebar class="layout-sidebar" :title="sidebarTitle" />
    <div class="layout-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'
import ResizeMixin from './mixin/resize'
import { PermissionModule } from '@/store/modules/permission'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    LayoutHeader
  }
})
export default class extends mixins(ResizeMixin) {
  private get sidebarTitle() {
    const route = PermissionModule.routes.find(route => route.name === 'Page')
    return route ? route.meta.title : null
  }

  private get pageRoutes(): any {
    const route = PermissionModule.routes.find(route => route.name === 'Page')
    return route ? route.children : PermissionModule.routes
  }
}
</script>
<style lang="scss" scoped>
.layout-container {
  padding: 15px;
}
</style>
