<template>
  <div class="app-wrapper">
    <layout-header />
    <!--
      传入routes可以指定显示路由表，默认使用全量的路由表。
      本脚手架指定显示了页面规范下的路由表。
      如不需要标题，可直接删除title属性。
    -->
    <sidebar class="layout-sidebar" :title="sidebarTitle" />
    <!-- id在sidebar中被使用，勿随意删改 -->
    <div id="layout-container" class="layout-container">
      <navbar />
      <code-viewer />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    LayoutHeader,
    CodeViewer: () => import(/* webpackChunkName: "codemirror" */ './components/CodeViewer/index.vue'),
  },
})
export default class extends Vue {
  private sidebarTitle = '页面规范'

  private copy() {
    console.log(this.$route.meta.manifest)
  }
}
</script>
