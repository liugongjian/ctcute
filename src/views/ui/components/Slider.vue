<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-17 20:57:52
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-10-25 16:10:41
 * @Description: 
-->
<template>
  <div class="sub-slider">
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
    <el-row>
      <cute-slider
        :min="1"
        :max="500"
        :disabled="false"
        :marks="marks"
        :range="true"
        unit="Mbit/s"
        @moveChange="changes"
        @inputChange="inputChange"
      />
    </el-row>
    <el-row>
      <cute-slider :min="0" :max="500" :disabled="true" :marks="marks" :range="false" @moveChange="changes" />
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
  private changes(val) {
    console.log(val, 'slider值')
  }
  private inputChange(val) {
    console.log(val, 'input值')
  }

  private value = [4, 8]
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
