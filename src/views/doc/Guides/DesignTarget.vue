<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 11:12:51
 * @Description:
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'DesignTarget',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 设计目标
### 从UI到前端，统一研三后管系统的风格，保持各项目的一致性，大到页面，小到交互。
#### a) 对UI来说，既能统一界面风格，又能最大可能消除重复设计的无用功
#### b) 对前端来说，既能规范与统一前端技术栈，又能快速复用已有的页面功能，提高开发效率。

## 适用范围
### 新项目中应用系统或控制台类型的项目

## 不适用范围
### 1. 老项目，对老项目不要求强制改造
### 2. 移动端、客户端、大屏、门户等类型的项目，不在当前版本的考虑中

## 资源链接
### [产品原型](https://cloud.ctcdn.cn/s/LPtSGxCiHAcibEe)
### [UI规范](https://cloud.ctcdn.cn/s/3p5eTTn9J8FaRC3)
`
}
</script>
