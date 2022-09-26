<template>
  <div class="chart-cont">
    <el-card class="simple-table" shadow="never">
      <div class="chart-title">
        <h2>数据总览</h2>
        <el-date-picker v-model="statusDate" type="daterange" size="mini"></el-date-picker>
      </div>
      <!-- 统计数据 -->
      <el-row :gutter="22">
        <el-col :span="6">
          <cute-chart-item
            :loading="loading"
            :icon="require('./images/1.svg')"
            title="短链触达量"
            total="42,965.00"
            background="139, 178, 249"
            percentage="2.5%"
            :lift="false"
          >
          </cute-chart-item>
        </el-col>
        <el-col :span="6">
          <cute-chart-item
            :loading="loading"
            :icon="require('./images/2.svg')"
            title="短链点击量"
            total="22,412.00"
            background="182, 221, 119"
            percentage="2.5%"
            :lift="true"
          >
          </cute-chart-item>
        </el-col>
        <el-col :span="6">
          <cute-chart-item
            :loading="loading"
            :icon="require('./images/3.svg')"
            title="短链启动量"
            total="18,296.00"
            background="248, 211, 76"
            percentage="2.5%"
            :lift="false"
          >
          </cute-chart-item>
        </el-col>
        <el-col :span="6">
          <cute-chart-item
            :loading="loading"
            :icon="require('./images/4.svg')"
            title="短链安装量"
            total="9,480.00"
            background="248, 211, 76"
            percentage="2.5%"
            :lift="false"
          >
          </cute-chart-item>
        </el-col>
      </el-row>
      <el-row :gutter="22" class="chart-table-box">
        <el-col :span="18">
          <el-card class="chart-card-box" style="height: 462px">
            <div slot="header" class="chart-card-header">
              <h2>今日数据概况</h2>
              <div class="header-time-line">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-input v-model="searchValue" placeholder="请输入内容" prefix-icon="el-icon-search">
                </el-input>
              </div>
              <el-radio-group v-model="radio1">
                <el-radio-button label="昨日"></el-radio-button>
                <el-radio-button label="近7天"></el-radio-button>
                <el-radio-button label="近30天"></el-radio-button>
                <el-radio-button label="近6个月"></el-radio-button>
              </el-radio-group>
            </div>
            <div class="chart-box">
              <div class="chart-select-item">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>

              <CuteChart :option="option8" :height="'353px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="chart-card-box" shadow="never" style="height: 258px; margin-bottom: 20px">
            <div class="chart-box">
              <CuteChart :option="option6" :height="'120px'" :width="'100%'" />
              <CuteChart :option="option7" :height="'120px'" :width="'100%'" />
            </div>
            <div class="chart-img">
              <img src="./images/5.svg" alt="" />
              <img src="./images/6.svg" alt="" />
            </div>
          </el-card>
          <el-card class="chart-card-box" shadow="never" style="height: 184px">
            <div class="chart-box">
              <CuteChart :option="option5" :height="'80px'" :width="'100%'" />
            </div>
            <div class="chart-card-header">
              <h2 class="visits">12,835</h2>
              <p class="access-rate">
                <span>访问率</span>
                <span>
                  <svg-icon name="arrow-up" color="#FF5B68" width="14" height="14" />
                  <span style="color: #ff5b68">2.5</span>
                </span>
              </p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="chart-card-box" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>地区分布概况</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option2" :height="'250px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="chart-card-box" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>短链数据统计</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option3" :height="'250px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="chart-card-box" shadow="never" style="height: 383px">
            <div slot="header" class="chart-card-header">
              <h2>流程状态统计</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option" :height="'300px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="17">
          <el-card class="chart-card-box" shadow="never" style="height: 383px">
            <div slot="header" class="chart-card-header">
              <h2>短链地区访问统计</h2>
              <div>
                <el-select v-model="value" style="width: 117px" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-date-picker
                  v-model="statusDate"
                  type="daterange"
                  size="mini"
                  style="margin-left: 16px"
                ></el-date-picker>
              </div>
            </div>
            <div class="chart-box chart-inner">
              <div class="chart-items">
                <el-tabs v-model="activeName" class="chart-card-tabs">
                  <el-tab-pane label="TOP10城市" name="first"></el-tab-pane>
                  <el-tab-pane label="TOP5省份" name="second"></el-tab-pane>
                </el-tabs>
                <el-table
                  :data="tableDatas"
                  :show-header="false"
                  style="width: 100%; height: 200px; overflow: scroll"
                >
                  <el-table-column type="index" width="40"> </el-table-column>
                  <el-table-column property="city" width="80"> </el-table-column>
                  <el-table-column property="proportion" width="100"> </el-table-column>
                  <el-table-column property="frequency" width="100"> </el-table-column>
                </el-table>
              </div>
              <CuteChart :option="option9" :height="'450px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card class="chart-card-box" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>短信渠道用户排行榜</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option4" :height="'310px'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="14">
          <el-card class="chart-card-box" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>数据列表</h2>
            </div>
            <div class="chart-box">
              <el-tabs value="third" type="card" size="small">
                <el-tab-pane label="默认项" name="second"></el-tab-pane>
                <el-tab-pane label="选中项" name="third"></el-tab-pane>
                <el-tab-pane label="禁用选项" name="fourth" disabled></el-tab-pane>
                <el-tab-pane label="悬停项" name="fifth"></el-tab-pane>
              </el-tabs>
              <div class="sub-table">
                <el-table :data="tableComponentData && tableComponentData.tableData" border height="216px">
                  <el-table-column prop="ip" label="IP地址" width="130px"> </el-table-column>
                  <el-table-column prop="time" label="时间" sortable width="190px"> </el-table-column>
                  <el-table-column prop="label" label="标签" width="150px">
                    <template slot-scope="scope">
                      <el-tag type="info" size="small" style="margin-right: 8px">
                        {{ scope.row.label[0] }}</el-tag
                      >
                      <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column prop="description" label="描述" width="240px">
                    <template slot-scope="scope">
                      <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
                        <span class="text-ellipsis">{{ scope.row.description }}</span>
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column prop="healthy" label="健康状态">
                    <template slot-scope="scope">
                      <div>
                        <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
                        <span>{{ HEALTH[scope.row.healthy] }}</span>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  class="pagination"
                  :current-page="currentPage4"
                  :total="153"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                >
                </el-pagination>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script lang="ts">
