<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-25 13:45:13
 * @Description: 
-->
<template>
  <cute-special-radio v-model="radio" :options="buutonData" @change="changeFun" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteSpecialRadio } from '@cutedesign/base'

@Component({
  name: 'Demo4',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  private radio = 'Active'
  private buutonData = [
    {
      label: 'Active',
    },
    {
      label: 'Default',
    },
    {
      label: 'Disabled',
      disabled: true,
    },
  ]

  //子组件修改父组件的值
  private changeFun(key) {
    this.radio = key
  }
}
</script>
