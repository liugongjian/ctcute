<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-10 15:06:13
 * @Description:
-->
<template>
  <cute-button-group :data="buttonData" :max="2" @change="btnGroupChange" />
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
  ]
  private btnGroupChange(name) {
    console.log(name)
  }
}
</script>
