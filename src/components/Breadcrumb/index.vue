<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a
          v-else
          @click.prevent="handleLink(item)"
        >{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { compile } from 'path-to-regexp'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { RouteRecord, Route } from 'vue-router'

@Component({
  name: 'Breadcrumb'
})
export default class extends Vue {
  private breadcrumbs: RouteRecord[] = []

  @Watch('$route')
  private onRouteChange(route: Route) {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/')) {
      return
    }
    this.getBreadcrumb()
  }

  private created() {
    this.getBreadcrumb()
  }

  private getBreadcrumb() {
    let matched = this.$route.matched.filter(
      item => item.meta && item.meta.title
    )
    const first = matched[0]
    if (!this.isDashboard(first)) {
      matched = [
        { path: '/home', meta: { title: '首页' } } as unknown as RouteRecord
      ].concat(matched)
    }
    this.breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }

  private isDashboard(route: RouteRecord) {
    const name = route && route.meta && route.meta.title
    return name === '首页'
  }

  private pathCompile(path: string) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const { params } = this.$route
    console.log(compile)
    const toPath = compile(path)
    return toPath(params)
  }

  private handleLink(item: never) {
    const { redirect, path } = item
    if (redirect) {
      this.$router.push(redirect)
      return
    }
    this.$router.push(this.pathCompile(path))
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  margin: 5px 0 15px;
  display: inline-block;
}
</style>
