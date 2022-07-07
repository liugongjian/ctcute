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
 * 融合信息
 */
type FusionInfo = {
  type: string
  encode: string
}
/**
 * 退货商品详情
 */
type ReturnGoodsDetail = {
  goodsId: string
  goodsName: string
  goodsCode: string
  price: number
  count: number
  totalPrice: number
}
/**
 * 退货进度
 */
type ReturnGoodsProgress = {
  time: number
  progress: number
  status: number
  operatorId: string
  duration: string
}
type ReturnGoods = {
  type: string
  detail: ReturnGoodsDetail[]
}
/**
 * 基础详情数据
 * 示例为退货详情页的数据
 */
export type SimpleDetailInfo = {
  basic: BasicInfo
  fusion: FusionInfo
  returnGoods: ReturnGoods[]
  returnGoodsProgress: ReturnGoodsProgress[]
}

/* 获取详情请求类型 */
export type DetailParams = {
  id: string
}
