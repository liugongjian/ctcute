<template>
  <div>
    <h1>Progress 进度条</h1>
    <div>
      <h3>线形进度条</h3>
      <el-progress class="mb-8" :percentage="50"></el-progress>
      <el-progress class="mb-8" :percentage="100" :format="format"></el-progress>
      <el-progress class="mb-8" :percentage="100" status="success"></el-progress>
      <el-progress class="mb-8" :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <div>
      <h3>百分比内显</h3>
      <el-progress class="mb-8" :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress
        class="mb-8"
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        class="mb-8"
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
      ></el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
    <div>
      <h3>自定义颜色</h3>
      <el-progress class="mb-8" :percentage="percentage" :color="customColor"></el-progress>

      <el-progress class="mb-8" :percentage="percentage" :color="customColorMethod"></el-progress>

      <el-progress class="mb-8" :percentage="percentage" :color="customColors"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>
    </div>
    <div>
      <h3>环形进度条</h3>
      <el-progress class="mr-8" type="circle" :percentage="0"></el-progress>
      <el-progress class="mr-8" type="circle" :percentage="25"></el-progress>
      <el-progress class="mr-8" type="circle" :percentage="100" status="success"></el-progress>
      <el-progress class="mr-8" type="circle" :percentage="70" status="warning"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <div>
      <h3>仪表盘形进度条</h3>
      <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
      <div>
        <el-button-group>
          <el-button icon="el-icon-minus" @click="decrease"></el-button>
          <el-button icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Progress',
})
export default class extends Vue {
  public format(percentage) {
    return percentage === 100 ? '满' : `${percentage}%`
  }
  public percentage = 20
  public customColor = '#409eff'
  public customColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
  ]
  public colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
  ]

  public customColorMethod(percentage) {
    if (percentage < 30) {
      return '#909399'
    } else if (percentage < 70) {
      return '#e6a23c'
    } else {
      return '#67c23a'
    }
  }
  public increase() {
    this.percentage += 10
    if (this.percentage > 100) {
      this.percentage = 100
    }
  }
  public decrease() {
    this.percentage -= 10
    if (this.percentage < 0) {
      this.percentage = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.mb-8 {
  margin-bottom: 8px;
}

.mr-8 {
  margin-right: 8px;
}
</style>
