<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-17 14:55:42
 * @Description: Input
-->
<template>
  <div class="demo-input">
    <h1>Input 输入框</h1>
    <InputDemo />
    <!-- <hr />
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
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InputDemo from '@/views/ui/components/Input.vue'

@Component({
  name: 'Input',
  components: {
    InputDemo,
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
    margin: 10px 0;
  }
}
</style>
