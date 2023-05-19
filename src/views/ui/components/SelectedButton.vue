<!--
 * @Author: 马妍
 * @Date: 2022-07-19 16:30:50
 * @LastEditors: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2023-04-11 16:20:51
 * @Description:
-->
<template>
  <div>
    <el-radio-group v-model="inputSize" size="small">
      <el-radio-button value="small" label="small">小</el-radio-button>
      <el-radio-button value="" label="">默认</el-radio-button>
      <el-radio-button value="large" label="large">大</el-radio-button>
    </el-radio-group>
    <h2>默认单选块</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio" :size="inputSize">
        <el-radio-button label="默认选项"></el-radio-button>
        <el-radio-button label="选中选项"></el-radio-button>
        <el-radio-button label="禁用选项" disabled></el-radio-button>
      </el-radio-group>
      <div class="disabled">
        <el-radio-group v-model="radios" :size="inputSize">
          <el-radio-button label="禁用选项" disabled></el-radio-button>
          <el-radio-button label="选中不可选" disabled></el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <!-- <h2>特殊单选块(用于订购页)</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio0" :size="inputSize">
        <el-radio-button
          v-for="button in buutonData"
          :key="button.label"
          :label="button.label"
          :disabled="button.disabled"
        ></el-radio-button>
      </el-radio-group>
    </div> -->

    <h2>多选块</h2>
    <div class="sub-sample">
      <el-checkbox-group v-model="radio2" :size="inputSize">
        <el-checkbox-button label="多选默认"></el-checkbox-button>
        <el-checkbox-button label="多选选中"></el-checkbox-button>
        <el-checkbox-button label="不可用选中" disabled></el-checkbox-button>
        <el-checkbox-button label="不可用" disabled></el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteSpecialRadio } from '@cutedesign/ui'

@Component({
  name: 'UiSelectedButton',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  public static title = {
    zh: '选择按钮',
    en: 'SelectedButton',
  }
  public static description = {
    maintainer: '马妍、王亚振',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private size = 'small'
  public inputSize = ''
  private buutonData = [
    {
      label: 'Active',
    },
    {
      label: 'Default',
    },
    {
      label: 'Disabled',
      disabled: true,
    },
  ]
  private radio = '选中选项'
  private radio0 = 'Active'
  private radio1 = 'Active'
  private radio2 = ['多选选中', '不可用选中']
  private radios = '选中不可选'
  private changeFun(key) {
    this.radio0 = key
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  margin-top: 24px;
}
</style>
