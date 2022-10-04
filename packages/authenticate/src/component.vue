<template>
  <div v-if="isVisible" class="is-authorized-component">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'IsAuthorized',
})
export default class extends Vue {
  @Prop({ required: true }) private readonly permissions: string[]

  private isVisible = false

  created() {
    this.authorize()
  }

  updated() {
    this.authorize()
  }

  private authorize() {
    const hasAuth = this.$auth.isAuthorized(this.permissions)
    this.isVisible = hasAuth
  }
}
</script>
