<template>
  <div>
    <p>
      颜色状态：用颜色区分状态推荐使用3-5个颜色，不推荐超过5个颜色（超过5个用户找不到重点，无法有效区分状态），超过5个请尽量使用图标进行精准区分。<br />
      图标状态：进行中的都是用“加载中”icon，用颜色区分不同的进行中状态。
    </p>
    <h4>
      使用了
      <a href="/component/base/cute-state" target="_blank">CuteState</a>
      组件
    </h4>
    <div class="sub-sample">
      <p>
        <dot-state :color="colorVariables.colorSuccess">健康/正常/成功</dot-state>
        <dot-state :color="colorVariables.colorWarning">警告</dot-state>
        <dot-state :color="colorVariables.colorDanger">危险/故障/失败</dot-state>
        <dot-state :color="colorVariables.colorFatal">严重故障</dot-state>
        <dot-state :color="colorVariables.colorMaster">进行中</dot-state>
        <dot-state>下线/未完成/未开始/中止/取消</dot-state>
      </p>
      <p>
        <dot-state icon="uninstalled">已卸载</dot-state>
        <dot-state icon="fault" :color="colorVariables.colorDanger">故障</dot-state>
        <dot-state icon="close-circle" :color="colorVariables.colorDanger">失败</dot-state>
        <dot-state icon="warning-circle" :color="colorVariables.colorWarning">异常/告警</dot-state>
        <dot-state icon="warning-circle">未运行/停止</dot-state>
        <dot-state icon="check-circle" :color="colorVariables.colorSuccess">正常/健康/成功</dot-state>
        <dot-state icon="inconsistent" :color="colorVariables.colorWarning">不一致</dot-state>
        <dot-state icon="loading" :color="colorVariables.colorMaster" :loading="true">重启中</dot-state>
        <dot-state icon="loading" :color="colorVariables.colorSuccess" :loading="true">启动中</dot-state>
        <dot-state icon="loading" :color="colorVariables.colorDanger" :loading="true">卸载中</dot-state>
        <dot-state icon="loading" :loading="true">停止中</dot-state>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteState as DotState } from '@cutedesign/ui'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

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
  public static description = {
    maintainer: '胡一苗',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }

  private colorVariables = variables
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
