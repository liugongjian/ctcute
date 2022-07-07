<template>
  <div v-if="isPage">
    <div v-if="isOpen" class="code__overlay" @click="isOpen = false"></div>
    <div class="code" :class="{ opened: isOpen }">
      <el-button class="code__button" type="primary" @click="toggle"
        ><svg-icon name="code" width="19" height="19"
      /></el-button>
      <div v-loading="loading" class="code__container">
        <div class="code__header">
          <el-menu ref="menu" :default-active="activePath" mode="horizontal">
            <el-menu-item
              v-for="file in manifest"
              :key="file.path"
              :index="file.path"
              @click="getCode(file.path)"
              >{{ file.name }}</el-menu-item
            >
          </el-menu>
          <!-- 更多文件 -->
          <el-dropdown
            v-if="moreManifest"
            ref="more"
            class="code__header__more"
            @command="handleMoreManifestClick"
          >
            <span class="el-dropdown-link">
              <svg-icon name="down-circle-fill" width="17" height="17" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="file in moreManifest"
                :key="file.path"
                :class="{ 'is-active': file.path === activePath }"
                :command="file.path"
              >
                {{ file.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-tooltip content="复制代码">
            <el-button class="code__header__copy" type="text" @click="copyCode"
              ><svg-icon name="file-copy-fill" width="19" height="19"
            /></el-button>
          </el-tooltip>
          <el-popover placement="bottom" width="300" trigger="hover">
            <div class="code__header__install--container" @click="copyInstall">
              <svg viewBox="0 0 12.32 9.33">
                <g>
                  <line class="st1" x1="7.6" y1="8.9" x2="7.6" y2="6.9"></line>
                  <rect width="1.9" height="1.9"></rect>
                  <rect x="1.9" y="1.9" width="1.9" height="1.9"></rect>
                  <rect x="3.7" y="3.7" width="1.9" height="1.9"></rect>
                  <rect x="1.9" y="5.6" width="1.9" height="1.9"></rect>
                  <rect y="7.5" width="1.9" height="1.9"></rect>
                </g>
              </svg>
              <code title="复制命令">cuted add {{ name }}</code>
            </div>
            <el-button slot="reference" class="code__header__install" type="text"
              ><svg-icon name="cloud-download" width="19" height="19"
            /></el-button>
          </el-popover>
        </div>
        <codemirror v-if="code" :value="code" :options="cmOptions" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Ref } from 'vue-property-decorator'
import { getManifest, getCode } from '@/api/code'
import * as Code from '@/types/Code'
import copy from 'copy-to-clipboard'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

const CM_MODES = {
  default: 'text/javascript',
  vue: 'text/x-vue',
}

@Component({
  name: 'CodeViewer',
  components: {
    codemirror,
  },
})
export default class extends Vue {
  private cmOptions = {
    value: '',
    mode: CM_MODES.default,
    theme: 'base16-light',
    lineNumbers: true,
    readOnly: true,
  }

  private isOpen = false
  private manifest: Code.Manifest[] = null
  private code: string = null
  private activePath = null
  private loading = false
  private menuIndex = 0

  @Ref('menu') private menu: any

  @Ref('more') private more: any

  private get name() {
    return this.$route.name
  }

  private get isPage() {
    return this.$route.path.startsWith('/page/')
  }

  private get moreManifest() {
    return this.manifest && this.menuIndex && this.manifest.slice(this.menuIndex)
  }

  @Watch('$route.path')
  private onRouteChange() {
    this.isOpen = false
    this.reset()
  }

  /**
   * 重置
   */
  private reset() {
    this.manifest = []
    this.code = null
    this.menuIndex = 0
  }

  /**
   * Toggle代码
   */
  private toggle() {
    this.isOpen = !this.isOpen
    if (this.isOpen) {
      this.getManifest()
    }
  }

  /**
   * 获得代码清单
   */
  private async getManifest() {
    try {
      this.loading = true
      const res = await getManifest({
        name: this.name,
      })
      this.manifest = res.data
      if (this.manifest.length) {
        const path = this.manifest[0].path
        this.getCode(path)
        this.activePath = path
      }
      this.renderMore()
    } catch (e) {
      console.log(e)
      this.reset()
    } finally {
      this.loading = false
    }
  }

  /**
   * 获得代码
   */
  private async getCode(path) {
    try {
      this.loading = true
      this.activePath = path
      const res = await getCode({
        path: path,
      })
      this.switchCmMode(path)
      this.code = res.data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  /**
   * 切换CodeMirror解析器
   */
  private switchCmMode(path) {
    const index = path.lastIndexOf('.')
    const ext = path.substr(index + 1)
    let mode = ''
    switch (ext) {
      case 'vue':
        mode = CM_MODES.vue
        break
      default:
        mode = CM_MODES.default
    }
    this.cmOptions.mode = mode
  }

  /**
   * 复制代码
   */
  private copyCode() {
    copy(this.code)
    this.$message.success('已复制代码')
  }

  /**
   * 复制安装代码
   */
  private copyInstall() {
    copy(`cuted add ${this.name}`)
    this.$message.success('已复制安装命令')
  }

  /**
   * 渲染文件更多下拉列表
   */
  private renderMore() {
    this.$nextTick(() => {
      const menuWidth = this.menu.$el.clientWidth
      for (let i = 0; i < this.menu.$el.children.length; i++) {
        const li = this.menu.$el.children[i]
        const rightPos = li.clientWidth + li.offsetLeft
        if (rightPos > menuWidth) {
          if (!this.menuIndex) {
            this.menuIndex = i
            const left = li.offsetLeft
            this.$nextTick(() => {
              this.more.$el.style.left = left + 'px'
            })
          }
          li.style.display = 'none'
        } else {
          li.style.display = 'block'
        }
      }
    })
  }

  /**
   * 更多文件列表点击
   */
  private handleMoreManifestClick(path) {
    this.getCode(path)
  }
}
</script>
<style lang="scss" scoped>
$width: 640px;

.code {
  position: fixed;
  z-index: 100;
  right: 0;
  top: $header-height;
  height: calc(100% - $header-height);
  transition: transform 200ms ease-out;
  transform: translateX(640px);
  font-size: 12px; // TODO REMOVE

  &__button {
    position: absolute;
    top: 8px;
    left: -42px;
    width: 40px;
    height: 40px;
    border-radius: 100px 0 0 100px;

    svg {
      position: relative;
      left: -6px;
      font-weight: bold;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: $width;
    height: 100%;
    background: #f4f5f5;
    box-shadow: 0 12px 48px 16px rgba(0, 0, 0, 8%);

    .vue-codemirror {
      height: calc(100% - 56px);
      flex-direction: column;

      /* stylelint-disable-next-line */
      ::v-deep .CodeMirror {
        height: 100%;
        line-height: 150%;

        /* stylelint-disable-next-line */
        .CodeMirror-scroll {
          width: $width;
        }
      }
    }
  }

  &__header {
    position: relative;
    overflow: hidden;
    background: #fff;

    &__more {
      position: absolute;
      left: calc($width - 70px);
      top: 20px;
    }

    &__copy {
      position: absolute;
      right: 38px;
      top: 8px;
    }

    &__install {
      position: absolute;
      right: 10px;
      top: 8px;

      &--container {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          width: 12px;
          height: 12px;
          margin-right: 10px;
        }
      }
    }

    .el-menu {
      display: flex;
      flex-wrap: nowrap;
      width: calc($width - 70px);
      overflow: hidden;
    }

    .el-menu--horizontal > .el-menu-item {
      height: 56px;
      line-height: 56px;
      color: $text-color-primary;
      padding: 0 16px;

      &.is-active {
        color: $color-master-1;
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  &.opened {
    transform: translateX(0);
  }
}
</style>
