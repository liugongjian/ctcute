<template>
  <cute-layout custom-class="layout-ui-wrap" :sidebar="false" :navbar="false">
    <template #header-right>
      <header-nav />
    </template>
    <template #sidebar>
      <ui-sidebar :component-list="componentList" :current-id="currentId" />
    </template>
    <router-view />
  </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import HeaderNav from './components/LayoutHeaderNav/index.vue'
import UiSidebar from '@/views/ui/Sidebar.vue'
import { list } from '@/views/ui/components/index'

@Component({
  name: 'LayoutUi',
  components: {
    CuteLayout,
    HeaderNav,
    UiSidebar,
  },
})
export default class extends Vue {
  private componentList = list
  private titles = null
  private currentId = null

  private mounted() {
    const uiContainer = document.querySelector('#ui-container')
    this.titles = uiContainer.querySelectorAll('h1')
    console.log(this.titles)
    document.addEventListener('scroll', this.findCurrentTitle)
    this.findCurrentTitle()
  }

  private beforeDestroy() {
    document.removeEventListener('scroll', this.findCurrentTitle)
  }

  /**
   * 滚动页面时找到对应的标题，并更新url hash
   */
  private findCurrentTitle() {
    const scrollY = window.scrollY
    let currentTitle = null
    for (let i = 0; i < this.titles.length; i++) {
      const title = this.titles[i]
      if (scrollY < title.offsetTop + 50) {
        currentTitle = title
        break
      }
    }
    history.pushState(null, null, `#${currentTitle.id}`)
    this.currentId = currentTitle.id
  }
}
</script>
<style lang="scss">
.layout-ui-wrap {
  background: $color-bg-1;

  .cute-layout__body {
    height: auto;
  }

  .cute-layout__container {
    min-height: auto;
    overflow: visible;
    margin-left: $cute-layout-sidebar-width;
    border-left: 1px solid $border-color-light;
  }

  .cute-layout-sidebar {
    height: calc(100% - $cute-layout-header-height);
    position: fixed;
    top: $cute-layout-header-height;
    bottom: 0;
    left: 0;
  }
}
</style>
