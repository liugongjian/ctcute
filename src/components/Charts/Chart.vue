<template>
  <div class="chart-cont" :style="'width:'+width+';height:'+height">
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script lang="ts">

import 'echarts'
import ECharts from 'vue-echarts'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Chart',
  components: {
    VChart: ECharts
  },
})

export default class extends Vue {
  @Prop({ type: Object, default: null }) option?: null // 标题
  @Prop({ type: String, default: '--' }) title?: '--' // 标题
  @Prop({ type: [Number, String], default: '300px' }) width?: '300px' // 高度
  @Prop({ type: [Number, String], default: '200px' }) height?: '200px' // 宽度
}

</script>

<style lang="scss" scoped>
</style>
