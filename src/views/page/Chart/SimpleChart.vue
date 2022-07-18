<!--
 * @Author: 孙善鹏
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-07-18 14:03:58
 * @Description: 基础图表
-->
<template>
  <el-card class="simple-table">
    <!-- 统计数据 -->
    <el-row :gutter="22">
      <el-col :span="8">
        <cute-chart-card
          :loading="loading"
          icon="sever"
          title="数据库总数(个)"
          total="20"
          background="139, 178, 249"
        ></cute-chart-card>
      </el-col>
      <el-col :span="8">
        <cute-chart-card
          :loading="loading"
          icon="sever"
          title="总表数(个)"
          total="295"
          background="182, 221, 119"
        ></cute-chart-card>
      </el-col>
      <el-col :span="8">
        <cute-chart-card
          :loading="loading"
          icon="sever"
          title="总存储量(GB)"
          total="0.67"
          background="248, 211, 76"
        ></cute-chart-card>
      </el-col>
    </el-row>
    <el-row :gutter="22" class="simple-table-box">
      <el-col :span="12">
        <el-card class="chart-card-box">
          <div slot="header" class="chart-card-header">
            <span>实例状态统计</span>
            <el-date-picker v-model="statusDate" type="date" placeholder="选择日期"> </el-date-picker>
          </div>
          <div class="chart-box">
            <CuteChart :option="option" :height="'280px'" :width="'100%'" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card-box">
          <div slot="header" class="chart-card-header">
            <span>周期实例完成统计</span>
            <el-tabs v-model="activeName" class="chart-card-tabs">
              <el-tab-pane label="选项一" name="first"></el-tab-pane>
              <el-tab-pane label="选项二" name="second"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="chart-box">
            <CuteChart :option="option2" :height="'280px'" :width="'100%'" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card-box">
          <div slot="header" class="chart-card-header">
            <span>流程数量定义统计</span>
          </div>
          <div class="chart-box">
            <CuteChart :option="option3" :height="'280px'" :width="'100%'" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card-box">
          <div slot="header" class="chart-card-header">
            <span>流程数量定义统计</span>
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div class="chart-box">
            <el-table :data="tableData" style="width: 100%" stripe class="chart-table" height="250">
              <el-table-column prop="index" label="排行" width="56" align="center">
                <template slot-scope="scope">
                  <span class="solt" :class="'solt' + scope.row.index">{{ scope.row.index }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="工作流名称"></el-table-column>
              <el-table-column prop="time" label="耗时"></el-table-column>
              <el-table-column prop="status" label="状态" width="80" align="center">
                <template slot-scope="scope">
                  <span class="status" :class="'status' + scope.row.status">
                    <span v-if="scope.row.status === 1">停止</span>
                    <span v-else-if="scope.row.status === 2">失败</span>
                    <span v-else-if="scope.row.status === 3">暂停</span>
                    <span v-else>成功</span>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="chart-card-box">
          <div slot="header" class="chart-card-header">
            <span>工作流实例与完成率统计</span>
            <el-tabs v-model="activeName" class="chart-card-tabs">
              <el-tab-pane label="选项一" name="first"></el-tab-pane>
              <el-tab-pane label="选项二" name="second"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="chart-box chart-box-linebar">
            <CuteChart :option="option4" :height="'310px'" :width="'100%'" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
import CuteChartCard from '@/components/CuteCharts/CuteChartCard.vue'
import CuteChart from '@/components/CuteCharts/CuteChart.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'SimpleChart',
  components: {
    CuteChartCard,
    CuteChart,
  },
})
export default class extends Vue {
  statusDate = ''
  activeName = 'first'
  value1 = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
  // 表格数据
  tableData = []

