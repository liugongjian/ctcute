<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 14:02:21
 * @Description: Slider
-->
<template>
  <div>
    <h1>Slider 滑动输入条</h1>
    <el-card>
      <h3>基础用法</h3>
      <SliderDemo />
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SliderDemo from '@/views/ui/components/Slider.vue'

@Component({
  name: 'Slider',
  components: {
    SliderDemo,
  },
})
export default class extends Vue {}
</script>
