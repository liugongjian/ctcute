<template>
  <div class="sub-all-alert">
    <p>可根据内容调整长度</p>
    <h3>常用样式</h3>
    <el-row>
      <el-alert title="弱提示文字弱提示文字" type="weak" :closable="false"> </el-alert>
    </el-row>
    <el-row>
      <el-alert title="提示文案，常规提示" :closable="false"><span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle-fill" :color="infoColor" /></span></el-alert>
    </el-row>
    <el-row>
      <el-alert title="提示文案，成功提示" type="success" show-icon :closable="false"> </el-alert>
    </el-row>
    <el-row>
      <el-alert title="提示文案，预警提示" type="warning" show-icon :closable="false"> </el-alert>
    </el-row>
    <el-row>
      <el-alert title="提示文案，失败提示" type="error" show-icon :closable="false"> </el-alert>
    </el-row>

    <h3>其他样式</h3>
    <el-row>
      <el-alert type="weak">
        <template slot="title">
          <div class="sub-title">弱提示文字弱提示文字很弱</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert title="提示文案，常规提示" type="info" show-icon :close-btn-color="infoColor">
        <span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle-fill" :color="infoColor" /></span>
        <template slot="title">
          <div class="sub-title">提示文案，常规提示</div>
        </template>
      </el-alert>
    </el-row>

    <div class="sub-alert">
      <el-alert type="info" show-icon close-text="文字链接" :close-btn-color="infoColor">
        <span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle-fill" :color="infoColor" /></span>
        <template slot="title">
          <div class="sub-title-text">提示文案，常规提示</div>
        </template>
      </el-alert>
    </div>
    <el-row>
      <el-alert type="warning" show-icon :close-btn-color="alertColor">
        <template slot="title">
          <div class="sub-title">您订购的服务还剩<span :style="{ color: alertColor }">23</span>天到期</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="info" show-icon :closable="false">
        <span slot="icon-custom"><svg-icon class="el-alert__icon loading" name="sync" :color="infoColor" /></span>
        <template slot="title">
          <div class="sub-title">商品正在上架中，已完成<span :style="{ color: infoColor }">13/25</span>，请耐心等待</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="error" show-icon :close-btn-color="errorColor">
        <template slot="title">
          <div class="sub-title">上架完成，<span :style="{ color: errorColor }">25</span>个商品上架失败</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="info" show-icon class="long-text" :close-btn-color="infoColor">
        <span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle-fill" :color="infoColor" /></span>
        <template slot="title">
          <div class="sub-title">
            说明文案过长。说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长营销插件“长征五号火箭”功能上线，大家可以转发集赞一起来发射火箭
          </div>
        </template>
      </el-alert>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiAlert'
})
export default class extends Vue {
  public static title = {
    zh: '警告',
    en: 'Alert'
  }

  private infoColor = '#fa8334'
  private alertColor = '#faad15'
  private errorColor = '#f5212d'
}
</script>

<style lang="scss" scoped>
.sub-all-alert {
  ::v-deep.sub-all-alert .el-alert__closebtn.is-customed {
    font-size: 12px;
  }
  @keyframes rotating {
    0% {transform: rotate(0);}
    100% {transform: rotate(1turn);}
  }
  .loading {
    animation: rotating 2s linear infinite;
  }
  .long-text.el-alert {
    align-items: flex-start;
  }
  .sub-title {
    font-size: 12px;
    &::after {
      content: "";
      display: inline-block;
      width: 10px;
    }
  }
  .sub-title-text {
    font-size: 12px;
    &::after {
      content: "";
      display: inline-block;
      width: 54px;
    }
  }
  .el-row,
  .sub-alert {
    display: flex;
    margin-top: 20px;
    ::v-deep.el-alert {
      width: auto;
      min-width: 164px;
      padding: 7px 16px;
    }
  }
}
</style>
