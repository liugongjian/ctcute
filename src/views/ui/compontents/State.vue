<template>
  <div>
    <p>
      颜色状态：用颜色区分状态推荐使用3-5个颜色，不推荐超过5个颜色（超过5个用户找不到重点，无法有效区分状态），超过5个请尽量使用图标进行精准区分。
    </p>
    <p>图标状态：进行中的都是用“加载中”icon，用颜色区分不同的进行中状态。</p>
    <div class="sub-sample">
      <el-row>
        <dot-state color="#52C41A">健康/正常/成功</dot-state>
        <dot-state color="#FAAD15">警告</dot-state>
        <dot-state color="#F5212D">危险/故障/失败</dot-state>
        <dot-state color="#AE050F">严重故障</dot-state>
        <dot-state color="#1890FF">进行中</dot-state>
        <dot-state>下线/未完成/未开始/中止/取消</dot-state>
      </el-row>
      <el-row>
        <dot-state icon="uninstalled">已卸载</dot-state>
        <dot-state icon="fault" color="#F5212D">故障</dot-state>
        <dot-state icon="close-circle" color="#F5212D">失败</dot-state>
        <dot-state icon="warning-circle" color="#FAAD15">异常/告警</dot-state>
        <dot-state icon="warning-circle" color="#999">未运行/停止</dot-state>
        <dot-state icon="check-circle" color="#52C41A">正常/健康/成功</dot-state>
        <dot-state icon="inconsistent" color="#FAAD15">不一致</dot-state>
        <dot-state icon="loading" color="#1890FF">重启中</dot-state>
        <dot-state icon="loading" color="#52C41A" :loading="true">启动中</dot-state>
        <dot-state icon="loading" color="#F5212D">卸载中</dot-state>
        <dot-state icon="loading">停止中</dot-state>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DotState from '@/components/State/index.vue'

@Component({
  name: 'UiState',
  components: {
    DotState,
  },
})
export default class extends Vue {
  public static title = {
    zh: '状态',
    en: 'State',
  }
}
</script>

<style lang="scss" scoped>
.sub-sample .el-state {
  margin-left: 32px;
}
.sub-sample .el-state:first-child {
  margin-left: 0;
}
</style>
