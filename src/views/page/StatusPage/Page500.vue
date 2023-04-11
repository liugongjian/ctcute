<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:54:20
 * @Description: 500页
-->
<template>
  <div class="page-status">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">500</div>
        <div class="box-text-tips">服务器出错了</div>
        <el-button class="box-button" type="primary" @click="toHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Img from './Image/page-500.svg'
@Component({
  name: 'Page500',
})
export default class extends Vue {
  private Img = Img
  private toHome() {
    this.$router.push('/')
  }
}
</script>
