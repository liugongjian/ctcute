<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-07 08:08:18
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-14 17:46:07
 * @Description: echarts的demo页，用于展示自定义的echarts主题效果
-->

<template>
  <div class="echarts-demo">
    <el-row :gutter="22">
      <el-col :span="12">
        <pie-demo></pie-demo>
      </el-col>
      <el-col :span="12">
        <line-demo></line-demo>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="12">
        <bar-demo></bar-demo>
      </el-col>
      <el-col :span="12">
        <line-stack-demo></line-stack-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <bar-line-demo></bar-line-demo>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="12">
        <stack-area-demo></stack-area-demo>
      </el-col>
      <el-col :span="12">
        <gradiant-line-demo></gradiant-line-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <animation-func-demo></animation-func-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <funnel-demo></funnel-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <treemap-demo></treemap-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <map-demo></map-demo>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PieDemo from './PieDemo.vue'
import LineDemo from './LineDemo.vue'
import BarDemo from './BarDemo.vue'
import LineStackDemo from './LineStackDemo.vue'
import BarLineDemo from './BarLineDemo.vue'
import StackAreaDemo from './StackAreaDemo.vue'
import GradiantLineDemo from './GradiantLineDemo.vue'
import AnimationFuncDemo from './AnimationFuncDemo.vue'
import FunnelDemo from './FunnelDemo.vue'
import TreemapDemo from './TreemapDemo.vue'
import MapDemo from './MapDemo.vue'

@Component({
  name: 'EchartsDemo',
  components: {
    PieDemo,
    LineDemo,
    BarDemo,
    LineStackDemo,
    BarLineDemo,
    StackAreaDemo,
    GradiantLineDemo,
    AnimationFuncDemo,
    FunnelDemo,
    TreemapDemo,
    MapDemo,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.echarts-demo {
  overflow: hidden;
}

.el-row {
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
