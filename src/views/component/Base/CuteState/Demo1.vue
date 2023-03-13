<!--
 * @Author: 王亚振
 * @Date: 2022-12-7 9:15:32
 * @LastEditors: 王亚振
 * @LastEditTime: 2022-12-7 9:15:32
 * @Description: 
-->
<template>
  <div class="sample">
    <cute-state>默认</cute-state>
    <cute-state :color="colorVariables.colorSuccess">健康/正常/成功</cute-state>
    <cute-state icon="check-circle" :color="colorVariables.colorSuccess">健康/正常/成功</cute-state>
    <cute-state icon="loading" :color="colorVariables.colorSuccess" :loading="true">启动中</cute-state>
  </div>
</template>
<script lang="ts">
// import variables from '@cutedesign/ui/style/themes/default/index.scss'
import { Vue, Component } from 'vue-property-decorator'

const variables = {}

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private desc = '描述'
  private colorVariables = variables
}
</script>
<style lang="scss" scoped>
.sample .el-state {
  margin-left: 32px;
}

.sample .el-state:first-child {
  margin-left: 0;
}
</style>
