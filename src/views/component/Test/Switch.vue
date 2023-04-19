<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 14:58:04
 * @Description: Slider
-->
<template>
  <div>
    <h1>Switch 开关</h1>
    <el-card>
      <SwitchDemo />
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SwitchDemo from '@/views/ui/components/Switch.vue'

@Component({
  name: 'Slider',
  components: {
    SwitchDemo,
  },
})
export default class extends Vue {}
</script>
