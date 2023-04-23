<template>
  <div>
    <div class="component__container">
      <h1>CuteLayout / 布局</h1>
      <ComponentDemo path="@/views/component/Test/CuteLayout/Layout.vue">
        <a target="_blank" href="/component/test/layout2/page2">CuteLayout测试页面</a>
      </ComponentDemo>

      <h1>CuteLayoutSidebar / 菜单下钻</h1>
      <ComponentDemo path="@/router/modules/layoutTest.ts" mode="text/javascript">
        <p>
          开启菜单下钻的父节点不会显示展开图标，点击父节点后整个菜单会显示子节点。点击标题可返回上级菜单。
        </p>
        <p>如何开启菜单下钻：</p>
        <p>1. 在路由对象中设置route.redirect，指明点击一级节点后页面跳转的路径</p>
        <p>2. 设置属性route.meta.drillDown: true，将当前节点设为下钻菜单</p>
        <p>3. 设置返回路径：route.meta.drillDownBackPath，指明点击返回链接后返回的位置，默认返回首页</p>
        <el-alert title="注: 菜单下钻仅支持一级节点" show-icon></el-alert>
      </ComponentDemo>

      <h2>Layout Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>

      <h2>Layout Slots</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteLayout',
  components: {
    ComponentDemo,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'header',
      desc: '是否显示页眉',
      type: 'boolean',
      options: null,
      default: 'true',
    },
    {
      name: 'sidebar',
      desc: '是否显示侧边栏',
      type: 'boolean',
      options: null,
      default: 'true',
    },
    {
      name: 'navbar',
      desc: '是否显示页面导航栏(面包屑)',
      type: 'boolean',
      options: null,
      default: 'true',
    },
    {
      name: 'layout',
      desc: '布局方式，可选类型: fixed-navbar(固定页面导航栏)',
      type: 'string',
      options: 'default | fixed-navbar',
      default: 'default',
    },
    {
      name: 'transition',
      desc: '页面切换动画类型',
      type: 'string',
      options: '详见Vue文档Transitions & Animation章节',
      default: 'fade-transform',
    },
    {
      name: 'customClass',
      desc: '自定义Class',
      type: 'string',
      options: '',
      default: '',
    },
    {
      name: 'headerLogo',
      desc: '主Logo图片URL，仅支持使用相对路径的图片地址',
      type: 'string',
      options: '',
      default: '天翼云Logo',
    },
    {
      name: 'headerSubLogo',
      desc: '二级Logo图片URL，仅支持使用相对路径的图片地址',
      type: 'string',
      options: '',
      default: 'CuteDesign Logo',
    },
    {
      name: 'headerSubTitle',
      desc: '二级文本标题',
      type: 'string',
      options: '',
      default: '二级标题',
    },
    {
      name: 'sidebarRoutes',
      desc: '侧边栏菜单数据，格式同vue routes，默认获取项目全局路由',
      type: 'Route[]',
      options: '',
      default: '项目全局路由',
    },
    {
      name: 'sidebarFilter',
      desc: '对菜单数据进行过滤',
      type: 'Function(routes)',
      options: '',
      default: '',
    },
    {
      name: 'sidebarTitle',
      desc: '侧边栏标题',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'sidebarKnob',
      desc: '是否显示菜单收起开关',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
    {
      name: 'sidebarCustomClass',
      desc: '侧边栏自定义Class',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'navbarBreadcrumb',
      desc: '是否显示面包屑',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
    {
      name: 'breadcrumbCustomTitle',
      desc: '面包屑自定义标题',
      type: 'String',
      options: '',
      default: '',
    },
    {
      name: 'breadcrumbShowLast',
      desc: '仅显示面包屑最后一级',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
  ]

  private slot = [
    {
      name: '-',
      desc: '页面主体内容',
    },
    {
      name: 'header-logo',
      desc: '自定义页眉Logo区域内容',
    },
    {
      name: 'header-right',
      desc: '自定义页眉右侧区域内容，通常设置导航菜单、搜索框、用户登录信息',
    },
    {
      name: 'sidebar',
      desc: '自定义侧边栏区域',
    },
    {
      name: 'navbar-breadcrumb',
      desc: '自定义页面导航面包屑区域',
    },
    {
      name: 'navbar-right',
      desc: '自定义页面导航右侧区域',
    },
    {
      name: 'navbar-bottom',
      desc: '自定义页面导航下方区域',
    },
  ]
}
</script>
