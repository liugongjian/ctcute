<!--
 * @Author: 吴静
 * @Date: 2022-12-05 13:32:32
 * @LastEditors: 吴静
 * @LastEditTime: 2022-12-05 09:02:01
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
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' },
    { title: '步骤5' },
    { title: '步骤6' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束' },
  ]
  private active = 1
  private clickStep(step: any, index: number) {
    if (step.disabled) {
      this.active = index + 1
    } else {
      this.active = index
      this.$message.success(`点击 ${step.title}成功`)
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
