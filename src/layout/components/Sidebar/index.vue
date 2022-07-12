<template>
  <div class="sidebar">
    <el-scrollbar v-if="isShowMenu" wrap-class="scrollbar-wrapper">
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
    <div class="sidebar--knob" @click="toggleSideBar">
      <svg-icon :name="`${isShowMenu ? 'caret-left' : 'caret-right'}`" />
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

  private toggleSideBar() {
    const layoutContainer = document.getElementById('layout-container')
    this.isShowMenu = !this.isShowMenu
    if (this.isShowMenu) {
      layoutContainer.style.marginLeft = '238px' // 230px是侧边栏宽度，8px是间隔
    } else {
      layoutContainer.style.marginLeft = '8px'
    }
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
    top: calc(50% - 40px - $header-height / 2); // 40px是自身高度的一半
    right: -12px;
    background: $color-white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    color: $color-grey-2;
    display: flex;
    align-items: center;
  }
}
</style>
