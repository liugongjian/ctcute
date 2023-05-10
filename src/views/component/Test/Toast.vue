<!--
 * @Author: 李志伟
 * @Date: 2023-03-27 16:34:29
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-04-23 10:57:28
 * @Description: Toast 轻提示
-->
<template>
  <div>
    <h1>Toast</h1>
    <p>可提供成功、警告和错误等反馈信息:字段区域最长显示文案内容20个字段以内</p>
    <el-button
      type="text"
      @click="
        $message({
          duration: 0,
          showClose: true,
          message: '成功提示文案',
          type: 'success',
          customClass: 'toast-success',
        })
      "
    >
      <span class="btn-text">成功</span>
    </el-button>
    <el-button
      type="text"
      @click="
        $message({
          duration: 0,
          showClose: true,
          message: '警告提示文案',
          type: 'warning',
          customClass: 'toast-warning',
        })
      "
    >
      <span class="btn-text">警告</span>
    </el-button>
    <el-button
      type="text"
      @click="
        $message({
          duration: 0,
          showClose: true,
          message: '错误提示文案',
          type: 'error',
          customClass: 'toast-error',
        })
      "
    >
      <span class="btn-text">错误</span>
    </el-button>
    <el-button
      type="text"
      @click="
        $message({
          duration: 0,
          showClose: true,
          message: '提示文案',
          customClass: 'toast-error',
        })
      "
    >
      <span class="btn-text">信息</span>
    </el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Toast',
})
export default class extends Vue {}
</script>
