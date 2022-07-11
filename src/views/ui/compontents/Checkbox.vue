<template>
  <div>
    <el-row>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
      <!-- <el-checkbox>未选中项</el-checkbox>
      <el-checkbox checked>已选中项</el-checkbox> -->
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
        部分选中
      </el-checkbox>
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

  private cityOptions = ['未选中项', '选中项']

  private checkedCities = ['选中项']
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
  .el-checkbox-group {
    display: inline-block;
    // padding-right: 10px;
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    margin-right: 30px;
  }
}
</style>
