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
      default: 'value'
    },
    format: {
      type: Function,
      default: null,
    },
  },

  created() {
    this.data.forEach(area => {
      area.city.forEach(city => {
        this.area.options.push(city)
        this.area.cachedOptions.push(city)
      })
    })
  },

  methods: {
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
    margin-bottom: 40px;
    .cute-area-head {
      margin: 10px;
      padding: 0 10px;
      color: $color-grey-4;
    }
    .cute-area-body {
      margin: 0 10px;
      .cute-area-city {
        position: relative;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        color: $color-grey-2;
        font-size: $text-size-primary;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        cursor: pointer;
      }
      .cute-area-city:hover {
        background-color: $color-master-7;
        color: $color-master-1;
      }
      .cute-area-city.selected,
      .cute-area-city.selected.hover {
        background: $color-master-1;
        color: $color-white;
      }
    }
  }
}
</style>
