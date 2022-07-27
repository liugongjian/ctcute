<template>
  <div class="sub-all-alert">
    <p>可根据内容调整长度</p>
    <h3>常用样式</h3>
    <el-alert title="弱提示文字弱提示文字很" type="weak" :closable="false"> </el-alert>
    <el-alert title="提示文案，常规提示" show-icon :closable="false"></el-alert>
    <el-alert title="提示文案，成功提示" type="success" show-icon :closable="false"> </el-alert>
    <el-alert title="提示文案，预警提示" type="warning" show-icon :closable="false"> </el-alert>
    <el-alert title="提示文案，失败提示" type="error" show-icon :closable="false"> </el-alert>
    <h3>其他样式</h3>
    <el-alert type="weak">
      <template slot="title">
        <div>弱提示文字弱提示文字很弱</div>
      </template>
    </el-alert>
    <el-alert title="提示文案，常规提示" type="info" show-icon :close-btn-color="infoColor">
      <template slot="title">
        <div>提示文案，常规提示</div>
      </template>
    </el-alert>
    <el-alert type="info" show-icon close-text="文字链接" :close-btn-color="infoColor">
      <template slot="title">
        <div>提示文案，常规提示</div>
      </template>
    </el-alert>
    <el-alert type="warning" show-icon :close-btn-color="alertColor">
      <template slot="title">
        <div>您订购的服务还剩<span :style="{ color: alertColor }">23</span>天到期</div>
      </template>
    </el-alert>

    <el-alert type="info" show-icon :closable="false">
      <span slot="icon-custom"
        ><svg-icon class="el-alert__icon loading" name="sync" :color="infoColor"
      /></span>
      <template slot="title">
        <div>商品正在上架中，已完成<span :style="{ color: infoColor }">13/25</span>，请耐心等待</div>
      </template>
    </el-alert>
    <el-alert type="error" show-icon :close-btn-color="errorColor">
      <template slot="title">
        <div>上架完成，<span :style="{ color: errorColor }">25</span>个商品上架失败</div>
      </template>
    </el-alert>
    <el-alert type="info" show-icon class="long-text" :close-btn-color="infoColor">
      <template slot="title">
        <div>
          说明文案过长。说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长营销插件“长征五号火箭”功能上线，大家可以转发集赞一起来发射火箭
        </div>
      </template>
    </el-alert>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/base/assets/css/_variables.scss'
@Component({
  name: 'UiAlert',
})
export default class extends Vue {
  public static title = {
    zh: '警告',
    en: 'Alert',
  }
  public static description = {
    maintainer: '赵昕',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }

  private get infoColor(): string {
    return variables.colorMaster
  }

  private get alertColor(): string {
    return variables.colorWarning
  }

  private get errorColor(): string {
    return variables.colorDanger
  }
}
</script>

<style lang="scss" scoped>
.sub-all-alert {
  @keyframes rotating {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }

  .loading {
    animation: rotating 2s linear infinite;
  }

  .long-text {
    ::v-deep.el-alert {
      align-items: flex-start;
    }

    .el-alert__icon {
      margin-top: 2px;
    }

    ::v-deep.el-alert__closebtn {
      margin-top: 4px;
    }
  }

  ::v-deep .el-alert {
    margin-top: 20px;
  }
}
</style>
