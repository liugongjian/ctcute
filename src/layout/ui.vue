<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: 马妍
 * @LastEditTime: 2022-11-11 15:38:17
 * @Description: 
-->
<template>
  <div class="app-wrapper">
    <layout-header />
    <div class="ui-layout-container">
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'

@Component({
  name: 'UiLayout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    LayoutHeader,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.ui-layout-container {
  background: $color-bg-2;
}
</style>
