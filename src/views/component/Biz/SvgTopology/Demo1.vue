<template>
  <div class="topology-box">
    <div class="topology-panel" :style="panelStyle">
      <div class="topology-heading">
        <span class="title">vpc-12221</span>
        <span>(10.0.0.0/8) 共2个子网</span>
      </div>
    </div>
    <topology
      :node="nodes"
      :links="links"
      :width="width"
      :height="height"
      :defs="false"
      @layout-change="handleLayoutChange"
    >
      <template #[`node-1`]="{ node }">
        <text y="22" x="33">
          <tspan>
            {{ node.data.title }}
          </tspan>
        </text>
        <rect width="110px" height="1px" style="stroke: white" />
      </template>
      <!--非子网节点-->
      <template v-for="i in 8" #[`node-${i}`]="{ node }">
        <g :key="i">
          <image :xlink:href="getImage(node.data.icon)" :x="i > 1 ? 0 : 30" y="0" height="30" width="30" />
          <text :y="22" :x="i > 1 ? 33 : 63" :class="{ 't-text': i > 1 && i < 6 }">
            <tspan :fill="i > 1 && i < 6 ? '#009dff' : '#000'">
              {{ node.data.title }}
            </tspan>
            <tspan v-if="i > 1 && i < 6" fill="#009dff">✖{{ node.data.num }}</tspan>
          </text>
          <rect width="120px" height="1px" style="stroke: white" />
        </g>
      </template>
      <!--子网父节点-->
      <template v-for="subnet in subnetNode" #[subnet]="{ node }">
        <g :key="subnet">
          <text y="12">
            <tspan> {{ node.data.typeName }}({{ node.data.title }}){{ node.data.cidr }} </tspan>
          </text>
        </g>
      </template>
      <!-- 子网实例-->
      <template v-for="instance in subnetInstance" #[instance]="{ node }">
        <g :key="instance">
          <image :xlink:href="getImage(node.data.icon)" x="0" y="0" height="30" width="30" />
          <text y="22" x="33" class="t-text">
            <tspan fill="#009dff">{{ node.data.title }}</tspan>
            <tspan fill="#009dff">✖{{ node.data.num }}</tspan>
          </text>
        </g>
      </template>
    </topology>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { nodes, links } from './data1'
import { GraphToolbar, DragViewbox, HighlightSelectNodeLinks, NetworkLinks } from 'svg-topology'
import edcsImg from './images/edcs.svg'
import evmImg from './images/evm.svg'
import internetImg from './images/internet.svg'
import natImg from './images/nat.svg'
import peersImg from './images/peers.svg'
import slbImg from './images/slb.svg'
import vpcImg from './images/vpc.svg'
import vpc1Img from './images/vpc-1.svg'

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
  nodes: NodeItem = nodes
  links: LinkItem = links

  width = 1200
  height = 400

  subnetNode = ['node-9']
  subnetInstance = ['node-10']

  panelStyle = {
    width: '0px',
    height: '0px',
    top: '0px',
    left: '0px',
  }

  getImage(file: string) {
    const dict = {
      'edcs.svg': edcsImg,
      'evm.svg': evmImg,
      'internet.svg': internetImg,
      'nat.svg': natImg,
      'peers.svg': peersImg,
      'slb.svg': slbImg,
      'vpc.svg': vpcImg,
      'vpc-1.svg': vpc1Img,
    }
    return dict[file]
  }

  handleLayoutChange(layout: any) {
    this.setPanelPosition(layout)
  }

  setPanelPosition({ nodes: nodesWithCoordinate }: any) {
    const tree = this.getRightTree()
    const boundary = this.getTreeBoundary(tree, nodesWithCoordinate)
    const { minY, right, bottom } = boundary
    let { minX } = boundary
    const padding = 50

    minX += padding

    const firstLeftChild = this.nodes[0].children.find((n: any) => n.position === 'left')
    if (firstLeftChild) {
      minX = nodesWithCoordinate[firstLeftChild.id].x + nodesWithCoordinate[firstLeftChild.id].size[0] / 2
    }

    //size of box
    this.width = right + 3 * padding
    this.height = bottom + 3 * padding

    //size of panel
    this.panelStyle = {
      width: `${right + 2 * padding - minX}px`,
      height: `${bottom + 2 * padding - minY}px`,
      top: `${minY - padding - 15}px`,
      left: `${minX}px`,
    }
  }
  getRightTree() {
    return {
      ...this.nodes[0],
      children: this.nodes[0].children.map((n: any) => {
        const result = { ...n }
        if (n.position === 'left') {
          result.children = []
        }
        return result
      }),
    }
  }

  byLeft(node: any) {
    return node.x
  }
  byRight(node: any) {
    return node.x + node.size[0]
  }
  byTop(node: any) {
    return node.y
  }
  byBottom(node: any) {
    return node.y + node.size[1]
  }
  getTreeBoundary(tree: any, nodes: any) {
    // Compute node size
    const x0 = this.minBy(tree, nodes, this.byLeft)
    const x1 = this.maxBy(tree, nodes, this.byRight)
    const y0 = this.minBy(tree, nodes, this.byTop)
    const y1 = this.maxBy(tree, nodes, this.byBottom)

    return {
      minY: y0.y,
      right: x1.x + x1.size[0],
      bottom: y1.y + y1.size[1],
      minX: x0.x,
    }
  }

  minBy(tree: any, obj: any, iteratee: any): any {
    let min: any
    this.eachDF(tree, (n: any) => {
      const key = n.id
      if (!min) {
        min = obj[key]
      }
      const item = obj[key]
      if (item && iteratee(item) < iteratee(min)) {
        min = item
      }
    })

    return min
  }
  eachDF(root: any, callback: any) {
    let nodes = [root]
    let current
    while ((current = nodes.shift())) {
      callback(current)

      const children = current.children || []
      nodes = [...children, ...nodes]
    }
  }

  maxBy(tree: any, obj: any, iteratee: any) {
    let max: any
    this.eachDF(tree, (n: any) => {
      const key = n.id
      if (!max) {
        max = obj[key]
      }
      const item = obj[key]
      if (item && iteratee(item) > iteratee(max)) {
        max = item
      }
    })

    return max
  }
}
</script>

<style lang="scss" scoped>
.topology-box {
  min-height: 100px;
  position: relative;
  .topology-panel {
    position: absolute;
    border: 1px solid #ddd;
    .title {
      color: #009dff;
    }
  }

  .topology-panel .topology-heading {
    padding: 6px 0;
    background: #f0e9e9;
  }
}
</style>
