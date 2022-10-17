<template>
  <div class="sub-slider">
    <el-row>
      <el-col>
        <el-slider range :min="5" :max="60" :marks="{ 5: '5岁', 60: '60岁' }"> </el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-slider :marks="{ 0: '0', 60: '60' }" :min="0" :max="60" :show-tooltip="false" show-input>
        </el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-slider
          range
          :marks="{ 10: '10岁', 20: '20岁', 30: '30岁', 40: '40岁', 50: '50岁' }"
          :min="10"
          :max="50"
          :show-tooltip="false"
        >
        </el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
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
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSlider',
})
export default class extends Vue {
  public static title = {
    zh: '滑动输入条',
    en: 'Slider',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
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

  private value = [4, 8]
}
</script>

<style lang="scss" scoped>
.sub-slider {
  .el-row {
    width: 780px;
    margin: 42px 0 24px;
  }
}
</style>
