<template>
  <div class="cute-layout-sidebar">
    <div
      class="cute-layout-sidebar__wrapper"
      :class="{ 'cute-layout-sidebar__wrapper--hidden': !isShowMenu }"
    >
      <div
        v-if="drillDownRoute"
        class="cute-layout-sidebar__title cute-layout-sidebar__title__back"
        @click="back"
      >
        <div class="cute-layout-sidebar__title__back__icon"><svg-icon name="left" /></div>
        {{ t(drillDownRoute.meta.title) }}
      </div>
      <div v-else-if="sidebarTitle" class="cute-layout-sidebar__title">{{ sidebarTitle }}</div>

      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        class="layout-sidebar__menu"
      >
        <sidebar-item v-for="route in routesList" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </div>
    <!-- 展开与收缩按钮 -->
    <div v-if="sidebarKnob" class="cute-layout-sidebar__knob" @click="toggleSideBar">
      <svg-icon :name="`${isShowMenu ? 'caret-left' : 'caret-right'}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Locale from '@cutedesign/ui/mixins/locale'
import SidebarItem from './SidebarItem.vue'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'CuteLayoutSidebar',
  components: {
    SidebarItem,
  },
})
export default class extends mixins(Locale) {
  $auth: any

  @Prop()
  private sidebarRoutes

  @Prop()
  private sidebarFilter

  @Prop({ default: '' })
  private sidebarTitle: string

  @Prop({ default: true })
  private sidebarKnob: boolean

  private isShowMenu = true

  /* 下钻路由 */
  private drillDownRoute = null

  private routesList = []

  private key = null

  private get activeMenu(): string {
    const route = this.$route
    const { meta, path } = route
    // if set path, the sidebar will highlight the path you set
    if (meta?.activeMenu) {
      return meta.activeMenu
    }
    return path
  }

  private get routes() {
    return this.sidebarRoutes || this.$router.options.routes
  }

  @Watch('sidebarRoutes', { immediate: true })
  @Watch('$route.path')
  private onChangeRoutes() {
    const filteredRoutes = this.sidebarFilter ? this.sidebarFilter(this.routes) : this.routes
    this.drillDownRoute = this.getDrillDownRoute()
    this.routesList = this.drillDownRoute ? this.drillDownRoute.children : filteredRoutes
    this.$nextTick(() => {
      this.key = new Date().getTime()
    })
  }

  private mounted() {
    this.setSidbarWidth()
  }

  /**
   * 根据当前页面的路由查找父级为开启下钻的路由
   */
  private getDrillDownRoute() {
    const matchedRoutes = this.$route.matched
    const matchedDrillDownRoute = matchedRoutes.find(route => !!route.meta.drillDown)
    if (matchedDrillDownRoute) {
      const drillDownRoute = this.routes.find(route => route.path === matchedDrillDownRoute.path)
      if (drillDownRoute) {
        return {
          ...drillDownRoute,
          children: drillDownRoute.children.map(route => {
            return {
              ...route,
              path: `${drillDownRoute.path}/${route.path}`,
            }
          }),
        }
      } else {
        return null
      }
    }
  }

  private back() {
    const path = this.drillDownRoute.meta.drillDownBackPath || ''
    this.$router.push(path)
  }

  private setSidbarWidth() {
    ;(this.$el as HTMLElement).style.width = this.isShowMenu ? `${variables.cuteLayoutSidebarWidth}` : '0px'
  }

  public toggleSideBar() {
    this.isShowMenu = !this.isShowMenu
    this.setSidbarWidth()
  }
}
</script>