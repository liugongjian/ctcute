<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="layout-sidebar__title">{{ title }}</div>
      <el-menu
        :default-active="activeMenu"
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
    <div class="sidebar--knob" @click="isShowMenu = !isShowMenu">
      <svg-icon name="caret-right"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PermissionModule } from '@/store/modules/permission'
import SidebarItem from './SidebarItem.vue'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
  },
})
export default class extends Vue {
  @Prop()
  private routes

  @Prop()
  private title

  private isShowMenu = true

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
}
</script>

<style lang="scss" scoped>
::v-deep .sidebar,
::v-deep .scrollbar-wrapper {
  width: calc($sidebar-width - 0px);
  &--knob {
    height: 80px;
    width: 12px;
    position: absolute;
    top: calc(50% - 40px - $header-height / 2);
    right: -12px;
    background: $color-white;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    // .svg-icon {
    //   position: absolute;
    //   width: 12px;
    //   height: 12px;
    //   font-size: 12px;
    // }
  }
}
</style>
