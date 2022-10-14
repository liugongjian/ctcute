<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-08 10:54:02
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

### 代码示例
\`\`\`

\`\`\`
`
}
</script>
