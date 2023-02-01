<!--
 * @Author: 
 * @Date:
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-02-01 09:37:27
 * @Description: 首页
-->
<template>
  <div class="dashboard">
    <div class="simple-table" shadow="never">
      <div class="chart-title">
        <h2>数据总览</h2>
        <el-date-picker v-model="overviewDate" type="daterange" size="mini"></el-date-picker>
      </div>
      <!-- 统计数据 -->
      <el-row :gutter="20" class="header">
        <el-col :span="6">
          <cute-chart-item
            :loading="loading"
            :icon="iconReach"
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
            :icon="iconClick"
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
            :icon="iconStartUp"
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
            :icon="iconInstall"
            title="短链安装量"
            total="9,480.00"
            background="248, 211, 76"
            percentage="2.5%"
            :lift="false"
          >
          </cute-chart-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="chart-table-box">
        <el-col :span="18">
          <el-card class="chart-card-box chart-card-view" shadow="never">
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
                <el-input v-model="searchValue" placeholder="请搜索短链名称" prefix-icon="el-icon-search">
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
              <CuteChart :option="option8" :height="'100%'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="chart-card-box annular" shadow="never">
            <div class="chart-box-container">
              <CuteChart :option="option6" :height="'138px'" :width="'100%'" />
              <img src="./Images/icon-hit.svg" alt="" />
            </div>
            <div class="chart-box-container">
              <CuteChart :option="option7" :height="'138px'" :width="'100%'" />
              <img src="./Images/icon-deal.svg" alt="" />
            </div>
          </el-card>
          <el-card class="chart-card-box annular line visit-box" shadow="never">
            <div class="chart-box">
              <CuteChart :option="option5" :height="'100px'" :width="'100%'" />
            </div>
            <div class="visit-data">
              <h2 class="visits">12,835</h2>
              <p class="access-rate">
                <span>访问率</span>
                <span>
                  <svg-icon name="arrow-up" color="#FF5B68" width="14" height="14" />
                  <span class="increase">2.5%</span>
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
        <el-col :span="6">
          <el-card class="chart-card-box process" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>流程状态统计</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option" :height="'100%'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="18">
          <el-card class="chart-card-box map" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>短链地区访问统计</h2>
              <div class="map_select">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-date-picker v-model="shortChainDate" type="daterange" size="mini"></el-date-picker>
              </div>
            </div>
            <div class="chart-box chart-inner">
              <div class="chart-items">
                <el-tabs v-model="activeName" class="chart-card-tabs">
                  <el-tab-pane label="TOP10城市" name="first"></el-tab-pane>
                  <el-tab-pane label="TOP5省份" name="second"></el-tab-pane>
                </el-tabs>
                <el-table :data="tableDatas" :show-header="false">
                  <el-table-column type="index" width="40"> </el-table-column>
                  <el-table-column property="city" width="80"> </el-table-column>
                  <el-table-column property="proportion" width="100"> </el-table-column>
                  <el-table-column property="frequency" width="100"> </el-table-column>
                </el-table>
              </div>
              <CuteChart :option="option9" :height="'100%'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="10" style="margin-bottom: 22px">
          <el-card class="chart-card-box message" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>短信渠道用户排行榜</h2>
            </div>
            <div class="chart-box chart-user">
              <CuteChart :option="option4" :width="'100%'" height="440px" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="14" style="margin-bottom: 22px">
          <el-card class="chart-card-box table" shadow="never">
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
                <el-table
                  :data="tableComponentData && tableComponentData.tableData"
                  border
                  height="calc(100% - 40px)"
                >
                  <el-table-column prop="ip" label="IP地址" width="130px"> </el-table-column>
                  <el-table-column prop="time" label="时间" sortable width="140px"> </el-table-column>
                  <el-table-column prop="label" label="标签" width="150px">
                    <template slot-scope="scope">
                      <el-tag type="info" size="small"> {{ scope.row.label[0] }}</el-tag>
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
    </div>
  </div>
</template>

