<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="layout-sidebar__title">{{ title }}</div>
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in currentRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PermissionModule } from '@/store/modules/permission'
import SidebarItem from './SidebarItem.vue'
import variables from '@/assets/css/_variables.scss'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem
  }
})
export default class extends Vue {
  @Prop()
  private routes

  @Prop()
  private title

  private get activeMenu(): string {
    const route = this.$route
    const { meta, path } = route
    // if set path, the sidebar will highlight the path you set
    if (meta?.activeMenu) {
      return meta.activeMenu
    }
    return path
  }

  private get currentRoutes(): any {
    return this.routes || PermissionModule.routes
  }

  private get variables(): any {
    return variables
  }
}
</script>
