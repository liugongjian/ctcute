<template>
  <div class="random">当前X值为{{ rand }}，生成一个<el-input v-model="range" />以内的随机数 <el-button @click="generate">生成</el-button></div>
</template>
<script lang="ts">
// 引入Vue TypeScript组件包
import { Component, Vue, VModel } from 'vue-property-decorator'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'TypeScriptDemoRandom'
})

export default class extends Vue {
  /**
   * 实现一个v-model的双向绑定
   * @VModel 的使用示例
   * 详细文档：https://github.com/kaorun343/vue-property-decorator#-vmodelpropsargs-propoptions-decorator
   */
  @VModel() private rand: number

  /* 随机范围 */
  private range = 100

  /**
   * 生产随机数
   */
  private generate() {
    this.rand = Math.round(Math.random() * this.range)
  }
}
</script>

<style lang="scss" scoped>
  .random {
    color: $textGrey;
    margin-top: 10px;

    .el-input {
      width: 100px;
      margin: 0 8px;
    }
  }
</style>
