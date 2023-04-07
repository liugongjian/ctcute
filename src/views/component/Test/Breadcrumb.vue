/*
* @Author: 胡一苗
* @Date: 2023-03-22 12:25:55
* @LastEditors: 胡一苗
* @LastEditTime: 2023-03-24 15:02:39
* @Description: desc
*/
<template>
  <div>
    <h1>Breadcrumb</h1>
    <BreadcrumbDemo />
    <div class="sub-sample">
      <h3>均可点击跳转</h3>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">一级内容</el-breadcrumb-item>
        <el-breadcrumb-item to="/">二级内容</el-breadcrumb-item>
        <el-breadcrumb-item to="/">当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-sample">
      <h3>均不可点击跳转</h3>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>一级内容</el-breadcrumb-item>
        <el-breadcrumb-item>二级内容</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-sample">
      <h3>文本截断</h3>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">一级内容</el-breadcrumb-item>
        <el-breadcrumb-item to="/">
          <el-tooltip v-if="showTooltip(longText)" :content="longText" effect="dark">
            <span class="ellipsis" :style="textStyle">{{ longText }}</span>
          </el-tooltip>
          <span v-else>{{ longText }}</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BreadcrumbDemo from '@/views/ui/components/Breadcrumb.vue'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

// TODO 如何对外提供
function getTextWidth(text, {
  fontStyle = 'normal',
  fontVariant = 'normal',
  fontWeight = 'normal',
  fontSize = '12px',
  fontFamily = variables.fontFamily,
} = {}, method = 'html') {
  // 通过html
  const div = document.createElement('div')
  div.style.display = 'inline-block'
  div.style.visibility = 'hidden'
  div.style.fontStyle = fontStyle
  div.style.fontVariant = fontVariant
  div.style.fontWeight = fontWeight
  div.style.fontSize = fontSize
  div.style.fontFamily = fontFamily
  div.innerText = text
  document.body.appendChild(div)
  const clientWidth = div.clientWidth
  console.log(`html: ${clientWidth}`)
  div.parentNode.removeChild(div)

  // 通过canvas
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`
  const measureResp = context.measureText(text)
  console.log(`canvas: ${measureResp.width}`)

  // TODO 为了对比差异，目前计算html/canvas两种结果，今后可按method择一计算
  if (method === 'canvas') {
    return measureResp.width
  } else {
    return clientWidth
  }
}

@Component({
  name: 'Breadcrumb',
  components: {
    BreadcrumbDemo,
  },
})
export default class extends Vue {
  public longText = '这是很长很长很长很长很长的标题'
  public textMaxWidth = 100

  get textStyle() {
    return {
      maxWidth: `${this.textMaxWidth}px`,
    }
  }

  public showTooltip(text) {
    const width = getTextWidth(text, { fontSize: '14px', fontFamily: variables.fontFamily })
    if (width > this.textMaxWidth) {
      return true
    }
    return false
  }

}
</script>
<style lang="scss" scoped>
.sub-sample {
  margin-top: 16px;
}

.ellipsis {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
