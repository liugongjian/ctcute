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

export type ProDetail3Info = {
  basic: BasicInfo
  fusion: FusionInfo
  returnGoods: ReturnGoods[]
  returnGoodsProgress: ReturnGoodsProgress[]
}

export type DetailParams = {
  id: string
}
