import { Shape } from '@antv/x6'

Shape.Edge.config({
  router: {
    name: 'manhattan'
  },
  connector: {
    name: 'rounded',
    args: { radius: 10 }
  },
  attrs: {
    line: {
      radius: 10,
      offset: 30,
      endArrow: true,
      stroke: '#F6BD16'
    }
  }
})
