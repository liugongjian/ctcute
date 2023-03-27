<template>
  <div class="el-color-predefine">
    <div class="el-color-predefine__colors">
      <div
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        class="el-color-predefine__color-selector"
        :class="{ selected: item.selected, 'is-alpha': item._alpha < 100 }"
        @click="handleSelect(index)"
      >
        <div :style="{ 'background-color': item.value }"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable vue/custom-event-name-casing */
import Color from '../color'

export default {
  props: {
    colors: { type: Array, required: true },
    color: { type: Object, required: true },
    type: { type: String, default: 'default' },
  },
  data() {
    return {
      rgbaColors: this.parseColors(this.colors, this.color),
    }
  },
  watch: {
    '$parent.currentColor'(val) {
      const color = new Color()
      color.fromString(val)

      this.rgbaColors.forEach(item => {
        item.selected = color.compare(item)
      })
    },
    colors(newVal) {
      this.rgbaColors = this.parseColors(newVal, this.color)
    },
    color(newVal) {
      this.rgbaColors = this.parseColors(this.colors, newVal)
    },
  },
  methods: {
    handleSelect(index) {
      this.color.fromString(this.colors[index])
      if (this.type === 'predefine') {
        this.$emit('confirmValue')
      }
    },
    parseColors(colors, color) {
      return colors.map(value => {
        const c = new Color()
        c.enableAlpha = true
        c.format = 'rgba'
        c.fromString(value)
        c.selected = c.value === color.value
        return c
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.el-color-predefine__color-selector.selected {
  box-shadow: $shadow-2;
}
</style>
