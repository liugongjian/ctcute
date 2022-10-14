<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-10-14 15:13:41
 * @Description:
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'CuteRichText',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 富文本
> 富文本是前端页面常见的用于满足用户自定义格式的文本场景

### 推荐插件
"@wangeditor/editor": "^5.0.1",
"@wangeditor/editor-for-vue": "^1.0.1"

### 推荐主题
——轻量级web富文本编辑器
wangEditor是用javascript编写的 轻量级web富文本编辑器 ，依赖于jQuery和fontAwesome字体库， 支持所有浏览器 。使用 wangEditor 可以轻松创建web富文本框，并可以自定义扩展菜单功能。
### 代码示例
引入工具栏和编辑器注册
\`\`\`
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
 components: { Editor, Toolbar },
\`\`\`
模板中使用
\`\`\`
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

\`\`\`
配置信息
\`\`\`
 editor: null,
 html: '<p>hello&nbsp;world</p>',
 toolbarConfig: {
    // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
    // excludeKeys: [ /* 隐藏哪些菜单 */ ],
 },
 editorConfig: { 
    placeholder: '请输入内容...',
    // 所有的菜单配置，都要在 MENU_CONF 属性下
    MENU_CONF: {
      //配置上传图片
		uploadImage: {
		customUpload: this.uploadImg
		}
	}
},
\`\`\`
全局引入样式
\`\`\`
<style src="@wangeditor/editor/dist/css/style.css"></style>
\`\`\`
调用方法
\`\`\`
//上传图片
uploadImg(file, insertFn){
  let imgData = new FormData();
	mgData.append('file', file);
  //调接口，上传图片
  testUpImg(imgData).then(response => {
    if(response.data.code == 0){
      insertFn(response.data.data.url);
    }else{
    }
  })
},
onCreated(editor) {
  this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
},
//清空
clearForm(){
  this.html = '';
},
beforeDestroy() {
  const editor = this.editor
  if (editor == null) return
     editor.destroy() // 组件销毁时，及时销毁编辑器
},
\`\`\`

`
}
</script>
