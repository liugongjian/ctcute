<!--
 * @Author: 马妍
 * @Date: 2022-07-19 22:03:32
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-23 09:09:22
 * @Description: 
-->
<template>
  <div>
    <h3>多选</h3>
    <cute-select-tree
      v-model="multiTreeData"
      :value="multiTsreeDataValue"
      :options="treeOptions"
      multiple
      @remove-tag="handelRemove"
    />

    <h3>单选</h3>
    <cute-select-tree v-model="treeData" :value="treeDataValue" :options="treeOptions" />
  </div>
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
  private treeData = ''
  private treeDataValue = ''

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
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
</style>
