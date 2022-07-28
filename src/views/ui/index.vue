<template>
  <div class="ui">
    <sidebar class="layout-sidebar" :component-list="componentList" :current-id="currentId" />
    <div ref="uiContainer" class="ui__container">
      <div v-for="component in componentList" :key="component.name" class="ui__component">
        <h1 :id="component.name">{{ component.title.en }} / {{ component.title.zh }}</h1>
        <h4 :id="component.name">
          版本：{{ component.description && component.description.version }} | 更新时间：{{
            component.description && component.description.updateTime
          }}
          | 维护人: {{ component.description && component.description.maintainer }}
        </h4>
        <component :is="component.name" class="ui__component__body" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { components, list } from './components/index'
import Sidebar from './Sidebar.vue'

@Component({
  name: 'Ui',
  components: {
    Sidebar,
    ...components,
  },
})
export default class extends Vue {
  private componentList = list
  private titles = null
  private currentId = null

  private mounted() {
    const uiContainer = this.$refs.uiContainer as HTMLDivElement
    this.titles = uiContainer.querySelectorAll('h1')
    document.addEventListener('scroll', this.findCurrentTitle)
    this.findCurrentTitle()
  }

  private beforeDestroy() {
    document.removeEventListener('scroll', this.findCurrentTitle)
  }

  /**
   * 滚动页面时找到对应的标题，并更新url hash
   */
  private findCurrentTitle() {
    const scrollY = window.scrollY
    let currentTitle = null
    for (let i = 0; i < this.titles.length; i++) {
      const title = this.titles[i]
      if (scrollY < title.offsetTop + 50) {
        currentTitle = title
        break
      }
    }
    history.pushState(null, null, `#${currentTitle.id}`)
    this.currentId = currentTitle.id
  }
}
</script>
<style lang="scss" scoped>
// TODO 由于 ui 组件页的布局模式和规范页不统一，因此使用布局样式时，会有差异，待优化
.layout-sidebar {
   height: 100%;
  position: fixed;
  top: $header-height;
  bottom: 0;
  left: 0;
}

.ui__container {
  margin-left: 230px;
  margin-top: $header-height;
  padding: 1px 24px 24px;
  border-left: 1px solid $border-color-light-1;
}

.ui__component {
  border-bottom: 1px solid $border-color-light-1;
  padding: 14px 0 24px;

  h1 {
    margin: 10px 0;
    color: $text-color-primary;
    font-size: $text-size-large;
  }

  ::v-deep {
    p {
      color: $text-color-primary;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
      margin-bottom: 24px;
    }

    h2 {
      font-size: $text-size-medium;
      line-height: 20px;
      font-weight: 500;
      color: $text-color-primary;
    }

    h3 {
      font-size: 14px;
      margin-top: 24px;
      color: $text-color-primary;
    }

    .sub-sample {
      margin: 24px 0;
      padding-bottom: 24px;
      border-bottom: 1px solid $border-color-light-1;

      &:last-child {
        padding: 0;
        margin-bottom: 0;
        border: 0;
      }
    }

    .sub-steps {
      margin: 24px 0;
      padding-bottom: 24px;
      border-bottom: 1px solid $color-grey-7;
    }
  }
}
</style>
