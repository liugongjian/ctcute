<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-22 10:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 09:47:21
 * @Description: 支持使用Cuted的Icon
-->
<template>
  <div class="button-demo-1">
    <p>{{ $t('demo.button.demo1.intro') }}</p>
    <el-button icon="plus-circle">{{ $t('demo.button.demo1.add') }}</el-button>
    <el-button icon="plus-circle" size="large" square></el-button>
    <el-button icon="plus-circle" size="medium" square></el-button>
    <el-button icon="plus-circle" size="small" square></el-button>
    <el-button icon="plus-circle" size="mini" square></el-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {}
</script>
