<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="['menu-wrapper', { 'menu-has-icon': item.meta && item.meta.icon }, `level-${level}`]"
  >
    <template
      v-if="
        theOnlyOneChild ||
        showingChildNumber === 0 ||
        (!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children)
      "
    >
      <sidebar-item-link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild)">
        <el-menu-item :index="resolvePath(theOnlyOneChild, false)">
          <template slot="title">
            <!-- 图标 -->
            <sidebar-item-icon
              v-if="theOnlyOneChild.meta && theOnlyOneChild.meta.icon"
              :name="theOnlyOneChild.meta.icon"
              :icon-type="theOnlyOneChild.meta.iconType"
            />
            <span v-if="theOnlyOneChild.meta.title" slot="title">{{ t(theOnlyOneChild.meta.title) }}</span>
            <!-- TODO: 换成iconfont图标 -->
            <svg-icon
              v-if="isExternal(resolvePath(theOnlyOneChild))"
              class="el-submenu__icon-link el-submenu__icon-arrow"
              name="link"
            />
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item, false)" popper-append-to-body>
      <template slot="title">
        <!-- 图标 -->
        <sidebar-item-icon
          v-if="item.meta && item.meta.icon"
          :name="item.meta.icon"
          :icon-type="item.meta.iconType"
        />
        <span v-if="item.meta && item.meta.title" slot="title">{{ t(item.meta.title) }}</span>
      </template>
      <div class="menu-items-wrap">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :level="level + 1"
          :base-path="resolvePath(child, false)"
          class="menu-nest"
        />
      </div>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { Component, Prop, Mixins } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import Locale from '@cutedesign/ui/mixins/locale'
import { isExternal } from '../utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'
import SidebarItemIcon from './SidebarItemIcon.vue'

@Component({
  // Set 'name' here to prevent uglifyjs from causing recursive component not work
  // See https://medium.com/haiiro-io/element-component-name-with-vue-class-component-f3b435656561 for detail
  name: 'SidebarItem',
  components: {
    SidebarItemLink,
    SidebarItemIcon,
  },
})
export default class extends Mixins(Locale) {
  @Prop({ required: true }) public item!: RouteConfig
  @Prop({ default: 1 }) public level!: number
  @Prop({ default: '' }) private basePath!: string

  private isExternal = isExternal

  /**
   * 是否总是显示根菜单
   */
  get alwaysShowRootMenu(): boolean {
    if (this.item.meta && this.item.meta.alwaysShow) {
      return true
    }
    return false
  }

  /**
   * 需要显示的子菜单数量
   */
  get showingChildNumber(): number {
    if (this.item.children) {
      const showingChildren = this.item.children.filter(item => {
        if (item.meta && item.meta.hidden) {
          return false
        } else {
          return true
        }
      })
      return showingChildren.length
    }
    return 0
  }

  /**
   * 只有一个子菜单
   */
  get theOnlyOneChild(): any {
    if (this.item.meta && this.item.meta.drillDown) {
      return { ...this.item, path: '' }
    }
    if (this.showingChildNumber > 1 || (this.item.meta && this.item.meta.alwaysShow)) {
      return null
    }
    if (this.item.children) {
      // 判断孙子节点是否全为hidden
      for (const child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          // 如果子菜单全部为hidden，删除整个children
          if (
            child.children &&
            child.children.every(grandchild => {
              return grandchild.meta && grandchild.meta.hidden
            })
          ) {
            child.children = null
          }
          return child
        }
      }
    }
    // 如果没有子节点，返回移除路径的自身; 因为这个basePath已经包含了项目的路径信息
    return { ...this.item, path: '' }
  }

  /**
   * 拼接菜单项Path
   * @param route 路由对象
   * @param transform 是否转换Path，如下钻菜单没有设置redirect默认取第一个子菜单的path的操作，和拼接URL参数
   */
  private resolvePath(route: any, shouldTransform = true) {
    let routePath = route.meta?.customPath ? route.meta.customPath : route.path
    if (isExternal(routePath)) {
      return routePath
    }
    if (isExternal(this.basePath)) {
      return this.basePath
    }
    // 如果为下钻菜单，并且没有设置redirect，则默认取第一个子菜单的path
    if (route?.meta.drillDown && !route.redirect && shouldTransform) {
      if (route.children && route.children.length) {
        routePath = route.children[0].path
      }
    }
    // 添加URL参数
    if (shouldTransform && route?.query) {
      const query = Object.keys(route.query)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(route.query[key]))
        .join('&')
      return path.resolve(this.basePath, routePath) + '?' + query
    }
    if (route.meta?.customPath) {
      return routePath
    }
    return path.resolve(this.basePath, routePath)
  }
}
</script>
