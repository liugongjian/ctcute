<template>
  <div>
    <h3>预定义颜色</h3>
    <el-color-picker v-model="colorVal" :predefine="predefine1" type="predefine"></el-color-picker>
    <h3>预定义颜色+自主颜色选择</h3>
    <el-color-picker v-model="colorVal2" :predefine="predefine2" :show-alpha="true"></el-color-picker>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiColorPicker',
})
export default class extends Vue {
  public static title = {
    zh: '颜色选择器  ',
    en: 'ColorPicker',
  }
  public static description = {
    maintainer: '朱凌浩',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }

  public colorVal = '#7AC4FA'
  public colorVal2 = '#7AC4FA'
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
