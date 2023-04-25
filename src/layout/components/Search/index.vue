<!-- eslint-disable vue/no-v-html -->
<template>
  <el-autocomplete
    ref="autocomplete"
    v-model="keyword"
    class="header-nav__search__input"
    popper-class="header-nav__search__popper"
    placeholder="搜索..."
    :fetch-suggestions="search"
    :trigger-on-focus="false"
    @select="handleSelect"
  >
    <svg-icon slot="prefix" name="search" width="16px" height="16px" />
    <template slot-scope="{ item }">
      <div v-html="item.label"></div>
    </template>
  </el-autocomplete>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pageRoutes from '@/router/modules/page'
import { components as uiComponents } from '@/views/ui/components/index'

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
    const result = []
    this.menu.forEach(page => {
      const reg = new RegExp(keyword, 'i')
      const matchRes = page.value.match(reg)
      if (matchRes) {
        const matchKeyword = matchRes[0]
        page.label = page.value.replaceAll(matchKeyword, `<span class="keyword">${matchKeyword}</span>`)
        result.push(page)
      }
    })
    cb(result)
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
          value: this.$t(route.meta.title),
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
<style lang="scss">
.header-nav__search__popper {
  li:hover {
    background: $color-master-7;
  }

  li .keyword {
    color: $color-master-1;
  }
}
</style>
