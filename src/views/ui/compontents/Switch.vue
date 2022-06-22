<template>
  <div>
    <el-row>
      <el-col :span="1" class="switch-enable"><b>Enable</b></el-col>
      <el-col :span="1">
        <el-switch v-model="value1"> </el-switch>
      </el-col>
      <el-col :span="1">
        <el-switch v-model="value"> </el-switch>
      </el-col>
      <el-col :span="1" class="small-switch">
        <el-switch v-model="value2"> </el-switch>
      </el-col>
      <el-col :span="6" class="small-switch">
        <el-switch v-model="value3"> </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" class="switch-unable"><b>Unable</b></el-col>
      <el-col :span="1">
        <el-switch :value="false" disabled> </el-switch>
      </el-col>
      <el-col :span="1">
        <el-switch :value="true" disabled> </el-switch>
      </el-col>
      <el-col :span="1" class="small-switch">
        <el-switch :value="false" disabled> </el-switch>
      </el-col>
      <el-col :span="6" class="small-switch">
        <el-switch :value="true" disabled> </el-switch>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSwitch',
})
export default class extends Vue {
  public static title = {
    zh: '开关',
    en: 'Switch',
  }

  private value = true
  private value1 = false
  private value2 = false
  private value3 = true
}
</script>

<style lang="scss" scoped>
.switch-enable,
.switch-unable {
  margin-right: 10px;
}
</style>
