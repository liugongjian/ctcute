<template>
  <div>
    <!-- 多个DEMO请复制此段 -->
    <div class="component__container">
      <h1>CuteSelectedInput / 操作已选项</h1>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <component-demo path="@/views/component/Base/CuteSelectedInput/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CuteSelectedInput Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>CuteSelectedInput Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectedInput',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'data',
      desc: '选中项',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'option-data',
      desc: '选项列表',
      type: 'Array',
      options: null,
      default: null,
    },
  ]

  private event = [
    {
      name: 'request',
      desc: '选中值发生变化时触发	',
      callback: '选中项',
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
</style>
