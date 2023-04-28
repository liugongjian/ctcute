<!--
 * @Author: 李志伟
 * @Date: 2023-02-01 14:13:13
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-02-01 14:23:13
 * @Description:
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'MenuIcon',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `

## 菜单Icon

> 菜单栏的一级菜单项支持添加Icon，在路由文件中配置。

菜单Icon使用router文件中meta.icon进行配置， icon字段是svgName，需注册SvgIcon。

**router文件代码示例**

\`\`\`json
{
  path: '/page/chart',
  redirect: '/page/chart/simpleChart',
  component: Layout,
  name: 'Chart',
  meta: {
    title: 'Chart 图表',
    alwaysShow: true,
    breadcrumb: true,
    icon: 'area-chart',
  },
  children: [],
}
\`\`\`
`
}
</script>
