<template>
  <div>
    <el-row>
      <el-radio label="1">未选中项</el-radio>
      <el-radio value="2" label="2">已选中项</el-radio>
      <el-radio disabled label="3">备选项</el-radio>
      <el-radio disabled label="4" value="4">备选项</el-radio>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiRadio'
})
export default class extends Vue {
  public static title = {
    zh: '单选框',
    en: 'Radio'
  }
}
</script>

<style lang='scss' scoped>
.el-row {
  margin-top: 24px;
}
</style>
