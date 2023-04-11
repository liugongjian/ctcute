<!--
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-04-11 13:49:34
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-04-11 16:24:06
 * @Description: 
-->
<template>
  <div class="page-test">
    <h1>Radio 单选框</h1>
    <el-card>
      <h3>普通按钮</h3>
      <el-form inline>
        <div>
          <el-radio v-model="value" :size="itemSize" :disabled="itemDisabled" label="1">未选中项</el-radio>
          <el-radio v-model="value" :size="itemSize" :disabled="itemDisabled" label="2">已选中项</el-radio>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <h3>按钮型</h3>
      <div class="page-content">
        <el-radio-group v-model="itemSize" size="small">
          <el-radio-button value="medium" label="medium">默认</el-radio-button>
          <el-radio-button value="small" label="small">小</el-radio-button>
          <el-radio-button value="large" label="large">大</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="itemDisabled" size="small">
          <el-radio-button :value="true" :label="true">禁用</el-radio-button>
          <el-radio-button :value="false" :label="false">启用</el-radio-button>
        </el-radio-group>
      </div>
      <el-radio-group v-model="value21" :size="itemSize" :disabled="itemDisabled">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-card>
    <el-card>
      <h3>特殊单选</h3>
      <div>
        <cute-special-radio
          v-model="value21"
          :size="itemSize"
          :disabled="itemDisabled"
          :options="buttonData"
        />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteSpecialRadio } from '@cutedesign/ui'
@Component({
  name: 'UiRadio',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  private itemSize = 'medium'
  private itemDisabled = false
  public static title = {
    zh: '单选框',
    en: 'Radio',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private value = '2'
  private value21 = '上海'
  private buttonData = [
    {
      label: '上海',
    },
    {
      label: '北京',
    },
    {
      label: '深圳',
      disabled: true,
    },
  ]
}
</script>

<style lang="scss" scoped>
.page-test {
  .el-card {
    margin-bottom: $margin-4x;

    h3 {
      margin-top: 0;
    }
  }
}

.page-content {
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  .el-input {
    width: 250px;
  }
}
</style>
