<template>
  <div>
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
    <hr />
    <h3>其他样式</h3>
    <el-row>
      <el-alert title="提示文案，常规提示" type="info" show-icon> </el-alert>
    </el-row>

    <div class="sub-alert">
      <el-alert title="提示文案，常规提示" type="info" show-icon close-text="文字链接"> </el-alert>
    </div>
    <el-row>
      <el-alert title="您订购的服务还剩23天到期" type="warning" show-icon :closable="false"> </el-alert>
    </el-row>
    <el-row>
      <el-alert title="商品正在上架中，已完成13/25，请耐心等待" type="info" show-icon :closable="false">
      </el-alert>
    </el-row>
    <el-row>
      <el-alert title="上架完成，25个商品上架失败" type="error" show-icon> </el-alert>
    </el-row>
    <el-row>
      <el-alert
        title="说明文案过长。说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长说明文案过长营销插件“长征五号火箭”功能上线，大家可以转发集赞一起来发射火箭"
        type="info"
        show-icon
        :closable="false"
      >
      </el-alert>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiAlert",
})
export default class extends Vue {
  public static title = {
    zh: "警告",
    en: "Alert",
  }
}
</script>

<style lang="scss" scoped>
.el-row,
.sub-alert {
  margin-top: 20px;
  width: 928px;
  height: 48px;
}
</style>