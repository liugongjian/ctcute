<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-22 10:01:49
 * @LastEditors: Zhulh
 * @LastEditTime: 2023-03-22 10:17:55
 * @Description: 无边框的按钮
-->
<template>
  <div class="button-demo-2">
    <p>无边框的按钮</p>
    <el-button icon="plus-circle" :border="false">添加按钮</el-button>
    <el-button icon="alert-fill" :border="false"></el-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {}
</script>
