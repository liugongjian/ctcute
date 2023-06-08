<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 17:49:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-06 19:16:18
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>CuteFixedHeader / 吸顶Header</h1>
      <component-demo path="@/views/component/Base/CuteFixedHeader/Demo1.vue">
        <demo1 />
      </component-demo>

      <h2>CuteFixedHeader Slot</h2>
      <el-table :data="slots" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteTitledBlockDemo',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private slots = [
    {
      name: '-',
      desc: 'Header内容',
    },
  ]
}
</script>
