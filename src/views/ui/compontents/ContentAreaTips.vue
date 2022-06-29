<template>
  <div class="sub-contentareatips">
    <p>在内容区域的提示样式，在内容下方与内容进行左对齐，与内容间距为8px。后面直接跟一个提示icon的情况</p>
    <div class="contentareatips-content">
      <el-alert title="这是一个普通提示" :closable="false">
        <span slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle" /></span>
      </el-alert>
      <el-alert title="这是一个警告提示" type="warning" show-icon :closable="false"> </el-alert>
      <el-alert title="这是一个错误提示" type="error" show-icon :closable="false"> </el-alert>
      <el-alert show-icon :closable="false">
        <span slot="icon-custom">
          <el-tooltip effect="dark" placement="top" content="提示描述性文案">
            <svg-icon class="el-alert__icon" name="question-circle" />
          </el-tooltip>
        </span>
      </el-alert>
    </div>
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
<style lang="scss" scoped>
.contentareatips-content {
  display: flex;
  justify-content: flex-start;

  ::v-deep.el-alert {
    margin-right: 20px;
  }
}
</style>
