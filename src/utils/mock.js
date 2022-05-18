import { mock } from 'mockjs'
const data = mock({
  'tableData|10': [{
    name: 'test1',
    status: /(已部署|待分配)/,
    ip: '10.142.90.34',
    cpu: 80,
    memory: 80,
    disk: 80,
    healthy: /(1|2|3|4|5)/
  }],
  'smallTable|10': [{
    name: '工作实例名称最多十字…',
    time: '999天23小时59分59秒',
    status: /(6|7|8|9)/
  }],
  'twoTree|10': [{
    label: '一级文件展开',
    key: '@id',
    'children|7': [{
      label: '具体文件名称',
      key: '@id'
    }]
  }],
  threeTree: [{
    label: '全部',
    key: '@id',
    'children|10': [{
      label: '二级文件名称',
      key: '@id',
      'children|6': [{
        label: '具体文件名称',
        key: '@id'
      }
      ]
    }
    ]
  }],
  threeFour: [{
    key: 1,
    label: '全部',
    'children|10': [{
      key: '@id',
      label: '二级文件名称',
      'children|3': [{
        key: '@id',
        label: '三级文件名称',
        'children|3': [{
          key: '@id',
          label: '具体文件名称'
        }]
      }]
    }]
  }]
})
// 设置需要展开的key
data.threeFour[0].children[1].children[2].key = 2
data.threeTree[0].children[1].key = 3
data.twoTree[0].key = 4
export default data
