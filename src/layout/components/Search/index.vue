<template>
  <el-autocomplete
    ref="autocomplete"
    v-model="keyword"
    class="layout-header__search--input"
    placeholder="搜索..."
    :fetch-suggestions="search"
    :trigger-on-focus="false"
    @select="handleSelect"
  >
    <svg-icon slot="prefix" name="search" width="16px" height="16px" />
  </el-autocomplete>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pageRoutes from '@/router/modules/page'
import { components as uiComponents } from '@/views/ui/compontents/index'

@Component({
  name: 'Search',
})
export default class extends Vue {
  // 查询关键词
  private keyword = ''

  // 页面列表
  private menu = []

  private mounted() {
    this.menu = this.generateRouteMenu(pageRoutes)
    this.menu = this.menu.concat(this.generateUiMenu(uiComponents))
  }

  /**
   * 搜索
   */
  private search(keyword, cb) {
    const res = this.menu.filter(page => {
      return page.value.toLowerCase().includes(keyword.toLowerCase())
    })
    cb(res)
  }

  /**
   * 选择搜索结果
   */
  private handleSelect(item) {
    if (item.type === 'page') {
      this.$router.push(item.path)
    } else {
      this.$router.push({
        path: '/ui',
        hash: item.name,
      })
    }
    this.keyword = ''
  }

  /**
   * 一维化路由菜单
   */
  private generateRouteMenu(routes, parentPath = '', items = []) {
    routes.forEach(route => {
      const path = parentPath ? `${parentPath}/${route.path}` : route.path
      route.children && this.generateRouteMenu(route.children, path, items)
      parentPath &&
        items.push({
          path: path,
          value: route.meta.title,
          type: 'page',
        })
    })
    return items
  }

  /**
   * 获取UI组件列表
   */
  private generateUiMenu(components) {
    const items = []
    for (const name in components) {
      const component = components[name]
      items.push({
        name,
        value: `${component.title.en} ${component.title.zh}`,
        type: 'ui',
      })
    }
    return items
  }
}
</script>
