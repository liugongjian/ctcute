<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-01-10 17:21:17
 * @Description: 
-->
<template>
  <div>
    <div class="sub-switch">
      <b>Enable</b>
      <div>
        <el-switch v-model="value1"> </el-switch>
        <el-switch v-model="value"> </el-switch>
      </div>
      <div class="small-switch">
        <!-- 宽度不要用important 用原生width-->
        <el-switch v-model="value2" width="28"> </el-switch>
        <el-switch v-model="value3" width="28"> </el-switch>
      </div>
    </div>
    <div class="sub-switch">
      <b>Unable</b>
      <div>
        <el-switch :value="false" disabled> </el-switch>
        <el-switch :value="true" disabled> </el-switch>
      </div>
      <div class="small-switch">
        <el-switch :value="false" disabled width="28"> </el-switch>
        <el-switch :value="true" disabled width="28"> </el-switch>
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
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
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
  color: $color-grey-1;
}

.sub-switch {
  display: flex;
  align-items: center;
  margin-top: 24px;
}
</style>
