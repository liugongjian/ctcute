<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 14:34:44
 * @Description:
-->
<template>
  <cute-remind-input
    v-model="value"
    :placeholder="`${this.$t('demo.remindInput.demo1.resource')}1`"
    :title="`${this.$t('demo.remindInput.demo1.resource')}2`"
    @change="changeFun"
  />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteRemindInput } from '@cutedesign/ui'

@Component({
  name: 'Demo4',
  components: { CuteRemindInput },
})
export default class extends Vue {
  private value = ''

  //子组件修改父组件的值
  private changeFun(key) {
    this.value = key
  }
}
</script>
