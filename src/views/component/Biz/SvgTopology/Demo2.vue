<template>
  <div>
    <topology id="topology" :node="nodes" :links="links" :defs="false">
      <template v-for="i in nodeIds" v-slot:[`node-${i}`]="{ node }">
        <g :key="i">
          <custom-node
            :node="node"
            @add-child="handleAddChild"
            @delete-current="handleDeleteNode"
          ></custom-node>
        </g>
      </template>
      <template v-slot:graph-dom-root="{ parentScope, injectModel, injectModelFunc }">
        <drag-viewbox
          :parentScope="parentScope"
          :injectModel="injectModel"
          :injectModelFunc="injectModelFunc"
        ></drag-viewbox>
      </template>
    </topology>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { nodes, links } from './data2'
import { CustomNode, DragViewbox } from 'svg-topology'

type NodeItem = {
  id: string
  title: string
  type: string
  shape?: 'line' | 'rect'
  borderRadius?: string
  children?: NodeItem[]
}

type LinkItem = {
  from: string
  to: string
  id?: string
  success?: boolean
  arrow?: boolean
  label?: string
}

type NodeWidthMeta = {
  data: NodeItem
  x: number
  y: number
  localX: number
  localY: number
  offsetX: number
  offsetY: number
}

@Component({
  name: 'Demo',
  components: {
    CustomNode,
    DragViewbox,
  },
})
export default class extends Vue {
  nodes: NodeItem[] = nodes

  get links() {
    const result = []
    this.nodes.forEach(tree => {
      let arr = [tree]
      let current
      while ((current = arr.shift())) {
        const children = current.children || []
        children.forEach(i => {
          result.push({
            from: current.id,
            to: i.id,
          })
        })
        arr = [...arr, ...children]
      }
    })
    return result
  }

  get nodeIds() {
    let result = []
    this.nodes.forEach(tree => {
      let arr = [tree]
      let current
      while ((current = arr.shift())) {
        result = [...result, current.id]
        const children = current.children || []
        arr = [...arr, ...children]
      }
    })
    return result
  }

  width = 1000
  height = 800

  private recursiveFindNodeInTree(root, id, parentId) {
    if (root.id === id) {
      return { node: root, parentId }
    }
    let result
    if (root.children) {
      root.children.forEach(c => {
        const r = this.recursiveFindNodeInTree(c, id, root.id)
        if (r) {
          result = r
        }
      })
    }
    return result
  }

  private getNode(id, nodes) {
    let node
    let parentId
    let rootId
    nodes.forEach(n => {
      const rootParentId = null
      let result = this.recursiveFindNodeInTree(n, id, rootParentId)
      if (result) {
        const { node: f, parentId: pId } = result
        node = f
        parentId = pId
        rootId = n.id
      }
    })
    return { node, parentId, rootId }
  }

  handleAddChild(id) {
    const { node } = this.getNode(id, this.nodes)
    const newId = `${Math.random().toFixed(3)}`
    const newNode = {
      id: newId,
      title: newId,
      position: 'bottom',
      borderRadius: '0px',
    }
    if (!node.children) {
      this.$set(node, 'children', [newNode])
    } else {
      node.children.push(newNode)
    }
  }

  handleDeleteNode(id) {
    const { node, parentId, rootId } = this.getNode(id, this.nodes)
    if (id === rootId) {
      const index = this.nodes.findIndex(i => i.id === id)
      this.nodes = [...this.nodes.slice(0, index), ...this.nodes.slice(index + 1)]
    } else {
      const { node: parent } = this.getNode(parentId, this.nodes)
      const nodeIndex = parent.children.findIndex(i => i.id === id)
      const newChildren = [...parent.children.slice(0, nodeIndex), ...parent.children.slice(nodeIndex + 1)]
      this.$set(parent, 'children', newChildren)
    }
  }
}
</script>
