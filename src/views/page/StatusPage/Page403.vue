<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-21 11:03:12
 * @Description: 403页
-->
<template>
  <div class="page-status">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">403</div>
        <div class="box-text-tips">{{ t('cute.pageStatus.page403Tips') }}</div>
        <el-button class="box-button" type="primary" @click="toHome">{{
          t('cute.pageStatus.toHome')
        }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'Page403',
})
export default class extends Mixins(Locale) {
  private Img = require('./Image/page-403.svg')
  private toHome() {
    this.$router.push('/')
  }
}
</script>
