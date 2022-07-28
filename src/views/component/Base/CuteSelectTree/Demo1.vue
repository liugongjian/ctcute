<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-28 10:23:15
 * @Description: 
-->
<template>
  <cute-select-tree
    v-model="multiTreeData"
    :value="multiTsreeDataValue"
    :options="treeOptions"
    multiple
    @change="changeFun2"
    @remove-tag="handelRemove"
  />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo5',
})
export default class extends Vue {
  private checkList = ['已选中项']
  private multiTreeData = []
  private multiTsreeDataValue = []

  treeOptions = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
        },
      ],
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 6,
          label: '二级 2-2',
          children: [
            {
              id: 9,
              label: '三级 2-2-1',
            },
            {
              id: 10,
              label: '三级 2-2-2',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      children: [
        { id: 7, label: '二级 3-1' },
        { id: 8, label: '二级 3-2' },
      ],
    },
  ]

  private changeFun2(key) {
    this.multiTreeData = key
  }
  //删除tag
  private handelRemove(e, value) {
    value.forEach(item => {
      if (e === item) {
        value.splice(item, 1)
      }
    })
  }
}
</script>
