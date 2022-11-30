<!--
 * @Author: 王月功
 * @Date: 2022-11-29 22:01:08
 * @LastEditors: 王月功
 * @LastEditTime: 2022-11-30 09:14:15
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>Markdown / md 文档编辑、预览</h1>
      <component-demo path="@/views/component/Biz/Markdown/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>MdEditor Attributes</h2>
      <el-table :data="editorProps" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>MdEditor Satic Attributes</h2>
      <el-table :data="editorStaticAttrs" fit border>
        <el-table-column prop="name" label="静态属性" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
      <h2>MdEditor Methods</h2>
      <el-table :data="editorMethods" fit border>
        <el-table-column prop="name" label="方法名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
      <h2>MdEditor Events</h2>
      <el-table :data="events" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="回调参数" />
      </el-table>
      <h2>MdEditor Commands</h2>
      <el-table :data="editorCommands" fit border>
        <el-table-column prop="name" label="方法名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
      <h2>MdPreview Attributes</h2>
      <el-table :data="previewProps" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>MdPreview Events</h2>
      <el-table :data="events" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="回调参数" />
      </el-table>
      <h2>MdHtmlPreview Attributes</h2>
      <el-table :data="htmlPreviewProps" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>MdHtmlPreview Events</h2>
      <el-table :data="events" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="回调参数" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private editorProps = [
    {
      name: 'value / v-model',
      desc: 'markdown 字符串',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'height',
      desc: '容器高度',
      type: 'String',
      options: '',
      default: '600px',
    },
    {
      name: 'theme',
      desc: '主题',
      type: 'String',
      options: 'light, dark',
      default: 'light',
    },
    {
      name: 'parseEnv',
      desc: '解析 md 时的自定义环境变量，用于支持自定义插件的扩展',
      type: 'Object',
      options: '',
      default: null,
    },
    {
      name: 'uploadImage',
      desc: '图片上传方法，需要返回后端存储的图片地址及其他自定义配置',
      type: 'Function(file: File): Promise.resolve<{url, desc}>',
      options: '',
      default: null,
    },
  ]

  private editorStaticAttrs = [
    {
      name: 'MdEditor.xss',
      desc: 'xss 中 FilterXSS 的实例，提供了 xss.extend(extendOptions) 用于自定义扩展规则',
    },
    {
      name: 'MdEditor.parser',
      desc: '包含 mdIt 实例和自定义 extend 方法，用于自有定制解析相关',
    },
    {
      name: 'MdEditor.prism',
      desc: '语法高亮 prismjs',
    },
  ]

  private editorMethods = [
    {
      name: 'execCommand',
      desc: '调用已经注册的命令，常用于执行插入操作，相关命令见 MdEditor Commands',
      params: '指令所需参数',
    },
    {
      name: 'getHtml',
      desc: '获取解析后的 htmlstr',
      params: null,
    },
  ]

  private events = [
    {
      name: 'copy-code-success',
      desc: '预览区 code 点击复制成功',
      params: '复制的 code 文本',
    },
  ]

  private editorCommands = [
    {
      name: 'link',
      desc: '插入链接',
      params: '{ link, desc, download }',
    },
    {
      name: 'image',
      desc: '插入图片',
      params: '{ url, desc, width, height }',
    },
  ]

  private previewProps = [
    {
      name: 'text',
      desc: 'markdown 字符串',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'height',
      desc: '容器高度',
      type: 'String',
      options: '',
      default: '600px',
    },
    {
      name: 'theme',
      desc: '主题',
      type: 'String',
      options: 'light, dark',
      default: 'light',
    },
    {
      name: 'parseEnv',
      desc: '解析 md 时的自定义环境变量，用于支持自定义插件的扩展',
      type: 'Object',
      options: '',
      default: null,
    },
  ]

  private htmlPreviewProps = [
    {
      name: 'html',
      desc: '解析后的 html 字符串',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'height',
      desc: '容器高度',
      type: 'String',
      options: '',
      default: '600px',
    },
    {
      name: 'theme',
      desc: '主题',
      type: 'String',
      options: 'light, dark',
      default: 'light',
    },
  ]
}
</script>
