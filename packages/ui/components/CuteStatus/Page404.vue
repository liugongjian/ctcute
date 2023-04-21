<!--
 * @Author: 万璐敏
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-07 08:57:02
 * @Description: 404页
-->
<template>
  <div class="cute-status-page">
    <div class="box-new">
      <div class="box-image">
        <el-image :src="Img" fit="cover"></el-image>
      </div>
      <div class="box-text">
        <div class="box-text-title">404</div>
        <div class="box-text-tips">{{ t('cute.pageStatus.page404Tips') }}</div>
        <el-button
          class="box-button"
          type="primary"
          @click="toHome"
        >{{ t('cute.pageStatus.toHome') }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteStatusPage404',
})
export default class extends Mixins(Locale) {
  private Img = require('./Image/page-404.svg')
  private toHome() {
    this.$router.push('/')
  }
}
</script>
