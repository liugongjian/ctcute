<template>
  <el-breadcrumb v-if="breadcrumbCustomTitle">
    <el-breadcrumb-item>
      <span>{{ breadcrumbCustomTitle }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb v-else-if="breadcrumbShowLast">
    <el-breadcrumb-item>
      <span>{{ t(lastCrumb.meta.title) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb v-else separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span v-if="item.redirect === 'noredirect' || index === breadcrumbs.length - 1" class="no-redirect">
          {{ t(item.meta.title) }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ t(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { compile } from 'path-to-regexp'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { RouteRecord, Route } from 'vue-router'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteLayoutBreadcrumb',
})
export default class extends mixins(Locale) {
  @Prop({ default: '' })
  public breadcrumbCustomTitle: string

  @Prop({ default: false })
  public breadcrumbShowLast: boolean

  private breadcrumbs: RouteRecord[] = []

  private get lastCrumb() {
    return this.breadcrumbs[this.breadcrumbs.length - 1]
  }

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
    let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
    const first = matched[0]
    if (!this.isDashboard(first)) {
      matched = [{ path: '/', meta: { title: 'home.title' } } as unknown as RouteRecord].concat(matched)
    }
    this.breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }

  private isDashboard(route: RouteRecord) {
    return route.path === '/'
  }

  private pathCompile(path: string) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const { params } = this.$route
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
