<template>
  <div class="layout-header__right">
    <div class="layout-header__search">
      <Search />
    </div>
    <div class="layout-header__nav">
      <router-link to="/" :class="{ active: currentPath.startsWith('/page') }">页面规范</router-link>
      <router-link to="/ui" :class="{ active: currentPath.startsWith('/ui') }">UI规范</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Search from '../Search/index.vue'

@Component({
  name: 'LayoutHeaderNav',
  components: {
    Search,
  },
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