import { HEALTH } from '@/dics/simpleTable'
import color from '@cutedesign/theme/css/_variables.scss'
import { getTableComponent } from '@/api/tableComponent'
import * as TableComponent from '@/types/TableComponent'
import { CuteChart, CuteChartItem } from '@cutedesign/chart'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SimpleChart',
  components: {
    CuteChart,
    CuteChartItem,
  },
})
export default class extends Vue {
  private get variables(): any {
    return color
  }
  private HEALTH = HEALTH
  statusDate = ''
  activeName = 'first'
  private currentPage4 = 4
  // 表格数据
  tableData = []
  tableDatas = [
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
    {
      city: '北京',

      proportion: '15%',
      frequency: '3000次',
    },
  ]
  private data = [
    { name: '产品1', value: '730', unit: 'w' },
    { name: '产品2', value: '630', unit: 'w' },
    { name: '产品3', value: '530', unit: 'w' },
    { name: '产品4', value: '430', unit: 'w' },
    { name: '产品5', value: '330', unit: 'w' },
    { name: '产品6', value: '230', unit: 'w' },
    { name: '产品7', value: '130', unit: 'w' },
    { name: '产品8', value: '30', unit: 'w' },
    { name: '产品9', value: '230', unit: 'w' },
    { name: '产品10', value: '150', unit: 'w' },
    { name: '产品11', value: '350', unit: 'w' },
  ]
  private list = [
    { value: 16, name: '正在运行' },
    { value: 40, name: '成功' },
    { value: 5, name: '暂停' },
    { value: 2, name: '失败' },
    { value: 3, name: '停止' },
  ]
  private dataList = [
    {
      name: '北京',
      value: 54,
    },
    {
      name: '上海',
      value: 40,
    },
    {
      name: '重庆',
      value: 75,
    },
    {
      name: '河北',
      value: 13,
    },
    {
      name: '河南',
      value: 83,
    },
    {
      name: '云南',
      value: 11,
    },
    {
      name: '辽宁',
      value: 19,
    },
    {
      name: '黑龙江',
      value: 15,
    },
    {
      name: '湖南',
      value: 69,
    },
    {
      name: '安徽',
      value: 60,
    },
    {
      name: '山东',
      value: 39,
    },
    {
      name: '新疆',
      value: 4,
    },
    {
      name: '江苏',
      value: 31,
    },
    {
      name: '浙江',
      value: 104,
    },
    {
      name: '江西',
      value: 36,
    },
    {
      name: '湖北',
      value: 1052,
    },
    {
      name: '广西',
      value: 33,
    },
    {
      name: '甘肃',
      value: 7,
    },
    {
      name: '山西',
      value: 9,
    },
    {
      name: '内蒙古',
      value: 7,
    },
    {
      name: '陕西',
      value: 22,
    },
    {
      name: '吉林',
      value: 4,
    },
    {
      name: '福建',
      value: 18,
    },
    {
      name: '贵州',
      value: 5,
    },
    {
      name: '广东',
      value: 98,
    },
  ]
  private toolTipData = [
    {
      name: '北京',
      value: [
        { name: '文科', value: 95 },
        { name: '理科', value: 82 },
      ],
    },
    {
      name: '天津',
      value: [
        { name: '文科', value: 22 },
        { name: '理科', value: 20 },
      ],
    },
    {
      name: '河北',
      value: [
        { name: '文科', value: 60 },
        { name: '理科', value: 42 },
      ],
    },
    {
      name: '山西',
      value: [
        { name: '文科', value: 40 },
        { name: '理科', value: 41 },
      ],
    },
    {
      name: '内蒙古',
      value: [
        { name: '文科', value: 23 },
        { name: '理科', value: 24 },
      ],
    },
    {
      name: '辽宁',
      value: [
        { name: '文科', value: 39 },
        { name: '理科', value: 28 },
      ],
    },
    {
      name: '吉林',
      value: [
        { name: '文科', value: 41 },
        { name: '理科', value: 41 },
      ],
    },
    {
      name: '黑龙江',
      value: [
        { name: '文科', value: 35 },
        { name: '理科', value: 31 },
      ],
    },
    {
      name: '上海',
      value: [
        { name: '文科', value: 12 },
        { name: '理科', value: 12 },
      ],
    },
    {
      name: '江苏',
      value: [
        { name: '文科', value: 47 },
        { name: '理科', value: 45 },
      ],
    },
    {
      name: '浙江',
      value: [
        { name: '文科', value: 57 },
        { name: '理科', value: 57 },
      ],
    },
    {
      name: '安徽',
      value: [
        { name: '文科', value: 57 },
        { name: '理科', value: 52 },
      ],
    },
    {
      name: '福建',
      value: [
        { name: '文科', value: 59 },
        { name: '理科', value: 57 },
      ],
    },
    {
      name: '江西',
      value: [
        { name: '文科', value: 49 },
        { name: '理科', value: 42 },
      ],
    },
    {
      name: '山东',
      value: [
        { name: '文科', value: 67 },
        { name: '理科', value: 52 },
      ],
    },
    {
      name: '河南',
      value: [
        { name: '文科', value: 69 },
        { name: '理科', value: 68 },
      ],
    },
    {
      name: '湖北',
      value: [
        { name: '文科', value: 60 },
        { name: '理科', value: 56 },
      ],
    },
    {
      name: '湖南',
      value: [
        { name: '文科', value: 62 },
        { name: '理科', value: 52 },
      ],
    },
    {
      name: '重庆',
      value: [
        { name: '文科', value: 47 },
        { name: '理科', value: 44 },
      ],
    },
    {
      name: '四川',
      value: [
        { name: '文科', value: 65 },
        { name: '理科', value: 60 },
      ],
    },
    {
      name: '贵州',
      value: [
        { name: '文科', value: 32 },
        { name: '理科', value: 30 },
      ],
    },
    {
      name: '云南',
      value: [
        { name: '文科', value: 42 },
        { name: '理科', value: 41 },
      ],
    },
    {
      name: '西藏',
      value: [
        { name: '文科', value: 5 },
        { name: '理科', value: 4 },
      ],
    },
    {
      name: '陕西',
      value: [
        { name: '文科', value: 38 },
        { name: '理科', value: 42 },
      ],
    },
    {
      name: '甘肃',
      value: [
        { name: '文科', value: 28 },
        { name: '理科', value: 28 },
      ],
    },
    {
      name: '青海',
      value: [
        { name: '文科', value: 5 },
        { name: '理科', value: 5 },
      ],
    },
    {
      name: '宁夏',
      value: [
        { name: '文科', value: 10 },
        { name: '理科', value: 8 },
      ],
    },
    {
      name: '新疆',
      value: [
        { name: '文科', value: 36 },
        { name: '理科', value: 31 },
      ],
    },
    {
      name: '广东',
      value: [
        { name: '文科', value: 63 },
        { name: '理科', value: 60 },
      ],
    },
    {
      name: '广西',
      value: [
        { name: '文科', value: 29 },
        { name: '理科', value: 30 },
      ],
    },
    {
      name: '海南',
      value: [
        { name: '文科', value: 8 },
        { name: '理科', value: 6 },
      ],
    },
  ]
  private geoCoordMap = {}
  // 饼图
  private option = {}
  // 线图
  private option2 = {}
  // 柱状图
  private option3 = {}
  // 柱折混合
  private option4 = {}
  private option5 = {}
  private option6 = {}
  private option7 = {}
  private option8 = {}
  private option9 = {}
  private value = ''
  private searchValue = ''
  private radio1 = '近7天'
  private tableComponentData: TableComponent.TableComponentData = null
  // 加载状态
  loading = false
  /**
   * 获取表格数据
   */
  private async getTableComponentData() {
    // 接口
    const res = await getTableComponent()
    this.tableComponentData = res.data
  }
  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  }

  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
  }
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
    this.getTableComponentData()
    const lists = this.list
    // 饼图
    this.option = {
      color: [
        this.variables.chartColor1,
        this.variables.chartColor2,
        this.variables.chartColor3,
        this.variables.chartColor4,
        this.variables.chartColor5,
      ],
      title: {
        text: '22,870',
        subtext: '流程状态数量',
        itemGap: 20,
        textAlign: 'center',
        x: '49%',
        y: '30%',
        textStyle: {
          fontFamily: '微软雅黑',
          fontSize: 28,
          fontWeight: 500,
        },
        subtextStyle: {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: '微软雅黑',
        },
      },
      textStyle: {
        color: this.variables.chartColor11,
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
        top: '76%',

        itemWidth: 30,
        itemGap: 11,
        itemHeight: 10,
        orient: 'vertical',
        formatter: function (name) {
          const { value } = lists.find(item => item.name === name)
          return name + '   ' + value + '                     '
        },
      },
      series: [
        {
          selectedMode: false,
          labelLine: {
            normal: {
              length: 15,
            },
            lineStyle: {
              color: this.variables.chartColor11,
            },
          },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: ['58%', '64%'],
          center: ['50%', '36%'],
          data: this.list,
          itemStyle: {
            normal: {
              label: {
                fontSize: 14, // 字体大小
                color: this.variables.chartColor11,
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
    this.option2 = {
      // color: [
      //   this.variables.chartColor1,
      //   this.variables.chartColor2,
      //   this.variables.chartColor3,
      //   this.variables.chartColor4,
      //   this.variables.chartColor5,
      // ],
      // title: {
      //   itemGap: 10,
      //   textAlign: 'center',
      //   x: '31.4%',
      //   y: '43.5%',
      //   textStyle: {
      //     fontFamily: '微软雅黑',
      //     fontSize: 12,
      //     fontWeight: 400,
      //     color: this.variables.chartColor11,
      //   },
      //   subtextStyle: {
      //     fontSize: 16,
      //     fontWeight: 500,
      //     fontFamily: '微软雅黑',
      //     color: this.variables.chartColor11,
      //   },
      // },
      textStyle: {
        color: this.variables.chartColor11,
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
          color: this.variables.chartColor11, // 字体颜色
        },
        icon: 'circle',
        top: '9%',
        right: '20%',
        itemWidth: 10,
        itemGap: 20,
        itemHeight: 10,
        orient: 'vertical',
      },
      series: [
        {
          selectedMode: false,
          labelLine: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12, // 字体大小
              color: this.variables.chartColor11,
              padding: [5, 10],
              // formatter:  '{b} \n {c} ({d}%)'
              formatter: '{b}  {c}',
              // fontSize: '40',
              // fontWeight: 'bold'
            },
          },
          // labelLine: {
          //   normal: {
          //     length: 2,
          //   },
          //   lineStyle: {
          //     color: this.variables.chartColor11,
          //   },
          // },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: '80%',
          center: ['32%', '50%'],
          data: [
            { value: 40, name: '成功' },
            { value: 16, name: '正在运行' },
            { value: 5, name: '暂停' },
            { value: 2, name: '失败' },
            { value: 3, name: '停止' },
            { value: 13, name: '其他' },
          ],
          itemStyle: {
            normal: {
              label: {
                fontSize: 12, // 字体大小
                color: this.variables.chartColor11,
                show: false,
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

    this.option3 = {
      // legend: {
      //   data: ['Growth', 'Budget 2011', 'Budget 2012'],
      // itemGap: 5
      // },
      grid: {
        top: '15%',
        left: '2%',
        // right: '3%',
        bottom: '15%',
        containLabel: true,
      },
      color: ['#7AD3B7', '#8BB2F9'],

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'cross',
          // crossStyle: {
          //   color: '#999'
          // }
        },
      },
      legend: {
        data: ['短链触达量', '短链点击量'],
        bottom: '0',
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '2022.10.01',
            '2022.10.01',
            '2022.10.01',
            '2022.10.01',
            '2022.10.01',
            '2022.10.01',
            '2022.10.01',
          ],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',
        },
      ],
      series: [
        {
          name: '短链触达量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
          barWidth: 16,
          nameTextStyle: {
            verticalAlign: 'bottom',
            // fontSize: 12,
            // color: '#999999',
            // name 位置
            // padding: [10, 0, 0, 0]
          },
        },
        {
          name: '短链点击量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
          barWidth: 16,
        },
      ],
    }

    this.option4 = {
      tooltip: {
        trigger: 'item',
        borderColor: '#fff',
        backgroundColor: '#fff',
        textStyle: {
          color: '#333',
        },
      },
      // 图表位置
      grid: {
        left: '3%',
        right: '5%',
        bottom: '1%',
        top: '1%',
        // left: '40%',
        // right: '0',
        // bottom: 0,
        // width: '45%'
        containLabel: true,
      },
      // X轴
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        // 不显示X轴刻度线和数字
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: [
        {
          type: 'category',
          data: [
            '短链触达',
            '启动1次',
            '启动2次',
            '启动3次',
            '启动4次',
            '启动5次',
            '启动6次',
            '启动7次',
            '启动8次',
            '启动9次',
            '启动10次',
          ],
          // 升序
          inverse: true,
          // splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          // hover 显示
          triggerEvent: true,
          axisLabel: {
            // y轴文字的配置
            overflow: 'truncate',
            show: true,
            // margin: 15,
            // width: '100',
            // left: '0',
            // 必须使用formatter，配合rich使用
            align: 'left',
            formatter: (value, index) => {
              function getSubStrIncludeChinese(str, length) {
                if (str.length * 2 <= length) {
                  return str
                } else {
                  let currentLength = 0
                  let resStr = ''
                  for (let i = 0; i < str.length; i++) {
                    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                      currentLength += 1
                    } else if (
                      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
                      (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)
                    ) {
                      currentLength += 1.5
                    } else {
                      currentLength += 2
                    }
                    if (currentLength > length) {
                      return resStr + '...'
                    }
                    resStr += str[i]
                    if (currentLength === length) {
                      return resStr + '...'
                    }
                  }
                  return str
                }
              }
              return `{a${index + 1}|${index + 1}}   {b${index + 1}|${getSubStrIncludeChinese(value, 18)}}`
            },
            rich: {
              a1: {
                backgroundColor: '#ED732E',
                color: '#fff',
                width: 14,
                height: 14,
                align: 'center',
                borderRadius: 10,
                padding: [1, 1, 1, 1],
              },
              a2: {
                backgroundColor: '#F19E4B',
                color: '#fff',
                width: 14,
                height: 14,
                align: 'center',
                borderRadius: 10,
                padding: [1, 1, 1, 1],
              },
              a3: {
                backgroundColor: '#F8D34C',
                color: '#fff',
                width: 14,
                height: 14,
                align: 'center',
                borderRadius: 10,
                padding: [1, 1, 1, 1],
              },
            },
            textStyle: {
              color: '#333',
              align: 'left',
              overflow: 'truncate',
              // backgroundColor: '#ccc',
            },
          },
          // key和图间距
          offset: 80,
          // key文字大小
          nameTextStyle: {
            align: 'left',
          },
        },
        {
          data: this.data.map(item => item.value),
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          offset: 20,
          axisLabel: {
            textStyle: {
              color: '#333',
            },
            // formatter: function (v) {
            //   const res = this.data.find(item => item.value === v)
            //   return v + res.unit
            // },
          },
        },
      ],
      series: [
        {
          // 柱状图自动排序，排序自动让Y轴名字跟着数据动
          realtimeSort: true,
          type: 'bar',
          data: this.data.map(item => item.value),
          barGap: '30%',
          barWidth: 9,
          barCategoryGap: '10%',
          smooth: true,
          valueAnimation: true,
          showBackground: true,
          label: {
            // overflow: 'truncate'
          },
          itemStyle: {
            emphasis: {
              barBorderRadius: 5,
            },
            // 颜色样式部分
            normal: {
              barBorderRadius: 2,
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#A4E6D5', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#8BB2F9 ', // 100% 处的颜色
                  },
                ],
                // globalCoord: false // 缺省为 false
              },
            },
          },
        },
        {
          type: 'bar',
          barWidth: 12,
          barGap: '-100%',
          itemStyle: {
            normal: {
              color: '#D0DEEE',
              opacity: 0,
              barBorderRadius: 30,
            },
          },
        },
      ],
    }
    this.option5 = {
      grid: {
        left: '-15%',
        right: '1%',
        bottom: '2%',
        top: '-1%',
        // left: '40%',
        // right: '0',
        // bottom: 0,
        // width: '45%'
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: [820, 192, 901, 294, 1290, 1330, 320],
          type: 'line',
          symbol: 'none',
          smooth: true,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#A4E6D5', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#8BB2F9 ', // 100% 处的颜色
              },
            ],
            // globalCoord: false // 缺省为 false
          },
        },
      ],
    }
    this.option6 = {
      color: ['#8BB2F9', 'rgba(58,114,255,0.10)'],
      series: [
        {
          type: 'pie',
          center: ['40%', '50%'], // 饼图的圆心坐标
          radius: ['70%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,

          label: {
            //  饼图图形上的文本标签

            normal: {
              // normal 是图形在默认状态下的样式
              textShadowOffsetX: 20,
              show: true,
              position: 'right',
              // fontWeight: 'bold',
              formatter: ' {a|{d}%}\n{b|{b}}', // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              rich: {
                a: {
                  color: '#333',
                  padding: [-25, 3, 1, -8],
                  fontSize: 26,
                },
                b: {
                  color: '#666',
                  // padding: [0, 10],
                  // fontSize: 20
                },
              },
            },
          },

          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 60,
              name: '命中率',
              label: {
                normal: {
                  show: true,
                  padding: [-25, 3, 1, -6],
                },
              },
            },
            {
              value: 40,
              name: '正常',
              label: {
                normal: {
                  show: false,
                },
              },
            },
          ],
        },
      ],
    }
    this.option7 = {
      color: ['#7AD4B7', 'rgba(58,114,255,0.10)'],
      series: [
        {
          type: 'pie',
          center: ['40%', '50%'], // 饼图的圆心坐标
          radius: ['70%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,

          label: {
            //  饼图图形上的文本标签

            normal: {
              // normal 是图形在默认状态下的样式
              textShadowOffsetX: 20,
              show: true,
              position: 'right',
              // fontWeight: 'bold',
              formatter: ' {a|{d}%}\n{b|{b}}', // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              rich: {
                a: {
                  color: '#333',
                  padding: [-25, 3, 1, -8],
                  fontSize: 26,
                },
                b: {
                  color: '#666',
                  // padding: [0, 10],
                  // fontSize: 20
                },
              },
            },
          },

          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 68,
              name: '成交率',
              label: {
                normal: {
                  show: true,
                  padding: [-25, 3, 1, 1],
                },
              },
            },
            {
              value: 32,
              name: '正常',
              label: {
                normal: {
                  show: false,
                },
              },
            },
          ],
        },
      ],
    }
    this.option8 = {
      // title: {
      //   text: 'Stacked Line'
      // },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['安装量', '启动量', '短链点击量', '短链触达量'],
        bottom: '1',
      },
      grid: {
        left: '1',
        right: '1%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '安装量',
          stack: 'Total',
          type: 'line',
          showSymbol: false,
          color: '#F19E4B',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#F19E4B', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#fff ', // 100% 处的颜色
                },
              ],
              // globalCoord: false // 缺省为 false
            },
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '启动量',
          stack: 'Total',
          type: 'line',
          showSymbol: false,
          smooth: true,
          color: '#8BB2F9',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#8BB2F9', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#fff ', // 100% 处的颜色
                },
              ],
              // globalCoord: false // 缺省为 false
            },
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '短链点击量',
          stack: 'Total',
          type: 'line',
          showSymbol: false,
          smooth: true,
          color: '#7AD3B7',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#7AD3B7', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#fff ', // 100% 处的颜色
                },
              ],
              // globalCoord: false // 缺省为 false
            },
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '短链触达量',
          stack: 'Total',
          type: 'line',
          showSymbol: false,
          color: '#2463E9',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#2463E9', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#fff ', // 100% 处的颜色
                },
              ],
              // globalCoord: false // 缺省为 false
            },
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    }
    this.option9 = {
      grid: {
        left: '1',
        right: '1%',
        bottom: '15%',
        containLabel: true,
      },
      // 热力地图
      visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 140,
        top: 130,
        // text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
          color: ['#EEF2FA', '#497DFF'],
        },
      },
      geo: {
        //
        map: 'china', //此处的china就是之前博客中全局注册的china地图
        itemStyle: {
          // 定义样式
          normal: {
            // 普通状态下的样式
            areaColor: '#EEF2FA', //地图块的颜色
          },
          emphasis: {
            // 高亮状态下的样式
            areaColor: '#EEF2FA',
          },
        },
      },

      series: [
        {
          name: '在地图中显示散点图',
          type: 'scatter',
          coordinateSystem: 'geo', //设置坐标系为 geo
          itemStyle: {
            normal: {
              color: '#FA8334',
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke',
              },
              hoverAnimation: true,

              label: {
                show: true,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#000',
                },
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          label: {
            show: true,
          },

          data: [
            //这里放标注点的坐标[{name: "北京",value: [116.46, 39.92]}]
            { name: '北京', value: [116.41995, 40.18994] },
            { name: '郑州', value: [113.665412, 34.757975] },
            { name: '昆明', value: [102.81844, 24.906231] },
            { name: '广州', value: [113.26453, 23.155008] },
          ],
        },
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#000',
              },
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#bcc5ee',
              borderColor: '#3B5077',
            },
            emphasis: {
              areaColor: '#bcc5ee',
            },
          },
          animation: false,
          data: this.dataList,
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-select-item {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ::v-deep .el-select {
    width: 90px;
  }
}
.chart-img {
  position: absolute;
  > img:nth-child(1) {
    width: 23px;
    height: 23px;
    position: relative;
    left: 122px;
    top: -193px;
  }
  > img:nth-child(2) {
    width: 23px;
    height: 23px;
    position: relative;
    left: 99px;
    top: -74px;
  }
}
.chart-inner {
  display: flex;
  justify-content: space-between;
}
.text-ellipsis {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  width: 100%;
}
.sub-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;

  &--1 {
    background: $color-status-success;
  }

  &--2 {
    background: $color-status-warning;
  }

  &--3 {
    background: $color-status-danger;
  }

  &--4 {
    background: $color-status-info;
  }

  &--5 {
    background: $disabled-color;
  }
}
.chart-card-tabs {
}
.chart-items .el-table {
  margin: 0 !important;
}
.chart-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 60px;
}
::v-deep .el-range-editor {
  width: 243px;
  height: 32px;
}
::v-deep .el-card {
  border-radius: 14px;
}
.chart-table-box {
  ::v-deep .el-col {
    margin-top: 22px;
  }
}

.chart-cont .el-card {
  h2 {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    font-weight: 500;
  }
  padding: 10px;
  background: none;

  & ::v-deep > .el-card__body {
    padding: 0;

    .el-card {
      background: $color-white;

      .el-card__body {
        padding: 10px;
      }
    }
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
    justify-content: space-between;
    .header-time-line {
      display: flex;
      align-items: center;
      margin-left: 200px;
    }
    // height: 52px;
    .visits {
      font-family: Helvetica;
      font-size: 26px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 400;
      margin: 0;
      margin-top: -30px;
    }
    .access-rate {
      position: relative;
      top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      right: 58px;
    }
  }
}
</style>
