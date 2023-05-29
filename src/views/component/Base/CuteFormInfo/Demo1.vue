<!--
 * @Author: 朱凌浩
 * @Date: 2023-05-16 10:01:49
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-05-16 10:01:49
 * @Description: 表单项提示
-->
<template>
  <el-form ref="simpleForm" :model="form" label-width="90px" class="simple-form">
    <el-form-item label="标题测试" prop="longText">
      <el-select v-model="form.longText" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <cute-form-info title="标题测试" content="对标题测试的详细说明" />
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  // 多选项
  private options = [
    {
      label: '测试1',
      value: 1,
    },
    {
      label: '测试2',
      value: 2,
    },
  ]
  // 表单对象
  private form = {
    longTitle: null,
  }
}
</script>
<style lang="scss" scoped></style>
