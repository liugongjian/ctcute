<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:53:34
 * @Description: 403页
-->
<template>
  <div class="page-status">
    <div class="box">
      <el-empty :image="Img" :image-size="400" description="抱歉，您没有访问权限"></el-empty>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Img from './Image/page-403.svg'
@Component({
  name: 'Page403',
})
export default class extends Vue {
  private Img = Img
}
</script>
