<template>
  <div>
    <cute-slider
      :min="0"
      :max="100"
      :initial-min="20"
      :initial-max="80"
      :width="1200"
      :disabled="false"
      :range="true"
      @lowChange="lowChange"
      @highChange="highChange"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo10',
})
export default class extends Vue {
  private low = 20
  private high = 80
  private lowChange(val) {
    this.low = val
    console.log('lowChange:', val)
  }
  private highChange(val) {
    this.high = val
    console.log('highChange:', val)
  }
}
</script>
<style lang="scss" scoped></style>
