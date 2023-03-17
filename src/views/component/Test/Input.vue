<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Input
-->
<template>
  <el-card class="demo-input">
    <h1>Input</h1>
    <div>
      <el-input v-model="input1" disabled placeholder="请选择日期" suffix-icon="el-icon-date"> </el-input>
    </div>
    <div><el-input v-model="input2" placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input></div>

    <div>
      <el-input v-model="input3" placeholder="请选择日期">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
    </div>
    <div>
      <el-input v-model="input4" placeholder="请输入内容">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>

    <div>
      <el-input v-model="input1" placeholder="请输入内容">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div>
      <el-input v-model="input2" placeholder="请输入内容">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div>
      <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
        <el-select slot="prepend" v-model="select" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <h3>尺寸</h3>
    <div>
      <el-input v-model="input1" size="large" placeholder="large" suffix-icon="el-icon-date"></el-input>
    </div>
    <div>
      <el-input v-model="input2" size="medium" placeholder="medium" suffix-icon="el-icon-date"></el-input>
    </div>
    <div>
      <el-input v-model="input3" size="small" placeholder="small" suffix-icon="el-icon-date"></el-input>
    </div>
    <div>
      <el-input v-model="input4" size="mini" placeholder="mini" suffix-icon="el-icon-date"></el-input>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Table from '@/views/ui/components/Table.vue'

@Component({
  name: 'TypeScriptDemo',
  components: {
    Table,
  },
})
export default class extends Vue {
  private input1 = ''
  private input2 = ''
  private input3 = ''
  private input4 = ''
}
</script>
<style lang="scss" scoped>
.demo-input {
  .el-input {
    width: 800px;
    margin: 10px;
  }
}
</style>
