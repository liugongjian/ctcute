<!--
 * @Author: 王亚振
 * @Date: 2022-12-7 9:15:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 09:53:04
 * @Description:
-->
<template>
  <div class="sample">
    <cute-state>{{ $t('demo.state.demo1.default') }}</cute-state>
    <cute-state :color="colorVariables.colorSuccess">{{ $t('demo.state.demo1.success') }}</cute-state>
    <cute-state type="warning">{{ $t('demo.state.demo1.warn') }}</cute-state>
    <cute-state type="danger" icon="close-circle">{{ $t('demo.state.demo1.error') }}</cute-state>
    <cute-state type="fatal" icon="fault">{{ $t('demo.state.demo1.serious') }}</cute-state>
    <cute-state type="master" :loading="true">{{ $t('demo.state.demo1.start') }}</cute-state>
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
