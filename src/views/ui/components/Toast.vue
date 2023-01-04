<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: XinZhao
 * @LastEditTime: 2022-12-07 10:48:54
 * @Description:
-->
<template>
  <div class="sub-toast">
    <p>可提供成功、警告和错误等反馈信息:字段区域最长显示文案内容20个字段以内</p>

    <el-row>
      <el-col :span="1">
        <el-button
          type="text"
          @click="
            $message({
              message: '成功提示文案',
              type: 'success',
              customClass: 'toast-success',
            })
          "
        >
          <span class="btn-text">成功</span>
        </el-button>
      </el-col>
      <el-col :span="1">
        <el-button
          type="text"
          @click="
            $message({
              message: '警告提示文案',
              type: 'warning',
              customClass: 'toast-warning',
            })
          "
        >
          <span class="btn-text">警告</span>
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          type="text"
          @click="
            $message({
              message: '错误提示文案',
              type: 'error',
              customClass: 'toast-error',
            })
          "
        >
          <span class="btn-text">错误</span>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiToast',
})
export default class extends Vue {
  public static title = {
    zh: '轻提示',
    en: 'Toast',
  }
  public static description = {
    maintainer: '赵昕',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
}
</script>
<style lang="scss" scoped>
.sub-toast {
  .btn-text {
    font-size: 12px;
  }
}
</style>
