<template>
  <div class="ui-radio">
    <div class="sub-down">
      <!-- <h3>普通</h3> -->
      <el-row>
        <el-radio v-model="value" label="1">未选中项</el-radio>
        <el-radio v-model="value" label="2">已选中项</el-radio>
        <el-radio disabled label="3">未选失效项</el-radio>
        <el-radio disabled label="4" value="4">已选失效项</el-radio>
      </el-row>
    </div>
    <!-- <div class="sub-down">
      <h3>按钮型</h3>
      <el-row class="radio-button-row">
        <div class="r-box">
          <el-radio-group v-model="value21">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="r-box">
          <el-radio-group v-model="value22" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="r-box">
          <el-radio-group v-model="value23" size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button disabled label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </el-row>
    </div> -->
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
    maintainer: '孙善鹏',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }

  private value = '2'
  private value21 = '上海'
  private value22 = '上海'
  private value23 = '上海'
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 24px;
}

.radio-button-row {
  display: flex;

  .r-box {
    margin-right: 24px;
  }
}
</style>
