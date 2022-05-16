export interface TableData {
  name: string;
  status: number;
  ip: string;
  cpu: string;
  memory: string;
  disk: string;
  health: string;
}

export interface SimpleTableConditions {
  host: string;
  name: string;
}
