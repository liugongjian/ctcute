<template>
  <cute-remind-select :data="options" :title="name" :placeholder="name" :model="value" />
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
}
</script>
