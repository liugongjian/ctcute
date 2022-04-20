<template>
  <div class="app-wrapper">
    <layout-header />
    <sidebar class="layout-sidebar" />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'
import ResizeMixin from './mixin/resize'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    LayoutHeader
  }
})
export default class extends mixins(ResizeMixin) {

}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 15px;
}
</style>
