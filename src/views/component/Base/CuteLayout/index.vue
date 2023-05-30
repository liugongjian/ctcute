<!--
 * @Author: 朱凌浩
 * @Date: 2023-04-21 10:56:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-04-21 10:56:09
 * @Description:
-->
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
        <p>
          1.
          在路由对象中设置route.redirect，指明点击一级节点后页面跳转的路径，如果没有设置redirect，则默认取第一个子路由的path
        </p>
        <p>2. 设置属性route.meta.drillDown: true，将当前节点设为下钻菜单</p>
        <p>3. 设置返回路径：route.meta.drillDownBackPath，指明点击返回链接后返回的位置，默认返回首页</p>
        <el-alert title="注: route的meta属性值具体说明请详见下文Route Meta" show-icon></el-alert>
      </ComponentDemo>

      <h1>CuteLayoutSidebar / 菜单自定义URL参数</h1>
      <ComponentDemo path="@/views/component/Test/CuteLayout/Layout.vue" mode="text/javascript">
        <p>
          可以通过sidebarRoutesAfterEach勾子方法拦截每一个菜单项的数据，对route对象进行修改，比如添加url参数:
        </p>
        <p>拦截route对象后，为route对象添加query属性，query类型为Object对象。</p>
      </ComponentDemo>

      <h1>CuteLayoutSidebar / 动态高亮菜单</h1>
      <ComponentDemo path="@/views/component/Test/CuteLayout/Page3Create.vue" mode="text/javascript">
        <p>首先需要在动态高亮菜单的页面路由中添加route.meta.activceMenu属性,并设为null</p>
        <p>然后在页面中修改当前路由的$route.meta.activeMenu值，指定相应需要高亮的菜单路由path</p>
      </ComponentDemo>

      <h1>CuteLayoutSidebar / 外部链接</h1>
      <ComponentDemo path="@/views/component/Base/CuteLayout/Demo5.ts" mode="text/javascript">
        <p>如需配置外部链接菜单，只需将路由的path设置为以http、https、mailto或tel开头的地址即可。</p>
      </ComponentDemo>

      <h1>CuteLayoutBreadcrumb / 自定义面包屑名称</h1>
      <ComponentDemo path="@/views/component/Test/CuteLayout/Layout.vue" mode="text/javascript">
        <p>
          可以通过breadcrumbAfterEach勾子方法拦截每一个面包屑节点的数据，对route对象进行修改，比如修改面包屑名称:
        </p>
        <p>拦截route对象后，修改route.meta.title，修改面包屑的名称。</p>
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
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>

      <h2>Route Meta</h2>
      <el-table :data="routeMeta" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" min-width="200" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
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
      name: 'sidebarRoutesAfterEach',
      desc: '显示菜单数据时的勾子方法，可以对动态对每个菜单项进行修改',
      type: 'Function(route)',
      options: '',
      default: '',
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
    {
      name: 'breadcrumbAfterEach',
      desc: '显示面包屑时的勾子方法，可以对动态对每个菜单项进行修改',
      type: 'Function(route)',
      options: '',
      default: '',
    },
  ]

  private slot = [
    {
      name: '-',
      desc: '页面主体内容',
    },
    {
      name: 'main-top',
      desc: '自定义主体内容上方区域',
    },
    {
      name: 'main-bottom',
      desc: '自定义主体内容下方区域',
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

  private routeMeta = [
    {
      name: 'title',
      type: 'String',
      default: '',
      desc: '页面名称，用于显示在侧边栏菜单和面包屑中',
    },
    {
      name: 'alwaysShow',
      type: 'boolean',
      default: 'false',
      desc: '是否始终显示当前层级。默认为false，如果子路由数量只有1个时会隐藏当前层级，直接显示子路由。如果设为true，无论子路由数量多少始终显示当前层级的路由。',
    },
    {
      name: 'hidden',
      type: 'boolean',
      default: 'false',
      desc: '是否隐藏当前路由',
    },
    {
      name: 'breadcrumb',
      type: 'boolean',
      default: 'true',
      desc: '是否在面包屑中显示当前层级的页面名称',
    },
    {
      name: 'drillDown',
      type: 'boolean',
      default: 'false',
      desc: '是否开启菜单下钻功能，开启后用户点击当前层级的菜单后，左侧同级的菜单会隐藏，仅显示当前菜单的子菜单。开启当前设置后建议设置当前route的redirect值，以明确点击当前菜单后跳转哪个页面，如果不设置redirect则默认选取第一个子路由的path',
    },
    {
      name: 'drillDownBackPath',
      type: 'string',
      default: '',
      desc: '下钻菜单返回path。开启后菜单下钻功能后，需要设置返回的路径。',
    },
    {
      name: 'icon',
      type: 'string',
      default: '',
      desc: '图标，支持使用CuteDeign内置图标，也可以使用iconfont或者element icon，如果不使用CuteDesign内置图标需要设置iconType',
    },
    {
      name: 'iconType',
      type: 'string',
      default: 'svg',
      options: 'svg/iconfont/element',
      desc: '如果不使用CuteDesign内置图标需要指定iconType',
    },
    {
      name: 'customPath',
      type: 'string',
      default: '',
      options: '',
      desc: '自定义路径，设置自定义路径后会替换路由path',
    },
    {
      name: 'activeMenu',
      type: 'string',
      default: '',
      options: '',
      desc: '指定选中状态的路由path',
    },
  ]
}
</script>
