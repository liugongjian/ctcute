<template>
  <cute-layout
    class="cute-layout"
    layout="fixed-navbar"
    sidebar-class="sidebar-theme"
    :header="true"
    :sidebar="true"
    :navbar="true"
    :navbar-breadcrumb="true"
    :header-logo="logo"
    :header-sub-logo="subLogo"
    :header-subtitle="subTitle"
    :sidebar-title="sidebarTitle"
    :sidebar-routes="routesList"
    :sidebar-filter="filterFun"
    :sidebar-knob="false"
    :breadcrumb-showlast="true"
    :breadcrumb-customlast="customlast"
  >
    <template #header></template>
    <template #sidebar></template>
    <template #navbar></template>
    <template #header-logo></template>
    <template #header-right>
      <div class="wrap-right">
        <header-nav />
        <!-- <el-button type="primary">登录</el-button> -->
      </div>
    </template>
    <template #navbar-breadcrumb></template>
    <template #navbar-bottom>
      <!-- <div class="navbar-bottom">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div> -->
    </template>
    <template #navbar-right>
      <div class="navbar-right">
        <el-button type="primary">主要按扭</el-button>
        <el-button>次要按扭</el-button>
      </div>
    </template>
    <template #appMain>
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </section>
    </template>
  </cute-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import HeaderNav from './components/LayoutHeader/HeaderNav.vue'
@Component({
  name: 'Demo1',
  components: {
    CuteLayout,
    HeaderNav,
  },
})
export default class extends Vue {
  public subLogo = require('@cutedesign/ui/components/CuteLayout/Header/images/cute-design.svg')
  public logo = require('@cutedesign/ui/components/CuteLayout/Header/images/cute-portrait.svg')
  public sidebarTitle = '页面斯柯达'
  public subTitle = ''
  public customlast = ''
  public type = 'doc'
  public filterFun(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === this.type)
  }
  public routesList = [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
        breadcrumb: false,
        withoutLogin: true,
      },
    },
    {
      path: '/docs',
      redirect: '/docs/design-target',
      meta: {
        hidden: true,
        withoutLogin: true,
      },
    },
    {
      path: '/component',
      redirect: '/component/biz',
      meta: {
        hidden: true,
        withoutLogin: true,
      },
    },
    {
      path: '/docs/changelog',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'ChangeLog',
          meta: {
            title: '更新日志wwe',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
    {
      path: '/docs/design-target',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'DesignTarget',
          meta: {
            title: '设计目标',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
    {
      path: '/docs/quick-start',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'QuickStart',
          meta: {
            title: '快速上手',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
    {
      path: '/docs/userperm',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'UserPerm',
          meta: {
            title: '用户权限',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
    {
      path: '/docs/theme',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'Theme',
          meta: {
            title: '更换主题',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
    {
      path: '/docs/bestpractice',
      redirect: '/docs/bestpractice/richText',
      name: 'BestPractice',
      meta: {
        title: '最佳实践',
        // alwaysShow: true,
        breadcrumb: true,
        type: 'doc',
      },
      expandMenus: [
        {
          path: 'richText',
          name: 'RichText',
          meta: {
            title: 'RichText 富文本',
            breadcrumb: true,
            withoutLogin: true,
            type: 'doc',
          },
        },
        {
          path: 'codeMirror',
          name: 'CodeMirror',
          meta: {
            title: 'CodeMirror 代码编辑器',
            breadcrumb: true,
            withoutLogin: true,
            type: 'doc',
          },
        },
        {
          path: 'headerLogo',
          name: 'HeaderLogo',
          meta: {
            title: 'HeaderLogo 头部Logo',
            breadcrumb: true,
            withoutLogin: true,
            type: 'doc',
          },
        },
        {
          path: 'menuIcon',
          name: 'MenuIcon',
          meta: {
            title: 'MenuIcon 菜单Icon',
            breadcrumb: true,
            withoutLogin: true,
            type: 'doc',
          },
        },
      ],
    },
    {
      path: '/docs/resource',
      meta: {
        breadcrumb: false,
        type: 'doc',
      },
      children: [
        {
          path: '',
          name: 'Resource',
          meta: {
            title: '资源',
            breadcrumb: true,
            withoutLogin: true,
          },
        },
      ],
    },
  ]
}
</script>
<style lang="scss">
.cute-layout .layout-header {
  position: absolute;
  top: -50px;
}

.sidebar-theme2 {
  .scrollbar-wrapper {
    background-color: rgb(39, 43, 57);

    .layout-sidebar__title {
      color: #fff;
    }

    .layout-sidebar__menu {
      background-color: rgb(39, 43, 57);

      .el-menu-item {
        background-color: rgb(39, 43, 57);
        color: #fff;

        &.hover {
          background-color: #eee;
        }

        &.is-active {
          background-color: #3d73f5;
          color: #fff !important;
        }
      }
    }
  }

  .sidebar--knob {
    background-color: rgb(39, 43, 57);

    .svg-icon {
      color: #fff;
    }
  }
}

.wrap-right {
  margin-top: 8px;
  margin-right: 8px;
}

.navbar-bottom {
  position: absolute;
  top: 44px;
  margin-left: -16px;
  width: 100%;
}

.navbar-right {
  position: absolute;
  right: 20px;
}
</style>
