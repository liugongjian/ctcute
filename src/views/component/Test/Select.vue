<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 15:05:23
 * @Description: Select
-->
<template>
  <div>
    <h1>Select</h1>
    <el-card>
      <SelectDemo />
    </el-card>
    <!-- <el-select v-model="selectVal" size="large" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-select v-model="selectVal" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-select v-model="selectVal" size="small" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>

    <el-select v-model="selectVal" size="mini" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SelectDemo from '@/views/ui/components/Select.vue'

@Component({
  name: 'Select',
  components: {
    SelectDemo,
  },
})
export default class extends Vue {
  private selectVal = '1'
}
</script>
