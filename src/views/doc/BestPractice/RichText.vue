<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 12:55:05
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'RichText',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
[[toc]]

## 富文本

> 富文本是前端页面常见的用于满足用户自定义格式的文本场景

### 推荐插件

\`\`\`json
"@wangeditor/editor": "^5.0.1",
"@wangeditor/editor-for-vue": "^1.0.1"
\`\`\`

### 介绍

——轻量级web富文本编辑器

wangEditor是用javascript编写的 轻量级web富文本编辑器 ，依赖于jQuery和fontAwesome字体库， 支持所有浏览器 。使用 wangEditor 可以轻松创建web富文本框，并可以自定义扩展菜单功能。

### 代码示例

引入工具栏和编辑器注册

\`\`\`js
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
 components: { Editor, Toolbar },
\`\`\`

模板中使用

\`\`\`vue
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

\`\`\`js
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

\`\`\`html
<style src="@wangeditor/editor/dist/css/style.css"></style>
\`\`\`

调用方法

\`\`\`js
//上传图片
uploadImg(file, insertFn){
  let imgData = new FormData();
	mgData.append('file', file);
  //调接口，上传图片
  createImg(imgData).then(response => {
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

完整代码

\`\`\`vue
<template>
  <div>
    <div style="border: 1px solid #ccc;">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>

    <el-button style="width:70px" type="primary" round @click="sendBlog()">提交</el-button>
    <el-button style="width:70px" @click="clearForm()" round>清空</el-button>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { createImg } from "@/api/appendix";

export default {
    components: { Editor, Toolbar },
    data() {
        return {
            editor: null,
            html: '',
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
            mode:"default"
        };
    },
    methods: {
        sendBlog() {
            console.log(this.html);
        },

        //上传图片
        uploadImg(file, insertFn){
            let imgData = new FormData();
			      imgData.append('file', file);
             //调接口，上传图片
            createImg(imgData).then(response => {
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
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
};
<script>
<style src="@wangeditor/editor/dist/css/style.css">
</style>
\`\`\`


显示效果

![](https://s1.ax1x.com/2022/10/19/xsTNUx.jpg)
`
}
</script>
