<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-23 14:26:55
 * @Description: 
-->
<template>
  <div>
    <div>
      <div class="input-content">
        <el-radio-group v-model="inputDisabled" size="small">
          <el-radio-button :value="true" :label="true">禁用</el-radio-button>
          <el-radio-button :value="false" :label="false">启用</el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <h3>默认用法 - 大</h3>
        <div>
          <el-switch v-model="value1" :disabled="inputDisabled"> </el-switch>
        </div>
        <h3>默认用法 - 小</h3>
        <div>
          <el-switch v-model="value2" class="small-switch" :disabled="inputDisabled" :width="32"> </el-switch>
        </div>
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
  private inputSize = 'medium'
  private inputDisabled = false
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
.input-content {
  width: 846px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  clear: both;
  .el-input {
    width: 250px;
  }
}
</style>
