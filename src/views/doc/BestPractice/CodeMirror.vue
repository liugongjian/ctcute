<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:43:23
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 12:54:31
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'CodeMirror',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
[[toc]]

## 代码编辑器

> 代码块是用于展示或编辑代码的场景

### 推荐插件

\`\`\`
"vue-codemirror": "^4.0.6",
\`\`\`

### 推荐主题

light主题使用default主题, dark主题使用material-darker主题

### 代码示例

需要在 \`vue-codemirror\` 中引入 \`codemirror\`，还需要引入 \`codemirror\` 的一些配置

\`\`\`js
import { codemirror } from 'vue-codemirror'
//主题颜色样式，default样式无需额外引入
import 'codemirror/theme/material-darker.css'
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

\`\`\`vue
<codemirror v-model="Code" :options=“options"></codemirror>
\`\`\`

v-model为绑定的代码块 options为编辑器的配置部分

\`\`\`js
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
    theme: 'material-darker', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    viewportMargin: Infinity, //处理高度自适应时搭配使用
    line: true, // 开启语法检查
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
 }

\`\`\`

整体代码

\`\`\`vue
<template>
  <div class="code-box">
    <p>
      代码框我们选用codemirror，并选择了三种不同的代码主题来适配不同的业务场景。代码的字体家族：SFMono-Regular,
      Consolas, Liberation Mono, Menlo, monospace
    </p>
    <div class="sub-down">
      <h3>代码主题：default</h3>

      <div class="line">
        <div class="pB_Container">
          <div
            v-for="(item, index) in processArray1"
            :key="index"
            :style="{
              width: 100 / processArray1.length + '%',
              backgroundColor: item.color,
              paddingLeft: 10 + 'px',
            }"
          ></div>
        </div>
        <div class="line__code">
          <codemirror v-model="curCode1" :options="cmOptions1"></codemirror>
        </div>
      </div>
    </div>
    <div class="sub-down">
      <h3>代码主题：material-darker</h3>
      <div class="line">
        <div class="pB_Container">
          <div
            v-for="(item, index) in processArray2"
            :key="index"
            :style="{
              width: 100 / processArray2.length + '%',
              backgroundColor: item.color,
              paddingLeft: 10 + 'px',
            }"
          ></div>
        </div>
        <div class="line__code line__border">
          <codemirror v-model="curCode2" :options="cmOptions2"></codemirror>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { codemirror } from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'

//主题
import 'codemirror/theme/material-darker.css'

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
import 'codemirror/keymap/sublime' //sublime编辑器效果
import 'codemirror/mode/css/css'
@Component({
  name: 'Code',
  components: {
    codemirror,
  },
})
export default class extends Vue {
  public static title = {
    zh: '代码框',
    en: 'Code',
  }
  public static description = {
    maintainer: '秦瑞斌',
    version: 'v1.0',
    updateTime: '2022.09.19',
  }
  private processArray1 = [
    {
      color: '#AC4142',
    },
    {
      color: '#D28445',
    },
    {
      color: '#F4BF75',
    },
    {
      color: '#AA759F',
    },
    {
      color: '#6A9FB5',
    },
    {
      color: '#202020',
    },
    {
      color: '#B0B0B0',
    },
    {
      color: '#F5F5F5',
    },
  ]

  private curCode1 = \`function findSequence(goal) {
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
  }\`

  private cmOptions1 = {
    tabSize: 2, // 缩进格式
    mode: 'text/javascript',
    theme: 'default', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    viewportMargin: Infinity, //处理高度自适应时搭配使用
    highlightDifferences: true,
    line: true,
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
  }

  private processArray2 = [
    {
      color: '#773300',
    },
    {
      color: '#BB1111',
    },
    {
      color: '#776622',
    },
    {
      color: '#202020',
    },
  ]

  private curCode2 = \`function findSequence(goal) {
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
  }\`

  private cmOptions2 = {
    tabSize: 2, // 缩进格式
    mode: 'text/javascript',
    theme: 'material-darker', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    line: true,
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
  }
}
<\/script>

<style lang="scss" scoped>
.code-box {
  ::v-deep .CodeMirror-line {
    line-height: 150% !important;
  }

  .line {
    width: 597px;
    margin-bottom: 24px;

    .pB_Container {
      width: 100%;
      background-color: $color-neutral-2;
      height: 4px;
      display: inline-flex;
      line-height: 10px;
      overflow: hidden;
      color: $color-white;
      box-shadow: inset 0 2px 2px rgba(0, 0, 0, 10%);
    }

    &__code {
      width: 100%;
      margin-top: 24px;
    }

    &__border {
      border: 1px solid $color-neutral-5;
    }

    .el-cascader {
      width: 100%;
    }
  }

  .last-line {
    margin-bottom: 0;
  }

  .sub-down {
    border-bottom: 1px solid $border-color-light;

    >h3 {
      margin-bottom: 0;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: $color-neutral-10;
      line-height: 20px;
      font-weight: 500;
    }

    .el-row {
      margin: 24px 0;
    }
  }

  .sub-down:last-child {
    border-bottom: none;

    .el-row {
      margin-top: 24px;
    }
  }
}
</style>
\`\`\`


显示效果

![](https://s1.ax1x.com/2023/05/29/p9OXj1I.png)
`
}
</script>
