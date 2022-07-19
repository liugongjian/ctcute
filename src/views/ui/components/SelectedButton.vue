<template>
  <div>
    <h2>默认单选块</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio">
        <el-radio-button label="默认选项"></el-radio-button>
        <el-radio-button label="选中选项"></el-radio-button>
        <el-radio-button label="选中不可选" disabled></el-radio-button>
        <el-radio-button label="禁用选项" disabled></el-radio-button>
      </el-radio-group>
    </div>
    <h2>特殊单选块(用于订购页)</h2>
    <div class="sub-sample">
      <cute-special-radio :data="buutonData" />
    </div>
    <h2>小单选块</h2>
    <div class="sub-sample">
      <cute-special-radio :data="buutonData" :size="size" />
    </div>
    <h2>多选块</h2>
    <div class="sub-sample">
      <el-checkbox-group v-model="radio2">
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
import CuteSpecialRadio from '@/components/CuteRadio/CuteSpecialRadio.vue'

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
  buutonData = [
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
}
</script>
