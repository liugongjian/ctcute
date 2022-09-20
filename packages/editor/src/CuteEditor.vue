<template>
  <div style="border: 1px solid #ccc; margin-top: 10px; width: 1120px">
    <!-- 工具栏 -->
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :default-config="toolbarConfig" />
    <!-- 编辑器 -->
    <Editor
      v-model="html"
      style="height: 400px; overflow-y: hidden"
      :default-config="editorConfig"
      @onChange="onChange"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  name: 'CuteEditor',
  components: { Editor, Toolbar },
  props: {
    videoUrl: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      html: '<p>hello&nbsp;world</p>',
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
      },
      editorConfig: {
        placeholder: '请输入内容...',
        // autoFocus: false,

        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {},
      },
    }
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 【注意】一定要用 Object.seal() 否则会报错
      this.editor.getMenuConfig('uploadImage').server = this.imgUrl
      this.editor.getMenuConfig('uploadVideo').server = this.videoUrl
    },
    onChange(editor) {
      console.log('onChange', editor.getText()) // onChange 时获取编辑器最新内容
    },
    insertTextHandler() {
      const editor = this.editor
      if (editor == null) return
      editor.insertText(' hello ')
    },
    printEditorHtml() {
      const editor = this.editor
      if (editor == null) return
      console.log(editor.getHtml())
    },
    disableHandler() {
      const editor = this.editor
      if (editor == null) return
      editor.disable()
    },
  },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
