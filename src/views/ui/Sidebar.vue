<template>
  <div class="cute-layout-sidebar">
    <div ref="wrapper" class="cute-layout-sidebar__wrapper">
      <div class="cute-layout-sidebar__title">{{ $t('menu.ui') }}</div>
      <el-menu
        :default-active="currentId"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <div class="level-1">
          <el-menu-item
            v-for="component in componentList"
            :id="`menu-${component.name}`"
            :key="component.name"
            :index="component.name"
            @click="changeHash(component.name)"
          >
            {{ component.title.en }} {{ component.title.zh }}
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'

@Component({
  name: 'UiSidebar',
})
export default class extends Vue {
  @Prop()
  private componentList

  @Prop()
  private currentId

  @Ref('wrapper')
  private wrapper

  /**
   * hash后自动调整滚动条位置
   */
  @Watch('currentId')
  private onCurrentIdChange() {
    const currentMenu = this.wrapper.querySelector(`#menu-${this.currentId}`)
    if (currentMenu) {
      const currentMenuTop = currentMenu.offsetTop
      if (
        currentMenuTop < this.wrapper.scrollTop ||
        currentMenuTop + currentMenu.clientHeight > this.wrapper.scrollTop + this.wrapper.clientHeight
      ) {
        this.wrapper.scrollTop = currentMenuTop
      }
    }
  }

  @Watch('$route.hash')
  private onHashChanged() {
    this.changeHash(this.$route.hash.replace('#', ''))
  }

  private mounted() {
    if (this.$route.hash) {
      this.changeHash(this.$route.hash.replace('#', ''))
    }
  }

  /**
   * 切换菜单，并滚动到对应位置
   */
  private changeHash(id) {
    history.pushState(null, null, `#${id}`)
    const title = document.querySelector(`#${id}`) as HTMLElement
    const layoutBody = document.querySelector('.cute-layout__body')
    if (title) {
      layoutBody.scrollTo({
        top: title.offsetTop - 27,
        behavior: 'smooth',
      })
    }
  }
}
</script>
