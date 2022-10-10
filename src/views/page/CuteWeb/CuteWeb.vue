<!--
 * @Author: 
 * @Date:
 * @LastEditors: 邱文琦
 * @LastEditTime: 2022-10-10 17:08:16
 * @Description: 首页
-->
<template>
  <div class="chart-cont">
    <el-card class="simple-table" shadow="never">
      <div class="chart-title">
        <h2>数据总览</h2>
        <el-date-picker v-model="statusDate" type="daterange" size="mini"></el-date-picker>
      </div>
      <!-- 统计数据 -->
      <el-row :gutter="22" class="header">
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
          <el-card class="chart-card-box">
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
              <el-radio-group v-model="radio1" style="display: flex">
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
          <el-card class="chart-card-box annular" shadow="never" style="height: 18.25vw; margin-bottom: 1vw">
            <div class="chart-box-container">
              <CuteChart :option="option6" :height="'8.4vw'" :width="'100%'" />
              <img src="./images/5.svg" alt="" />
            </div>
            <div class="chart-box-container">
              <CuteChart :option="option7" :height="'8.4vw'" :width="'100%'" />
              <img src="./images/6.svg" alt="" />
            </div>
          </el-card>
          <el-card class="chart-card-box annular" shadow="never" style="height: 12.8vw">
            <div class="chart-box">
              <CuteChart :option="option5" :height="'80px'" :width="'100%'" />
            </div>
            <div class="chart-card-header">
              <h2 class="visits">12,835</h2>
              <p class="access-rate">
                <span>访问率</span>
                <span>
                  <svg-icon name="arrow-up" color="#FF5B68" width="14" height="14" />
                  <span style="color: #ff5b68">2.5%</span>
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
          <el-card class="chart-card-box process" shadow="never" style="height: 27vw">
            <div slot="header" class="chart-card-header">
              <h2>流程状态统计</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option" :height="'100%'" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="18">
          <el-card class="chart-card-box map" shadow="never" style="height: 27vw">
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
                  style="width: 100%; height: calc(100% - 60px); overflow: scroll"
                >
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
        <el-col :span="10">
          <el-card class="chart-card-box message" shadow="never">
            <div slot="header" class="chart-card-header">
              <h2>短信渠道用户排行榜</h2>
            </div>
            <div class="chart-box">
              <CuteChart :option="option4" :width="'100%'" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="14">
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
                  <el-table-column prop="healthy" label="健康状态" min-width="90px">
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

<script lang="ts" src="./CuteWeb.ts"></script>

<style lang="scss" scoped>
@import './CuteWeb.scss';
</style>
