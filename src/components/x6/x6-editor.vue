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
        size: 20,
        visible: true,
        type: 'dot'
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
      }
    })

    const stencil = new Addon.Stencil({
      groups: [
        { name: 'group1', title: '块', graphHeight: 200 },
        { name: 'group1', title: '服务器' }
      ],
      target: graph,
      title: '测试测试',
      search: true,
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
