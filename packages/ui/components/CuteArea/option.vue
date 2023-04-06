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
<style lang="scss" scoped>
.cute-area-column {
  float: left;

  .cute-area-wrap {
    margin-bottom: $cute-area-wrap-margin;
    text-align: center;

    &:last-child {
      margin-bottom: $margin-3x;
    }

    .cute-area-head {
      margin: $margin-3x $cute-area-padding 0;
      color: $cute-area-head-color;
      font-size: $text-size-sm;
      line-height: $cute-area-head-line-height;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cute-area-body {
      padding: 0 $cute-area-padding;

      .cute-area-city {
        position: relative;
        margin-top: $margin-10;
        height: $cute-area-item-height;
        line-height: $cute-area-item-height;
        color: $cute-area-item-color;
        font-size: $text-size-sm;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        cursor: pointer;
      }

      .cute-area-city:hover {
        background-color: $cute-area-item-hover-background-color;
        font-weight: normal;
        color: $cute-area-item-hover-color;
      }

      .cute-area-city.selected,
      .cute-area-city.selected.hover {
        background: $cute-area-item-seleted-background-color;
        color: $color-white;
      }
    }
  }
}
</style>
