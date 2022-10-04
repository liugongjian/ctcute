export interface Form {
  name: string
  ip: string
  ssh: string
  sshName: string
  password: string
  port: string
  catalogue: string
  dynamicTags: string[]
}

export type Response = {
  id: number
}
