<template>
  <div class="cute-area-column" :style="{ width: width }">
    <div v-for="area in data" :key="area.label" class="cute-area-wrap">
      <div class="cute-area-head">{{ area.label }}</div>
      <div class="cute-area-body">
        <div
          v-for="city in area.city"
          :key="city.label"
          class="cute-area-city"
          :class="{ selected: itemSelected(city) }"
          @click.stop="selectCityClick(city)"
        >
          {{ formatLabel(city) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
/* eslint-disable @typescript-eslint/no-unused-vars */
export default {
  name: 'CuteAreaOption',

  componentName: 'CuteAreaOption',

  inject: ['area'],

  props: {
    data: {
      type: Array,
      default: () => [],
    },
    width: {
      type: String,
      default: '25%',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    format: {
      type: Function,
      default: null,
    },
  },

  watch: {
    data(val) {
      this.backFill()
    },
  },

  created() {
    this.backFill()
  },

  methods: {
    backFill() {
      this.data.forEach(area => {
        area.city.forEach(city => {
          this.area.options.push(city)
          this.area.cachedOptions.push(city)
        })
      })
    },
    itemSelected(target) {
      return this.area.value === target[this.valueKey]
    },
    formatLabel(city) {
      return this.format ? this.format(city) : city.label
    },
    selectCityClick(city) {
      this.$emit('change', city)
    },
  },
}
</script>
