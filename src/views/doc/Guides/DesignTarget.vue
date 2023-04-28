<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 11:43:17
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'DesignTarget',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
## 设计目标

从UI到前端，统一智能边缘事业部控制台相关系统的风格，保持各项目的一致性，大到页面，小到交互。

- 对UI来说，既能统一界面风格，又能最大可能消除重复设计的无用功
- 对前端来说，既能规范与统一前端技术栈，又能快速复用已有的页面功能，提高开发效率。

## 适用范围

- 新项目中应用系统或控制台类型的项目
- 老项目中使用了element-ui的项目，可以考虑改造
- 上云的项目，可以用于对齐客运部规范

## 不适用范围

移动端、客户端、大屏、门户等类型的项目，不在当前版本的考虑中

`
}
</script>
