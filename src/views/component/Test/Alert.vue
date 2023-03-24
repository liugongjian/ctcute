<!--
 * @Author: 黄靖
 * @Date: 2023-03-24 17:28:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-24 17:28:09
 * @Description: Transfer
-->
<template>
  <div>
    <h1>Alert</h1>
    <h3>基本用法</h3>
    <el-alert title="弱提示文字弱提示文字" type="weak"> </el-alert>
    <el-alert title="提示文案，常规提示"></el-alert>
    <el-alert title="提示文案，成功提示" type="success"> </el-alert>
    <el-alert title="提示文案，预警提示" type="warning"> </el-alert>
    <el-alert title="提示文案，失败提示" type="error"> </el-alert>
    <h3>主题</h3>
    <el-alert title="弱提示文字弱提示文字" type="weak" effect="dark"> </el-alert>
    <el-alert title="提示文案，常规提示" effect="dark"></el-alert>
    <el-alert title="提示文案，成功提示" type="success" effect="dark"> </el-alert>
    <el-alert title="提示文案，预警提示" type="warning" effect="dark"> </el-alert>
    <el-alert title="提示文案，失败提示" type="error" effect="dark"> </el-alert>
    <h3>自定义关闭按钮</h3>
    <el-alert title="不可关闭的 alert" type="success" :closable="false"> </el-alert>
    <el-alert title="自定义 close-text" type="info" close-text="知道了"> </el-alert>
    <el-alert title="设置了回调的 alert" type="warning" @close="hello"> </el-alert>
    <h3>带有icon</h3>
    <el-alert title="弱提示文字弱提示文字" type="weak" show-icon> </el-alert>
    <el-alert title="提示文案，常规提示" show-icon></el-alert>
    <el-alert title="提示文案，成功提示" type="success" show-icon> </el-alert>
    <el-alert title="提示文案，预警提示" type="warning" show-icon> </el-alert>
    <el-alert title="提示文案，失败提示" type="error" show-icon> </el-alert>
    <h3>文字居中</h3>
    <el-alert title="弱提示文字弱提示文字" type="weak" show-icon> </el-alert>
    <el-alert title="提示文案，常规提示" show-icon></el-alert>
    <el-alert title="提示文案，成功提示" type="success" show-icon> </el-alert>
    <el-alert title="提示文案，预警提示" type="warning" show-icon> </el-alert>
    <el-alert title="提示文案，失败提示" type="error" show-icon> </el-alert>
    <h3>带辅助性文字介绍</h3>
    <el-alert
      title="带辅助性文字介绍"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
    >
    </el-alert>
    <h3>带icon和辅助性文字介绍</h3>
    <el-alert
      title="弱提示文字弱提示文字"
      type="weak"
      show-icon
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    >
    </el-alert>
    <el-alert
      title="提示文案，常规提示"
      show-icon
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    ></el-alert>
    <el-alert
      title="提示文案，成功提示"
      type="success"
      show-icon
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    >
    </el-alert>
    <el-alert
      title="提示文案，预警提示"
      type="warning"
      show-icon
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    >
    </el-alert>
    <el-alert
      title="提示文案，失败提示"
      type="error"
      show-icon
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    >
    </el-alert>
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
import AlertDemo from '@/views/ui/components/Alert.vue'

@Component({
  name: 'Alert',
  components: {
    AlertDemo,
  },
})
export default class extends Vue {
  private hello() {
    alert('Hello World!')
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-alert {
  margin-bottom: $margin-5x;
}
</style>
