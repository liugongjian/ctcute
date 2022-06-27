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
