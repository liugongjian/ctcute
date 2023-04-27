<!--
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-04-11 13:49:34
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-27 10:09:26
 * @Description: 
-->
<template>
  <div class="page-test">
    <h1>{{ $t('componentTest.radio.title') }}</h1>
    <el-card>
      <h3>{{ $t('componentTest.radio.basic') }}</h3>
      <el-form inline>
        <div>
          <el-radio v-model="value" :size="itemSize" :disabled="itemDisabled" label="1">{{
            $t('componentTest.radio.optionA')
          }}</el-radio>
          <el-radio v-model="value" :size="itemSize" :disabled="itemDisabled" label="2">{{
            $t('componentTest.radio.optionB')
          }}</el-radio>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <h3>{{ $t('componentTest.radio.buttonStyle') }}</h3>
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
            $t('componentTest.common.data.disable')
          }}</el-radio-button>
          <el-radio-button :value="false" :label="false">{{
            $t('componentTest.common.data.enable')
          }}</el-radio-button>
        </el-radio-group>
      </div>
      <el-radio-group v-model="value21" :size="itemSize" :disabled="itemDisabled">
        <el-radio-button :label="$t('componentTest.common.data.sh')"></el-radio-button>
        <el-radio-button :label="$t('componentTest.common.data.bj')"></el-radio-button>
        <el-radio-button :label="$t('componentTest.common.data.gz')"></el-radio-button>
        <el-radio-button :label="$t('componentTest.common.data.sz')"></el-radio-button>
      </el-radio-group>
    </el-card>
    <el-card>
      <h3>{{ $t('componentTest.radio.special') }}</h3>
      <div>
        <cute-special-radio
          v-model="value21"
          :size="itemSize"
          :disabled="itemDisabled"
          :options="buttonData"
        />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteSpecialRadio } from '@cutedesign/ui'
@Component({
  name: 'UiRadio',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  private itemSize = 'medium'
  private itemDisabled = false
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
  private value21 = '上海'
  private buttonData = [
    {
      label: this.$t('componentTest.common.data.sh'),
    },
    {
      label: this.$t('componentTest.common.data.bj'),
    },
    {
      label: this.$t('componentTest.common.data.sz'),
      disabled: true,
    },
  ]
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
