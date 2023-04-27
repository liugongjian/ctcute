<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 11:06:55
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
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}1`, name: 'op1' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}2`, name: 'op2' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}3`, name: 'op3' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}4`, name: 'op4' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}5`, name: 'op5' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}6`, name: 'op6' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}7`, name: 'op7' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}8`, name: 'op8' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}9`, name: 'op9' },
    { label: `${this.$t('demo.buttonGroup.demo1.operate')}10`, name: 'op10' },
    { label: this.$t('demo.buttonGroup.demo1.main'), name: 'op-main' },
  ]

  private size = 'medium'

  private btnGroupChange(name) {
    console.log(name)
  }
}
</script>
