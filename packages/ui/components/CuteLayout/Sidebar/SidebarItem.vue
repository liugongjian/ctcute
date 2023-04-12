<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="['menu-wrapper', { 'menu-has-icon': item.meta && item.meta.icon }, `level-${level}`]"
  >
    <template v-if="theOnlyOneChild && (!theOnlyOneChild.children || theOnlyOneChild.meta.drillDown)">
      <sidebar-item-link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <template slot="title">
            <!-- 图标 -->
            <svg-icon
              v-if="theOnlyOneChild.meta && theOnlyOneChild.meta.icon"
              :name="theOnlyOneChild.meta.icon"
              class="menu-item-icon"
            />
            <span v-if="theOnlyOneChild.meta.title" slot="title">{{ t(theOnlyOneChild.meta.title) }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <!-- 图标 -->
        <svg-icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" class="menu-item-icon" />
        <span v-if="item.meta && item.meta.title" slot="title">{{ t(item.meta.title) }}</span>
      </template>
      <div class="menu-items-wrap">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :level="level + 1"
          :base-path="resolvePath(child.path)"
          class="menu-nest"
        />
      </div>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { RouteConfig } from 'vue-router'
import Locale from '@cutedesign/ui/mixins/locale'
import { isExternal } from '../utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'

@Component({
  // Set 'name' here to prevent uglifyjs from causing recursive component not work
  // See https://medium.com/haiiro-io/element-component-name-with-vue-class-component-f3b435656561 for detail
  name: 'SidebarItem',
  components: {
    SidebarItemLink,
  },
})
export default class extends mixins(Locale) {
  @Prop({ required: true }) public item!: RouteConfig
  @Prop({ default: 1 }) public level!: number
  @Prop({ default: '' }) private basePath!: string

  get showingChildNumber(): any {
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

  get theOnlyOneChild(): any {
    if (this.item.meta && this.item.meta.drillDown) {
      return this.item
    }
    if (this.showingChildNumber > 1 || (this.item.meta && this.item.meta.alwaysShow)) {
      return null
    }
    if (this.item.children) {
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
    // If there is no children, return itself with path removed,
    // because this.basePath already conatins item's path information
    return { ...this.item, path: '' }
  }

  public resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath
    }
    if (isExternal(this.basePath)) {
      return this.basePath
    }
    return path.resolve(this.basePath, routePath)
  }

  public isOneDisplayChildren(children) {
    if (
      Array.isArray(children) &&
      children.filter(v => {
        return !(v.meta && Boolean(v.meta.hidden) === true)
      }).length === 1
    ) {
      return true
    } else {
      return false
    }
  }
}
</script>
