<!--
 * @Author: error: 孙善鹏
 * @Date: 2023-04-11 13:49:34
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-27 10:24:58
 * @Description: 
-->
<template>
  <div class="page-test">
    <h1>{{ $t('componentTest.checkbox.title') }}</h1>
    <el-card>
      <h3>{{ $t('componentTest.checkbox.basic') }}</h3>
      <el-form inline>
        <div>
          <el-checkbox-group
            v-model="itemChecked"
            :size="itemSize"
            :disabled="itemDisabled"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cityOptions" :key="city" :label="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <h3>{{ $t('componentTest.checkbox.basicGroup') }}</h3>
      <el-form inline>
        <div>
          <el-checkbox
            v-model="checkAll"
            :disabled="itemDisabled"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >
            {{ $t('componentTest.common.data.all') }}
          </el-checkbox>
          <el-checkbox-group
            v-model="itemChecked"
            :size="itemSize"
            :disabled="itemDisabled"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cityOptions" :key="city" :label="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <h3>{{ $t('componentTest.checkbox.special') }}</h3>
      <div class="page-content">
        <el-radio-group v-model="itemSize" size="small">
          <el-radio-button value="medium" label="medium">{{
            $t('componentTest.common.data.default')
          }}</el-radio-button>
          <el-radio-button value="small" label="small">{{
            $t('componentTest.common.data.small')
          }}</el-radio-button>
          <el-radio-button value="large" label="large">{{
            $t('componentTest.common.data.large')
          }}</el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="itemDisabled" size="small">
          <el-radio-button :value="true" :label="true">{{
            $t('componentTest.common.data.enable')
          }}</el-radio-button>
          <el-radio-button :value="false" :label="false">{{
            $t('componentTest.common.data.disable')
          }}</el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <el-checkbox-group v-model="itemChecked" :size="itemSize" :disabled="itemDisabled">
          <el-checkbox-button v-for="city in cityOptions" :key="city" :label="city">{{
            city
          }}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiRadio',
})
export default class extends Vue {
  private itemSize = 'medium'
  private itemDisabled = false

  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private cityOptions = [
    this.$t('componentTest.common.data.sh'),
    this.$t('componentTest.common.data.bj'),
    this.$t('componentTest.common.data.sz'),
  ]
  private itemChecked: any = ['上海']
  private isIndeterminate = true
  private checkAll = false

  private handleCheckedCitiesChange(value) {
    const checkedCount = value.length
    this.checkAll = checkedCount === this.cityOptions.length
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length
  }
  private handleCheckAllChange(val) {
    this.itemChecked = val ? this.cityOptions : []
    this.isIndeterminate = false
  }
}
</script>

<style lang="scss" scoped>
.page-test {
  .el-card {
    margin-bottom: $margin-4x;

    h3 {
      margin-top: 0;
    }
  }
}

.page-content {
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  .el-input {
    width: 250px;
  }
}
</style>
