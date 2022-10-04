export interface Intertable {
  id: number
  monitorIndicators: number
  timeSection: number
  computValue: number
  operation: number
  occurrences: number
  calculate: string | number
}
export interface Form {
  policyName: string
  environment: number
  colony: number
  alarmName: string
  monitorTarget: number
  monitorColony: number
  monitorName: string
  alertTarget: number
  duration: number
  longTitle: string
  chooseObjs: number
  tableData: Intertable[]
  dynamicTags: string[]
}

export type Response = {
  id: number
}
