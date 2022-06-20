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
    LayoutHeader
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
.ui-layout-container {
  background: #fff;
}
</style>
