<!--
 * @Author: 李志伟
 * @Date: 2023-03-27 16:36:42
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-03-28 14:54:57
 * @Description: ContentAreaTips 内容区提示
-->
<template>
  <div>
    <h1>ContentAreaTips 内容区提示</h1>
    <el-row>
      <p>在内容区域的提示样式，在内容下方与内容进行左对齐，与内容间距为8px。后面直接跟一个提示icon的情况</p>
      <h4>
        使用了
        <a href="/component/base/el-alert" target="_blank">ElAlert</a>
        组件
      </h4>
      <div class="contentareatips-content">
        <el-alert title="这是一个普通提示" :closable="false" content-area-tip>
          <template slot="icon-custom"><svg-icon class="el-alert__icon" name="info-circle" /></template>
        </el-alert>
        <el-alert title="这是一个警告提示" type="warning" show-icon :closable="false" content-area-tip>
        </el-alert>
        <el-alert title="这是一个错误提示" type="error" show-icon :closable="false" content-area-tip>
        </el-alert>
        <el-alert show-icon :closable="false" content-area-tip>
          <span slot="icon-custom">
            <el-tooltip effect="dark" placement="top" content="提示描述性文案">
              <svg-icon class="el-alert__icon" name="question-circle" />
            </el-tooltip>
          </span>
        </el-alert>
      </div>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ContentAreaTips',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.contentareatips-content {
  display: flex;
  justify-content: flex-start;
}
</style>
