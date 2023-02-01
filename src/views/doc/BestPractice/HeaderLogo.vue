<!--
 * @Author: 李志伟
 * @Date: 2023-02-01 14:13:13
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-02-01 14:23:13
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
## 头部Logo
> 头部Logo包含两种场景，一是图片Logo的形式，二是图标+文字标题的组合形式，上述两种场景均在settings.ts中进行配置。

### 场景一：图片Logo

若Logo是一张艺术化处理后的图片，本身包含了项目的标题元素，则无需再传文字标题。logoIcon字段可以是图片url或svgName（如果使用svgName，需注册SvgIcon）。

**settings.ts代码示例**
\`\`\`
interface ISettings {
  logoIcon?: string // logo图标，可以是svgName或url
}

const settings: ISettings = {
  logoIcon: require('./layout/components/LayoutHeader/images/cute-design.svg'),
}
\`\`\`

### 场景二：图标+文字标题
若Logo是图标和文字标题的组合形式，需传入logoIcon和logoText两个字段，logoIcon字段可以是图片url或svgName（如果使用svgName，需注册SvgIcon），且logoIcon大小为20x20px。

**settings.ts代码示例**
\`\`\`
interface ISettings {
  logoIcon?: string // logo图标，可以是svgName或url
  logoText?: string // logo文字，若为空，则说明logoIcon使用了艺术化处理的文字图片
}

const settings: ISettings = {
  logoIcon: 'ctls-logo',
  logoText: '日志服务',
}
\`\`\`
`
}
</script>