  // 饼图
  option = {
    color: ['#8ECDFB', '#94E794', '#FAAD15', '#F96965', '#B4B4B4'],
    title: {
      text: '流程状态数量',
      subtext: '34567',
      itemGap: 10,
      textAlign: 'center',
      x: '31.4%',
      y: '43.5%',
      textStyle: {
        fontFamily: '微软雅黑',
        fontSize: 12,
        fontWeight: 400,
        color: '#333',
      },
      subtextStyle: {
        fontSize: 16,
        fontWeight: 500,
        fontFamily: '微软雅黑',
        color: '#333',
      },
    },
    textStyle: {
      color: '#333',
    },
    tooltip: {
      trigger: 'none',
      show: true,
      feature: {
        mark: { show: true },
      },
    },
    legend: {
      show: true,
      textStyle: {
        fontSize: 12, // 字体大小
        color: '#333', // 字体颜色
      },
      icon: 'circle',
      top: '20%',
      right: '10%',
      itemWidth: 10,
      itemGap: 20,
      itemHeight: 10,
      orient: 'vertical',
    },
    series: [
      {
        selectedMode: false,
        labelLine: {
          normal: {
            length: 2,
          },
          lineStyle: {
            color: '#333',
          },
        },
        label: {
          // normal: {
          //   show: true,
          //   position: 'center',
          //   color: '#4c4a4a',
          //   formatter: '{active|流程状态数量}' + '\n\r' + '34567',
          //   rich: {
          //     total: {
          //       fontSize: 16,
          //       fontWeight: 500,
          //       fontFamily: '微软雅黑',
          //       color: '#333'
          //     },
          //     active: {
          //       fontFamily: '微软雅黑',
          //       fontSize: 12,
          //       color: '#6c7a89',
          //       lineHeight: 30,
          //     },
          //   }
          // },
        },
        fontSize: 12, // 字体大小
        type: 'pie',
        radius: ['42%', '64%'],
        center: ['32%', '50%'],
        data: [
          { value: 40, name: '成功' },
          { value: 16, name: '正在运行' },
          { value: 5, name: '暂停' },
          { value: 2, name: '失败' },
          { value: 3, name: '停止' },
        ],
        itemStyle: {
          normal: {
            label: {
              fontSize: 12, // 字体大小
              color: '#333',
              show: true,
              padding: [5, 10],
              // formatter:  '{b} \n {c} ({d}%)'
              formatter: '{b}  {c}',
            },
            labelLine: { show: true },
          },
        },
      },
    ],
  }

