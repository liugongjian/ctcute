/* * @Author: 胡一苗 * @Date: 2023-03-21 17:06:22 * @LastEditors: 胡一苗 * @LastEditTime: 2023-03-24 10:29:36
* @Description: desc */
<template>
  <div>
    <h1>State</h1>
    <StateDemo />
    <div class="sub-sample">
      <h4>不同类型</h4>
      <p>
        <cute-state>默认info</cute-state>
        <cute-state type="success">成功success</cute-state>
        <cute-state type="warning">警告warning</cute-state>
        <cute-state type="danger">危险danger</cute-state>
        <cute-state type="fatal">致命fatal</cute-state>
        <cute-state type="master">主题色master</cute-state>
      </p>
    </div>
    <div class="sub-sample">
      <h4>有icon</h4>
      <p>
        <cute-state icon="uninstalled" type="info">默认info</cute-state>
        <cute-state icon="check-circle" type="success">成功success</cute-state>
        <cute-state icon="warning-circle" type="warning">警告warning</cute-state>
        <cute-state icon="close-circle" type="danger">危险danger</cute-state>
        <cute-state icon="fault" type="fatal">致命fatal</cute-state>
        <cute-state icon="edit" type="master">主题色master</cute-state>
      </p>
    </div>
    <div class="sub-sample">
      <h4>加载中</h4>
      <p>
        <cute-state :loading="true" type="info">默认info</cute-state>
        <cute-state :loading="true" type="success">成功success</cute-state>
        <cute-state :loading="true" type="warning">警告warning</cute-state>
        <cute-state :loading="true" type="danger">危险danger</cute-state>
        <cute-state :loading="true" type="fatal">致命fatal</cute-state>
        <cute-state :loading="true" type="master">主题色master</cute-state>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StateDemo from '@/views/ui/components/State.vue'

@Component({
  name: 'State',
  components: {
    StateDemo,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.sub-sample .el-state {
  margin-left: 32px;
}

.sub-sample .el-state:first-child {
  margin-left: 0;
}
</style>
