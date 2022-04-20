<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
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
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PermissionModule } from '@/store/modules/permission'
import { AppModule } from '@/store/modules/app'
import SidebarItem from './SidebarItem.vue'
import variables from '@/assets/css/_variables.scss'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem
  }
})
export default class extends Vue {
  get activeMenu(): string {
    const route = this.$route
    const { meta, path } = route
    // if set path, the sidebar will highlight the path you set
    if (meta?.activeMenu) {
      return meta.activeMenu
    }
    return path
  }

  get sidebar(): any {
    return AppModule.sidebar
  }

  get routes(): unknown {
    return PermissionModule.routes
  }

  get variables(): unknown {
    return variables
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
