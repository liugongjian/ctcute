<template>
  <div class="sub-tree">
    <div class="simple-tree">
      <h3>基础树形</h3>
      <div class="line">
        <el-tree :data="treeData1" node-key="key" default-expand-all></el-tree>
      </div>
    </div>
    <div class="simple-tree">
      <h3>树节点的选择和禁用</h3>
      <div class="line">
        <el-tree
          show-checkbox
          :data="treeData"
          node-key="key"
          default-expand-all
          :default-checked-keys="[2, 4, 5]"
        ></el-tree>
      </div>
    </div>
    <el-row>
      <el-col :span="5">
        <h3>三层树状菜单标题</h3>
        <el-tree :data="threeTree" draggable node-key="key" :default-expanded-keys="[3]" :indent="10">
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
        <el-tree :data="twoTree" node-key="key" :default-expanded-keys="[4]" :indent="10">
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
        <el-tree :data="threeTree" node-key="key" :default-expanded-keys="[3]" :indent="10">
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
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Tree } from 'element-ui'
import { getThreeTrees, getTwoTrees } from '@/api/tree'
import { getTrees } from '@/api/proTable4'
@Component({
  name: 'UiTree',
})
export default class extends Vue {
  public static title = {
    zh: '树形菜单',
    en: 'Tree',
  }
  public static description = {
    maintainer: '肖仁',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
  private fourTree = []
  private threeTree = []
  private twoTree = []
  private filterText = ''
  private defaultProps = {
    children: 'children',
    label: 'label',
  }

  private treeData = [
    {
      label: 'test1',
      children: [
        {
          label: '部分选择',
          children: [
            {
              label: '未选中项',
              key: '1',
            },

            {
              label: '已选项失效',
              key: '2',
              disabled: true,
            },
            {
              key: '3',
              label: '未选中项失效',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      label: 'test2',
      children: [
        {
          label: '已选中项',
          key: '6',
          children: [
            {
              label: '已选中项',
              key: '4',
            },
          ],
        },
        {
          label: '未选中项',
          key: '7',

          children: [
            {
              label: '未选中项',
              key: '8',
            },
          ],
        },

        {
          label: '未选失效项',
          disabled: true,
          key: '9',

          children: [
            {
              label: '未选中项',
              key: '10',
            },
            {
              label: '未选中失效项',
              disabled: true,
              key: '11',
            },
          ],
        },
        {
          label: '部分选中失效',
          disabled: true,
          key: '5',
          children: [
            {
              label: '已选中项',
              key: '12',
            },
            {
              label: '未选失效项',
              disabled: true,
              key: '13',
            },
          ],
        },
      ],
    },
  ]
  private treeData1 = [
    {
      label: 'test1',
      children: [
        {
          label: 'test1-1',
          children: [
            {
              label: 'test1-5',
              key: '1',
            },
            {
              label: 'test1-6',
              key: '2',
            },
          ],
        },
      ],
    },
    {
      label: 'test2',
      children: [
        {
          label: 'test3',
          children: [
            {
              label: 'test1-6 (不可用)',
              key: '3',
              disabled: true,
            },
            {
              label: 'test1-6',
              key: '1',
            },
          ],
        },
      ],
    },
  ]
  /** * 页面Mounted */
  private mounted() {
    this.getFourTree()
    this.getThreeTree()
    this.getTwoTree()
  }

  /** * 获取两级树形数据 */
  private async getTwoTree() {
    try {
      const res = await getTwoTrees()
      res.data[0].children[0].key = 4
      this.twoTree = res.data
    } catch (e) {
      console.log(e)
    }
  }

  /** * 获取三级树形数据 */
  private async getThreeTree() {
    try {
      const res = await getThreeTrees()
      console.log(res, '三级菜单')

      res.data[0].children[0].key = 3
      this.threeTree = res.data
    } catch (e) {
      console.log(e)
    }
  }

  /** * 获取四级树形数据 */
  private async getFourTree() {
    try {
      const res = await getTrees()
      res.data[0].children[0].children[0].key = 2
      this.fourTree = res.data
      console.log(res.data)
    } catch (e) {
      this.$message.error(e)
    }
  }

  private filterNode(value, data) {
    if (!value) return true
    return data.label.indexOf(value) !== -1
  }
  @Watch('filterText')
  private cahnge(val) {
    const ref: Tree = this.$refs.tree as Tree
    ref.filter(val)
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  border-right: 1px solid $border-color-light;
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
  color: $text-color;
}

.node-icon {
  color: $color-neutral-8;

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
    color: $color-neutral-8;

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
    //color: $color-white;
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
      color: $color-neutral-8;
    }
  }

  &:hover {
    .handler-menu {
      display: flex;
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
  }
}

.simple-tree {
  border-bottom: 1px solid $border-color-light;
  padding-bottom: 24px;
}

.simple-tree:nth-child(2) {
  margin-bottom: 24px;
}
//基础树形
.line {
  width: 500px;
  border: 1px solid $border-color;
  padding: 10px 20px 20px;
  background: $color-bg-1;
}
//带搜索树形
.tree-search {
  width: 240px;
  padding: 20px;
  border-right: 1px solid $border-color-light;
}
</style>
