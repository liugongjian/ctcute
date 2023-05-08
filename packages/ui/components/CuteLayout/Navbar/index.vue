<template>
  <div class="cute-layout-navbar">
    <div class="cute-layout-navbar__main">
      <div v-if="navbarBreadcrumb" class="cute-layout-navbar__breadcrumb">
        <slot name="navbar-breadcrumb">
          <breadcrumb
            :breadcrumb-custom-title="breadcrumbCustomTitle"
            :breadcrumb-show-last="breadcrumbShowLast"
            :breadcrumb-after-each="breadcrumbAfterEach"
          />
        </slot>
      </div>
      <div v-if="$slots['navbar-right']" class="cute-layout-navbar__right">
        <slot name="navbar-right"></slot>
      </div>
    </div>
    <div v-if="$slots['navbar-bottom']" class="cute-layout-navbar__bottom">
      <slot name="navbar-bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Breadcrumb from '../Breadcrumb/index.vue'

@Component({
  name: 'CuteLayoutNavbar',
  components: {
    Breadcrumb,
  },
})
export default class extends Vue {
  @Prop({ default: true })
  private navbarBreadcrumb?: boolean

  @Prop({ default: '' })
  public breadcrumbCustomTitle: string

  @Prop({ default: false })
  public breadcrumbShowLast: boolean

  @Prop()
  private breadcrumbAfterEach
}
</script>
