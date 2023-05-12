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

      <slot name="sidebar-menu">
        <el-menu
          :default-active="activeMenu"
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
          class="layout-sidebar__menu"
        >
          <sidebar-item v-for="route in routesList" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </slot>
    </div>
    <!-- 展开与收缩按钮 -->
    <div v-if="sidebarKnob" class="cute-layout-sidebar__knob" @click="toggleSideBar">
      <svg-icon :name="`${isShowMenu ? 'caret-left' : 'caret-right'}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'
import SidebarItem from './SidebarItem.vue'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'CuteLayoutSidebar',
  components: {
    SidebarItem,
  },
})
export default class extends Mixins(Locale) {
  $auth: any

  @Prop()
  private sidebarRoutes

  @Prop()
  private sidebarFilter

  @Prop()
  private sidebarRoutesAfterEach

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
    const { meta, path, hash } = route
    // if set path, the sidebar will highlight the path you set
    if (meta?.activeMenu) {
      return meta.activeMenu
    }
    if (meta?.history === 'hash') {
      return path + hash
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
    let routesList = this.drillDownRoute ? this.drillDownRoute.children : filteredRoutes
    if (this.sidebarRoutesAfterEach) {
      routesList = this.recursiveRoutes(routesList, this.sidebarRoutesAfterEach)
    }
    this.routesList = routesList
    this.$nextTick(() => {
      this.key = new Date().getTime()
    })
  }

  private mounted() {
    this.setSidebarWidth()
  }

  /**
   * 根据当前页面的路由查找父级为开启下钻的路由
   */
  private getDrillDownRoute() {
    const matchedRoutes = this.$route.matched
    const matchedDrillDownRoute = matchedRoutes.find(route => !!route.meta.drillDown)

    const findDrillDownRoute = (children: any) => {
      for (let route of children) {
        if (route.name === matchedDrillDownRoute.name && !!route.meta.drillDown) {
          return route
        }
        if (route.children && route.children.length) {
          const result = findDrillDownRoute(route.children)
          if (result) {
            return result
          }
        }
      }
    }

    if (matchedDrillDownRoute) {
      const drillDownRoute = findDrillDownRoute(this.routes)
      if (drillDownRoute) {
        return {
          ...drillDownRoute,
          children: drillDownRoute.children.map(route => {
            return {
              ...route,
              path: `${matchedDrillDownRoute.path}/${route.path}`,
            }
          }),
        }
      } else {
        return null
      }
    }
  }

  /**
   * 返回上一级
   */
  private back() {
    const path = this.drillDownRoute.meta.drillDownBackPath || ''
    this.$router.push(path)
  }

  /**
   * 设置宽度
   */
  private setSidebarWidth() {
    ;(this.$el as HTMLElement).style.width = this.isShowMenu ? `${variables.cuteLayoutSidebarWidth}` : '0px'
  }

  /**
   * 收缩/展开侧边栏
   */
  private toggleSideBar() {
    this.isShowMenu = !this.isShowMenu
    this.setSidebarWidth()
  }

  /**
   * 递归遍历路由
   */
  private recursiveRoutes(routes, effect) {
    return routes.map(route => {
      if (route.children) {
        const children = this.recursiveRoutes(route.children, effect)
        route.children = children
      }
      return effect(route)
    })
  }
}
</script>
