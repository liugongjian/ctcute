<template>
  <span class="el-state">
    <span v-if="computedIcon" class="icon-wrap">
      <svg-icon :class="[{ loading: loading }]" :name="computedIcon" :color="computedColor" />
    </span>
    <span v-else class="dot" :style="{ 'background-color': computedColor }" />
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

const typeColorMap = {
  info: variables.colorInfo,
  success: variables.colorSuccess,
  warning: variables.colorWarning,
  danger: variables.colorDanger,
  fatal: variables.colorFatal,
  master: variables.colorMaster,
}
@Component({
  name: 'CuteState',
})
export default class extends Vue {
  @Prop({
    default: 'info',
    validator(value: any): boolean {
      return Object.keys(typeColorMap).indexOf(value) !== -1
    },
  })
  private type!: string
  @Prop({ default: '' }) private color!: string
  @Prop({ default: '' }) private icon!: string
  @Prop({ default: false }) private loading!: boolean

  get computedColor() {
    if (this.color) {
      return this.color
    } else {
      return typeColorMap[this.type]
    }
  }

  get computedIcon() {
    if (this.loading) {
      return 'loading'
    } else {
      return this.icon
    }
  }
}
</script>
