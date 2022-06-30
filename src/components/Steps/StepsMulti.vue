<template>
  <div>
    <el-row align="middle" :style="{ 'max-width': maxWidth }">
      <el-col v-if="goButton" :span="1">
        <div class="button-col point-style" @click="goPre"><i class="el-icon-arrow-left"></i></div>
      </el-col>
      <el-col :span="16">
        <div :class="size === 'mini' ? 'ui-stepsMin' : 'ui-steps'">
          <el-steps
            :space="space"
            :active="active"
            finish-status="success"
            :class="{ max: size !== 'mini' }"
            :direction="direction"
          >
            <el-step
              v-for="(s, index) in steps"
              v-show="getShow(index)"
              :key="index"
              :title="gettitle(s, index)"
              :status="s.status"
              :class="{ stepErr: s.disabled }"
              :style="{ minWidth: widthArr[index] }"
              @click.native="!s.disabled && handleStep(s, index)"
            >
            </el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col v-if="goButton" :span="1">
        <div class="button-col point-style" @click="goNext"><i class="el-icon-arrow-right"></i></div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'StepsMulti',
})
export default class extends Vue {
  @Prop({ type: String, default: 'middle' }) size?: string // 步骤条大小，mini
  @Prop({ type: String, default: '100%' }) maxWidth?: string // 步骤条长度
  @Prop({ type: String }) direction?: string // 步骤条方向
  @Prop({ type: Number, default: 0 }) active?: number // 激活
  @Prop({ type: Number, default: 300 }) space?: number // 激活
  @Prop(Array) readonly steps: any // step数据
  @Prop({ type: Number, default: 1 }) stepSize?: number // 多步骤条时使用，显示几个步骤
  @Prop({ type: Boolean, default: false }) goButton?: boolean // 是否展示前后退按钮
  width = '0'
  get widthArr() {
    const { steps } = this
    const lastStepWidth = this.size === 'mini' ? 100 : 120
    return steps.map((s, index) => {
      let result = ''
      if (index < steps.length - 1) {
        result = `calc((100% - ${lastStepWidth}px) / ${steps.length - 1})`
      } else {
        result = `${lastStepWidth}px`
      }
      return result
    })
  }

  handleStep(s: any, index: number) {
    this.$emit('clickStep', s, index)
  }

  getShow(index: number) {
    if (this.stepSize === 1) {
      if (index === 0 || index === this.steps.length - 1 || this.active === index) {
        return true
      } else {
        return false
      }
    } else {
      if (index === 0 || index === this.steps.length - 1) {
        return true
      } else if (index <= this.active + this.stepSize - 1 && index >= this.active) {
        return true
      }
    }
    return false
  }

  gettitle(s: any, index: number) {
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

  goPre() {
    const changeValue = -1
    this.$emit('change', changeValue)
  }

  goNext() {
    const changeValue = 1
    this.$emit('change', changeValue)
  }

  mounted() {
    this.getShow(0)
  }
}
</script>
<style lang="scss" scoped>
.button-col {
  font-size: 20px;
}

::v-deep .el-col-1 {
  width: 30px;
}
</style>
