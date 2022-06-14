<template>
  <div class="sub-tree">
    <el-row>
      <el-col :span="5">
        <h3>四层树状菜单标题</h3>
        <el-tree :data="data.threeFour" node-key="key" draggable :default-expanded-keys="[2]">
          <span slot-scope="{ node, data }" class="node-content">
            <span class="icon-folder">
              <svg-icon v-if="!isLeaf(data)" name="folder" width="17" height="17" />
              <svg-icon v-if="!isLeaf(data)" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
            <div class="handler-menu">
              <el-button slot="reference" type="text"><svg-icon v-if="!isLeaf(data)" name="plus" class="handler-icon" @click.stop="() => {}" /></el-button>
              <el-popover
                placement="bottom-start"
                trigger="hover"
                :visible-arrow="false"
                popper-class="node-popover"
                @show="onShow"
              >
                <el-button v-if="!isLeaf(data)" size="mini" type="text">重命名</el-button>
                <el-button v-if="!isLeaf(data)" size="mini" type="text">删除</el-button>
                <el-button v-if="isLeaf(data)" size="mini" type="text">移动</el-button>
                <el-button slot="reference" type="text"><svg-icon v-if="data.key !== 1" name="dash" class="handler-icon" @click.stop /></el-button>
              </el-popover>
            </div>
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单标题</h3>
        <el-tree :data="data.threeTree" draggable node-key="key" :default-expanded-keys="[3]">
          <span slot-scope="{ node, data }">
            <span class="icon-folder">
              <svg-icon v-if="!isLeaf(data)" name="folder" width="17" height="17" />
              <svg-icon v-if="!isLeaf(data)" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>两层树状菜单标题</h3>
        <el-tree :data="data.twoTree" node-key="key" :default-expanded-keys="[4]">
          <span slot-scope="{ node, data }">
            <span class="icon-folder">
              <svg-icon v-if="!isLeaf(data)" name="folder" width="17" height="17" />
              <svg-icon v-if="!isLeaf(data)" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单加icon</h3>
        <el-tree :data="data.threeTree" node-key="key" :default-expanded-keys="[3]">
          <span slot-scope="{ node, data }">
            <span class="icon-folder">
              <svg-icon v-if="!isLeaf(data)" name="folder" width="17" height="17" />
              <svg-icon v-if="!isLeaf(data)" name="folder-open" width="17" height="17" />
            </span>
            <span>
              <svg-icon v-if="isLeaf(data)" name="tag" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Data from '@/utils/mock'
@Component({
  name: 'UiTree'
})
export default class extends Vue {
  public static title = {
    zh: '树形菜单',
    en: 'Tree'
  }

  public data = Data

  /**
   * 判断是否为叶子节点
   * @param node 树节点
   * @returns 判断结果
   */
  private isLeaf(nodeData: unknown): boolean {
    for (const key of Object.getOwnPropertyNames(nodeData)) {
      if (key.startsWith('children')) return false
    }
    return true
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  border-right: 1px solid #f1f1f1;
}
.el-col:not(:first-child) {
  margin-left: 81px;
}
.sub-class {
  width: 1200px;
}
.icon-folder {
  .svg-icon {
    display: none;

    &:first-child {
      display: inline;
    }
  }
}
.is-expanded > .el-tree-node__content {
  .icon-folder {
    .svg-icon {
      display: none;

      &:last-child {
        display: inline;
      }
    }
  }
}

.el-tree-node:focus > .el-tree-node__content {
  .handler-icon {
    color: #FFF;
    border: 1px solid #FFF;
    &:hover {
      color: #FFF;
    }
  }
}

::v-deep .el-tree-node__content {
  position: relative;
  .handler-menu {
    position: absolute;
    right: 10px;
    top: 0;
    display: none;
    .el-button {
      margin-left: 5px;
    }
    .handler-icon {
      color: #595959;
      border: 1px solid #595959;
      &:hover {
        color: #595959;
      }
    }
  }
  &:hover {
    .handler-menu {
      display: block;
    }
  }
}
</style>
