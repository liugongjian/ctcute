<template>
  <div v-if="manifestPath" class="code" :class="{'opened': isOpen}">
    <el-button class="code__button" type="primary" @click="toggle"><svg-icon name="code" width="19" height="19" /></el-button>
    <div v-loading="loading" class="code__container">
      <div class="code__header">
        <el-menu :default-active="activeFile" mode="horizontal">
          <el-menu-item v-for="file in manifest" :key="file" :index="parseFileName(file)" @click="getCode(file)">{{ parseFileName(file) }}</el-menu-item>
        </el-menu>
        <el-tooltip content="复制代码">
          <el-button class="code__header__copy" type="text" @click="copyCode"><svg-icon name="file-copy-fill" width="19" height="19" /></el-button>
        </el-tooltip>
      </div>
      <codemirror :value="code" :options="cmOptions" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getManifest, getCode } from '@/api/code'
import * as Code from '@/types/Code'
import copy from 'copy-to-clipboard'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

@Component({
  name: 'CodeViewer',
  components: {
    codemirror
  }
})

export default class extends Vue {
  private cmOptions = {
    value: '',
    mode: 'text/javascript',
    theme: 'base16-light',
    lineNumbers: true,
    readOnly: true
  }

  private isOpen = false
  private manifest: Code.Manifest[] = null
  private code: string = null
  private activeFile = null
  private loading = false

  private get manifestPath() {
    return this.$route.meta.manifest
  }

  @Watch('$route.path')
  private onRouteChange() {
    this.isOpen = false
    this.manifest = []
    this.code = null
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
        path: this.manifestPath
      })
      this.manifest = res.data
      if (this.manifest.length) {
        this.getCode(this.manifest[0])
        this.activeFile = this.parseFileName(this.manifest[0])
      }
    } catch (e) {
      console.log(e)
      this.manifest = []
      this.code = null
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
      const res = await getCode({
        path: path
      })
      this.code = res.data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  /**
   * 复制代码
   */
  private copyCode() {
    copy(this.code)
    this.$message.success('已复制代码')
  }

  /**
   * 取出显示文件名
   * @param path 文件路径
   */
  private parseFileName(path: string) {
    if (path) {
      const res = path.split('/').slice(-1)
      if (res.length) return res[0]
    }
  }
}
</script>
<style lang="scss" scoped>
  $width: 640px;

  .code {
    position: fixed;
    z-index: 100;
    right: 0;
    top: $headerHeight;
    height: calc(100% - $headerHeight);
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

      &__copy {
        position: absolute;
        right: 10px;
        top: 10px;
      }

      .el-menu {
        display: flex;
        flex-wrap: nowrap;
        width: calc($width - 50px);
        overflow: hidden;
      }

      .el-menu--horizontal > .el-menu-item {
        height: 56px;
        line-height: 56px;
        color: $text;
        padding: 0 16px;

        &.is-active {
          color: $primary;
        }
      }
    }

    &.opened {
      transform: translateX(0);
    }
  }
</style>
