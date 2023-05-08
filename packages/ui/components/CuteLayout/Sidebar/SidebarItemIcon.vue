<template>
  <svg-icon v-if="isSvgIcon" :name="name" class="menu-item-icon" />
  <i v-else class="menu-item-icon" :class="name"></i>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'SidebarItemIcon',
})
export default class extends Vue {
  @Prop() public name: string
  @Prop({ default: 'svg' }) public iconType: string

  private get isSvgIcon() {
    return this.iconType === 'svg' && !this.name.startsWith('el-')
  }
}
</script>
