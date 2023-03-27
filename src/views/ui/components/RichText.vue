<template>
  <div class="rich-text">
    <p>富文本我们选用wangEditor。https://www.wangeditor.com/demo/index.html</p>
    <div class="sub-down">
      <div class="line">
        <div class="line__left">
          <!-- <cute-rich-text :img-url="imgUrl" :video-url="videoUrl"></cute-rich-text> -->
          <div class="tool-bar-box">
            <!-- 工具栏 -->
            <Toolbar class="tool-bar-content" :editor="editor" :default-config="toolbarConfig" />
            <!-- 编辑器 -->
            <Editor
              id="editor-content"
              v-model="html"
              :default-config="editorConfig"
              @onChange="onChange"
              @onCreated="onCreated"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
@Component({
  name: 'RichText',
  components: { Editor, Toolbar },
})
export default class extends Vue {
  public static title = {
    zh: '富文本',
    en: 'RichText',
  }
  public static description = {
    maintainer: '秦瑞斌',
    version: 'v1.0',
    updateTime: '2022.09.19',
  }
  private editor = null
  private html = '<p>hello&nbsp;world</p>'
  private toolbarConfig = {
    // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
    // excludeKeys: [ /* 隐藏哪些菜单 */ ],
  }
  private editorConfig = {
    placeholder: '请输入内容...',
    // autoFocus: false,

    // 所有的菜单配置，都要在 MENU_CONF 属性下
    // MENU_CONF: ''
  }
  beforeDestroy() {
    const editor = this.editor as any
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor
  }
  onCreated(editor) {
    ;(this.editor = Object.seal(editor)), // 【注意】一定要用 Object.seal() 否则会报错
      ((this.editor as any).getMenuConfig('uploadImage').server = this.imgUrl),
      ((this.editor as any).getMenuConfig('uploadVideo').server = this.videoUrl)
  }
  onChange(editor) {
    console.log('onChange', editor.getText()) // onChange 时获取编辑器最新内容
  }
  insertTextHandler() {
    const editor = this.editor
    if (editor == null) return
    // editor.insertText(' hello ')
  }
  printEditorHtml() {
    const editor = this.editor
    if (editor == null) return
    // console.log(editor.getHtml())
  }
  disableHandler() {
    const editor = this.editor as any
    if (editor == null) return
    editor.disable()
  }
  private isClear = false
  // 注意！！！ 上传图片成功的返回格式：
  //   {
  //   "errno": 0, // 注意：值是数字，不能是字符串
  //     "data": {
  //     "url": "xxx", // 图片 src ，必须
  //       "alt": "yyy", // 图片描述文字，非必须
  //         "href": "zzz" // 图片的链接，非必须
  //   }
  // }
  // 失败信息
  //   {
  //   "errno": 1, // 只要不等于 0 就行
  //     "message": "失败信息"
  // }
  //  上传视频成功的返回格式：
  //   {
  //   "errno": 0, // 注意：值是数字，不能是字符串
  //     "data": {
  //     "url": "xxx", // 视频 src ，必须
  //       "poster": "xxx.png" // 视频封面图片 url ，可选
  //   }
  // }
  //  视频失败信息与图片一致

  //上传图片的地址
  private imgUrl = 'http://localhost:8080/mock/175/upload/images'
  //上传视频的地址
  private videoUrl = ''
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
.line {
  margin: $margin-3x 0;
  width: 100%;

  &__left {
    width: 100%;
    overflow-y: hidden;

    ::v-deep.w-e-full-screen-container {
      position: relative !important;
    }
  }

  &__border {
    border: 1px solid $border-color;
  }

  .el-cascader {
    width: 100%;
  }
}

.rich-text {
  width: 100%;
}

.tool-bar-box {
  border: 1px solid $border-color;
  margin-top: $margin-3x;
  width: $rich-text-toolbar-width;

  .tool-bar-content {
    border-bottom: 1px solid $border-color;
  }

  #editor-content {
    height: $rich-text-editor-height;
    overflow-y: hidden;
  }
}

.sub-down {
  width: 100%;
  border-bottom: 1px solid $border-color-light;

  > h3 {
    margin: $margin-6x 0;
    font-family: $font-family;
    font-size: $text-size-md;
    color: $text-color;
    line-height: $line-height;
    font-weight: $text-title-weight;
  }

  .el-row {
    margin: $margin-6x 0;
  }
}

.sub-down:last-child {
  border-bottom: none;

  .el-row {
    margin-top: $margin-6x;
  }
}
</style>
