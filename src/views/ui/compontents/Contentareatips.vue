<template>
  <div class="sub-contentareatips">
    <p>在内容区域的提示样式，在内容下方与内容进行左对齐，与内容间距为8px。后面直接跟一个提示icon的情况</p>
    <el-row>
      <el-col :span="3">
        <el-alert title="提示文案，常规提示" type="info" show-icon :closable="false"> </el-alert>
      </el-col>
      <el-col :span="3">
        <el-alert title="提示文案，预警提示" type="warning" show-icon :closable="false"> </el-alert>
      </el-col>
      <el-col :span="3">
        <el-alert title="提示文案，失败提示" type="error" show-icon :closable="false"> </el-alert>
      </el-col>
      <el-col :span="3">
        <el-alert type="info" show-icon :closable="false"> </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiContentareatips'
})
export default class extends Vue {
  public static title = {
    zh: '内容区提示',
    en: 'Contentareatips'
  }
}
</script>
