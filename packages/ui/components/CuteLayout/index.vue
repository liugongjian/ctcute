<template>
  <div class="app-wrapper">
    <layout-header v-bind="$attrs">
      <template slot="header-logo">
        <slot name="header-logo"></slot>
      </template>
      <template slot="header-right">
        <slot name="header-right"></slot>
      </template>
    </layout-header>
    <div class="layout-wrap">
      <layout-sidebar class="layout-sidebar" v-bind="$attrs" />
      <!-- id在sidebar中被使用，勿随意删改 -->
      <div id="layout-container" class="layout-container">
        <navbar v-bind="$attrs">
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
        <div class="app-main-wrap">
          <slot name="appMain"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
export default class extends Vue {}
</script>
<style scoped>
.layout-container {
  background: #f7f8fa;
}
</style>
