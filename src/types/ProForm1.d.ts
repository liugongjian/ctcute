export interface Intertable {
  id: number,
  monitorIndicators: number,
  timeSection: number,
  computValue: number,
  operation: number,
  occurrences: number,
  calculate: string | number

}
export interface Form {
  name: string,
  remark: string,
  alertTarget: string,
  duration: number,
  alertLevel: number,
  longTitle: string,
  chooseObjs: number,
  tableData: Intertable[]
}

export type Response = {
  id: number;
}
