<!--
 * @Author: 李悦
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 李悦
 * @LastEditTime: 2022-11-07 08:53:25
 * @Description: 空页面
-->
<template>
  <div class="page-status">
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

@Component({
  name: 'EmptyPage',
})
export default class extends Vue {
  private Img = require('./Image/empty-page.svg')
  private toHome() {
    this.$router.push('/')
  }
}
</script>
