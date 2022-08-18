<template>
  <div class="layout-header__right">
    <div class="layout-header__search">
      <Search />
    </div>
    <div class="layout-header__nav">
      <router-link to="/" :class="{ active: currentPath.startsWith('/page') }">页面规范</router-link>
      <router-link to="/component" :class="{ active: currentPath.startsWith('/component') }"
        >组件规范</router-link
      >
      <router-link to="/ui" :class="{ active: currentPath.startsWith('/ui') }">UI规范</router-link>
    </div>
    <!-- 用户信息 -->
    <div class="login-info">
      <div class="block"><el-avatar :size="28" :src="circleUrl"></el-avatar></div>
      <span class="user-name" @click="flag = !flag">{{ username ? username : '未登录' }}</span>
      <svg-icon :name="!flag ? 'caret-down' : 'caret-up'" />

      <ul v-if="flag">
        <li>文字</li>
        <li>文字</li>
        <li>文字</li>
        <li>文字</li>
        <li @click="outLogin">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Search from '../Search/index.vue'
import { Logout } from '@/api/login'
@Component({
  name: 'LayoutHeaderNav',
  components: {
    Search,
  },
})
export default class extends Vue {
  private keyword = ''
  private circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  private flag = false
  private username = sessionStorage.getItem('username')
  private get currentPath() {
    return this.$route.path
  }
  //退出登录
  private async outLogin() {
    const res = await Logout()
    console.log(res)

    this.$router.push('/login')
    sessionStorage.clear() //清空本地信息
  }
}
</script>

<style lang="scss" scoped>
.layout-header__right {
  display: flex;
  align-items: center;
}

.login-info {
  margin-right: 40px;
  display: flex;
  align-items: center;
  color: #c2c2c2;
  position: relative;
  .user-name {
    cursor: pointer;
  }
  .svg-icon {
    margin-left: 5px;
  }

  .el-avatar {
    margin-right: 10px;
  }

  ul {
    width: 120px;
    position: absolute;
    top: 40px;
    left: 0;
    background: #3a3e4c;
    color: #c2c2c2;
    margin: 0;
    padding-left: 0;

    li {
      list-style: none;
      height: 32px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #272b39;
        color: $color-white;
      }
    }
  }
}

.layout-header__search {
  margin-right: 56px;

  &--input {
    ::v-deep .el-input__inner {
      width: 200px;
      height: 32px;
      background: #3a3e4c;
      border-radius: 2px;
      padding-left: 36px;
      color: #999;
      border: none;
    }

    ::v-deep .el-input__prefix {
      margin-left: 5px;
    }

    .svg-icon {
      color: #999;
    }
  }
}

.layout-header__nav {
  a {
    color: #a8adaf;
    margin-right: 24px;
    font-size: 14px;

    &.active,
    &:hover {
      color: $color-master-1;
    }
  }
}
</style>
