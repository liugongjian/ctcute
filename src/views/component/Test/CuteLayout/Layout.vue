<template>
  <transition name="fade-transform" mode="out-in">
    <cute-layout
      :header="header"
      :header-logo="headerLogo"
      :header-sub-logo="headerSubLogo"
      :header-sub-title="headerSubTitle"
      :sidebar="sidebar"
      :sidebar-title="sidebarTitle"
      :sidebar-title-icon="sidebarTitleIcon"
      :sidebar-navigation="sidebarNavigation"
      :sidebar-knob="sidebarKnob"
      :sidebar-filter="filterRoutes"
      :sidebar-routes-after-each="sidebarRoutesAfterEach"
      :navbar="navbar"
      :breadcrumb-custom-title="breadcrumbCustomTitle"
      :breadcrumb-show-last="breadcrumbShowLast"
      :breadcrumb-after-each="breadcrumbAfterEach"
      :layout="layout"
      :transition="transition"
      @toggle-sidebar="toggleSidebar"
    >
      <template #header-right>
        <header-nav />
      </template>
      <template v-if="navbarRight" #navbar-right>
        <div v-if="navbarRight === 1">
          <el-button type="primary">主要按钮</el-button>
          <el-button>次要按钮</el-button>
        </div>
        <el-select v-if="navbarRight === 2" placeholder="请选择项目">
          <el-option>项目1</el-option>
        </el-select>
      </template>
      <template v-if="navbarBottom" #navbar-bottom>
        <el-tabs v-model="tabName">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </template>
      <div class="layout-test">
        <router-view />
        <el-card class="simple-form">
          <h3>Layout</h3>
          <el-form :label-width="labelWidth">
            <el-form-item label="布局方式">
              <el-select v-model="layout">
                <el-option value="" label="Navbar随页面滚动"></el-option>
                <el-option value="fixed-navbar" label="Navbar固定"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="页面切换动画">
              <el-select v-model="transition">
                <el-option value="fade-transform"></el-option>
                <el-option value="fade"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="内容去上方插槽">
              <el-checkbox v-model="layoutMainTop" />
            </el-form-item>
            <el-form-item label="内容去下方插槽">
              <el-checkbox v-model="layoutMainBottom" />
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="simple-form">
          <h3>Header</h3>
          <el-form :label-width="labelWidth">
            <el-form-item label="Logo">
              <el-input v-model="headerLogo" />
            </el-form-item>
            <el-form-item label="Sub Logo">
              <el-input v-model="headerSubLogo" />
            </el-form-item>
            <el-form-item label="Sub Title">
              <el-input v-model="headerSubTitle" />
            </el-form-item>
            <el-form-item label="是否显示Header">
              <el-checkbox v-model="header" />
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="simple-form">
          <h3>Sidebar</h3>
          <el-form :label-width="labelWidth">
            <el-form-item label="Sidebar Title">
              <el-input v-model="sidebarTitle" />
            </el-form-item>
            <el-form-item label="是否显示收缩开关">
              <el-checkbox v-model="sidebarKnob" />
            </el-form-item>
            <el-form-item label="是否显示Sidebar">
              <el-checkbox v-model="sidebar" />
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="simple-form">
          <h3>Navbar</h3>
          <el-form :label-width="labelWidth">
            <el-form-item label="是否显示Navbar Right">
              <el-radio-group v-model="navbarRight">
                <el-radio :label="0">不显示</el-radio>
                <el-radio :label="1">按钮</el-radio>
                <el-radio :label="2">下拉框</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否显示Navbar Bottom">
              <el-checkbox v-model="navbarBottom" />
            </el-form-item>
            <el-form-item label="是否显示Navbar">
              <el-checkbox v-model="navbar" />
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="simple-form">
          <h3>Breadcrumb</h3>
          <el-form :label-width="labelWidth">
            <el-form-item label="自定义面包屑名称">
              <el-input v-model="breadcrumbCustomTitle" />
            </el-form-item>
            <el-form-item label="仅显示最后一级">
              <el-checkbox v-model="breadcrumbShowLast" />
            </el-form-item>
          </el-form>
        </el-card>
      </div>
      <template v-if="layoutMainTop" #main-top>
        <div class="layout-test">
          <el-card>主内容上方插槽</el-card>
        </div>
      </template>
      <template v-if="layoutMainBottom" #main-bottom>
        <div class="layout-test">
          <el-card>主内容下方插槽</el-card>
        </div>
      </template>
    </cute-layout>
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteLayout from '@cutedesign/ui/components/CuteLayout/index.vue'
import HeaderNav from '@/layout/components/LayoutHeaderNav/index.vue'
import settings from '@/settings'

@Component({
  name: 'CuteLayoutDemo1',
  components: {
    CuteLayout,
    HeaderNav,
  },
})
export default class extends Vue {
  private labelWidth = '160px'
  private tabName = 'first'

  private layout = ''
  private layoutMainTop = false
  private layoutMainBottom = false
  private transition = 'fade-transform'

  private header = true
  private headerLogo = ''
  private headerSubLogo = settings.logoIcon
  private headerSubTitle = '子项目'

  private sidebar = true
  private sidebarTitle = '布局框架'
  private sidebarTitleIcon = 'contacts-fill'
  private sidebarKnob = true
  private sidebarNavigation = [
    {
      path: '/page/detail/pro-detail1',
      title: '边缘容器集群',
      icon: 'pie-chart-circle-fill',
    },
    {
      path: '/page/detail/pro-detail2',
      title: '算力调度引擎',
      icon: 'guide',
    },
    {
      path: '/page/detail/pro-detail3',
      title: '容器镜像服务',
      icon: 'compass-fill',
      active: true,
    },
    {
      path: 'http://www.ctyun.cn',
      title: 'Serverless边缘容器',
      icon: 'data-analysis-fill',
    },
    {
      path: 'https://www.ctyun.cn/products/htap',
      title: '性能测试PTS',
      icon: 'monitor-fill',
    },
  ]

  private navbar = true
  private navbarRight = 0
  private navbarBottom = false

  private breadcrumbCustomTitle = ''
  private breadcrumbShowLast = false

  private filterRoutes(routes: Array<any>): Array<any> {
    return routes.filter(route => route.meta.type === 'layoutTest')
  }

  private sidebarRoutesAfterEach(route) {
    if (route.name && route.name.startsWith('Cluster')) {
      route.query = {
        clusterId: '123',
        clusterName: 'test',
      }
      return route
    }
    return route
  }

  private breadcrumbAfterEach(route) {
    if (route.path === '/cluster') {
      route.meta.title = '集群管理-集群1'
    }
    return route
  }

  private toggleSidebar(isShowMenu) {
    console.log('toggleSidebar', isShowMenu)
  }
}
</script>

<style lang="scss" scoped>
.layout-test {
  .el-card {
    margin-bottom: $margin-4x;

    h3 {
      margin-top: 0;
    }
  }
}
</style>
