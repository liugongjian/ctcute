<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-17 20:57:52
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 13:59:00
 * @Description:
-->
<template>
  <div class="sub-slider">
    <!-- <div>
      <el-select v-model="value" placeholder="请选择" style="width: 100px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div> -->
    <el-row>
      <el-col>
        <el-slider range :min="5" :max="60" :marks="{ 5: '5岁', 60: '60岁' }"> </el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-slider :marks="{ 0: '0', 60: '60' }" :min="0" :max="60" :show-tooltip="false" show-input>
        </el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-slider
          :marks="{ 10: '10岁', 20: '20岁', 30: '30岁', 40: '40岁', 50: '50岁' }"
          :min="10"
          :max="50"
          :show-tooltip="false"
        >
        </el-slider>
      </el-col>
    </el-row>
    <el-row tag="h4">
      以下滑动输入条使用了
      <a href="/component/base/cute-slider" target="_blank">CuteSlider</a>
      组件
    </el-row>
    <el-row>
      <cute-slider
        v-model="rangeValue"
        :min="1"
        :max="500"
        :disabled="false"
        :marks="marks"
        :range="true"
        unit="Mbit/s"
        @moveChange="rangeChanges"
        @inputChange="inputChange"
      />
    </el-row>
    <el-row>
      <cute-slider
        v-model="values"
        :min="0"
        :max="500"
        :disabled="true"
        :marks="marks"
        :range="false"
        @moveChange="changes"
      />
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSlider',
})
export default class extends Vue {
  public static title = {
    zh: '滑动输入条',
    en: 'Slider',
  }
  public options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ]
  private value = ''
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private marks = {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
  }
  private values = 200
  private rangeValue = [100, 200]
  private changes(val) {
    console.log(val, 'slider值')
    this.values = val
  }
  private rangeChanges(val) {
    console.log(val, 'slider值')
    this.rangeValue = val
  }
  private inputChange(val) {
    console.log(val, 'input值')
    this.rangeValue = val
  }
}
</script>

<style lang="scss" scoped>
.sub-slider {
  .el-row {
    width: 780px;
    margin: 42px 0 24px;
  }
}
</style>
