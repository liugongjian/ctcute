<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-05-08 15:47:43
 * @Description: Notification 通知提醒框
-->
<template>
  <div>
    <h1>Notification</h1>
    <div class="sub-notification">
      <p>全局展示通知提醒信息</p>
      <h3>普通通知提醒</h3>
      <p>常规状态通常出现在页面的右上角</p>
      <el-row>
        <el-button
          @click="
            $notify({
              title: '通知',
              duration: 0,
              message:
                '通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容通知的内容',
              customClass: 'routine-tips',
            })
          "
        >
          常规信息
        </el-button>
      </el-row>
      <h3>带图标的通知提醒</h3>
      <p>有普通信息、成功信息、失败信息、警告信息四种icon</p>
      <el-button
        @click="
          $notify.info({
            title: '通知的标题十个字以内',
            duration: 0,
            message:
              '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
            customClass: 'ordinary-tips',
          })
        "
      >
        普通信息
      </el-button>
      <el-button
        @click="
          $notify.success({
            title: '通知的标题十个字以内',
            duration: 0,
            message:
              '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
            customClass: 'success-tips',
          })
        "
      >
        成功信息
      </el-button>
      <el-button
        @click="
          $notify.error({
            title: '通知的标题十个字以内',
            duration: 0,
            message:
              '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
            customClass: 'error-tips',
          })
        "
      >
        失败信息
      </el-button>
      <el-button
        @click="
          $notify({
            title: '通知的标题十个字以内',
            duration: 0,
            message:
              '通知的内容内容内容什么的通知的内容内容内容什么的，通知的内内容内容什么的通知的内容内容内容，什么的通知的内容内容内容什么的，通知的内容内容内容什么的通知的',
            type: 'warning',
            customClass: 'warning-tips',
          })
        "
      >
        警告信息
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Notification',
})
export default class extends Vue {}
</script>
