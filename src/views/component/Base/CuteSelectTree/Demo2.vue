<!--
 * @Author: 黄靖
 * @Date: 2023-03-16 19:03:32
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-08 21:14:57
 * @Description: 
-->
<template>
  <div>
    <cute-select-tree v-model="treeData" default-expand-all :options="treeOptions" :node-props="nodeProps" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo2',
})
export default class extends Vue {
  private treeData = ''

  private nodeProps = {
    label: 'name',
    value: 'ucode',
    disabled: data => data.type !== 'zone',
    children: 'subItems',
  }

  treeOptions = [
    {
      ucode: 1,
      name: 'region1',
      type: 'region',
      subItems: [
        {
          ucode: 4,
          name: 'zone1',
          type: 'zone',
        },
      ],
    },
    {
      ucode: 2,
      name: 'region2',
      type: 'region',
      subItems: [
        {
          ucode: 5,
          name: 'zone2',
          type: 'zone',
        },
        {
          ucode: 6,
          name: 'zone3',
          type: 'zone',
          subItems: [
            {
              ucode: 9,
              name: 'device1',
              type: 'device',
            },
            {
              ucode: 10,
              name: 'device2',
              type: 'device',
            },
          ],
        },
      ],
    },
    {
      ucode: 3,
      name: 'region3',
      subItems: [
        { ucode: 7, name: 'zone4', type: 'zone' },
        { ucode: 8, name: 'zone45', type: 'zone' },
      ],
    },
  ]
}
</script>
<style lang="scss" scoped>
.component__container {
  .el-select {
    width: 300px;
  }
}
.custom-node {
  width: 100%;
  margin-right: 20px;
}
.custom-info {
  float: right;
  color: #999;
}
</style>
