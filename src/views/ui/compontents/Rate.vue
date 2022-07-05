<template>
  <div class="sub-rate">
    <el-rate
      v-model="value"
      text-color="#ff9900"
      :allow-half="true"
      void-icon-class="el-icon-star-on"
      :colors="[themeColor, themeColor, themeColor]"
      void-color="#ddd"
    >
    </el-rate>

    <el-rate
      v-model="value1"
      void-color="#ddd"
      show-score
      text-color="rgba(0,0,0,0.60)"
      score-template="3星"
      :colors="[themeColor, themeColor, themeColor]"
      void-icon-class="el-icon-star-on"
    >
    </el-rate>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import variables from '@/assets/css/_variables.scss'

@Component({
  name: 'UiRate',
})
export default class extends Vue {
  public static title = {
    zh: '评分',
    en: 'Rate',
  }

  public value = 2.5
  public value1 = 3
  private get themeColor(): string {
    return variables.colorMaster
  }
}
</script>
<style lang="scss">
.sub-rate {
  margin-top: 24px;
  display: flex;

  .el-rate + .el-rate {
    margin-left: 48px;
  }
}
</style>
