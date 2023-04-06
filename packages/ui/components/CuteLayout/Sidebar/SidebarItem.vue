<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="[
      'menu-wrapper',
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel },
      { 'carry-icon': item.meta && item.meta.icon },
    ]"
  >
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <sidebar-item-link v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(theOnlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': isFirstLevel }"
        >
          <template slot="title">
            <!-- 图标 -->
            <span v-if="theOnlyOneChild.meta && theOnlyOneChild.meta.icon" class="append-icon">
              <svg-icon :name="theOnlyOneChild.meta.icon" :width="14" :height="14" />
            </span>
            <span v-if="theOnlyOneChild.meta.title" slot="title">{{ theOnlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <!-- 图标 -->
        <span v-if="item.meta && item.meta.icon" class="append-icon">
          <svg-icon :name="item.meta.icon" :width="14" :height="14" />
        </span>
        <span v-if="item.meta && item.meta.title" slot="title">{{ item.meta.title }}</span>
      </template>
      <div
        v-if="item.children"
        :class="['vertical-bar', { 'vertical-bar__one': isOneDisplayChildren(item.children) }]"
      >
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </div>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import { isExternal } from '@/utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'

@Component({
  // Set 'name' here to prevent uglifyjs from causing recursive component not work
  // See https://medium.com/haiiro-io/element-component-name-with-vue-class-component-f3b435656561 for detail
  name: 'SidebarItem',
  components: {
    SidebarItemLink,
  },
})
export default class extends Vue {
  @Prop({ required: true }) public item!: RouteConfig
  @Prop({ default: false }) public isCollapse!: boolean
  @Prop({ default: true }) public isFirstLevel!: boolean
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
<style lang="scss" scoped>
.svg-icon {
  margin-right: 16px;
}

.simple-mode {
  .svg-icon {
    margin-left: 20px;
  }
}

.append-icon {
  display: inline-flex;
  align-items: center;

  .svg-icon {
    margin-right: 5px;
  }
}
</style>
