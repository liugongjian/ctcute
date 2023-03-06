<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-10-28 15:43:09
 * @Description: Content Area Tip 提示
-->
<template>
  <div class="alert-demo-2">
    <el-alert title="这是一个普通提示" :closable="false" content-area-tip>
      <span slot="icon-custom"> <svg-icon class="el-alert__icon" name="info-circle" /></span>
    </el-alert>
    <el-alert title="这是一个警告提示" type="warning" show-icon :closable="false" content-area-tip />
    <el-alert title="这是一个错误提示" type="error" show-icon :closable="false" content-area-tip />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import variables from '@cutedesign/theme/css/_variables.scss'

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
