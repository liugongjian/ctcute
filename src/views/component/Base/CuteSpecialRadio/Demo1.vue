<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-13 10:36:12
 * @Description:
-->
<template>
  <div>
    <h3>中尺寸</h3>
    <cute-special-radio v-model="radio" :options="butonData" size="medium" @change="changeFun" />
    <h3>小尺寸</h3>
    <cute-special-radio v-model="radio1" :options="butonData" size="small" @change="changeFun1" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteSpecialRadio } from '@cutedesign/ui'

@Component({
  name: 'Demo4',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  private radio = 'Active'
  private radio1 = 'Active'
  private butonData = [
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
  private changeFun1(key) {
    this.radio1 = key
  }
}
</script>
