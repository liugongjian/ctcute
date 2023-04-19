<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 15:29:41
 * @Description: Slider
-->
<template>
  <div>
    <h1>Drawer 抽屉</h1>
    <el-card>
      <DrawerDemo />
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DrawerDemo from '@/views/ui/components/Drawer.vue'

@Component({
  name: 'Slider',
  components: {
    DrawerDemo,
  },
})
export default class extends Vue {}
</script>
