<!--
 * @Author: 胡佳婷
 * @Date: 2023-04-10 06:47:55
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-10 08:50:00
 * @Description:
-->
<template>
  <el-card v-loading="loading" class="cute-chart-item" :bordered="false" :shadow="shadow">
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
  name: 'ChartItem',
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
.cute-chart-item {
  .rise {
    color: #ff5b68;
  }

  .decline {
    color: #1fcc9d;
  }

  .el-card__body {
    margin-left: $margin-10;
  }

  .chart-card-icon-warp {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    .chart-card-icon {
      margin-left: -$margin-10;
      margin-right: $margin-10;

      > img {
        width: 100%;
        height: 100%;
      }

      display: flex;
      align-items: center;
    }
  }

  .chart-card-count-warp {
    width: 100%;

    h3 {
      font-family: Helvetica;
      font-size: 28px;
      color: $neutral-10;
      font-weight: $text-weight;
      margin: 0;
    }

    p {
      font-size: $text-size-md;
      margin: 0;
      margin-top: $margin;
    }
  }
}
</style>
