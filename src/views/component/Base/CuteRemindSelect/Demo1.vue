<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-20 09:04:34
 * @Description: 
-->
<template>
  <cute-remind-select
    v-model="value"
    :options="options"
    :title="name"
    :placeholder="name"
    @change="changeFun"
  />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private name = '数据资源名称'
  private value = ''
  private options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ]
  //子组件修改父组件的值
  private changeFun(key) {
    this.value = key
  }
}
</script>
