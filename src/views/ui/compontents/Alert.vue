<template>
  <div class="sub-all-alert">
    <p>可根据内容调整长度</p>
    <h3>常用样式</h3>
    <el-row>
      <el-alert title="提示文案，常规提示" type="info" show-icon :closable="false"> </el-alert>
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
      <el-alert title="提示文案，常规提示" type="info" show-icon>
        <template slot="title">
          <div class="sub-title">提示文案，常规提示</div>
        </template>
      </el-alert>
    </el-row>

    <div class="sub-alert">
      <el-alert type="info" show-icon close-text="文字链接">
        <template slot="title">
          <div class="sub-title-text">提示文案，常规提示</div>
        </template>
      </el-alert>
    </div>
    <el-row>
      <el-alert type="warning" show-icon>
        <template slot="title">
          <div class="sub-title">您订购的服务还剩23天到期</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="info" show-icon :closable="false">
        <template slot="title">
          <div class="sub-title">商品正在上架中，已完成13/25，请耐心等待</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="error" show-icon>
        <template slot="title">
          <div class="sub-title">上架完成，25个商品上架失败</div>
        </template>
      </el-alert>
    </el-row>
    <el-row>
      <el-alert type="info" show-icon>
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
}
</script>

<style lang="scss" scoped>
.sub-all-alert {
  ::v-deep.sub-all-alert .el-alert__closebtn.is-customed {
    font-size: 12px;
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
