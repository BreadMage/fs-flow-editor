import { Shape } from '@antv/x6'

Shape.Rect.config({
  width: 160,
  height: 80,
  attrs: {
    body: {
      fill: '#adc6ff',
      stroke: '#2f54eb',
      lineWidth: 2,
      rx: 10
    }
  },
  ports: {
    groups: {
      group1: {
        position: 'top'
      },
      group2: {
        position: 'right'
      },
      group3: {
        position: 'bottom'
      },
      group4: {
        position: 'left'
      }
    },
    items: [
      {
        id: 'port1',
        group: 'group1' // 指定分组名称
      },
      {
        id: 'port2',
        group: 'group2' // 指定分组名称
      },
      {
        id: 'port3',
        group: 'group3' // 指定分组名称
      },
      {
        id: 'port4',
        group: 'group4' // 指定分组名称
      }
    ]
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody',
      attrs: {
        r: 4,
        magnet: true,
        stroke: '#2f54eb',
        strokeWidth: 2,
        fill: '#fff'
      }
    }
  ]
})

Shape.Circle.config({
  width: 80,
  height: 80,
  attrs: {
    body: {
      fill: '#ffe58f',
      stroke: '#faad14',
      lineWidth: 2,
      rx: 10
    }
  },
  ports: {
    groups: {
      group1: {
        position: 'top'
      },
      group2: {
        position: 'right'
      },
      group3: {
        position: 'bottom'
      },
      group4: {
        position: 'left'
      }
    },
    items: [
      {
        id: 'port1',
        group: 'group1' // 指定分组名称
      },
      {
        id: 'port2',
        group: 'group2' // 指定分组名称
      },
      {
        id: 'port3',
        group: 'group3' // 指定分组名称
      },
      {
        id: 'port4',
        group: 'group4' // 指定分组名称
      }
    ]
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody',
      attrs: {
        r: 4,
        magnet: true,
        stroke: '#faad14',
        strokeWidth: 2,
        fill: '#fff'
      }
    }
  ]
})

Shape.Ellipse.config({
  width: 160,
  height: 80,
  attrs: {
    body: {
      fill: '#b7eb8f',
      stroke: '#52c41a',
      lineWidth: 2,
      rx: 10
    }
  },
  ports: {
    groups: {
      group1: {
        position: 'top'
      },
      group2: {
        position: 'right'
      },
      group3: {
        position: 'bottom'
      },
      group4: {
        position: 'left'
      }
    },
    items: [
      {
        id: 'port1',
        group: 'group1' // 指定分组名称
      },
      {
        id: 'port2',
        group: 'group2' // 指定分组名称
      },
      {
        id: 'port3',
        group: 'group3' // 指定分组名称
      },
      {
        id: 'port4',
        group: 'group4' // 指定分组名称
      }
    ]
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody',
      attrs: {
        r: 4,
        magnet: true,
        stroke: '#52c41a',
        strokeWidth: 2,
        fill: '#fff'
      }
    }
  ]
})
