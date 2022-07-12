<template>
  <div class="sidebar">
    <!-- 左侧图标栏 -->
    <div v-if="isShowModule" class="sidebar--left">
      <div
        v-for="(item, index) in moduleList"
        :key="index"
        :class="{ 'is-first': index === 0, 'is-active': isActiveModule === item.name }"
        @click="clickModule(item)"
      >
        <svg-icon :name="item.icon" />
        <div v-if="index === 0" class="division"></div>
      </div>
    </div>
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
    <!-- 展开与收缩按钮 -->
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

  mounted() {
    this.setLayoutPadding()
  }

  private isShowMenu = true

  private isActiveModule = 'home'

  private moduleList = []

  private get isShowModule(): boolean {
    return this.moduleList && this.moduleList.length > 0
  }

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

  private setLayoutPadding() {
    const layoutContainer = document.getElementById('layout-container')
    const moduleWidth = this.isShowModule ? 50 : 0 // 左侧图片栏宽度
    if (this.isShowMenu) {
      layoutContainer.style.marginLeft = `${moduleWidth + 190 + 8}px` // 190px菜单宽度，8px是间隔
    } else {
      layoutContainer.style.marginLeft = `${moduleWidth + 8}px`
    }
  }

  private toggleSideBar() {
    this.isShowMenu = !this.isShowMenu
    this.setLayoutPadding()
  }

  private clickModule(item) {
    this.isActiveModule = item.name
  }
}
</script>

<style lang="scss" scoped>
::v-deep .scrollbar-wrapper {
  width: $sidebar-width;
}
.sidebar {
  display: flex;
  &--left {
    width: 50px;
    flex: none;
    font-size: 16px;
    color: $color-grey-2;
    border-right: 1px solid $border-color-primary;
    > div {
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      &:hover {
        background-color: $sidebar-sub-hover;
      }
      &.is-first {
        margin-bottom: 1px;
      }
      &.is-active {
        background-color: $sidebar-sub-hover;
        color: $color-master-1;
      }
      .division {
        height: 1px;
        background-color: $border-color-primary;
        margin: 0px 8px;
      }
    }
  }
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
