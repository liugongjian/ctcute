/**
 * 基础信息
 */
type BasicInfo = {
  innerIdentity: string
  showIdentity: string
  chineseName: string
  englishName: string
  context: string
  version: string
  synonyms: string
}
/**
 * 批次信息
 */
type BatchItem = {
  area: string
  date: string
  status: number
}

type BatchesInfo = {
  firstBatch: BatchItem
  secondBatch: BatchItem
}

/**
 * 升级策略概览
 */
export type UpdateStatus = {
  id: String
  name: String
  status: Number
  running: String
  start: String
  fail: String
  sale: String
  unavailable: String
  unknown: String
}
type updateListInfo = {
  title: String
  time: String
  message: String
  status: Number
  metric: String
  list: UpdateStatus[]
}
/**
 * 复杂详情页1数据
 */
export type ProDetailInfo = {
  basic: BasicInfo
  batches: BatchesInfo
  updateList: updateListInfo[]
}

/* 获取详情请求类型 */
export type ProDetail1Params = {
  id: string
}
