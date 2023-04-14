<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-14 10:18:26
 * @Description:
-->
<template>
  <cute-button-group :data="buttonData" :max="2" :size="size" @change="btnGroupChange" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private buttonData = [
    { label: '操作一', name: 'op1' },
    { label: '操作二', name: 'op2' },
    { label: '操作三', name: 'op3' },
    { label: '操作四', name: 'op4' },
    { label: '操作五', name: 'op5' },
    { label: '操作六', name: 'op6' },
    { label: '操作七', name: 'op7' },
    { label: '操作八', name: 'op8' },
    { label: '操作九', name: 'op9' },
    { label: '操作十', name: 'op10' },
    { label: '主操作', name: 'op-main' },
  ]

  private size = 'medium'

  private btnGroupChange(name) {
    console.log(name)
  }
}
</script>
