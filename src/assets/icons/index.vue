<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" :style="styleSvgIcon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SvgIcon'
})
export default class extends Vue {
  @Prop({ required: true }) private name!: string
  @Prop({ default: '' }) private className!: string
  @Prop({ default: '' }) private color!: string
  @Prop({ default: '' }) private width!: string
  @Prop({ default: '' }) private height!: string
  @Prop({ default: '' }) private verticalAlign!: string

  public get isExternal() {
    return /^(https?:|mailto:|tel:)/.test(this.name)
  }

  public get iconName() {
    return `#icon-${this.name}`
  }

  public get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }

  public get styleExternalIcon() {
    if (this.verticalAlign) {
      return {
        backgroundColor: this.color,
        mask: `url(${this.name}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.name}) no-repeat 50% 50%`,
        'vertical-align': this.verticalAlign
      }
    } else {
      return {
        backgroundColor: this.color,
        mask: `url(${this.name}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.name}) no-repeat 50% 50%`
      }
    }
  }

  public get styleSvgIcon() {
    let style = {}
    if (this.width && this.height) {
      // 某些特殊svg需要定制宽高
      style = {
        width: this.width,
        height: this.height
      }
    }
    if (this.verticalAlign) {
      style = {
        ...style,
        'vertical-align': this.verticalAlign
      }
    }
    if (this.color) {
      style = {
        ...style,
        fill: this.color
      }
    }
    return style
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  mask-size: cover !important;
  display: inline-block;
}
</style>
