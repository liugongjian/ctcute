<template>
  <div class="ui-radio">
    <el-row>
      <el-radio v-model="value" label="1">未选中项</el-radio>
      <el-radio v-model="value" label="2">已选中项</el-radio>
      <el-radio disabled label="3">未选失效项</el-radio>
      <el-radio disabled label="4" value="4">已选失效项</el-radio>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiRadio',
})
export default class extends Vue {
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
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 24px;
}
</style>
