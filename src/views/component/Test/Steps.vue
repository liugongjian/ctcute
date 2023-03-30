<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-27 15:12:09
 * @Description: Step
-->
<template>
  <div>
    <h1>Steps</h1>
    <StepsDemo />
    <h3>有描述的步骤条</h3>
    <div>
      <el-steps :active="1">
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      </el-steps>
    </div>
    <h3>居中的步骤条</h3>
    <div>
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
    <h3>带图标的步骤条</h3>
    <el-steps :active="1">
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>
    <h3>竖式步骤条</h3>
    <div style="height: 300px">
      <el-steps direction="vertical" :active="1">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
    <h3>简洁风格的步骤条</h3>
    <el-steps :active="1" simple>
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StepsDemo from '@/views/ui/components/Steps.vue'

@Component({
  name: 'Steps',
  components: {
    StepsDemo,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
