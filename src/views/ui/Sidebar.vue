<template>
  <el-scrollbar ref="wrapper" wrap-class="scrollbar-wrapper">
    <div class="layout-sidebar__title">UI 组件</div>
    <el-menu
      :default-active="currentId"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <el-menu-item v-for="component in componentList" :id="`menu-${component.name}`" :key="component.name" :index="component.name" @click="changeHash(component.name)">
        {{ component.title.en }} {{ component.title.zh }}
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Ref } from 'vue-property-decorator'

@Component({
  name: 'SideBar'
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
    const currentMenu = this.wrapper.$el.querySelector(`#menu-${this.currentId}`)
    const wrapper = this.wrapper.$el.querySelector('.scrollbar-wrapper')
    if (currentMenu) {
      const currentMenuTop = currentMenu.offsetTop
      if (currentMenuTop < wrapper.scrollTop || currentMenuTop + currentMenu.clientHeight > wrapper.scrollTop + wrapper.clientHeight) {
        wrapper.scrollTop = currentMenuTop
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
    if (title) {
      window.scrollTo({
        top: title.offsetTop - 27,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: auto;
}
</style>
