<template>
  <div>
    <div class="sub-switch">
      <b>Enable</b>
      <div>
        <el-switch v-model="value1"> </el-switch>
        <el-switch v-model="value"> </el-switch>
      </div>
      <div class="small-switch">
        <el-switch v-model="value2"> </el-switch>
        <el-switch v-model="value3"> </el-switch>
      </div>
    </div>
    <div class="sub-switch">
      <b>Unable</b>
      <div>
        <el-switch :value="false" disabled> </el-switch>
        <el-switch :value="true" disabled> </el-switch>
      </div>
      <div class="small-switch">
        <el-switch :value="false" disabled> </el-switch>
        <el-switch :value="true" disabled> </el-switch>
      </div>
    </div>
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
b {
  margin-right: 24px;
}
.sub-switch {
  display: flex;
  align-items: center;
  margin-top: 24px;
}
</style>
