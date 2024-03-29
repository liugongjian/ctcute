<template>
  <div class="cute-layout__wrap">
    <div class="cute-layout" :class="customClass">
      <slot name="header">
        <layout-header
          v-if="header"
          :header-logo="headerLogo"
          :header-sub-logo="headerSubLogo"
          :header-sub-title="headerSubTitle"
        >
          <template slot="header-logo">
            <slot name="header-logo"></slot>
          </template>
          <template slot="header-right">
            <slot name="header-right"></slot>
          </template>
        </layout-header>
      </slot>
      <div class="cute-layout__body">
        <slot name="sidebar">
          <layout-sidebar
            v-if="sidebar"
            :class="[sidebarCustomClass]"
            :sidebar-routes="sidebarRoutes"
            :sidebar-filter="sidebarFilter"
            :sidebar-routes-after-each="sidebarRoutesAfterEach"
            :sidebar-title="sidebarTitle"
            :sidebar-title-icon="sidebarTitleIcon"
            :sidebar-title-icon-type="sidebarTitleIconType"
            :sidebar-navigation="sidebarNavigation"
            :sidebar-knob="sidebarKnob"
            @toggle-sidebar="toggleSidebar"
          >
            <template slot="sidebar-menu">
              <slot name="sidebar-menu"></slot>
            </template>
          </layout-sidebar>
        </slot>

        <!-- id在sidebar中被使用，勿随意删改 -->
        <div id="layout-container" class="cute-layout__container">
          <slot name="navbar">
            <navbar
              v-if="navbar"
              :navbar-breadcrumb="navbarBreadcrumb"
              :breadcrumb-custom-title="breadcrumbCustomTitle"
              :breadcrumb-show-last="breadcrumbShowLast"
              :breadcrumb-show-home="breadcrumbShowHome"
              :breadcrumb-after-each="breadcrumbAfterEach"
            >
              <template slot="navbar-breadcrumb">
                <slot name="navbar-breadcrumb" />
              </template>
              <template slot="navbar-bottom">
                <slot name="navbar-bottom" />
              </template>
              <template slot="navbar-right">
                <slot name="navbar-right" />
              </template>
            </navbar>
          </slot>
          <div class="cute-layout__main" :class="[layout]">
            <slot name="main-top" />
            <transition :name="transition" mode="out-in">
              <slot />
            </transition>
            <slot name="main-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteConfig, RouteRecord } from 'vue-router'
import LayoutHeader from './Header/index.vue'
import LayoutSidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
import { LayoutType, SidebarNavigationLink } from '@cutedesign/ui/types/CuteLayout'

@Component({
  name: 'CuteLayout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    Navbar,
  },
})
export default class extends Vue {
  @Prop({ default: true })
  private header?: boolean

  @Prop({ default: true })
  private sidebar?: boolean

  @Prop({ default: true })
  private navbar?: boolean

  @Prop({ default: '' })
  private layout?: LayoutType

  @Prop({ default: 'fade-transform' })
  private transition?: string

  @Prop({ default: '' })
  private customClass?: string

  @Prop({ type: String, default: '' })
  private headerLogo?: string

  @Prop({ type: String, default: '' })
  private headerSubLogo?: string

  @Prop({ type: String, default: '' })
  private headerSubTitle?: string

  @Prop()
  private sidebarRoutes: RouteConfig[]

  @Prop()
  private sidebarRoutesAfterEach: (route: RouteConfig) => RouteConfig

  @Prop()
  private sidebarFilter: (routes: RouteConfig[]) => RouteConfig[]

  @Prop({ default: '' })
  private sidebarTitle: string

  @Prop({ default: '' })
  private sidebarTitleIcon: string

  @Prop({ default: '' })
  private sidebarTitleIconType: string

  @Prop()
  private sidebarNavigation?: SidebarNavigationLink[]

  @Prop({ default: true })
  private sidebarKnob: boolean

  @Prop({ default: '' })
  public sidebarCustomClass: string

  @Prop({ default: true })
  private navbarBreadcrumb?: boolean

  @Prop({ default: '' })
  public breadcrumbCustomTitle: string

  @Prop({ default: false })
  public breadcrumbShowLast: boolean

  @Prop({ default: true })
  public breadcrumbShowHome: boolean

  @Prop()
  private breadcrumbAfterEach: (route: RouteRecord) => RouteRecord

  /**
   * 收缩/展开侧边栏
   */
  private toggleSidebar(isShowMenu) {
    this.$emit('toggle-sidebar', isShowMenu)
  }
}
</script>
