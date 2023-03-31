<!--
 * @Author: 黄靖
 * @Date: 2023-03-31 15:30:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-31 15:30:49
 * @Description: 此为直接覆写element-ui的组件，el-steps原有的属性和事件未变，下面只列出新增/有改动的部分
-->
<template>
  <div>
    <h3>基础步骤条</h3>
    <div class="sub-steps">
      <el-steps :space="180" :active="active" finish-status="success">
        <el-step
          v-for="(s, index) in steps"
          :key="index"
          :title="getTitle(s, index)"
          :status="s.status"
          :disabled="s.disabled"
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
              activeMini++
            }
          "
        >
          下一步
        </el-button>
        <el-button @click="() => (activeMini = 0)">重 置</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {},
  name: 'Demo1',
})
export default class extends Vue {
  private steps = [
    { title: '步骤1' },
    { title: '步骤2' },
    { title: '步骤3' },
    { title: '不可点击', disabled: true },
    { title: '错误/失败', status: 'error' },
    { title: '结束' },
  ]
  private active = 1
  private activeMini = 1
}
</script>
<style lang="scss" scoped></style>
