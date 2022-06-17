<template>
  <div>
    <h2>默认单选块</h2>
    <div class="sub-sample">
      <el-radio-group v-model="radio1">
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
        <el-checkbox-button label="多选悬停"></el-checkbox-button>
        <el-checkbox-button label="多选选中"></el-checkbox-button>
        <el-checkbox-button label="不可用选中" disabled></el-checkbox-button>
        <el-checkbox-button label="不可用" disabled></el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSelectedButton',
})
export default class extends Vue {
  public static title = {
    zh: '选择按钮',
    en: 'SelectedButton',
  }

  private radio1 = 'Active'
  private radio2 = ['多选选中', '不可用选中']
}
</script>
