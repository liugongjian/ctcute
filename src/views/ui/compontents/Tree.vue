<template>
  <div class="sub-tree">
    <el-row>
      <el-col :span="5">
        <h3>四层树状菜单标题</h3>
        <el-tree :data="data.threeFour" node-key="key" draggable :default-expanded-keys="[2]">
          <span slot-scope="{ node, data }" class="node-content">
            <span class="icon-folder">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
            <div class="handler-menu">
              <el-button slot="reference" type="text"><svg-icon v-if="!node.isLeaf" name="plus" class="handler-icon" @click.stop="() => {}" /></el-button>
              <el-tooltip
                effect="light"
                placement="bottom-end"
                trigger="click"
                :visible-arrow="false"
                :append-to-body="true"
                @after-enter="onShow(node)"
                @after-leave="onHidden($el)"
              >
                <div slot="content" class="tooltip-content">
                  <el-button v-if="!node.isLeaf" size="mini" type="text">重命名</el-button>
                  <el-button v-if="!node.isLeaf" size="mini" type="text">删除</el-button>
                  <el-button v-if="node.isLeaf" size="mini" type="text">移动</el-button>
                </div>
                <el-button type="text"><svg-icon v-if="data.key !== 1" name="dash" class="handler-icon" @click.stop /></el-button>
              </el-tooltip>
            </div>
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单标题</h3>
        <el-tree :data="data.threeTree" draggable node-key="key" :default-expanded-keys="[3]">
          <span slot-scope="{ node }" class="node-content">
            <span class="icon-folder">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>两层树状菜单标题</h3>
        <el-tree :data="data.twoTree" node-key="key" :default-expanded-keys="[4]">
          <span slot-scope="{ node }" class="node-content">
            <span class="icon-folder">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单加icon</h3>
        <el-tree :data="data.threeTree" node-key="key" :default-expanded-keys="[3]">
          <span slot-scope="{ node }" class="node-content">
            <span class="icon-folder">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            <span class="icon-folder">
              <svg-icon v-if="node.isLeaf" name="tag" width="17" height="17" />
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
.node-content {
  color: rgba(0, 0, 0, 0.9);
}
.icon-folder {
  color: #989A9C;
  .svg-icon {
    display: none;
    &:first-child {
      display: inline;
    }
  }
}
.is-expanded > .el-tree-node__content {
  .icon-folder {
    color: #989A9C;
    .svg-icon {
      display: none;
      &:last-child {
        display: inline;
      }
    }
  }
}
.el-tree-node:focus > .el-tree-node__content {
  .node-content, .icon-folder, .handler-icon {
    color: #FFF;
  }
  .handler-icon {
    border: 1px solid #FFF;
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
        color: #989A9C;
        border: 1px solid #989A9C;
      }
    }
    &:hover {
      .handler-menu {
        display: block;
      }
    }
  }
</style>
