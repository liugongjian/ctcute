<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 14:27:54
 * @Description: 
-->
<template>
  <div>
    <h3>{{ $t('demo.remindSelect.demo1.single') }}</h3>
    <cute-remind-select
      v-model="value"
      :options="options"
      :title="name"
      :placeholder="name"
      @change="changeFun"
    />
    <h3>{{ $t('demo.remindSelect.demo1.multiple') }}</h3>
    <cute-remind-select
      v-model="values"
      :options="options"
      multiple
      :title="name"
      :placeholder="name"
      @change="changeFun1"
    />
    <cute-remind-select
      v-model="valueTags"
      :options="options"
      multiple
      collapse-tags
      :title="name"
      :placeholder="name"
      @change="changeFun2"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private name = this.$t('demo.remindSelect.demo1.options')
  private value = ''
  private values = []
  private valueTags = []

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
  private changeFun1(key) {
    this.values = key
  }
  private changeFun2(key) {
    this.valueTags = key
  }
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }

  .el-select + .el-select {
    margin-left: 20px;
  }
}
</style>
