/*
 * @Author: 朱玉豆
 * @Date: 2022-07-08 17:04:20
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2022-07-21 15:06:34
 * @Description:
 */
export const STATUS = {
  1: '待分配',
  2: '已部署',
}

export const HEALTH = {
  1: '健康',
  2: '警告',
  3: '危险',
  4: '进行中',
  5: '失联',
  6: '成功',
  7: '失败',
  8: '停止',
  9: '暂停',
}

export const STATUS2 = {
  1: {
    text: '通过',
    color: 'success',
  },
  2: {
    text: '审核中',
    color: 'blue',
  },
  3: {
    text: '不通过',
    color: 'danger',
  },
}
