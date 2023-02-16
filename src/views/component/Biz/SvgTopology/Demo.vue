<template>
  <div>
    <topology
      id="topology"
      :node="nodes"
      :links="links"
      :width="width"
      :height="height"
      :graph-style="{ canvasPadding: 100 }"
      layout="forcedGraph"
      @select-node="handleSelectNode"
    >
      <template #graph-dom-root="{ parentScope, injectModel, injectModelFunc }">
        <graph-toolbar
          :parent-scope="parentScope"
          :inject-model="injectModel"
          :inject-model-func="injectModelFunc"
        ></graph-toolbar>
        <drag-viewbox
          :parent-scope="parentScope"
          :inject-model="injectModel"
          :inject-model-func="injectModelFunc"
        ></drag-viewbox>
      </template>
      <template #graph-svg-front="{ parentScope, injectModel, injectModelFunc }">
        <highlight-select-node-links
          ref="highlight-node"
          :parent-scope="parentScope"
          :inject-model="injectModel"
          :inject-model-func="injectModelFunc"
          :links="links"
        ></highlight-select-node-links>
        <network-links ref="network-links" :parent-scope="parentScope" :links="links"></network-links>
      </template>
    </topology>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { nodes, links } from './data'
import { GraphToolbar, DragViewbox, HighlightSelectNodeLinks, NetworkLinks } from 'svg-topology'

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
    GraphToolbar,
    DragViewbox,
    HighlightSelectNodeLinks,
    NetworkLinks,
  },
})
export default class extends Vue {
  @Ref('highlight-node')
  private highlightNodeRef: HighlightSelectNodeLinks
  @Ref('network-links')
  private networkLinksRef: NetworkLinks

  nodes: NodeItem = nodes
  links: LinkItem = links

  width = 1000
  height = 800

  handleSelectNode(node: NodeWidthMeta[]) {
    this.highlightNodeRef.highlight(node)
    this.networkLinksRef.handleSelectChange(node)
  }
}
</script>
