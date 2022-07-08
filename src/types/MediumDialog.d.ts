
export interface Form {
  name: string,
  ip: string,
  ssh: string,
  sshName: string,
  password: string,
  port: string,
  catalogue: string,
  dynamicTags: [],
}

export type Response = {
  id: number;
}
