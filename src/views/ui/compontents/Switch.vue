<template>
  <div>
    <el-row>
      <el-col :span="1">
        <el-switch :value="false"> </el-switch>
      </el-col>
      <el-col :span="6">
        <el-switch :value="true"> </el-switch>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSwitch'
})
export default class extends Vue {
  public static title = {
    zh: '开关',
    en: 'Switch'
  }
}
</script>
