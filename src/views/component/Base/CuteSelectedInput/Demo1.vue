<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-20 13:46:46
 * @Description: 
-->
<template>
  <cute-selected-input :checked-list="checkList" :options="optionData" @change="change" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {
  private checkList = ['已选中项']
  private optionData = [
    {
      label: '退订',
      value: '1',
    },
    {
      label: '续订',
      value: '2',
    },
  ]

  private change(data) {
    console.log(data)
  }
}
</script>
