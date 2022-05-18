<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-rate
          v-model="value"
          disabled
          text-color="#ff9900"
          :allow-half="true"
          :colors="['#FA8334', '#FA8334', '#FA8334']"
        >
        </el-rate>
      </el-col>
      <el-col :span="6">
        <el-rate
          v-model="value1"
          disabled
          show-score
          text-color="rgba(0,0,0,0.60)"
          score-template="3星"
          :colors="['#FA8334', '#FA8334', '#FA8334']"
        >
        </el-rate>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiRate'
})
export default class extends Vue {
  public static title = {
    zh: '评分',
    en: 'Rate'
  }

  public value = 2.5
  public value1 = 3
}
</script>
<style lang="scss">
.el-row {
  margin-top: 24px;
}
</style>
