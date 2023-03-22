<template>
  <span class="el-state">
    <span v-if="icon" class="icon-wrap">
      <svg-icon :class="[{ loading: loading }]" :name="icon" :color="color" />
    </span>
    <span v-else class="dot" :style="{ 'background-color': color }" />
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CuteState',
})
export default class extends Vue {
  @Prop({ default: '#999' }) private color!: string
  @Prop({ default: '' }) private icon!: string
  @Prop({ default: false }) private loading!: boolean
}
</script>
