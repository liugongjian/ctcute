<template>
  <div class="app-wrapper">
    <layout-header v-if="!isCas" />
    <!--
      传入routes可以指定显示路由表，默认使用全量的路由表。
      本脚手架指定显示了页面规范下的路由表。
      如不需要标题，可直接删除title属性。
    -->
    <sidebar v-if="!isCas" class="layout-sidebar" :title="sidebarTitle" />
    <div class="layout-container">
      <navbar v-if="!isCas" />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'
import { CasModule } from '@/store/modules/cas'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    LayoutHeader
  }
})
export default class extends Vue {
  private sidebarTitle = '页面规范'

  /* 是否为单点登录界面 */
  private get isCas() {
    return !!CasModule.cas
  }
}
</script>
