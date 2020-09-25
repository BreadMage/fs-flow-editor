<template>
  <div class="x6-wrapper">
    <div id="x6-slider"></div>
    <div id="x6-container"></div>
  </div>
</template>

<script>
import { Graph, Addon, Shape } from '@antv/x6'
import './define-node'
import './define-edge'
export default {
  mounted () {
    const graph = new Graph({
      container: document.getElementById('x6-container'),
      grid: {
        size: 1,
        visible: false
      },
      snapline: {
        enabled: true
      },
      clipboard: {
        enabled: true
      },
      selecting: {
        enabled: true,
        rubberband: true,
        showNodeSelectionBox: true
      },
      keyboard: {
        enabled: true
      },
      connecting: {
        dangling: true,
        snap: true,
        router: {
          name: 'normal'
        },
        connector: {
          name: 'smooth'
        }
      }
    })
    graph.on('edge:mouseenter', ({ cell }) => {
      cell.addTools([
        {
          name: 'vertices',
          args: {
            snapRadius: 0,
            stopPropagation: false
          }
        },
        { name: 'source-arrowhead' },
        { name: 'target-arrowhead' }
      ])
    })
    graph.on('edge:mouseleave', ({ cell }) => {
      cell.removeTools()
    })

    const stencil = new Addon.Stencil({
      groups: [{ name: 'group1', title: '服务器' }],
      layoutOptions: {
        columns: 1,
        columnWidth: 200,
        rowHeight: 100,
        dx: 0
      },
      target: graph,
      title: '测试测试',
      stencilGraphWidth: 200,
      stencilGraphHeight: 500
    })
    document.getElementById('x6-slider').appendChild(stencil.container)
    const r1 = new Shape.Rect()
    const c1 = new Shape.Circle()
    const e1 = new Shape.Ellipse()
    stencil.load([r1, c1, e1], 'group1')
    graph.bindKey('ctrl+c', () => {
      const cells = graph.getSelectedCells()
      if (cells.length) {
        graph.copy(cells)
      }
      return false
    })

    graph.bindKey('ctrl+v', () => {
      if (!graph.isClipboardEmpty()) {
        const cells = graph.paste({ offset: 32 })
        graph.cleanSelection()
        graph.select(cells)
      }
      return false
    })

    graph.bindKey('delete', () => {
      const cells = graph.getSelectedCells()
      graph.cleanSelection()
      graph.removeCells(cells)
    })
  }
}
</script>

<style lang="less">
.my-selecting {
  background-color: red;
}
</style>
<style lang="less" scoped>
.x6-wrapper {
  display: flex;
}
#x6-slider {
  height: 100vh;
  width: 200px;
  position: relative;
}
#x6-container {
  height: 100vh;
  flex: 1;
}
</style>
