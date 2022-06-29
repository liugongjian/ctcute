<template>
  <div class="sub-rate">
    <el-rate
      v-model="value"
      disabled
      text-color="#ff9900"
      :allow-half="true"
      :colors="['#FA8334', '#FA8334', '#FA8334']"
    >
    </el-rate>

    <el-rate
      v-model="value1"
      disabled
      show-score
      text-color="rgba(0,0,0,0.60)"
      score-template="3星"
      :colors="['#FA8334', '#FA8334', '#FA8334']"
    >
    </el-rate>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