  // 线图
  option2 = {
    grid: {
      left: '3%',
      right: '2%',
      bottom: '3%',
      containLabel: true,
    },
    color: ['#F7C99C', '#FDF5ED', '#FAAD15', '#F96965', '#B4B4B4'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#333',
        },
      },
    },
    legend: {
      data: ['昨日', '今日'],
      show: true,
      textStyle: {
        fontSize: 12, // 字体大小
        color: '#333', // 字体颜色
      },
      icon: 'circle',
      top: '6%',
      right: '12px',
      itemWidth: 10,
      itemGap: 20,
      itemHeight: 10,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['0', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
        nameLocation: 'start',
        verticalAlign: 'bottom',
        name: '小时',
      },
    ],
    yAxis: {
      type: 'value',
      nameLocation: 'end',
      name: '数量',
      nameTextStyle: {
        padding: [0, 40, 0, 0],
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      max: 12,
      // axisLabel: {
      //   formatter: '{value} %'
      // }
    },
    series: [
      {
        name: '昨日',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        symbol: 'none',
        lineStyle: {
          color: '#F3AD68',
          normal: {
            color: '#F3AD68',
          },
        },
        data: [0, 0, 0, 0, 0, 0, 7, 7, 7, 12, 12, 12, 12],
      },
      {
        name: '今日',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        symbol: 'none',
        lineStyle: {
          color: '#000',
          normal: {
            color: '#F3AD68',
          },
        },
        data: [5, 5, 5, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12],
      },
    ],
  }

  // 柱状图
  option3 = {
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    color: ['#8BB2F9'],
    tooltip: {
      trigger: 'axis',
      color: '#333',
      formatter: '{b}' + '<br />' + '流程定义数：{c}',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      type: 'category',
      data: ['用户 1', '用户 2', '用户 3', '用户 4', '用户 5'],
      nameLocation: 'start',
      verticalAlign: 'bottom',
      name: '用户',
    },
    yAxis: {
      type: 'value',
      nameLocation: 'end',
      name: '数量',
      nameTextStyle: {
        padding: [0, 40, 0, 0],
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        data: [23, 20, 15, 8, 7, 11, 13],
        type: 'bar',

        barWidth: 26,
      },
    ],
  }

  // 柱折混合
  option4 = {
    grid: {
      left: '2%',
      right: '2%',
      top: '72px',
      bottom: '0',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['实际数量', '完成率（%）'],
      show: true,
      textStyle: {
        fontSize: 12, // 字体大小
        color: '#333', // 字体颜色
      },
      icon: 'circle',
      top: '0%',
      right: '9px',
      itemWidth: 10,
      itemGap: 20,
      itemHeight: 10,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '00：00',
          '02：00',
          '04：00',
          '06：00',
          '08：00',
          '10：00',
          '12：00',
          '14：00',
          '16：00',
          '18：00',
          '20：00',
          '22：00',
          '24：00',
        ],
        nameLocation: 'start',
        verticalAlign: 'bottom',
        name: '时间',
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        type: 'value',
        name: '实际数量',
        min: 0,
        max: 30,
        interval: 50,
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        type: 'value',
        name: '完成率（%）',
        min: 0,
        max: 30,
        interval: 5,
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: '实际数量',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: number) {
            return value + ' ml'
          },
        },
        color: ['#AAD85F'],
        barWidth: 26,
        data: [30, 28, 25, 24, 21, 20, 16, 15, 13, 12, 10, 7, 3],
      },
      {
        name: '完成率（%）',
        type: 'line',
        symbol: 'none',
        color: ['#8BB2F9'],
        align: 'right',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: number) {
            return value + ' %'
          },
        },
        data: [13, 18, 22, 20, 26, 18, 15, 14, 13, 16, 16, 16, 11],
      },
    ],
  }

  // 加载状态
  loading = false

  /**
   * 页面Mounted
   */
  created() {
    this.tableData = []
    for (let i = 1; i < 22; i++) {
      const item = {
        index: i,
        name: '工作实例名称最多十字',
        time: 261 - i * 12 + '天23小时59分59秒',
        status: Math.floor(Math.random() * 4) + 1,
      }
      this.tableData.push(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.simple-table-box {
  ::v-deep .el-col {
    margin-top: 22px;
  }
}

.chart-card-box {
  ::v-deep .el-card__header {
    padding: 0 22px;
  }

  .chart-card-header {
    clear: both;
    display: flex;
    align-items: center;

    .chart-card-tabs {
      margin-left: auto;
      margin-bottom: -1px;

      ::v-deep .el-tabs__header {
        margin: 0;
        height: 40px;
        margin-top: 18px;
      }

      ::v-deep .el-tabs__active-bar {
        height: 3px;
      }

      ::v-deep .el-tabs__nav-wrap:after {
        background: none;
      }
    }

    span {
      font-size: 14px;
      color: $color-grey-1;
      line-height: 58px;
      font-weight: bold;
    }

    .el-date-editor {
      margin-left: auto;
    }

    ::v-deep .el-input__prefix {
      top: -2.4px;
    }

    ::v-deep .el-range-separator {
      top: -2.4px;
    }
  }

  .chart-box {
    height: 280px;
  }

  .chart-box-linebar {
    height: 310px;
  }

  .chart-table.el-table {
    .solt {
      margin: 0 auto;
      background: $color-other-2;
      display: block;
      color: $color-grey-2;
      font-size: 12px;
      line-height: 20px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
    }

    .solt1 {
      background: $color-other-3;
      color: $color-white;
    }

    .status {
      padding-left: 18px;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-table-status-success;
        left: 2px;
        top: 50%;
        margin-top: -4px;
      }
    }

    .status1:after {
      background: $color-table-status-info;
    }

    .status2:after {
      background: $color-table-status-danger;
    }

    .status3:after {
      background: $color-table-status-warning;
    }

    .solt2 {
      background: $color-other-3;
      color: $color-white;
      opacity: 0.8;
    }

    .solt3 {
      background: $color-other-3;
      color: $color-white;
      opacity: 0.6;
    }

    ::v-deep th.el-table__cell > .cell {
      color: $color-grey-2;
      font-weight: normal;
    }

    ::v-deep .el-table__header .el-table__cell {
      border-right: 0;
      border-bottom: 0;
      background: $color-grey-11;
    }

    ::v-deep .el-table__header .el-table__cell {
      border-right: 0;
      border-bottom: 0;
      background: $color-grey-11;
      line-height: 40px;
    }

    ::v-deep .el-table__body-wrapper td .el-table__cell {
      padding: 5px 0;
    }

    ::v-deep td.el-table__cell {
      border-bottom: 1px solid $color-grey-12;
      color: $color-grey-1;
    }

    ::-webkit-scrollbar-track-piece {
      background-color: $color-white;
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb:vertical {
      height: 100px;
      background-color: $color-grey-6;
      border-radius: 6px;
      border-radius: 6px;
    }
  }
}
</style>
