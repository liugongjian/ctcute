<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2022-12-28 13:41:27
 * @LastEditTime: 2022-12-28 20:03:27
 * @LastEditors: 甘雨涛
-->
<template>
  <div>
    <div class="component__container">
      <h1>CtMonaco / Monaco代码编辑器</h1>
      <component-demo path="@/views/component/Biz/CtLog/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>CtMonaco Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CtMonaco',
  components: {
    Demo1,
    ComponentDemo,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'language',
      desc: '编辑器语言',
      type: 'String',
      options: '-',
      default: 'yaml',
    },
    {
      name: 'lineNumbers',
      desc: '行号配置',
      type: 'String',
      options: 'on off relative interval',
      default: 'on',
    },
    {
      name: 'automaticLayout',
      desc: '自动布局',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'readOnly',
      desc: '只读模式',
      type: 'boolean',
      options: '-',
      default: 'false',
    },
    {
      name: 'glyphMargin',
      desc: '字行边缘',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'fontSize',
      desc: '字体大小',
      type: 'String',
      options: '-',
      default: '14',
    },
    {
      name: 'autoIndent',
      desc: '自动缩进',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'theme',
      desc: '编辑器主题',
      type: 'String',
      options: 'vs vs-dark hc-black',
      default: 'vs-dark',
    },
    {
      name: 'cursorStyle',
      desc: '光标样式',
      type: 'String',
      options: 'block line',
      default: 'line',
    },
    {
      name: 'minimap',
      desc: '右侧小地图',
      type: 'boolean',
      options: '-',
      default: 'true',
    },
    {
      name: 'width',
      desc: '宽',
      type: 'String',
      options: '-',
      default: '100%',
    },
    {
      name: 'height',
      desc: '高',
      type: 'String',
      options: '-',
      default: '400px',
    },
    {
      name: 'options',
      desc: '其它配置选项',
      type: 'Object',
      options: '-',
      default: '-',
    },
  ]
}
</script>

<style scoped></style>
