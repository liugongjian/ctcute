<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-25 14:22:10
 * @Description: 
-->
<template>
  <cute-remind-input v-model="value" placeholder="数据资源名称" title="数据资源名称" @change="changeFun" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteRemindInput } from '@cutedesign/base'

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
