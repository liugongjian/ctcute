<template>
  <div class="layout-header__right">
    <div class="layout-header__search">
      <el-input
        v-model="keyword"
        placeholder="请输入"
        class="layout-header__search--input"
      >
        <svg-icon slot="prefix" name="search" width="16px" height="16px" />
      </el-input>
    </div>
    <div class="layout-header__nav">
      <router-link to="/" :class="{'active': currentPath.startsWith('/page')}">页面规范</router-link>
      <router-link to="/ui" :class="{'active': currentPath.startsWith('/ui')}">UI规范</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'LayoutHeaderNav'
})
export default class extends Vue {
  private keyword = ''

  private get currentPath() {
    return this.$route.path
  }
}
</script>

<style lang="scss" scoped>
  .layout-header__right {
    display: flex;
    align-items: center;
  }

  .layout-header__search {
    margin-right: 56px;

    &--input {
      ::v-deep .el-input__inner {
        width: 200px;
        height: 32px;
        background: none;
        border-radius: 2px;
        border: 1px solid #979797;
        padding-left: 36px;
        color: #a8adaf;
      }

      ::v-deep .el-input__prefix {
        margin-left: 5px;
      }
    }
  }

  .layout-header__nav {
    a {
      color: #a8adaf;
      margin-right: 24px;

      &.active,
      &:hover {
        color: $primary;
      }
    }
  }
</style>
