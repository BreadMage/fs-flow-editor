import { Shape } from '@antv/x6'

Shape.Rect.config({
  width: 80,
  height: 40,
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
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#2f54eb',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group2: {
        position: 'right',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#2f54eb',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group3: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#2f54eb',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group4: {
        position: 'left',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#2f54eb',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
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
  }
})

Shape.Circle.config({
  width: 40,
  height: 40,
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
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#faad14',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group2: {
        position: 'right',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#faad14',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group3: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#faad14',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group4: {
        position: 'left',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#faad14',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
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
  }
})

Shape.Ellipse.config({
  width: 80,
  height: 40,
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
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#52c41a',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group2: {
        position: 'right',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#52c41a',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group3: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#52c41a',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
      },
      group4: {
        position: 'left',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#52c41a',
            strokeWidth: 2,
            fill: '#fff'
          }
        }
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
  }
})
