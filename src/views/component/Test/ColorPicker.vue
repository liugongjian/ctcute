<!--
 * @Author: ColorPicker
 * @Date: 2023-03-23 13:45:09
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-28 15:30:35
 * @Description: ColorPicker
-->
<template>
  <div>
    <h1>ColorPicker</h1>
    <el-row>
      <h3>{{ $t('componentTest.colorPicker.title1') }}</h3>
      <el-color-picker v-model="colorVal"></el-color-picker>
    </el-row>
    <el-row>
      <h3>{{ $t('componentTest.colorPicker.title2') }}</h3>
      <el-color-picker v-model="colorVal1"></el-color-picker>
    </el-row>
    <el-row>
      <h3>{{ $t('componentTest.colorPicker.title3') }}</h3>
      <el-color-picker v-model="colorVal3" show-alpha></el-color-picker>
    </el-row>
    <el-row>
      <h3>{{ $t('componentTest.colorPicker.title4') }}</h3>
      <el-color-picker v-model="colorVal" :predefine="predefine1" type="predefine"></el-color-picker>
    </el-row>
    <el-row>
      <h3>{{ $t('componentTest.colorPicker.title5') }}</h3>
      <el-color-picker v-model="colorVal2" :predefine="predefine2" :show-alpha="true"></el-color-picker>
    </el-row>
    <el-row class="color-picker-size">
      <h3>{{ $t('componentTest.colorPicker.title6') }}</h3>
      <el-color-picker v-model="colorVal" size="large"></el-color-picker>
      <el-color-picker v-model="colorVal" size="medium"></el-color-picker>
      <el-color-picker v-model="colorVal" size="small"></el-color-picker>
      <el-color-picker v-model="colorVal" size="mini"></el-color-picker>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ColorPicker',
})
export default class extends Vue {
  public colorVal = '#7AC4FA'
  public colorVal1 = null
  public colorVal2 = '#7AC4FA'
  public colorVal3 = 'rgba(19, 206, 102, 0.4)'
  public predefine1 = ['#E02020', '#FA6400', '#0091FF', '#6DD400', '#7AD3B7', '#7AC4FA', '#ED6C68', '#F19E4B']
  public predefine2 = [
    '#8BB2F9',
    '#AAD85F',
    '#F8D34C',
    '#F19E4B',
    '#9C8AE2',
    '#7AC4FA',
    '#B570E4',
    '#ED732E',
    '#9CA7F9',
    '#7AD3B7',
    '#ED6C68',
    '#F7CC8B',
    '#6DD400',
    '#44D7B6',
    '#32C5FF',
    '#0091FF',
    '#B620E0',
    '#E02020',
    '#FA6400',
    '#6236FF',
  ]
}
</script>
<style lang="scss" scoped>
.color-picker-size {
  .el-color-picker {
    margin-right: $margin-3x;
  }
}
</style>
