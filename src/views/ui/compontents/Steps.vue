<template>
  <div>
    <p>默认横向步骤条。存在常规、进行中、已完成等情况。</p>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="300" :active="1" finish-status="success" class="max">
        <el-step title="处理完成"></el-step>
        <el-step title="正在处理"></el-step>
        <el-step title="等待处理"></el-step>
      </el-steps>
      <el-button
        style="margin-top: 12px"
        @click="
          () => {
            active++
          }
        "
      >
        下一步
      </el-button>
    </div>
    <h3>迷你步骤条</h3>
    <div class="sub-stepsMin">
      <el-steps :space="300" :active="1" finish-status="success">
        <el-step title="处理完成"></el-step>
        <el-step title="正在处理"></el-step>
        <el-step title="等待处理"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px">下一步</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSteps'
})
export default class extends Vue {
  public static title = {
    zh: '步骤条',
    en: 'Steps'
  }
}
</script>
