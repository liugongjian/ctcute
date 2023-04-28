<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-07 08:08:18
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-26 14:28:18
 * @Description: echarts的demo页，用于展示自定义的echarts主题效果
-->

<template>
  <div class="echarts-demo">
    <el-card class="simple-form">
      <el-form>
        <el-form-item label="布局方式">
          <el-select v-model="theme">
            <el-option value="cuted-light" label="cuted-light"></el-option>
            <el-option value="cuted-dark" label="cuted-dark"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-row :gutter="22">
      <el-col :span="12">
        <pie-demo :theme="theme"></pie-demo>
      </el-col>
      <el-col :span="12">
        <line-demo :theme="theme"></line-demo>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="12">
        <bar-demo :theme="theme"></bar-demo>
      </el-col>
      <el-col :span="12">
        <line-stack-demo :theme="theme"></line-stack-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <bar-line-demo :theme="theme"></bar-line-demo>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="12">
        <stack-area-demo :theme="theme"></stack-area-demo>
      </el-col>
      <el-col :span="12">
        <gradiant-line-demo :theme="theme"></gradiant-line-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <animation-func-demo :theme="theme"></animation-func-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <funnel-demo :theme="theme"></funnel-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <treemap-demo :theme="theme"></treemap-demo>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <map-demo :theme="theme"></map-demo>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as echarts from 'echarts'
import themeLight from '@cutedesign/ui/echarts-theme/cuted-light.json'
import themeDark from '@cutedesign/ui/echarts-theme/cuted-dark.json'
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

echarts.registerTheme('cuted-light', themeLight)
echarts.registerTheme('cuted-dark', themeDark)

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
export default class extends Vue {
  private theme = 'cuted-light'
}
</script>

<style lang="scss" scoped>
.echarts-demo {
  overflow: hidden;
  .simple-form {
    margin-bottom: $margin-5x;
  }
}

.el-row {
  margin-bottom: $margin-5x;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
