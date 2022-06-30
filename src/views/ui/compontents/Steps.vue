<template>
  <div>
    <p>默认横向步骤条。存在常规、进行中、已完成等情况。</p>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <div class="ui-steps">
        <el-steps :space="200" :active="active" finish-status="success">
          <el-step
            v-for="(s, index) in steps"
            :key="index"
            :title="gettitle(s, index)"
            :status="s.status"
            :class="{ stepErr: s.disabled }"
          ></el-step>
        </el-steps>
      </div>
      <el-button
        class="btn-style"
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
    <div class="sub-steps">
      <div class="ui-stepsMin">
        <el-steps :space="200" :active="activeMini" finish-status="success">
          <el-step
            v-for="(s, index) in steps"
            :key="index"
            :title="gettitle(s, index)"
            :status="s.status"
            :class="{ stepErr: s.disabled }"
          ></el-step>
        </el-steps>
      </div>
      <el-button
        class="btn-style"
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
    <div class="sub-steps">
      <steps-multi
        :active="activeMulti"
        :steps="multisteps"
        max-width="60%"
        :go-button="true"
        @clickStep="clickmulti"
        @change="goMulti"
      ></steps-multi>
      <el-button
        class="btn-style"
        @click="
          () => {
            activeMulti++
          }
        "
      >
        下一步
      </el-button>
      <el-button @click="() => (activeMulti = 0)">重置</el-button>
      <steps-multi
        :active="activeMultiMini"
        :steps="multisteps"
        size="mini"
        :space="400"
        max-width="100%"
        :step-size="3"
        :go-button="true"
        @clickStep="clickmultimini"
        @change="goMultiMini"
      ></steps-multi>
      <el-button
        class="btn-style"
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
import StepsMulti from '@/components/Steps/StepsMulti.vue'
@Component({
  name: 'UiSteps',
  components: { StepsMulti },
})
export default class extends Vue {
  public static title = {
    zh: '步骤条',
    en: 'Steps',
  }

  private normalsteps = [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }]

  private steps = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '不可点击', disabled: true },
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

  private gettitle(s: any, index: number) {
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
}
</script>
<style lang="scss" scoped>
.btn-style {
  margin-top: 24px;
  margin-bottom: 24px;
}

.max-style {
  max-width: 800px;
}
</style>
