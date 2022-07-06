<template>
  <div class="sub-rate">
    <el-rate
      v-model="value"
      :allow-half="true"
    >
    </el-rate>

    <el-rate
      v-model="value1"
      show-score
      score-template="{value}星"
    >
    </el-rate>

    <el-rate
      v-model="value2"
      :icon-classes="likeClasses"
      :void-icon-class="likeIcon"
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

  private value = 2.5
  private value1 = 3
  private value2 = 3
  private likeIcon = 'cute-icon-like-fill'
  private likeClasses = new Array(3).fill(this.likeIcon)
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
