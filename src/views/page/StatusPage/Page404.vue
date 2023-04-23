<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:57:02
 * @Description: 404页
-->
<template>
  <div class="page-status">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">404</div>
        <div class="box-text-tips">抱歉，您访问的页面不存在</div>
        <el-button class="box-button" type="primary" @click="toHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Page404',
})
export default class extends Vue {
  private Img = require('./Image/page-404.svg')
  private toHome() {
    this.$router.push('/')
  }
}
</script>
