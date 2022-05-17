<template>
  <div>
    <div class="routine-input">
      <h3>常规用法</h3>
      <el-input placeholder="请输入"></el-input>
    </div>
    <div class="sub-input">
      <h3>禁用状态</h3>
      <el-input placeholder="请输入" :disabled="true"> </el-input>
      <el-input type="textarea" :rows="5" placeholder="请输入" :disabled="true"> </el-input>
    </div>
    <div class="search-input">
      <h3>搜索输入框</h3>
      <el-input placeholder="请输入"> </el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input>
    </div>
    <div class="Stepper-input">
      <h3>步进器</h3>
      <el-input-number controls-position="right" :min="1" :max="10"></el-input-number>
    </div>
    <div class="Tips-input">
      <h3 class="sub-title">带提示的输入框</h3>
      <el-autocomplete class="inline-input" placeholder="请输入内容"></el-autocomplete>
    </div>
    <div class="text-input">
      <h3>长文本域</h3>
      <el-input type="textarea" :rows="5" placeholder="请输入" maxlength="128" show-word-limit> </el-input>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiInput",
})
export default class extends Vue {
  public static title = {
    zh: "输入框",
    en: "Input",
  }
}
</script>
<style lang="scss" scoped>
.el-input {
  width: 300px;
  height: 40px;
  margin: 20px 0;
}
.el-textarea {
  display: block;
  width: 300px;
  // height: 40px;
}
.el-input.el-input--prefix {
  width: 200px;
  margin-left: 48px;
}
</style>
