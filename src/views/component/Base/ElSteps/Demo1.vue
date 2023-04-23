<!--
 * @Author: 黄靖
 * @Date: 2023-03-31 15:30:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-21 16:18:31
 * @Description: 此为直接覆写element-ui的组件，el-steps原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="180" :active="active" finish-status="success">
        <el-step
          v-for="(s, index) in steps"
          :key="index"
          :title="getTitle(s, index)"
          :status="s.status"
        ></el-step>
      </el-steps>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              active++
            }
          "
        >{{ $t(('demo.steps.demo1.next')) }}</el-button>
        <el-button @click="() => (active = 0)">{{ $t(('demo.steps.demo1.reset')) }}</el-button>
      </div>
    </div>
    <h3>较小步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="180" :active="activeMini" finish-status="success" size="small">
        <el-step
          v-for="(s, index) in steps"
          :key="index"
          :title="getTitle(s, index)"
          :status="s.status"
        ></el-step>
      </el-steps>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              activeMini++
            }
          "
        >{{ $t(('demo.steps.demo1.next')) }}</el-button>
        <el-button @click="() => (activeMini = 0)">{{ $t(('demo.steps.demo1.reset')) }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {},
  name: 'Demo1',
})
export default class extends Vue {
  private steps = [
    { title: this.$t('demo.steps.demo1.step1') },
    { title: this.$t('demo.steps.demo1.step2') },
    { title: this.$t('demo.steps.demo1.step3') },
    { title: this.$t('demo.steps.demo1.step34') },
    { title: this.$t('demo.steps.demo1.error'), status: 'error' },
    { title: this.$t('demo.steps.demo1.end') },
  ]
  private active = 1
  private activeMini = 1

  private getTitle(s: any, index: number) {
    if (index === this.active) {
      return this.$t('demo.steps.demo1.processing')
    } else if (index === this.active + 1) {
      return this.$t('demo.steps.demo1.pending')
    } else if (this.steps.length - 1 === this.active) {
      return this.$t('demo.steps.demo1.completed')
    } else {
      return s.title
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-style {
  margin-top: $margin-6x;
  margin-bottom: $margin-6x;
}
</style>
