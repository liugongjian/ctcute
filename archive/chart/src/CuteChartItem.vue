<template>
  <el-card v-loading="loading" class="chart-card" :bordered="false" :shadow="shadow">
    <div class="chart-card-icon-warp">
      <div class="chart-card-icon">
        <img :src="icon" alt="" />
      </div>
      <p :class="lift ? 'rise' : 'decline'">
        <svg-icon
          :name="lift ? 'arrow-up' : 'arrow-down'"
          :color="lift ? '#FF5B68' : '#1FCC9D'"
          width="14"
          height="14"
        />{{ percentage }}
      </p>
    </div>
    <div class="chart-card-count-warp">
      <h3>{{ total }}</h3>
      <p>{{ title }} <svg-icon name="question-circle-fill" color="#999" width="14" height="14" /></p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CuteChartItem',
})
export default class extends Vue {
  @Prop({ type: String, default: '' }) percentage?: ''
  @Prop({ type: Boolean, default: true }) lift?: true
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
// box-shadow: 0 2px 8px 0 $shadow-table-card;
.chart-card {
  .rise {
    color: #ff5b68;
  }
  .decline {
    color: #1fcc9d;
  }

  ::v-deep .el-card__body {
    margin-left: 10px;
  }

  .chart-card-icon-warp {
    width: 100%;
    height: 40px;
    // border-radius: 50%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    // margin-right: 29px;

    .chart-card-icon {
      // border-radius: 50%;
      margin-left: -10px;
      margin-right: 10px;
      > img {
        width: 100%;
        height: 100%;
      }
      display: flex;
      align-items: center;
      // justify-content: center;
    }
  }

  .chart-card-count-warp {
    width: 100%;
    // margin-top: 10px;
    h3 {
      font-family: Helvetica;
      font-size: 28px;
      color: #333333;
      font-weight: 400;
      margin: 0;
    }

    p {
      font-size: 14px;

      // color: $color-grey-13;
      // line-height: 28px;
      margin: 0;
      margin-top: 3px;
    }
  }
}
</style>
