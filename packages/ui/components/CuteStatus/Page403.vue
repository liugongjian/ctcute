<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:53:34
 * @Description: 403页
-->
<template>
  <div class="cute-status-page">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">403</div>
        <div class="box-text-tips">你无权访问该页面</div>
        <el-button class="box-button" type="primary" @click="toHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Img from './Image/page-403.svg'
@Component({
  name: 'CuteStatusPage403',
})
export default class extends Vue {
  private Img = Img
  private toHome() {
    this.$router.push('/')
  }
}
</script>
