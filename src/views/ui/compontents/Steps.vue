<template>
  <div>
    <p>默认横向步骤条。存在常规、进行中、已完成等情况。</p>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <ui-steps :active="active" :steps="steps" step-width="80%" @clickStep="clickStep"></ui-steps>
      <el-button
        style="margin-top: 48px"
        @click="
          () => {
            active++
          }
        "
      >
        下一步
      </el-button>
      <el-button @click="() => (active = 0)">重置</el-button>
    </div>
    <h3>迷你步骤条</h3>
    <div class="sub-stepsMin">
      <ui-steps
        size="mini"
        :active="activeMini"
        :steps="steps"
        step-width="100%"
        @clickStep="clickmini"
      ></ui-steps>
      <el-button
        style="margin-top: 48px"
        @click="
          () => {
            activeMini++
          }
        "
      >
        下一步
      </el-button>
      <el-button @click="() => (activeMini = 0)">重置</el-button>
    </div>
    <h3>步骤多展示不全</h3>
    <div class="sub-stepsMin">
      <ui-steps
        :active="activeMulti"
        :steps="multisteps"
        step-width="100%"
        type="multiSteps"
        :step-size="3"
        @clickStep="clickmulti"
      ></ui-steps>
      <el-button
        style="margin-top: 48px; margin-bottom: 12px"
        @click="
          () => {
            activeMulti++
          }
        "
      >
        下一步
      </el-button>
      <el-button @click="() => (activeMulti = 0)">重置</el-button>
      <ui-steps
        :active="activeMultiMini"
        :steps="multisteps"
        size="mini"
        step-width="100%"
        type="multiSteps"
        :step-size="6"
        @clickStep="clickmultimini"
      ></ui-steps>
      <el-button
        style="margin-top: 48px"
        @click="
          () => {
            activeMultiMini++
          }
        "
      >
        下一步
      </el-button>
      <el-button @click="() => (activeMultiMini = 0)">重置</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UiSteps from '@/components/ElementUI/Steps/steps.vue'
@Component({
  name: 'steps',
  components: { UiSteps },
})
export default class extends Vue {
  public static title = {
    zh: '步骤条',
    en: 'Steps',
  }

  steps = [
    { title: '步骤1', description: '这是一个描述' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束', status: 'finish' },
  ]

  multisteps = [
    { title: '步骤1', description: '这是一个描述' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4', description: '这是一个描述' },
    { title: '步骤5' },
    { title: '步骤6' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束', status: 'finish' },
  ]

  active = 0
  // 普通
  activeMini = 0
  // 迷你
  activeMulti = 5
  // 多选，默认size
  activeMultiMini = 5
  // 多选，设定size

  clickStep(step: any, index: number) {
    if (step.disabled) {
      this.active = index + 1
    } else {
      this.active = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  clickmini(step: any, index: number) {
    if (step.disabled) {
      this.activeMini = index + 1
    } else {
      this.activeMini = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  clickmulti(step: any, index: number) {
    if (step.disabled) {
      this.activeMulti = index + 1
    } else {
      this.activeMulti = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  clickmultimini(step: any, index: number) {
    if (step.disabled) {
      this.activeMultiMini = index + 1
    } else {
      this.activeMultiMini = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }
}
</script>
<style lang="scss" scoped></style>
