<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="layout-sidebar__title">UI 组件</div>
    <el-menu
      :default-active="currentId"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <el-menu-item v-for="component in componentList" :key="component.name" :index="component.name" @click="changeHash(component.name)">
        {{ component.title }}
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import variables from '@/assets/css/_variables.scss'

@Component({
  name: 'SideBar'
})
export default class extends Vue {
  @Prop()
  private componentList

  @Prop()
  private currentId

  private get variables(): any {
    return variables
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
  height: 100%;
}
</style>
