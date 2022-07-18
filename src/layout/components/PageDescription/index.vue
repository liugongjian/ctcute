<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-15 21:08:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-18 12:39:32
 * @Description:
-->
<template>
  <cute-mavon-editor :content="descriptionInfo" class="page-desc"></cute-mavon-editor>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import CuteMavonEditor from '@/views/page/Guides/components/CuteMavonEditor.vue'
import pageDescription from 'scripts/genPageDescription/pageDescription'

@Component({
  name: 'PageDescription',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  /**
   * @description: 拿到所有页面的描述
   */
  private pageDescription = pageDescription

  /**
   * @description: 页面描述信息
   */
  private descriptionInfo = ''

  @Watch('$route')
  private onRouteChange(route: Route) {
    // if you go to the redirect page, ignore
    if (route.path.startsWith('/redirect/')) {
      return
    }
    this.getContent()
  }

  private created() {
    this.getContent()
  }

  private getContent() {
    const matched = this.$route.matched.filter(item => item.name)
    const last = matched[matched.length - 1]
    const descObj = pageDescription.find(item => item.name === last.name)
    if (descObj !== null && descObj !== undefined) {
      this.descriptionInfo = descObj.descriptionInfo
    } else {
      this.descriptionInfo = '待补充'
    }
  }
}
</script>

<style lang="scss">
.page-desc {
  margin-bottom: 16px;

  .v-show-content {
    padding-bottom: 0 !important;
    padding-left: 16px !important;
  }

  &.v-note-wrapper {
    min-height: 0;
  }
}
</style>
