<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:57:02
 * @Description: 404页
-->
<template>
  <div class="page-status">
    <div class="box">
      <!-- <el-empty :image="Img" :image-size="400" description="抱歉，您访问的页面不存在"></el-empty> -->
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">404</div>
        <div class="box-text-tips">抱歉，您访问的页面不存在</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import Img from './Image/page-404.svg'
import Img from './Image/page-error.svg'
@Component({
  name: 'Page404',
})
export default class extends Vue {
  private Img = Img
}
</script>