<script lang="ts">
import { HEALTH } from '@/dics/simpleTable'
import { formatDatetime } from '@/utils/date'
import color from '@cutedesign/theme/css/_variables.scss'
import { getTableComponent } from '@/api/tableComponent'
import * as TableComponent from '@/types/TableComponent'
import { CuteChart, CuteChartItem } from '@cutedesign/chart'
import { Component, Vue } from 'vue-property-decorator'
import iconReach from './Images/icon-reach.svg'
import iconClick from './Images/icon-click.svg'
import iconStartUp from './Images/icon-startUp.svg'
import iconInstall from './Images/icon-install.svg'

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
  private iconReach = iconReach
  private iconClick = iconClick
  private iconStartUp = iconStartUp
  private iconInstall = iconInstall
  private HEALTH = HEALTH
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
    { name: '产品8', value: '110', unit: 'w' },
    { name: '产品9', value: '100', unit: 'w' },
    { name: '产品10', value: '70', unit: 'w' },
  ]
  private list = [
    { value: 40, name: '成功' },
    { value: 16, name: '正在运行' },
    { value: 5, name: '暂停' },
    { value: 2, name: '失败' },
    // { value: 3, name: '停止' },
  ]
  private dataList = [
    {
      name: '北京市',
      value: 54,
    },
    {
      name: '上海市',
      value: 40,
    },
    {
      name: '重庆市',
      value: 75,
    },
    {
      name: '河北省',
      value: 13,
    },
    {
      name: '河南省',
      value: 83,
    },
    {
      name: '云南省',
      value: 11,
    },
    {
      name: '辽宁省',
      value: 19,
    },
    {
      name: '黑龙江省',
      value: 15,
    },
    {
      name: '湖南省',
      value: 69,
    },
    {
      name: '安徽省',
      value: 60,
    },
    {
      name: '山东省',
      value: 39,
    },
    {
      name: '新疆维吾尔自治区',
      value: 4,
    },
    {
      name: '江苏省',
      value: 31,
    },
    {
      name: '浙江省',
      value: 104,
    },
    {
      name: '江西省',
      value: 36,
    },
    {
      name: '湖北省',
      value: 102,
    },
    {
      name: '广西壮族自治区',
      value: 33,
    },
    {
      name: '甘肃省',
      value: 7,
    },
    {
      name: '山西省',
      value: 9,
    },
    {
      name: '内蒙古',
      value: 7,
    },
    {
      name: '陕西省',
      value: 22,
    },
    {
      name: '吉林省',
      value: 4,
    },
    {
      name: '福建省',
      value: 18,
    },
    {
      name: '贵州省',
      value: 5,
    },
    {
      name: '广东省',
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
  private options = [
    {
      value: '全部',
      name: '全部',
    },
  ]
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
  private formatDatetime = formatDatetime
  private overviewDate = [formatDatetime(new Date(), 'yyyy-MM-dd'), formatDatetime(new Date(), 'yyyy-MM-dd')]
  private shortChainDate = [
    formatDatetime(new Date(), 'yyyy-MM-dd'),
    formatDatetime(new Date(), 'yyyy-MM-dd'),
  ]
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
  mounted() {
    console.log(this.variables)
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
        this.variables.chartColorH1,
        this.variables.chartColor2,
        this.variables.chartColor3,
        this.variables.chartColor4,
        this.variables.chartColor5,
        this.variables.chartColor6,
        this.variables.chartColor7,
      ],
      title: {
        text: '22,870',
        subtext: '流程状态数量',
        itemGap: 20,
        textAlign: 'center',
        x: '49%',
        y: '30%',
        textStyle: {
          fontFamily: 'bahnschrift',
          fontSize: 26,
          fontWeight: 400,
        },
        subtextStyle: {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: 'PingFangSC-Regular',
        },
      },
      textStyle: {
        color: this.variables.colorGrey1,
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
          height: 30,
          lineHeight: 30,
          backgroundColor: 'transparent', // 文字块背景色，一定要加上，否则对齐不会生效
          rich: {
            a: {
              width: 70,
            },
          },
        },
        icon: 'circle',
        bottom: '10',
        itemWidth: 30,
        itemGap: 0,
        itemHeight: 10,
        orient: 'horizontal',
        formatter: function (name) {
          const { value } = lists.find(item => item.name === name)
          // return name + '   ' + value + ''
          return '{a|' + name + '   ' + value + '}      '
        },
      },
      series: [
        {
          // selectedMode: false,
          labelLine: {
            length: 15,
            lineStyle: {
              color: this.variables.colorGrey1,
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12, // 字体大小
              color: this.variables.colorGrey1,
              padding: [5, 10],
              formatter: '{b}  {c}',
            },
          },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: ['80px', '90px'],
          center: ['50%', '36%'],
          data: this.list,
          itemStyle: {
            normal: {
              label: {
                fontSize: 14, // 字体大小
                color: this.variables.colorGrey1,
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
    // 线图
    this.option2 = {
      color: [
        this.variables.chartColorH1,
        this.variables.chartColor2,
        this.variables.chartColor3,
        this.variables.chartColor4,
        this.variables.chartColor5,
        this.variables.chartColor6,
        this.variables.chartColor7,
      ],
      textStyle: {
        color: this.variables.colorGrey1,
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
          color: this.variables.colorGrey1, // 字体颜色
        },
        icon: 'circle',
        top: '8%',
        right: '15%',
        bottom: '15%',
        itemWidth: 10,
        itemGap: 30,
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
              color: this.variables.colorGrey1,
              padding: [5, 10],
              formatter: '{b}  {c}',
            },
          },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: '80%',
          center: ['32%', '50%'],
          data: [
            { value: 40, name: '北京' },
            { value: 16, name: '重庆' },
            { value: 5, name: '成都' },
            { value: 2, name: '苏州' },
            { value: 3, name: '杭州' },
            { value: 13, name: '南京' },
            { value: 13, name: '广州' },
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
      color: [this.variables.chartColor10, this.variables.chartColor1],

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'cross',
          // crossStyle: {
          //   color: 'this.variables.color-grey-4'
          // }
        },
      },
      legend: {
        data: ['短链触达量', '短链点击量'],
        bottom: '0',
        icon: 'rest',
        itemWidth: 10,
        itemHeight: 10,
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
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: this.variables.colorGrey4,
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',
          axisLine: {
            show: true,
            lineStyle: {
              color: this.variables.colorGrey4,
            },
          },
          splitLine: {
            //网格线
            lineStyle: {
              type: 'dashed', //设置网格线类型 dotted：虚线 solid:实线
            },
          },
        },
      ],
      series: [
        {
          name: '短链触达量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
          barWidth: 12,
          nameTextStyle: {
            verticalAlign: 'bottom',
          },
        },
        {
          name: '短链点击量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
          barWidth: 12,
        },
      ],
    }
    this.option4 = {
      tooltip: {
        trigger: 'item',
        borderColor: this.variables.colorWhite,
        backgroundColor: this.variables.colorWhite,
        textStyle: {
          color: this.variables.colorGrey1,
        },
      },
      // 图表位置
      grid: {
        left: '1%',
        right: '10%',
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
              if (index < 3) {
                return `{a${index + 1}|${index + 1}}   {b${index + 1}|${getSubStrIncludeChinese(value, 10)}}`
              } else {
                return `{b|${index + 1}}   {b${index + 1}|${getSubStrIncludeChinese(value, 10)}}`
              }
            },
            rich: {
              a1: {
                backgroundColor: this.variables.chartColor8,
                color: this.variables.colorWhite,
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 20,
                padding: [1, 1, 1, 1],
              },
              a2: {
                backgroundColor: this.variables.chartColor4,
                color: this.variables.colorWhite,
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 20,
                padding: [1, 1, 1, 1],
              },
              a3: {
                backgroundColor: this.variables.chartColor3,
                color: this.variables.colorWhite,
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 20,
                padding: [1, 1, 1, 1],
              },
              b: {
                backgroundColor: this.variables.colorGrey8,
                color: this.variables.colorGrey0,
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 20,
                padding: [1, 1, 1, 1],
              },
            },
            textStyle: {
              color: this.variables.colorGrey1,
              align: 'left',
              overflow: 'truncate',
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
              color: this.variables.colorGrey1,
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
          emphasis: {
            barBorderRadius: 5,
          },
          itemStyle: {
            // 颜色样式部分
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
                  color: this.variables.chartColor1, // 100% 处的颜色
                },
              ],
              // globalCoord: false // 缺省为 false
            },
          },
        },
        {
          type: 'bar',
          barWidth: 12,
          barGap: '-100%',
          itemStyle: {
            color: this.variables.colorGrey6,
            opacity: 0,
            barBorderRadius: 30,
          },
        },
      ],
      // dataZoom: [
      //   {
      //     type: 'slider',
      //     yAxisIndex: [0],
      //     // top: 60,
      //     // 数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%
      //     // 也可以用 startValue设置起始值
      //     start: 1,
      //     end: 100,
      //     width: 6,
      //     maxValueSpan: 6, // 显示数据的条数(默认显示10个，注意：从 0 开始计算)
      //     show: true, // 是否显示Y轴滚动条(this.departmentsList换成自己的数据)
      //     // 组件的背景颜色
      //     // left: 650, //左边的距离
      //     borderRadius: 50, //滚动条圆角
      //     // borderColor: 'E1E1E1', //滚动条边框颜色
      //     // fillerColor: '#E1E1E1', // 滚动条颜色
      //     // backgroundColor: '#fff', //两边未选中的滑动条区域的颜色
      //     // 是否显示detail，即拖拽时候显示详细数值信息
      //     showDetail: false,
      //     // 控制手柄的尺寸
      //     handleSize: 10,
      //     // 是否在 dataZoom-silder 组件中显示数据阴影。数据阴影可以简单地反应数据走势。
      //     showDataShadow: false,
      //     brushSelect: false, // 滚动条刷选功能
      //   },
      //   {
      //     type: 'inside',
      //     yAxisIndex: [0],
      //     start: 1,
      //     // end: 36,
      //     // 不按任何功能键，鼠标滚轮能触发缩放
      //     zoomOnMouseWheel: false,
      //     // 不按任何功能键，鼠标移动能触发数据窗口平移
      //     moveOnMouseWheel: true,
      //   },
      // ],
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
          lineStyle: {
            width: 4,
          },
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
                color: this.variables.chartColor1, // 100% 处的颜色
              },
            ],
            // globalCoord: false // 缺省为 false
          },
        },
      ],
    }
    this.option6 = {
      color: [this.variables.chartColor1, 'rgba(58,114,255,0.10)'],
      series: [
        {
          type: 'pie',
          center: ['37%', '50%'], // 饼图的圆心坐标
          radius: ['70%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,

          label: {
            //  饼图图形上的文本标签

            textShadowOffsetX: 20,
            show: true,
            position: 'right',
            // fontWeight: 'bold',
            formatter: ' {a|{d}%}\n{b|{b}}', // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
            rich: {
              a: {
                color: this.variables.colorGrey1,
                padding: [-25, 3, 1, -8],
                fontSize: 26,
                fontFamily: 'bahnschrift',
                fontWeight: 'bold',
              },
              b: {
                color: this.variables.colorGrey2,
                fontFamily: 'bahnschrift',
                fontWeight: 'bold',
                padding: [4, 0, 0, -4],
                fontSize: 14,
                // padding: [0, 10],
                // fontSize: 20
              },
            },
          },

          labelLine: {
            show: false,
          },
          textStyle: {
            fontFamily: 'bahnschrift',
            fontWeight: 'bold',
          },
          data: [
            {
              value: 60,
              name: '命中率',
              label: {
                show: true,
                padding: [-25, 3, 1, -6],
              },
            },
            {
              value: 40,
              name: '正常',
              label: {
                show: false,
              },
            },
          ],
        },
      ],
    }
    this.option7 = {
      color: [this.variables.chartColor10, 'rgba(58,114,255,0.10)'],
      series: [
        {
          type: 'pie',
          center: ['37%', '50%'], // 饼图的圆心坐标
          radius: ['70%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,

          label: {
            //  饼图图形上的文本标签

            textShadowOffsetX: 20,
            show: true,
            position: 'right',
            // fontWeight: 'bold',
            formatter: ' {a|{d}%}\n{b|{b}}', // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
            rich: {
              a: {
                color: this.variables.colorGrey1,
                padding: [-25, 3, 1, -8],
                fontSize: 26,
                fontFamily: 'bahnschrift',
              },
              b: {
                color: this.variables.colorGrey1,
                fontFamily: 'PingFangSC-Regular',
                padding: [4, 0, 0, -4],
                fontSize: 14,
                // padding: [0, 10],
                // fontSize: 20
              },
            },
          },

          labelLine: {
            show: false,
          },
          data: [
            {
              value: 68,
              name: '成交率',
              label: {
                show: true,
                padding: [-50, 3, 1, 1],
              },
            },
            {
              value: 32,
              name: '正常',
              label: {
                show: false,
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
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          //网格线
          lineStyle: {
            type: 'dashed', //设置网格线类型 dotted：虚线 solid:实线
          },
        },
      },
      series: [
        {
          name: '安装量',
          stack: 'Total',
          type: 'line',
          showSymbol: false,
          color: this.variables.chartColor4,
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
                  color: this.variables.chartColor4, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: this.variables.colorWhite, // 100% 处的颜色
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
          color: this.variables.chartColor1,
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
                  color: this.variables.chartColor1, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: this.variables.colorWhite, // 100% 处的颜色
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
          color: this.variables.chartColor10,
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
                  color: this.variables.chartColor10, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: this.variables.colorWhite, // 100% 处的颜色
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
          color: this.variables.chartColor1,
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
                  color: this.variables.chartColor1, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: this.variables.colorWhite, // 100% 处的颜色
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
        top: '1',
        left: '1',
        right: '1%',
        bottom: '0',
        containLabel: true,
      },
      // 热力地图
      visualMap: {
        type: 'piecewise',
        orient: 'horizontal',
        itemGap: 0,
        itemSymbol: 'rect',
        show: true,
        min: 0,
        max: 200,
        left: '13%',
        top: '85%',
        text: ['  低', '高  '], // 文本，默认为数值文本
        calculable: false,
        seriesIndex: [1],
        inRange: {
          color: ['#497DFF', '#EEF2FA'],
        },
      },
      geo: {
        //
        zoom: 1.7,
        top: '30%',
        map: 'china', //此处的china就是之前博客中全局注册的china地图
        itemStyle: {
          // 定义样式
          areaColor: '#EEF2FA', //地图块的颜色
          emphasis: {
            // 高亮状态下的样式
            areaColor: this.variables.chartColor3,
          },
        },
      },

      series: [
        {
          name: '在地图中显示散点图',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [
            //这里放标注点的坐标[{name: "北京",value: [116.46, 39.92]}]
            { name: '北京', value: [116.41995, 40.18994] },
            { name: '郑州', value: [113.665412, 34.757975] },
            { name: '昆明', value: [102.81844, 24.906231] },
            { name: '广州', value: [113.26453, 23.155008] },
          ],
          symbolSize: 8,
          encode: {
            value: 2,
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'fill',
            number: 1,
          },
          itemStyle: {
            color: this.variables.colorMaster,
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: true,
          },
          emphasis: {
            scale: true,
          },
          zlevel: 1,
        },
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          showLegendSymbol: false, // 存在legend时显示
          normal: {
            label: {
              show: true,
              formatter: '数值为{b}:{c}',
              emphasis: {
                show: false,
                textStyle: {
                  color: this.variables.colorGrey0,
                },
              },
            },
          },
          roam: true,
          animation: false,
          data: this.dataList,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .el-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 9.1vw;
    &:hover {
      box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
        0 12px 48px 16px rgba(0, 0, 0, 0.03);
    }

    ::v-deep &__body {
      .decline {
        font-weight: 600;

        svg {
          margin-top: 1px;
          margin-right: 3px;
        }
      }
      .rise {
        font-weight: 600;
        svg {
          margin-top: 1px;
          margin-right: 3px;
        }
      }
      .chart-card-count-warp {
        h3 {
          padding: 4px 0;
          font-family: 'bahnschrift';
          font-weight: bold;
        }
      }
    }
  }
}

.chart-select-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  width: 100%;
  ::v-deep .el-select {
    width: 90px;
  }
}
.chart-img {
  position: absolute;
  > img:nth-child(1) {
    position: relative;
    top: -193px;
    left: 122px;
    width: 23px;
    height: 23px;
  }
  > img:nth-child(2) {
    position: relative;
    top: -74px;
    left: 99px;
    width: 23px;
    height: 23px;
  }
}
.chart-inner {
  display: flex;
  justify-content: space-between;
  ::v-deep .el-table td.el-table__cell div {
    font-size: 14px;
  }
  ::v-deep .el-table tr:last-child td.el-table__cell {
    border-bottom: none;
  }
}
.text-ellipsis {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sub-spot {
  display: inline-block;
  margin-right: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;

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
  margin-top: -10px;
  ::v-deep .el-tabs__header {
    margin-bottom: 0;
  }
}
.chart-items .el-table {
  overflow: scroll;
  margin: 0 !important;
  width: 100%;
}
.chart-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    margin-top: 20px;
  }

  .el-col-18 .el-card {
    height: 390px;

    &.chart-card-view {
      height: 519px;
    }
    & ::v-deep > .el-card__body {
      height: calc(100% - 70px);

      .chart-box {
        height: 95%;
      }
    }
  }
}

.simple-table {
  padding: 0 10px !important;

  .chart-title {
    padding: 0 2px 14px;
  }
}

.dashboard .simple-table {
  padding: 10px 0;
  background: none;

  h2 {
    margin: 0;
    width: 150px;
    font-weight: 500;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    line-height: 28px;
  }

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

.annular {
  &:first-child {
    padding-top: 5px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  margin-bottom: 1vw;
  height: 303px;

  ::v-deep .el-card__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
}

.line {
  height: 12.8vw;
}

.process {
  height: 390px;
  ::v-deep .el-card__body {
    padding: 10px 0 0 0 !important;
    height: calc(100% - 50px) !important;

    .chart-box {
      height: 100%;
    }
  }
}

.map {
  height: 390px;
  ::v-deep .el-card__header {
    .el-select {
      width: 107px;
    }

    .chart-card-header {
      .map_select {
        display: flex;
      }
      .el-range-editor {
        margin-left: 16px;
        height: 28px;
      }

      .el-input__inner {
        height: 28px;
      }
      .el-input__suffix {
        height: 28px;
      }
    }
  }
  ::v-deep .el-card__body {
    height: calc(100% - 45px) !important;

    .chart-box {
      height: 100% !important;
    }
  }
}

.message {
  height: 390px;

  ::v-deep .el-card__body {
    .chart-cont {
      height: 21vw !important;
    }
  }
}

::v-deep .el-card__body .chart-table-box .el-card__body .el-tabs__header {
  margin: 0;
}
.table {
  height: 390px;

  ::v-deep .el-card__body {
    height: calc(100% - 32px);

    .chart-box {
      height: calc(100% - 14px);

      .sub-table {
        height: calc(100% - 43px);

        th {
          padding: 0 !important;
        }

        .el-table__cell {
          padding: 7px 0;
        }

        .el-tag {
          margin-right: 8px;
        }
      }
    }

    .el-table {
      margin: 10px 0 10px 0 !important;
      border-bottom: 1px solid $color-grey-6;
    }
  }
}

.chart-card-box {
  ::v-deep .el-card__header {
    padding: 10px 20px;
  }

  ::v-deep .el-card__body {
    .chart-select-item {
      .el-input__inner {
        height: 28px;
      }

      .el-input__suffix {
        height: 28px;
      }
    }
  }

  .chart-card-header {
    display: flex;
    clear: both;
    align-items: center;
    justify-content: space-between;
    .header-time-line {
      display: flex;
      align-items: center;

      ::v-deep .el-input {
        .el-input__inner {
          margin-left: -1px;
          height: 28px;
          border-radius: 0 2px 2px 0;
        }

        .el-input__suffix {
          height: 28px;
        }

        .el-input__icon {
          line-height: 28px;
        }
      }
      ::v-deep .el-select {
        .el-input__inner {
          margin-left: 0;
          border-right: none;
          border-radius: 2px 0 0 2px;
        }
      }
    }
    // height: 52px;
  }

  .visit-data {
    padding: 0 10px;
    .visits {
      margin: 0;
      color: $color-grey-1;
      letter-spacing: 0;
      font-weight: 400;
      font-size: 26px;
      font-family: 'bahnschrift';
      font-weight: bold;
    }
    .access-rate {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
      .increase {
        padding-left: 4px;
        color: '#ff5b68';
        font-weight: 600;
      }
    }
  }

  .chart-box-container {
    position: relative;
    img {
      position: absolute;
      top: 41%;
      left: 37%;
    }
  }
}
.visit-box {
  height: 200px;
}
::v-deep .el-col .chart-card-box.el-card.map .el-card__body {
  padding: 10px 20px;
}
.chart-user {
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
