<template>
  <div>
    <p>将动作或菜单折叠到下拉菜单中</p>
    <div class="sub-down">
      <h3>常规用法</h3>
      <div>
        <el-button type="text">默认</el-button><el-button type="text" disabled>存在分组</el-button><el-button type="text" disabled>存在多行字段</el-button><el-button type="text" disabled>不可用</el-button><el-button type="text" disabled>存在辅助信息</el-button>
      </div>
      <el-select value="">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option> -->
      </el-select>
    </div>
    <div class="sub-down">
      <h3>禁用状态</h3>
      <el-select value="选项一" disabled placeholder="请选择">
        <el-option label="选项一" value="选项一"> </el-option>
      </el-select>
    </div>
    <div class="sub-down">
      <h3>多选</h3>
      <el-select :value="['选项A', '选项B']" multiple placeholder="请选择">
        <el-option label="选项A" value="选项A"> </el-option>
        <el-option label="选项B" value="选项B"> </el-option>
      </el-select>
    </div>
    <div class="sub-down">
      <h3>带提示</h3>
      <el-select
        value=""
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择数据资源事权单位"
      >
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> -->
        <!-- </el-option> -->
      </el-select>
    </div>
    <div class="sub-down">
      <h3>日期/时间选择</h3>
      <el-row>
        <el-col :span="6"> <el-date-picker type="date" placeholder="开始日期"> </el-date-picker></el-col>
        <el-col :span="6">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期和时间"
            end-placeholder="结束日期和时间"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px">
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="选择时间"> </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker type="date" placeholder="开始日期" size="mini"> </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker type="datetime" placeholder="选择时间" size="mini"> </el-date-picker>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiSelect'
})
export default class extends Vue {
  public static title = {
    zh: '选择器',
    en: 'Select'
  }
}
</script>

<style lang="scss" scoped>
</style>
