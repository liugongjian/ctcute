<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-22 10:01:49
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 09:58:00
 * @Description: 正方形按钮
-->
<template>
  <div class="button-demo-3">
    <p>{{ $t('demo.button.demo1.intro') }}</p>
    <el-button icon="plus-circle" square></el-button>
    <el-button icon="alert-fill" square></el-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo3',
})
export default class extends Vue {}
</script>
