<template>
  <div>
    <el-row>
      <el-checkbox>未选中项</el-checkbox>
      <el-checkbox checked>已选中项</el-checkbox>
      <el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange"> 部分选中 </el-checkbox>
      <el-checkbox disabled>未选中失效</el-checkbox>
      <el-checkbox disabled checked>已选中失效</el-checkbox>
      <el-checkbox indeterminate disabled>部分选中失效</el-checkbox>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiCheckbox',
})
export default class extends Vue {
  public static title = {
    zh: '多选框',
    en: 'Checkbox',
  }

  private cityOptions = ['上海', '北京', '广州', '深圳']

  private checkedCities = ['上海', '北京']
  private cities = this.cityOptions

  private isIndeterminate = true
  private checkAll = false

  private handleCheckAllChange(val) {
    this.checkedCities = val ? this.cityOptions : []
    this.isIndeterminate = false
  }

  private handleCheckedCitiesChange(value) {
    const checkedCount = value.length
    this.checkAll = checkedCount === this.cities.length
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 24px;
}
</style>
