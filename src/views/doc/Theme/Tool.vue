<template>
  <el-card>
    <p>
      由于SASS的变量是值类型，因此更换主题时不仅需要覆盖基础色彩变量，还需要替换引用到基础色彩变量的变量。
    </p>
    <p>
      通过当前工具只需要填入需要替换的基础色彩变量，其余关联的引用到的变量会由工具自动生成，您只需要复制到项目中的SASS变量文件中即可。
    </p>
    <h3>基础变量：</h3>
    <codemirror v-model="code" :options="cmOptions" />
    <el-button type="primary" class="gen-button" @click="genScssTheme">生成主题SCSS变量</el-button>
    <div v-if="result">
      <h3>完整变量：</h3>
      <codemirror :code="result" :options="cmOptionsResult" />
      <el-button class="gen-button" @click="copy">复制到剪贴板</el-button>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import copy from 'copy-to-clipboard'
import { genScssTheme } from '@/api/scss'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/css/css.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

@Component({
  name: 'ThemeTool',
  components: {
    codemirror,
  },
})
export default class extends Vue {
  private code = `$color-master: $orange-base;
$color-master-hover: $orange-5;
$color-master-active: $orange-7;
$color-master-disabled: $orange-3;
$color-master-bg: $orange-3;
$color-master-bg-light: $orange-2;
$color-master-bg-light-2: $orange-1;`

  private result = ''

  private cmOptions = {
    value: '',
    mode: 'text/css',
    theme: 'base16-light',
    lineNumbers: true,
    readOnly: false,
  }

  private cmOptionsResult = {
    ...this.cmOptions,
    readOnly: true,
  }

  private async genScssTheme() {
    const res = await genScssTheme({
      code: this.code,
    })
    this.result = res.data
  }

  private copy() {
    copy(this.result)
    this.$message.success('已拷贝SCSS变量')
  }
}
</script>
<style lang="scss" scoped>
.gen-button {
  margin-top: $margin-2x;
}
</style>
