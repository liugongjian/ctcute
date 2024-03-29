<template>
  <el-breadcrumb v-if="breadcrumbCustomTitle">
    <el-breadcrumb-item>
      <strong>{{ breadcrumbCustomTitle }}</strong>
    </el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb v-else-if="breadcrumbShowLast">
    <el-breadcrumb-item>
      <strong>{{ t(lastCrumb.meta.title) }}</strong>
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
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import { RouteRecord, Route } from 'vue-router'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteLayoutBreadcrumb',
})
export default class extends Mixins(Locale) {
  @Prop({ default: '' })
  public breadcrumbCustomTitle: string

  @Prop({ default: false })
  public breadcrumbShowLast: boolean

  @Prop({ default: true })
  public breadcrumbShowHome: boolean

  @Prop()
  private breadcrumbAfterEach: (route: RouteRecord) => RouteRecord

  private breadcrumbs: RouteRecord[] = []

  private get lastCrumb() {
    return this.breadcrumbs.length && this.breadcrumbs[this.breadcrumbs.length - 1]
  }

  @Watch('$route')
  private onRouteChange(route: Route) {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/')) {
      return
    }
    this.getBreadcrumb()
  }

  @Watch('breadcrumbShowHome')
  private onBreadcrumbShowHomeChange() {
    this.getBreadcrumb()
  }

  private created() {
    this.getBreadcrumb()
  }

  private getBreadcrumb() {
    let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
    const first = matched[0]
    if (first && !this.isDashboard(first) && this.breadcrumbShowHome) {
      matched = [{ path: '/', meta: { title: 'home.title' } } as unknown as RouteRecord].concat(matched)
    }
    let breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
    if (this.breadcrumbAfterEach) {
      breadcrumbs = breadcrumbs.map(breadcrumb => {
        return this.breadcrumbAfterEach({
          ...breadcrumb,
          meta: {
            ...breadcrumb.meta,
          },
        })
      })
    }
    this.breadcrumbs = breadcrumbs
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
