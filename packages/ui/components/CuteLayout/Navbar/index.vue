<template>
  <div class="navbar desc-nav">
    <slot name="navbar-breadcrumb">
      <breadcrumb v-if="navbarBreadcrumb" id="breadcrumb-container" class="breadcrumb-container" />
    </slot>

    <slot name="navbar-right"></slot>

    <slot name="navbar-bottom"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Breadcrumb from '../Breadcrumb/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    // Description,
    // CodeViewer,
  },
})
export default class extends Vue {
  @Prop({ type: Boolean, default: true }) navbarBreadcrumb?: boolean
}
</script>
<style lang="scss" scoped>
.desc-nav {
  .desc {
    margin-left: 10px;
  }
}
</style>
