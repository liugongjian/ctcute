<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-20 18:00:10
 * @Description: 空页面
-->
<template>
  <div class="cute-status-page">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">暂无数据</div>
        <div class="box-text-tips">抱歉，您暂时没有创建的订单</div>
        <el-button class="box-button" type="primary" @click="toHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Img from './Image/empty-page.svg'
@Component({
  name: 'CuteStatusEmptyPage',
})
export default class extends Vue {
  private Img = Img
  private toHome() {
    this.$router.push('/')
  }
}
</script>
