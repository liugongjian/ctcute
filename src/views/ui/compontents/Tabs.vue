<template>
  <div>
    <h3>基础样式</h3>
    <el-row>
      <el-tabs value="frist">
        <el-tab-pane label="选项一" name="first">选项一</el-tab-pane>
        <el-tab-pane label="选项二" name="second">选项二</el-tab-pane>
        <el-tab-pane label="选项三" name="third">选项三</el-tab-pane>
      </el-tabs>
    </el-row>
    <hr />
    <h3>带icon样式</h3>
    <el-row>
      <el-tabs>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项一</span>
          选项一
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项二</span>
          选项二
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项三</span>
          选项三
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <hr />
    <h3>卡片样式</h3>
    <el-row>
      <el-tabs value="third" type="card">
        <el-tab-pane label="hover项" name="first">hover项</el-tab-pane>
        <el-tab-pane label="默认项" name="second">默认项</el-tab-pane>
        <el-tab-pane label="选中项" name="third">选中项</el-tab-pane>
        <el-tab-pane label="禁用选项" name="fourth" disabled>禁用选项</el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-tabs type="card" editable>
        <el-tab-pane>
          <span slot="label">选项一</span>
          选项一
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">选项二</span>
          选项二
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">选项三</span>
          选项三
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-tabs value="second1" type="card">
        <el-tab-pane label="默认选项" name="first1">默认选项</el-tab-pane>
        <el-tab-pane label="默认项" name="second1">选中选项</el-tab-pane>
        <el-tab-pane label="hover选项" name="third1">hover选项</el-tab-pane>
        <el-tab-pane label="选中不可点项" name="fourth1" disabled>选中不可点选项</el-tab-pane>
        <el-tab-pane label="禁用选项" name="fourt2" disabled>禁用选项</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiTabs",
})
export default class extends Vue {
  public static title = {
    zh: "选项卡",
    en: "Tabs",
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 20px 0 24px 0;
}
</style>
