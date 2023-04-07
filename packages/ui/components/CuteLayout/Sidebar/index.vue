<template>
  <div class="cute-sidebar">
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
    <div v-if="isShowMenu" class="cute-scrollbar-wrapper">
      <div v-if="isNewMenu" class="layout-sidebar__title back" @click="onBackMenu">
        <svg-icon name="arrow-left" width="16" height="16" />{{ t(currentNewMenu.meta.title) }}
      </div>
      <div v-else-if="sidebarTitle" class="layout-sidebar__title">{{ sidebarTitle }}</div>

      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        class="layout-sidebar__menu"
        @select="handleSelect"
      >
        <sidebar-item v-for="route in routesList" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </div>
    <!-- 展开与收缩按钮 -->
    <div v-if="sidebarKnob" class="sidebar--knob" @click="toggleSideBar">
      <svg-icon :name="`${isShowMenu ? 'caret-left' : 'caret-right'}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Locale from '@cutedesign/ui/mixins/locale'
import SidebarItem from './SidebarItem.vue'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
  },
})
export default class extends mixins(Locale) {
  $auth: any
  @Prop()
  private sidebarRoutes

  @Prop()
  public sidebarFilter

  @Prop({ default: '' })
  public sidebarTitle: string

  @Prop({ default: true })
  public sidebarKnob: boolean

  @Prop()
  private type

  mounted() {
    this.setSidbarWidth()
  }

  public isShowMenu = true

  public isNewMenu = false

  public currentNewMenu = {}

  public isActiveModule = 'home'

  public moduleList = []
  public routesList = []
  public get isShowModule(): boolean {
    return this.moduleList && this.moduleList.length > 0
  }

  public get activeMenu(): string {
    const route = this.$route
    const { meta, path } = route
    // if set path, the sidebar will highlight the path you set
    if (meta?.activeMenu) {
      return meta.activeMenu
    }
    return path
  }

  public get currentRoutes(): any {
    const routes = this.sidebarRoutes || (this.$auth && this.$auth.getRoutes())
    console.log(routes)
    return this.sidebarFilter ? this.sidebarFilter(routes) : routes
  }

  @Watch('sidebarRoutes', { immediate: true })
  onChangeRoutes() {
    const routes = this.sidebarRoutes || (this.$auth && this.$auth.getRoutes())
    console.log(routes)
    this.routesList = this.sidebarFilter ? this.sidebarFilter(routes) : routes
  }
  handleSelect(key, keyPath) {
    const item = this.currentRoutes.filter(route => route.path === key)[0]
    if (item && item.expandMenus && item.expandMenus.length > 0) {
      const expandMenus = JSON.parse(JSON.stringify(item.expandMenus))
      expandMenus.map(menu => {
        menu.path = keyPath + '/' + menu.path
        return menu
      })
      this.routesList = expandMenus
      this.isNewMenu = true
      this.currentNewMenu = item
    }
  }
  private onBackMenu() {
    this.routesList = this.currentRoutes
    this.isNewMenu = false
  }

  private setSidbarWidth() {
    const moduleWidth = this.isShowModule ? 50 : 0 // 左侧图片栏宽度

    ;(this.$el as HTMLElement).style.width = this.isShowMenu
      ? `${moduleWidth + 240}px`
      : `${moduleWidth + 0}px`
  }

  public toggleSideBar() {
    this.isShowMenu = !this.isShowMenu
    this.setSidbarWidth()
  }

  public clickModule(item) {
    this.isActiveModule = item.name
  }
}
</script>
