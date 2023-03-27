<!--
 * @Author: 王亚振
 * @Date: 2022-12-7 9:15:32
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-03-24 10:21:44
 * @Description:
-->
<template>
  <div class="sample">
    <cute-state>默认</cute-state>
    <cute-state :color="colorVariables.colorSuccess">健康/正常/成功</cute-state>
    <cute-state type="warning">警告</cute-state>
    <cute-state type="danger" icon="close-circle">危险/故障/失败</cute-state>
    <cute-state type="fatal" icon="fault">严重故障</cute-state>
    <cute-state type="master" :loading="true">启动中</cute-state>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
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
