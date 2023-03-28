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
    <AlertDemo />
    <div class="test">
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
    </div>
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
.test::v-deep .el-alert {
  margin-bottom: $margin-5x;
}
</style>
