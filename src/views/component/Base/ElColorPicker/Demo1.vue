<!--
 * @Author: 朱凌浩
 * @Date: 2023-01-11 14:18:32
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-01-11 14:18:32
 * @Description: 仅显示预定义颜色
-->
<template>
  <div class="collapse-demo">
    <p>仅显示预定义颜色</p>
    <el-color-picker v-model="colorVal" :predefine="predefine1" type="predefine"></el-color-picker>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  public colorVal = '#7AC4FA'
  public predefine1 = ['#E02020', '#FA6400', '#0091FF', '#6DD400', '#7AD3B7', '#7AC4FA', '#ED6C68', '#F19E4B']
}
</script>
