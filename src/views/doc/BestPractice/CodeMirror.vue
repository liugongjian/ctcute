<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-10-14 15:06:41
 * @Description:
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'CodeMirror',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 代码编辑器
> 代码块是用于展示或编辑代码的场景

### 推荐插件
"vue-codemirror": "^4.0.6",

### 推荐主题
 解决普通文本编辑器当中不能输入tab键、回车乱跳、皮肤难看的问题。
 我们选择了三种不同的代码主题来适配不同的业务场景 ：base16-light，elegant，base16-dark
### 代码示例
需要在vue-codemirror中引入codemirror
还需要引入codemirror的一些配置
\`\`\`
import { codemirror } from 'vue-codemirror'
//三种主题颜色
import 'codemirror/theme/base16-dark.css' 
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/elegant.css'
//支持的语言
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/r/r.js'
import 'codemirror/mode/shell/shell.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/vue/vue.js'

import 'codemirror/addon/selection/active-line' //光标行背景高亮，配置里面也需要styleActiveLine设置为true
import 'codemirror/mode/css/css' //必须要引入的样式



\`\`\`
在模板中使用
\`\`\`
<codemirror v-model="Code" :options=“options"></codemirror>
\`\`\`
v-model为绑定的代码块 options为编辑器的配置部分
\`\`\`
  private Code = 'function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
        find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}'
  private options = {
   tabSize: 2, // 缩进格式
    mode: 'text/javascript', //实现JavaScript代码高亮 这里可进行引入的切换
    theme: 'base16-light', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    viewportMargin: Infinity, //处理高度自适应时搭配使用
    line: true, // 开启语法检查
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
 }

\`\`\`
`
}
</script>
