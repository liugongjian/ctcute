<template>
  <div>
    <cute-slider
      ref="Sliders"
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
        this.RefSlider.value = 15
        this.RefSlider.inputValue = 24
        break
      case 16:
      case 17:
      case 18:
        this.RefSlider.value = 18
        this.RefSlider.inputValue = 36
        break
      case 19:
      case 20:
      case 21:
        this.RefSlider.value = 21
        this.RefSlider.inputValue = 48
        break
      default:
        this.RefSlider.inputValue = val
        break
    }
  }
  private inputChange(val) {
    console.log(val, 'input值')
    if (Number(this.RefSlider.inputValue) > 12) {
      switch (Number(this.RefSlider.inputValue)) {
        case 24:
          this.RefSlider.value = 15
          break
        case 36:
          this.RefSlider.value = 18
          break
        case 48:
          this.RefSlider.value = 21
          break
        default:
          this.$message({
            customClass: 'toast-warning',
            message: '不得超过12个月 超过12个月以年为单位',
            type: 'warning',
          })
          this.RefSlider.inputValue = 1
          this.RefSlider.value = 1
          break
      }
    } else {
      this.RefSlider.value = Number(this.RefSlider.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped></style>
