<!--
 * @Author: 刘功坚
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-12 14:53:50
 * @Description: Tree
-->
<template>
  <div>
    <h1>Tree</h1>
    <TreeDemo />
    <div>
      <h3>懒加载</h3>
      <el-tree :props="props" :load="loadNode" lazy show-checkbox> </el-tree>
    </div>
    <div>
      <h3>节点过滤</h3>
      <el-input v-model="filterText" placeholder="输入关键字进行过滤"> </el-input>
      <el-tree
        ref="filterTree"
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
      >
      </el-tree>
    </div>
    <div>
      <h3>可拖拽节点</h3>
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
      >
      </el-tree>
    </div>
    <div>
      <h3>具有操作功能的树</h3>
      <el-tree :data="data" node-key="id" default-expand-all>
        <div slot-scope="{ node }" class="node-content">
          <div class="operator">
            <span>{{ node.label }}</span>
            <span>
              <el-dropdown @visible-change="val => onDropdownChange(val, node)">
                <div :ref="'icon' + node.data.id" class="op-icon">
                  <i class="el-icon-more"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>新建</el-dropdown-item>
                  <el-dropdown-item>编辑</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
          </div>
        </div>
      </el-tree>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TreeDemo from '@/views/ui/components/Tree.vue'

@Component({
  name: 'Link',
  components: {
    TreeDemo,
  },
})
export default class extends Vue {
  private props = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
  }

  private defaultProps = {
    children: 'children',
    label: 'label',
  }

  private filterText = ''

  private opType = 'hide'

  private data = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
          children: [
            {
              id: 9,
              label: '三级 1-1-1',
            },
            {
              id: 10,
              label: '三级 1-1-2',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 6,
          label: '二级 2-2',
        },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      children: [
        {
          id: 7,
          label: '二级 3-1',
        },
        {
          id: 8,
          label: '二级 3-2',
        },
      ],
    },
  ]

  @Watch('filterText')
  private filterTextChange(val) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$refs.filterTree.filter(val)
  }

  private loadNode(node, resolve) {
    if (node.level === 0) {
      return resolve([{ name: 'region' }])
    }
    if (node.level > 1) return resolve([])

    setTimeout(() => {
      const data = [
        {
          name: 'leaf',
          leaf: true,
        },
        {
          name: 'zone',
        },
      ]

      resolve(data)
    }, 500)
  }

  private filterNode(value, data) {
    if (!value) return true
    return data.label.indexOf(value) !== -1
  }
  private handleDragStart(node) {
    console.log('drag start', node)
  }
  private handleDragEnter(draggingNode, dropNode) {
    console.log('tree drag enter: ', dropNode.label)
  }
  private handleDragLeave(draggingNode, dropNode) {
    console.log('tree drag leave: ', dropNode.label)
  }
  private handleDragOver(draggingNode, dropNode) {
    console.log('tree drag over: ', dropNode.label)
  }
  private handleDragEnd(draggingNode, dropNode, dropType) {
    console.log('tree drag end: ', dropNode && dropNode.label, dropType)
  }
  private handleDrop(draggingNode, dropNode, dropType) {
    console.log('tree drop: ', dropNode.label, dropType)
  }
  private allowDrop(draggingNode, dropNode, type) {
    if (dropNode.data.label === '二级 3-1') {
      return type !== 'inner'
    } else {
      return true
    }
  }
  private allowDrag(draggingNode) {
    return draggingNode.data.label.indexOf('三级 3-2-2') === -1
  }

  private onDropdownChange(val, node) {
    const opEle: any = this.$refs['icon' + node.data.id]
    val ? opEle.classList.add('show') : opEle.classList.remove('show')
  }
}
</script>
<style lang="scss" scoped>
.el-link {
  margin-right: $margin-5x;
}
.el-tree {
  width: 300px;
  ::v-deep &-node__content {
    width: 100%;
    .node-content {
      flex-grow: 1;
      .operator {
        display: flex;
        justify-content: space-between;
        padding-right: $padding-4x;
        .op-icon {
          width: 48px;
          &:hover,
          &:focus {
            color: $color-master;
          }
          display: none;
        }
        .show {
          display: flex;
          justify-content: center;
          color: $color-master;
        }
      }
    }
    &:hover {
      .operator {
        .op-icon {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
