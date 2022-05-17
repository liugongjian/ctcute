<template>
  <div>
    <el-checkbox>未选中项</el-checkbox>
    <el-checkbox checked>已选中项</el-checkbox>
    <el-checkbox disabled>未选中项</el-checkbox>
    <el-checkbox disabled checked>已选中项</el-checkbox>
    <el-checkbox indeterminate>部分选中</el-checkbox>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiCheckbox",
})
export default class extends Vue {
  public static title = {
    zh: "多选框",
    en: "Checkbox",
  }
}
</script>
