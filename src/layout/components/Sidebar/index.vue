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
        class="layout-sidebar__menu"
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
import SidebarItem from './SidebarItem.vue'

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
  },
})
export default class extends Vue {
  $auth: any
  @Prop()
  private routes

  @Prop()
  public title

  @Prop()
  private type

  mounted() {
    this.setSidbarWidth()
  }

  public isShowMenu = true

  public isActiveModule = 'home'

  public moduleList = []

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
    const routes = this.routes || (this.$auth && this.$auth.getRoutes())
    return routes.filter(route => route.meta.type === this.type)
  }

  private setSidbarWidth() {
    const moduleWidth = this.isShowModule ? 50 : 0 // 左侧图片栏宽度

    ;(this.$el as HTMLElement).style.width = this.isShowMenu
      ? `${moduleWidth + 190}px`
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

<style lang="scss" scoped>
::v-deep .scrollbar-wrapper {
  width: $sidebar-width;
}

.sidebar {
  display: flex;
  position: relative;

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
        margin: 0 8px;
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
