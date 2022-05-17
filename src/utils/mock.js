import { mock } from 'mockjs'
const data = mock({
    'tableData|10': [{
        name: 'test1',
        status: /(已部署|待分配)/,
        ip: '10.142.90.34',
        cpu: 80,
        memory: 80,
        disk: 80,
        healthy: /(健康|警告|危险|失联|进行中)/,
    }],
    "smallTable|10": [{
        name: '工作实例名称最多十字…',
        time: '999天23小时59分59秒',
        status: /(成功|失败|停止|暂停)/
    }]
})
export default data