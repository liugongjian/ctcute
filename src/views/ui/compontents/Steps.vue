<template>
  <div>
    <p>默认横向步骤条。存在常规、进行中、已完成等情况。</p>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <ui-steps :active="active" :steps="normalsteps" step-width="50%" @clickStep="clickStep"></ui-steps>
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
        step-width="80%"
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
        step-width="60%"
        type="multiSteps"
        :step-size="3"
        :go-button="true"
        @clickStep="clickmulti"
        @change="goMulti"
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
        :go-button="true"
        @clickStep="clickmultimini"
        @change="goMultiMini"
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

  normalsteps = [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }]

  steps = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束', status: 'finish' },
  ]

  multisteps = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' },
    { title: '步骤5' },
    { title: '步骤6' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束' },
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

  goMulti(val: number) {
    this.activeMulti = this.activeMulti + val
    if (this.activeMulti < 0) {
      this.activeMulti = 0
    }
  }

  goMultiMini(val: number) {
    this.activeMultiMini = this.activeMultiMini + val
    if (this.activeMultiMini < 0) {
      this.activeMultiMini = 0
    }
  }
}
</script>
<style lang="scss" scoped></style>
