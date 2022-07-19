<template>
  <div>
    <div class="component__container">
      <h1>CuteRemindSelect / 带提示选择器</h1>
      <component-demo path="@/views/component/Base/CuteSelect/Demo1.vue">
        <demo1 />
      </component-demo>
      <h3>CuteRemindSelect 属性</h3>
      <el-table :data="cuteRemindSelectProp" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
    <div class="component__container">
      <h1>CuteSelectedInput / 操作已选项</h1>
      <p>勾选多选列表后，选择操作下拉框会显示勾选了几个选项</p>
      <component-demo path="@/views/component/Base/CuteSelect/Demo2.vue">
        <demo2 />
      </component-demo>
      <h3>CuteSelectedInput Prop</h3>
      <el-table :data="cuteSelectedInputProp" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h3>CuteSelectedInput Event</h3>
      <el-table :data="cuteSelectedInputEvent" fit border>
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
import Demo2 from './Demo2.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelect',
  components: {
    ComponentDemo,
    Demo1,
    Demo2,
  },
})
export default class extends Vue {
  private cuteRemindSelectProp = [
    {
      name: 'model',
      desc: '绑定值',
      type: 'string | number | boolean',
      options: null,
      default: null,
    },
    {
      name: 'data',
      desc: '选项列表',
      type: 'Array',
      options: null,
      default: null,
    },
    {
      name: 'title',
      desc: '标题',
      type: 'string',
      options: null,
      default: null,
    },
    {
      name: 'placeholder',
      desc: '占位内容',
      type: 'string',
      options: null,
      default: null,
    },
  ]

  private cuteSelectedInputProp = [
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

  private cuteSelectedInputEvent = [
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
