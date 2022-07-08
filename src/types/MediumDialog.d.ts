
export interface Form {
  policyName: string,
  environment: number,
  colony: number,
  alarmName: string,
  monitorTarget: number,
  monitorColony: number,
  monitorName: string,
  alertTarget: number,
  duration: number,
  longTitle: string,
  chooseObjs: number,
  dynamicTags: string[],
}

export type Response = {
  id: number;
}
