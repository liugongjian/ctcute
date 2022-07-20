/**
 * 基础信息
 */
export type BasicInfo = {
  innerIdentity: string
  showIdentity: string
  chineseName: string
  englishName: string
  context: string
  version: string
  synonyms: string
}

/**
 * 区域信息
 */
export type ZoneInfo = {
  id: string
  name: string
  type: string
  description: string
}

/**
 * 基础信息
 */
export type FolderInfo = {
  key: string
  label: string
  children: [FolderInfo]
}

/* 返回信息 */
export type ProDetailInfo2 = {
  zoonsInfo1: ZoneInfo[]
  zoonsInfo2: ZoneInfo[]
  basic: BasicInfo
  folders: FolderInfo
}
