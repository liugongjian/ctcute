<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:53:25
 * @Description: 空页面
-->
<template>
  <!-- <div class="empty-page">
    <el-tabs value="one" type="card" size="small">
      <el-tab-pane label="默认项" name="one">
        <div class="box">
          <img src="./Image/empty-page.svg" />
          <div class="text">暂无数据</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="选中项" name="second">
        <div class="box">
          <img src="./Image/empty-page.svg" />
          <div class="text">暂无数据</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="禁用选项" name="third" disabled>禁用选项</el-tab-pane>
      <el-tab-pane label="悬停项" name="fourth">
        <div class="box">
            <img src="./Image/empty-page.svg" />
          <el-empty :image="Img" :image-size="300" description="暂无数据"></el-empty>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div> -->
  <div class="page-status">
    <div class="box-new">
      <!-- <el-empty :image="Img" :image-size="400" description="抱歉，您没有访问权限"></el-empty> -->
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
  name: 'EmptyPage',
})
export default class extends Vue {
  private Img = Img
  private toHome() {
    this.$router.push('/')
  }
}
</script>
