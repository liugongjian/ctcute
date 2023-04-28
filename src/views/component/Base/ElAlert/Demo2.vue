<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 09:24:25
 * @Description: Content Area Tip 提示
-->
<template>
  <div class="alert-demo-2">
    <el-alert :title="$t('demo.alert.demo2.normalTip')" :closable="false" content-area-tip>
      <template slot="icon-custom">
        <svg-icon class="el-alert__icon" name="info-circle" />
      </template>
    </el-alert>
    <el-alert
      :title="$t('demo.alert.demo2.warnTip')"
      type="warning"
      show-icon
      :closable="false"
      content-area-tip
    />
    <el-alert
      :title="$t('demo.alert.demo2.errorTip')"
      type="error"
      show-icon
      :closable="false"
      content-area-tip
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import variables from '@cutedesign/ui/style/themes/default/index.scss'

const variables: any = {}

@Component({
  name: 'Demo2',
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
.alert-demo-2 {
}
</style>
