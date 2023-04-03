<!--
 * @Author: 孙善鹏
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-03-14 14:49:06
 * @Description: 基础图表
-->
<template>
  <div class="simple-chart">
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
          background="122, 211, 183"
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
    <el-row :gutter="22">
      <el-col :span="12">
        <cute-card-box title="实例状态统计">
          <template #extra>
            <el-date-picker
              v-model="statusDate"
              type="date"
              placeholder="选择日期"
              size="mini"
            ></el-date-picker>
          </template>
          <template #content>
            <CuteChart :option="option" :height="'280px'" :width="'100%'" />
          </template>
        </cute-card-box>
      </el-col>
      <el-col :span="12">
        <cute-card-box title="周期实例完成统计">
          <template #extra>
            <el-tabs v-model="activeName" class="chart-card-tabs">
              <el-tab-pane label="选项一" name="first"></el-tab-pane>
              <el-tab-pane label="选项二" name="second"></el-tab-pane>
            </el-tabs>
          </template>
          <template #content>
            <CuteChart :option="option2" :height="'280px'" :width="'100%'" />
          </template>
        </cute-card-box>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="12">
        <cute-card-box title="流程数量定义统计">
          <template #content>
            <CuteChart :option="option3" :height="'280px'" :width="'100%'" />
          </template>
        </cute-card-box>
      </el-col>
      <el-col :span="12">
        <cute-card-box title="流程数量定义统计">
          <template #extra>
            <el-date-picker
              v-model="value1"
              size="mini"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </template>
          <template #content>
            <el-table :data="tableData" style="width: 100%" stripe class="chart-table" height="280">
              <el-table-column prop="index" label="排行" width="56" align="center">
                <template slot-scope="scope">
                  <span class="solt" :class="'solt' + scope.row.index">{{ scope.row.index }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="工作流名称"></el-table-column>
              <el-table-column prop="time" label="耗时"></el-table-column>
              <el-table-column prop="status" label="状态" width="80" align="center">
                <template slot-scope="scope">
                  <cute-state :type="STATUS[scope.row.status].type">
                    {{ STATUS[scope.row.status].text }}
                  </cute-state>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </cute-card-box>
      </el-col>
    </el-row>
    <el-row :gutter="22">
      <el-col :span="24">
        <cute-card-box title="工作流实例与完成率统计">
          <template #extra>
            <el-tabs v-model="activeName" class="chart-card-tabs">
              <el-tab-pane label="选项一" name="first"></el-tab-pane>
              <el-tab-pane label="选项二" name="second"></el-tab-pane>
            </el-tabs>
          </template>
          <template #content>
            <CuteChart :option="option4" :height="'280px'" :width="'100%'" />
          </template>
        </cute-card-box>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { CuteChartCard, CuteChart } from '@cutedesign/chart'
import { CuteCardBox } from '@cutedesign/ui'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SimpleChart',
  components: {
    CuteChartCard,
    CuteChart,
    CuteCardBox,
  },
})
export default class extends Vue {
  statusDate = ''
  activeName = 'first'
  value1 = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
  // 表格数据
  tableData = []
  // 表格状态字典
  STATUS = {
    1: {
      text: '成功',
      type: 'success',
    },
    2: {
      text: '暂停',
      type: 'warning',
    },
    3: {
      text: '停止',
      type: 'info',
    },
    4: {
      text: '失败',
      type: 'fatal',
    },
  }
  // 饼图
  option = {}
  // 线图
  option2 = {}
  // 柱状图
  option3 = {}
  // 柱折混合
  option4 = {}

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

    // 饼图
    this.option = {
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
        },
        subtextStyle: {
          fontSize: 16,
          fontWeight: 500,
          fontFamily: '微软雅黑',
        },
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
            lineStyle: {},
          },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: ['45%', '64%'],
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
                show: true,
                padding: [5, 10],
                formatter: '{b}  {c}',
              },
              labelLine: { show: true },
            },
          },
        },
      ],
    }

    // 线图
    this.option2 = {
      grid: {
        top: '10%',
        left: '3%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['昨日', '今日'],
        show: true,
        icon: 'circle',
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
        max: 12,
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
          data: [5, 5, 5, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12],
        },
      ],
    }

    // 柱状图
    this.option3 = {
      grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}' + '<br />' + '流程定义数：{c}',
      },
      xAxis: {
        type: 'category',
        data: ['用户 1', '用户 2', '用户 3', '用户 4', '用户 5'],
        nameLocation: 'start',
        verticalAlign: 'bottom',
        name: '用户',
        axisLabel: {
          //x轴文字的配置
          show: true,
        },
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

    const valueFormatter = value => `${value} %`
    // 柱折混合
    this.option4 = {
      grid: {
        left: '2%',
        right: '2%',
        top: '72px',
        bottom: '0',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          const values = params.map(item => {
            const value = item.data.valueFormatter ? item.data.valueFormatter(item.value) : item.value
            return `${item.seriesName}：${value}`
          })
          return `今日 ${params[0].axisValueLabel} <br/> ${values.join('<br/>')}`
        },
      },
      legend: {
        data: ['实例数量', '完成率'],
        show: true,
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
          axisLabel: {
            //x轴文字的配置
            show: true,
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
          name: '实例数量',
          min: 0,
          max: 30,
          interval: 5,
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
        },
      ],
      series: [
        {
          name: '实例数量',
          type: 'bar',
          barWidth: 26,
          data: [30, 28, 25, 24, 21, 20, 16, 15, 13, 12, 10, 7, 3],
        },
        {
          name: '完成率',
          type: 'line',
          symbol: 'none',
          align: 'right',
          yAxisIndex: 1,
          data: [
            { value: 13, valueFormatter },
            { value: 18, valueFormatter },
            { value: 22, valueFormatter },
            { value: 20, valueFormatter },
            { value: 26, valueFormatter },
            { value: 18, valueFormatter },
            { value: 18, valueFormatter },
            { value: 15, valueFormatter },
            { value: 14, valueFormatter },
            { value: 13, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 11, valueFormatter },
          ],
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.simple-chart {
  overflow: hidden;
}

.el-row {
  margin-bottom: $margin-5x;

  &:last-child {
    margin-bottom: 0;
  }
}

.chart-card-tabs {
  ::v-deep .el-tabs__header {
    margin: 0;
    height: 40px;
    margin-top: $margin-3x;
  }

  ::v-deep .el-tabs__nav-wrap:after {
    background: none;
  }
}

.chart-table.el-table {
  margin: 0 !important;

  .solt {
    margin: 0 auto;
    background: $neutral-5;
    display: block;
    color: $neutral-10;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .solt1 {
    background: #8bb2f9;
    color: $color-white;
  }

  .solt2 {
    background: #8bb2f9;
    color: $color-white;
    opacity: 0.8;
  }

  .solt3 {
    background: #8bb2f9;
    color: $color-white;
    opacity: 0.6;
  }
}
</style>
