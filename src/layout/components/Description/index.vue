<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-15 21:08:21
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-01-06 19:20:00
 * @Description:
-->
<template>
  <div class="desc-box">
    <div v-if="descriptionInfo.length">
      <el-popover placement="top-start" width="400" trigger="hover" :open-delay="100">
        <svg-icon slot="reference" class="icon" name="info-circle" />
        <div v-for="(item, index) in descriptionInfo" :key="index">{{ item }}</div>
        <!-- <cute-mavon-editor :content="descriptionInfo" class="page-desc"></cute-mavon-editor> -->
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
// import CuteMavonEditor from '@/views/page/Guides/components/CuteMavonEditor.vue'
import pageDescription from 'scripts/genPageDescription/pageDescription'
import componentDescription from 'scripts/genComponentDescription/componentDescription'

@Component({
  name: 'CuteDescription',
  // components: {
  //   CuteMavonEditor,
  // },
})
export default class extends Vue {
  /**
   * @description: 拿到所有页面的描述
   */
  private pageDescription = pageDescription

  /**
   * @description: 拿到所有组件的描述
   */
  private componentDescription = componentDescription

  /**
   * @description: 页面描述信息
   */
  private descriptionInfo = []

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
    const isPage = this.$route.path.startsWith('/page/')
    const isComponent = this.$route.path.startsWith('/component/')
    const matched = this.$route.matched.filter(item => item.name)
    const last = matched[matched.length - 1]
    let descObj
    if (isPage) {
      descObj = pageDescription.find(item => item.name === last.name)
    } else if (isComponent) {
      descObj = componentDescription.find(item => item.name === last.name)
    }
    if (descObj !== null && descObj !== undefined) {
      this.descriptionInfo = descObj.descriptionInfo.split('\n')
    } else {
      this.descriptionInfo = []
    }
  }
}
</script>

<style lang="scss" scoped>
.desc-box {
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

  .icon {
    color: $color-grey-3;
  }
}
</style>
