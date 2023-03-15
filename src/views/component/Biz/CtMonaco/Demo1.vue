<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2023/1/11 15:50
 * @LastEditors: 甘雨涛
-->
<template>
  <div>
    <div class="option-bar">
      语言：<el-select v-model="language" placeholder="请选择">
        <el-option v-for="item in langOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      主题：<el-select v-model="theme" placeholder="请选择">
        <el-option v-for="item in themeOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <ct-monaco v-model="content" v-loading="loading" auto-size :language="language" :theme="theme" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import CtMonaco from '@cutedesign/ct-monaco'
import { json, yaml, css, html, javascript, markdown, mysql, xml } from '@/views/component/Biz/CtMonaco/text'

Vue.use(CtMonaco)

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private language = 'yaml'
  private theme = 'hc-black'
  private themeOptions = [
    { label: 'Visual Studio', value: 'vs' },
    { label: 'Visual Studio dark', value: 'vs-dark' },
    { label: 'High Contrast Dark', value: 'hc-black' },
  ]
  private langOptions = [
    { label: 'json', value: 'json' },
    { label: 'yaml', value: 'yaml' },
    { label: 'css', value: 'css' },
    { label: 'html', value: 'html' },
    { label: 'javascript', value: 'javascript' },
    { label: 'markdown', value: 'markdown' },
    { label: 'mysql', value: 'mysql' },
    { label: 'xml', value: 'xml' },
  ]
  private loading = false
  private content = ''
  private json = json
  private yaml = yaml
  private css = css
  private html = html
  private javascript = javascript
  private markdown = markdown
  private mysql = mysql
  private xml = xml
  @Watch('language', { immediate: true })
  handleChangeLanguage() {
    this.content = this[this.language]
  }

  //   private load() {
  //     this.loading = true
  //     const url = `https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs/basic-languages/${this.language}/${this.language}.js`
  //     axios.get(url).then(
  //       res => {
  //         // success
  //         const code = res.data // 获取数据 需要的是res.data
  //         const script = new Function(code)
  //         script()
  //       },
  //       err => {
  //         // error
  //         console.log(err)
  //         this.loading = false
  //       }
  //     )
  //   }
}
</script>

<style lang="scss">
.option-bar {
  margin-bottom: 10px;
}
</style>
