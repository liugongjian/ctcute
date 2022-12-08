<!--
 * @Author: 秦瑞斌
 * @Date: 2022-11-02 13:35:04
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-04 09:12:26
 * @Description: 
-->
<template>
  <div>
    <cute-slider
      ref="Sliders"
      v-model="values"
      :min="1"
      :max="21"
      :disabled="false"
      :marks="marks"
      :range="false"
      unit="个月"
      @moveChange="changes"
      @inputChange="inputChange"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'

@Component({
  name: 'Demo11',
})
export default class extends Vue {
  @Ref('Sliders')
  private RefSlider
  private values = 10
  private marks = {
    1: '1个月',
    3: '3个月',
    6: '6个月',
    9: '9个月',
    12: '1年',
    15: '2年',
    18: '3年',
    21: '4年',
  }
  private changes(val) {
    console.log(val, 'slider值')
    switch (val) {
      case 13:
      case 14:
      case 15:
        //改变slider对应值
        this.RefSlider.values = 15
        this.values = 24
        break
      case 16:
      case 17:
      case 18:
        this.RefSlider.values = 18
        this.values = 36
        break
      case 19:
      case 20:
      case 21:
        this.RefSlider.values = 21
        this.values = 48
        break
      default:
        this.values = val
        break
    }
  }
  private inputChange(val) {
    console.log(val, 'input值')
    this.values = val
    if (val > 12) {
      switch (val) {
        case 24:
          this.RefSlider.values = 15
          break
        case 36:
          this.RefSlider.values = 18
          break
        case 48:
          this.RefSlider.values = 21
          break
        default:
          this.$message({
            customClass: 'toast-warning',
            message: '不得超过12个月 超过12个月以年为单位',
            type: 'warning',
          })
          this.values = 1
          this.RefSlider.values = 1
          break
      }
    } else {
      this.RefSlider.values = val
    }
  }
}
</script>
<style lang="scss" scoped></style>
