<template>
  <div>
    <p>默认横向步骤条。存在常规、进行中、已完成等情况。</p>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="180" :active="active" finish-status="success">
        <el-step
          v-for="(s, index) in steps"
          :key="index"
          :title="getTitle(s, index)"
          :status="s.status"
        ></el-step>
      </el-steps>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              active++
            }
          "
        >
          下一步
        </el-button>
        <el-button @click="() => (active = 0)">重 置</el-button>
      </div>
    </div>
    <h3>较小步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="180" :active="activeMini" finish-status="success" size="small">
        <el-step
          v-for="(s, index) in stepsSmall"
          :key="index"
          :title="getTitleSmall(s, index)"
          :status="s.status"
        ></el-step>
      </el-steps>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              activeMini++
            }
          "
        >
          下一步
        </el-button>
        <el-button @click="() => (activeMini = 0)">重 置</el-button>
      </div>
    </div>
    <h3>
      步骤多展示不全-使用了
      <a href="/component/base/cute-steps-multi" target="_blank">CuteStepsMulti</a>
      组件
    </h3>
    <div>
      <cute-steps-multi
        :active="activeMulti"
        :steps="multisteps"
        :last-step-width="120"
        max-width="80%"
        :has-go-button="true"
        @clickStep="clickmulti"
        @change="goMulti"
      ></cute-steps-multi>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              activeMulti++
            }
          "
        >
          下一步
        </el-button>
        <el-button @click="() => (activeMulti = 0)">重 置</el-button>
      </div>

      <cute-steps-multi
        :active="activeMultiMini"
        :steps="multisteps"
        size="mini"
        :last-step-width="100"
        max-width="100%"
        :step-size="2"
        :has-go-button="true"
        @clickStep="clickmultimini"
        @change="goMultiMini"
      ></cute-steps-multi>
      <div class="btn-style">
        <el-button
          @click="
            () => {
              activeMultiMini++
            }
          "
        >
          下一步
        </el-button>
        <el-button @click="() => (activeMultiMini = 0)">重 置</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteStepsMulti } from '@cutedesign/ui'

@Component({
  name: 'UiSteps',
  components: { CuteStepsMulti },
})
export default class extends Vue {
  public static title = {
    zh: '步骤条',
    en: 'Steps',
  }
  public static description = {
    maintainer: '黄靖',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }

  private normalsteps = [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }]

  private steps = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' },
    { title: '错误/失败', status: 'error' },
    { title: '结束' },
  ]

  private stepsSmall = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '步骤4' },
    { title: '错误/失败', status: 'error' },
    { title: '结束' },
  ]

  private multisteps = [
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

  private active = 0
  // 普通
  private activeMini = 0
  // 迷你
  private activeMulti = 5
  // 多选，默认size
  private activeMultiMini = 5
  // 多选，设定size

  private clickStep(step: any, index: number) {
    if (step.disabled) {
      this.active = index + 1
    } else {
      this.active = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  private clickmini(step: any, index: number) {
    if (step.disabled) {
      this.activeMini = index + 1
    } else {
      this.activeMini = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  private clickmulti(step: any, index: number) {
    if (step.disabled) {
      this.activeMulti = index + 1
    } else {
      this.activeMulti = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  private clickmultimini(step: any, index: number) {
    if (step.disabled) {
      this.activeMultiMini = index + 1
    } else {
      this.activeMultiMini = index
      this.$message.success(`点击 ${step.title}成功`)
    }
  }

  private goMulti(val: number) {
    this.activeMulti = this.activeMulti + val
    if (this.activeMulti < 0) {
      this.activeMulti = 0
    }
  }

  private goMultiMini(val: number) {
    this.activeMultiMini = this.activeMultiMini + val
    if (this.activeMultiMini < 0) {
      this.activeMultiMini = 0
    }
  }

  private getTitle(s: any, index: number) {
    if (index === this.active) {
      return '正在处理'
    } else if (index === this.active + 1) {
      return '等待处理'
    } else if (this.steps.length - 1 === this.active) {
      return '处理完成'
    } else {
      return s.title
    }
  }

  private getTitleSmall(s: any, index: number) {
    if (index === this.activeMini) {
      return '正在处理'
    } else if (index === this.activeMini + 1) {
      return '等待处理'
    } else if (this.stepsSmall.length - 1 === this.activeMini) {
      return '处理完成'
    } else {
      return s.title
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-style {
  margin-top: $margin-6x;
  margin-bottom: $margin-6x;
}
</style>
