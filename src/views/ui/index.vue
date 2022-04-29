<template>
  <div class="ui">
    <sidebar class="layout-sidebar" :component-list="componentList" :current-id="currentId" />
    <div ref="uiContainer" class="ui__container">
      <div v-for="component in componentList" :key="component.name" class="ui__component">
        <h1 :id="component.name">{{ component.title.en }} / {{ component.title.zh }}</h1>
        <component :is="component.name" class="ui__component__body" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { components, list } from './compontents/index'
import Sidebar from './Sidebar.vue'

@Component({
  name: 'Ui',
  components: {
    Sidebar,
    ...components
  }
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
.layout-sidebar {
  border-right: 1px solid #f1f1f1;
}

.ui__container {
  margin-left: 230px;
  margin-top: $headerHeight;
  padding: 1px 24px 24px;
}

.ui__component {
  border-bottom: 1px solid $border;
  padding: 14px 0 24px;

  h1 {
    margin: 10px 0;
    color: $textHead;
  }

  ::v-deep {
    p {
      color: $text;
    }

    h2 {
      margin-top: 8px;
      font-size: 14px;
      color: $textHead;
    }

    .sub-sample {
      margin: 24px 0;
      padding-bottom: 24px;
      border-bottom: 1px solid $border;

      &:last-child {
        padding: 0;
        margin-bottom: 0;
        border: 0;
      }
    }
  }
}
</style>
