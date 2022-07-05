<template>
  <div class="sub-tree">
    <el-row>
      <el-col :span="5">
        <h3>四层树状菜单标题</h3>
        <el-tree :data="data.threeFour" node-key="key" draggable :default-expanded-keys="[2]" :indent="10">
          <span slot-scope="{ node, data }" class="node-content">
            <span class="node-icon">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
            <div class="handler-menu">
              <el-button slot="reference" type="text">
                <svg-icon v-if="!node.isLeaf" name="plus" class="handler-icon" @click.stop="() => {}" />
              </el-button>
              <div class="hover-wrapper">
                <el-button type="text" class="dash-icon">
                  <svg-icon v-if="data.key !== 1" name="dash" class="handler-icon" @click.stop />
                </el-button>
                <div class="pop-tooltip tree-node-popover el-tooltip__popper">
                  <div class="tooltip-content">
                    <el-button v-if="!node.isLeaf" size="mini" type="text" @click.stop>重命名</el-button>
                    <el-button v-if="!node.isLeaf" size="mini" type="text" @click.stop>删除</el-button>
                    <el-button v-if="node.isLeaf" size="mini" type="text" @click.stop>移动</el-button>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单标题</h3>
        <el-tree :data="data.threeTree" draggable node-key="key" :default-expanded-keys="[3]" :indent="10">
          <span slot-scope="{ node }" class="node-content">
            <span class="node-icon">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <h3>两层树状菜单标题</h3>
        <el-tree :data="data.twoTree" node-key="key" :default-expanded-keys="[4]" :indent="10">
          <span slot-scope="{ node }" class="node-content">
            <span class="node-icon">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            {{ node.label }}
          </span>
        </el-tree>
      </el-col>
      <el-col :span="5">
        <h3>三层树状菜单加icon</h3>
        <el-tree :data="data.threeTree" node-key="key" :default-expanded-keys="[3]" :indent="10">
          <span slot-scope="{ node }" class="node-content">
            <span class="node-icon">
              <svg-icon v-if="!node.isLeaf" name="folder" width="17" height="17" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="17" height="17" />
            </span>
            <span class="node-icon">
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
  name: 'UiTree',
})
export default class extends Vue {
  public static title = {
    zh: '树形菜单',
    en: 'Tree',
  }

  public data = Data
}
</script>

<style lang="scss" scoped>
.el-col {
  border-right: 1px solid $border-color-light-1;
}

.el-col:not(:first-child) {
  margin-left: 81px;
}

.sub-class {
  width: 1200px;
}

.node-content {
  margin-left: -0.5em;
  display: flex;
  align-items: center;
  color: $text-color-primary;
}

.node-icon {
  color: $color-grey-5;

  .svg-icon {
    display: none;
    margin-right: 0.5em;

    &:first-child {
      display: inline;
    }
  }
}

.is-expanded > .el-tree-node__content {
  .node-icon {
    color: $color-grey-5;

    .svg-icon {
      display: none;

      &:last-child {
        display: inline;
      }
    }
  }
}

.el-tree-node:focus > .el-tree-node__content {
  .node-content,
  .node-icon,
  .handler-icon {
    color: $color-white;
  }

  .handler-icon {
    border: 1px solid $color-white;
  }
}

::v-deep .el-tree-node__content {
  position: relative;

  .handler-menu {
    position: absolute;
    right: 0.5em;
    display: none;

    .el-button:not(.pop-tooltip .el-button) {
      padding: 0;
      margin: 0.9em 0.3em;
    }

    .handler-icon {
      color: $color-grey-5;
      border: 1.5px solid $color-grey-5;
      font-size: 12.5px !important;
    }
  }

  &:hover {
    .handler-menu {
      display: block;
    }
  }
}

.sub-tree {
  ::v-deep .el-tree-node > .el-tree-node__children {
    overflow: initial;
  }

  .hover-wrapper {
    display: inline-block;
    margin-left: -0.4em;

    &:hover {
      .pop-tooltip {
        display: block;
      }
    }
  }

  .pop-tooltip {
    display: none;
    position: absolute;
    z-index: 2019;
    top: 24px;
    right: 0;
    background: $color-white;
  }
}
</style>
