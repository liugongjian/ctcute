<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-08 12:29:51
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

### 代码示例
\`\`\`

\`\`\`
`
}
</script>
