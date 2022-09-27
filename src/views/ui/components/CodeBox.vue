<template>
  <div class="code-box">
    <p>
      代码框我们选用codemirror，并选择了三种不同的代码主题来适配不同的业务场景。代码的字体家族：SFMono-Regular,
      Consolas, Liberation Mono, Menlo, monospace
    </p>
    <div class="sub-down">
      <h3>代码主题：base16-light</h3>

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
      <h3>代码主题：elegant</h3>
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
    <div class="sub-down">
      <h3>代码主题：base16-dark</h3>
      <div class="line last-line">
        <div class="pB_Container">
          <div
            v-for="(item, index) in processArray3"
            :key="index"
            :style="{ width: '14%', backgroundColor: item.color, paddingLeft: 10 + 'px' }"
          ></div>
        </div>
        <div class="line__code">
          <codemirror v-model="curCode3" :options="cmOptions3"></codemirror>
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
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/elegant.css'

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
  private curCode1 = `function findSequence(goal) {
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
}`
  private cmOptions1 = {
    tabSize: 2, // 缩进格式
    mode: 'text/javascript',
    theme: 'base16-light', // 主题，对应主题库 JS 需要提前引入
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
  private curCode2 = `function findSequence(goal) {
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
}`
  private cmOptions2 = {
    tabSize: 2, // 缩进格式
    mode: 'text/javascript',
    theme: 'elegant', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    line: true,
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
  }
  private processArray3 = [
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
      color: '#E0E0E0',
    },
    {
      color: '#505050',
    },
    {
      color: '#151515',
    },
  ]
  private curCode3 = `function findSequence(goal) {
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
}`
  private cmOptions3 = {
    tabSize: 2, // 缩进格式
    mode: 'text/javascript',
    theme: 'base16-dark', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    line: true,
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true, // 当匹配只有一项的时候是否自动补全
    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep .CodeMirror-line {
  line-height: 150% !important;
}

.line {
  // display: flex;
  // align-items: center;
  width: 597px;
  margin-bottom: 24px;

  .pB_Container {
    width: 100%;
    background-color: $color-grey-9;
    height: 4px;
    display: inline-flex;
    line-height: 10px;
    overflow: hidden;
    color: $color-white;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
  }

  &__code {
    width: 100%;
    margin-top: 24px;
    // margin-right: 47px;
  }

  &__border {
    border: 1px solid $color-grey-6;
  }

  .el-cascader {
    width: 100%;
  }
}

.last-line {
  margin-bottom: 0;
}

.sub-down {
  border-bottom: 1px solid $border-color-light-1;

  > h3 {
    margin-bottom: 0;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: $color-grey-1;
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
</style>
