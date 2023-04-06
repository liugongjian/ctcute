<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-01-11 17:49:28
 * @Description:
-->
<template>
  <el-card v-loading="loading" class="chart-card" :bordered="false" :shadow="shadow">
    <div class="chart-card-icon-warp" :style="'background-color:rgb(' + background + ',0.2)'">
      <div class="chart-card-icon" :style="'background-color:rgb(' + background + ')'">
        <svg-icon :name="icon" :color="svgColor" width="28" height="28" />
      </div>
    </div>
    <div class="chart-card-cont-warp">
      <h3>{{ total }}</h3>
      <p>{{ title }}</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CuteChartCard',
})
export default class extends Vue {
  @Prop({ type: String, default: '--' }) title?: '--' // 标题
  @Prop({ type: String, default: 'sever' }) icon?: 'sever' // 图标
  @Prop({ type: [Number, String], default: '--' }) total?: '--' // 数量
  @Prop({ type: String, default: '139, 178, 249' }) background?: '139, 178, 249' // 背景颜色 如果是rgb(139, 178, 249) 只取中间的 139, 178, 249
  @Prop({ type: String, default: '#FFF' }) svgColor?: '#FFF' // 图标颜色
  @Prop({ type: Boolean, default: false }) loading?: false // 加载状态
  @Prop({ type: String, default: 'never' }) shadow?: 'never' // 卡片是否有阴影
}
</script>

<style lang="scss" scoped>
.chart-card {
  display: flex;
  border-radius: $border-radius;

  ::v-deep .el-card__body {
    display: flex;
  }

  .chart-card-icon-warp {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 29px;

    .chart-card-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .chart-card-cont-warp {
    width: 240px;

    h3 {
      font-family: bahnschrift;
      font-size: 30px;
      line-height: 42px;
      margin: 0;
      color: $neutral-10;
    }

    p {
      font-size: $text-size-md;
      color: $neutral-9;
      line-height: 28px;
      margin: 0;
    }
  }
}
</style>
