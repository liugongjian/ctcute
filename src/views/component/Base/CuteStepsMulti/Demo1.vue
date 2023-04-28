<!--
 * @Author: 吴静
 * @Date: 2022-12-05 13:32:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 10:23:53
 * @Description: 
-->
<template>
  <div>
    <cute-steps-multi
      :active="active"
      :steps="steps"
      :last-step-width="100"
      size="small"
      :space="200"
      :step-size="2"
      :has-go-button="true"
      @clickStep="clickStep"
      @change="clickGo"
    />
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
    { title: `${this.$t('demo.stepsMulti.demo1.step')}1` },
    { title: `${this.$t('demo.stepsMulti.demo1.step')}2` },
    { title: `${this.$t('demo.stepsMulti.demo1.step')}3` },
    { title: `${this.$t('demo.stepsMulti.demo1.step')}4` },
    { title: `${this.$t('demo.stepsMulti.demo1.step')}5` },
    { title: `${this.$t('demo.stepsMulti.demo1.step')}6` },
    { title: this.$t('demo.stepsMulti.demo1.unclickable'), disabled: true },
    { title: this.$t('demo.stepsMulti.demo1.error'), status: 'error' },
    { title: this.$t('demo.stepsMulti.demo1.end') },
  ]
  private active = 1
  private clickStep(step: any, index: number) {
    if (step.disabled) {
      this.active = index + 1
    } else {
      this.active = index
      this.$message.success(
        `${this.$t('demo.stepsMulti.demo1.clickMessage1')} ${step.title} ${this.$t(
          'demo.stepsMulti.demo1.clickMessage2'
        )}`
      )
    }
  }
  private clickGo(val: number) {
    this.active = this.active + val
    if (this.active < 0) {
      this.active = 0
    }
  }
}
</script>
<style lang="scss" scoped></style>
