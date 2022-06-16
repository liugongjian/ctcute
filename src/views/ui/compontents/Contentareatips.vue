<template>
  <div class="sub-contentareatips">
    <p>在内容区域的提示样式，在内容下方与内容进行左对齐，与内容间距为8px。后面直接跟一个提示icon的情况</p>
    <el-row>
      <el-col :span="5">
        <el-alert title="这是一个普通提示" :closable="false">
          <span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle" /></span>
        </el-alert>
      </el-col>
      <el-col :span="5" :pull="1">
        <el-alert title="这是一个警告提示" type="warning" show-icon :closable="false"> </el-alert>
      </el-col>
      <el-col :span="5" :pull="2">
        <el-alert title="这是一个错误提示" type="error" show-icon :closable="false"> </el-alert>
      </el-col>
      <el-col :span="5" :pull="3">
        <el-alert>
          <span slot="icon-custom"><svg-icon class="el-alert__icon" name="question-circle" /></span>
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiContentAreaTips',
})
export default class extends Vue {
  public static title = {
    zh: '内容区提示',
    en: 'Content Area Tips',
  }
}
</script>
