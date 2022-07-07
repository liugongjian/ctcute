<template>
  <el-card>
    <h2>中弹窗</h2>
    <div class="sub-special">
      <p>弹窗头部跟底部跟天翼云弹窗样式统一，在中尺寸弹窗中，宽度为 560px，弹窗底部按钮水平居中展示，最大高度为640px。</p>
      <el-button type="primary">中弹窗</el-button>
    </div>

    <h2>最小弹窗</h2>
    <div class="sub-special">
      <p>在小尺寸弹窗中，宽度为 480px，最大高度为640px。</p>
      <el-button type="primary">小弹窗</el-button>
    </div>
    
    <h2>大弹窗限制</h2>
    <div class="sub-special">
      <p>最大宽度为 1000px，最大高度为640px。</p>
      <el-button type="primary">大弹窗</el-button>
    </div>

    <h2>全屏弹窗</h2>
    <div class="sub-special">
      <p>弹窗铺满全屏，上下左右间距是24px。</p>
      <el-button type="primary">全屏弹窗</el-button>
    </div>

    <h2>特殊弹窗</h2>
    <div class="sub-special">
      <el-button @click="openDialog('SuccessDialog')">成功弹窗</el-button>
      <el-button @click="openDialog('WarnDialog')">警告弹窗</el-button>
      <SuccessDialog :visible="componentName === 'SuccessDialog'" @close="componentName = ''" />
      <WarnDialog :visible="componentName === 'WarnDialog'" @close="componentName = ''" />
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dialog',
  components: {
    SuccessDialog: () => import('./SuccessDialog.vue'),
    WarnDialog: () => import('./WarnDialog.vue')
  }
})

export default class extends Vue {
  private componentName = ''

  /**
   * 打开弹窗
   */
  private openDialog(componentName) {
    this.componentName = componentName
  }
}
</script>
