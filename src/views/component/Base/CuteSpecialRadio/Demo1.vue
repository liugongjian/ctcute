<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 14:13:00
 * @Description:
-->
<template>
  <div>
    <h3>{{ $t('demo.specialRadio.demo1.medium') }}</h3>
    <cute-special-radio v-model="radio" :options="butonData" size="medium" @change="changeFun" />
    <h3>{{ $t('demo.specialRadio.demo1.small') }}</h3>
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
