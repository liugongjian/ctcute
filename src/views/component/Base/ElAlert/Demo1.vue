<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 09:24:06
 * @Description: 带自定义配置的Alert
-->
<template>
  <div class="alert-demo-1">
    <div class="alert-primary">
      <p>{{ $t('demo.alert.demo1.title1') }}</p>
      <el-alert type="info" show-icon :closable="false">
        <span slot="icon-custom">
          <svg-icon class="el-alert__icon loading" name="sync" :color="infoColor" />
        </span>
        <template slot="title">
          <div>
            商品正在上架中，已完成
            <span :style="{ color: infoColor }">13/25</span>，请耐心等待
          </div>
        </template>
      </el-alert>
      <p>{{ $t('demo.alert.demo1.title2') }}</p>
      <el-alert type="error" show-icon :close-btn-color="errorColor">
        <template slot="title">
          <div>
            上架完成，
            <span :style="{ color: errorColor }">25</span>个商品上架失败
          </div>
        </template>
      </el-alert>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import variables from '@cutedesign/ui/style/themes/default/index.scss'

const variables: any = {}
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private get infoColor(): string {
    return variables.colorMaster
  }

  private get errorColor(): string {
    return variables.colorDanger
  }
}
</script>
<style lang="scss" scoped>
.alert-demo-1 {
  .loading {
    animation: rotating 2s linear infinite;
  }
}
</style>
