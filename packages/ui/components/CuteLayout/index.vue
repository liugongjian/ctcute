<template>
  <div class="app-wrapper">
    <slot name="header">
      <layout-header
        v-if="header"
        :header-logo="headerLogo"
        :header-sub-logo="headerSubLogo"
        :header-subtitle="headerSubtitle"
      >
        <template slot="header-logo">
          <slot name="header-logo"></slot>
        </template>
        <template slot="header-right">
          <slot name="header-right"></slot>
        </template>
      </layout-header>
    </slot>
    <div class="layout-wrap" :class="{ hideheader: !header }">
      <slot name="sidebar">
        <layout-sidebar
          v-if="sidebar"
          :class="['layout-sidebar', sidebarClass]"
          :sidebar-title="sidebarTitle"
          :sidebar-routes="sidebarRoutes"
          :sidebar-filter="sidebarFilter"
          :sidebar-knob="sidebarKnob"
        />
      </slot>

      <!-- id在sidebar中被使用，勿随意删改 -->
      <div id="layout-container" class="layout-container">
        <slot name="navbar">
          <navbar v-if="navbar" v-bind="$attrs">
            <template slot="navbar-breadcrumb">
              <slot name="navbar-breadcrumb"></slot>
            </template>
            <template slot="navbar-bottom">
              <slot name="navbar-bottom"></slot>
            </template>
            <template slot="navbar-right">
              <slot name="navbar-right"></slot>
            </template>
          </navbar>
        </slot>
        <div :class="{ 'app-main-wrap': true, 'fixed-navbar': layout === 'fixed-navbar' }">
          <slot name="appMain"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LayoutHeader from './Header/index.vue'
import LayoutSidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
@Component({
  name: 'CuteLayout',
  components: {
    LayoutHeader,
    LayoutSidebar,
    Navbar,
  },
})
export default class extends Vue {
  @Prop({ type: String, default: '' }) headerSubtitle?: string
  @Prop({ type: String, default: '' }) headerSubLogo?: string
  @Prop({ type: String, default: '' }) headerLogo?: string
  @Prop()
  public sidebarRoutes
  @Prop()
  public sidebarFilter
  @Prop({ default: '' })
  public sidebarTitle: string

  @Prop({ default: true })
  public sidebarKnob: boolean
  @Prop({ default: true })
  public header: boolean
  @Prop({ default: true })
  public sidebar: boolean
  @Prop({ default: true })
  public navbar: boolean
  @Prop({ default: '' })
  public layout: string
  @Prop({ default: '' })
  public sidebarClass: string
}
</script>
<style scoped>
.layout-container {
  background: $layout-bg;
}

.hideheader {
  margin-top: 0;
}
</style>
