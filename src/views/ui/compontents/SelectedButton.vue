<template>
  <div>
    <h2>默认单选快</h2>
    <div class="sub-sample">
      <default-Radio :data="buutonData" />
    </div>
    <h2>特殊单选快(用于订购页)</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio0">
        <el-radio-button label="Active"></el-radio-button>
        <el-radio-button label="Default"></el-radio-button>
        <el-radio-button label="Disabled" disabled></el-radio-button>
      </el-radio-group>
    </div>
    <h2>小单选块</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio1" size="small">
        <el-radio-button label="Active"></el-radio-button>
        <el-radio-button label="Default"></el-radio-button>
        <el-radio-button label="Disabled" disabled></el-radio-button>
      </el-radio-group>
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
import DefaultRadio from '@/components/Radio/DefaultRadio.vue'

@Component({
  name: 'UiSelectedButton',
  components: { DefaultRadio },
})
export default class extends Vue {
  public static title = {
    zh: '选择按钮',
    en: 'SelectedButton',
  }

  buutonData = [
    {
      label: '默认选项',
    },
    {
      label: '选中选项',
    },
    {
      label: '选中不可选项',
      disabled: true,
    },
    {
      label: '禁用选项',
      disabled: true,
    },
  ]

  private radio0 = 'Active'
  private radio1 = 'Active'
  private radio2 = ['多选选中', '不可用选中']
}
</script>
