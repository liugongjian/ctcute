<template>
  <div class="app-wrapper">
    <layout-header v-if="!isCas" />
    <div class="ui-layout-container">
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar, LayoutHeader } from './components'
import { CasModule } from '@/store/modules/cas'

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
  /* 是否为单点登录界面 */
  private get isCas() {
    return !!CasModule.cas
  }
}
</script>
<style lang="scss" scoped>
.ui-layout-container {
  background: #fff;
}
</style>
